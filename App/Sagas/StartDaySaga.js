import { put, call, take, select, race, delay } from 'redux-saga/effects'
import StartDayActions from 'App/Stores/StartDay/Actions'
import ShreeActions from 'App/Stores/Shree/Actions'
import UserActions from 'App/Stores/User/Actions'
import NonShreeActions from 'App/Stores/NonShree/Actions';
import { startDayService } from 'App/Services/Api/StartDayService'
import { HelperService } from 'App/Services/Utils/HelperService'
import NavigationService from 'App/Services/NavigationService';
import { StartDayTypes } from 'App/Stores/StartDay/Actions';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import {Alert} from 'react-native'
import { fetchLocation } from './UserSaga';
import { START, ABSENT, GOOD, MORNING, LEAVE, INOFFICE, PRESENT, ONLEAVE} from 'App/Constants';


export function* inOfficeAction({payload}) {
  yield put(StartDayActions.fetchInOfficeLoading());
  try {
    let successData = yield call(startDayService.inOfficeAction, payload);
    if (successData) {
      yield put(StartDayActions.fetchInOfficeSuccess(successData));
      yield put(StartDayActions.clearRemarkForm());
      yield put(StartDayActions.fetchInOfficeLoadingStop());

      HelperService.showToast({ 
        message: 'In Office Form Submited!', 
        duration: 1000, 
        buttonText: '' 
      });

      yield put(UserActions.updateUserStatus({
        status: INOFFICE,
        timestamp: HelperService.getCurrentTimestamp()
      }));

      NavigationService.navigateAndReset('CommunicationScreen'); 
    }else {
      yield put(StartDayActions.fetchInOfficeFailure());
      yield put(StartDayActions.fetchInOfficeLoadingStop());
      HelperService.showToast({ message: 'In Office Form Fail', duration: 1000, buttonText: '' });
    }
  } catch (error) {
    console.log('Error', error)
    yield put(StartDayActions.fetchInOfficeFailure());
  }
}

export function* fetchGlobleToken(params) {
    const user = yield call(startDayService.fetchGlobleToken, params);
    if (user) {
        yield put(StartDayActions.fetchGlobleTokenSuccess(user));
    } else {
        yield put(StartDayActions.fetchGlobleTokenFailure());
    }
}

export function* fetchGlobleUserDetail({payload}) {  
  const user = yield select(state => state.user);
  const userId = user.loginDetails.userId;
  payload.userId = userId;
  const details = yield call(startDayService.fetchGlobleUserAllDetail, payload);
  if (details) {
    details['State'] = details['State'] || details['User_State__c'];
    yield put(StartDayActions.fetchGlobleUserDetailSuccess(details));
    yield put(ShreeActions.fetchShree());
    yield put(ShreeActions.fetchShreeRetailers());
    yield put(NonShreeActions.fetchNonShree());
    yield put(InfluencersActions.fetchInfluencers());
    yield put(ShreeActions.getAllDistricts());
    

  }else {
      yield put(
        StartDayActions.fetchGlobleUserDetailFailure('There was an error while fetching user Detail!.')
      )
  }
}



export function* onLeaveAction({payload}) {
    yield put(StartDayActions.fetchOnLeaveLoading());
    try {
    let successData = yield call(startDayService.onLeaveAction, payload);
		if (successData) {
      yield put(StartDayActions.fetchOnLeaveSuccess(successData))
      yield put(StartDayActions.fetchOnLeaveLoadingStop());
      HelperService.showToast({ 
        message: 'Add OnLeave successfully!', 
        duration: 1000, buttonText: '' 
      });

      yield put(UserActions.updateUserStatus({
        status: ONLEAVE,
        timestamp: HelperService.getCurrentTimestamp()
      }));
      NavigationService.navigateAndReset('CommunicationScreen'); 
      
		} else {
      yield put(StartDayActions.fetchOnLeaveFailure());
      yield put(StartDayActions.fetchOnLeaveLoadingStop());
      HelperService.showToast({ 
        message: 'On Leave Failed!', 
        duration: 1000, 
        buttonText: '' 
      });
		}
	} catch (error) {
    yield put(StartDayActions.fetchOnLeaveFailure());
    yield put(StartDayActions.fetchOnLeaveLoadingStop());
    HelperService.showToast({ 
      message: 'on leave erron',
      duration: 1000, 
      buttonText: '' 
    });

	}
}

export function* checkInAction({payload}) {
    yield put(StartDayActions.fetchCheckInLoading());
    try {
      let successData = yield call(startDayService.checkInAction, payload)
  		if (successData) {
        yield put(StartDayActions.fetchCheckInSuccess(successData))
        yield put(StartDayActions.fetchCheckInLoadingStop());
        yield put(UserActions.updateUserStatus({
          status: PRESENT,
          checkIn_id: successData['id'],
          checkIn_status: true,
          timestamp: HelperService.getCurrentTimestamp()
        }));

        HelperService.showToast({ message: successData.message, duration: 1000, buttonText: '' });
        NavigationService.navigate('CheckInScreen');
  		} else {
        yield put(StartDayActions.fetchCheckInFailure());
        yield put(StartDayActions.fetchCheckInLoadingStop());
         HelperService.showToast({ 
            message: 'Checkin Failed. Try again',
            duration: 1000, 
            buttonText: '' 
          });
  		}
	}catch (error) {
    yield put(StartDayActions.fetchCheckInFailure());
    yield put(StartDayActions.fetchCheckInLoadingStop());
    HelperService.showToast({ message: 'Check In error', duration: 1000, buttonText: '' });
    console.log('Error', error);
	}
}



export function* fetchAllShreeDealersAction({payload}) {
  try {
		let successData = yield call(startDayService.fetchAllShreeDealersAction, payload);
		if (successData) {
      yield put(StartDayActions.fetchAllShreeDealersSuccess(successData));
		} else {
      yield put(StartDayActions.fetchAllShreeDealersFailure()); 
		}
	}catch (error) {
		console.log('Error', error)
    yield put(StartDayActions.fetchAllShreeDealersFailure());
  }
}


export function* fetchAllNonShreeDealersAction({payload}) {
  try {
    let successData = yield call(startDayService.fetchAllNonShreeDealersAction, payload)
		if (successData) {
      yield put(StartDayActions.fetchAllNonShreeDealersSuccess(successData))
		} else {
      yield put(StartDayActions.fetchAllNonShreeDealersFailure());
		}
	} catch (error) {
		console.log('Error', error)
    yield put(StartDayActions.fetchAllNonShreeDealersFailure());
  }
}


export function* fetchAgentDetails() {
  try {
    const isOnline = yield select(getConnectionStatus); 
    if (!isOnline) {
      yield put(StartDayActions.doNothing());
      return;
    }

    const startDay = yield select(state => state.startDay);
    const user = yield select(state => state.user);
    const userId = user.loginDetails.userId;
    const access_token = startDay.access_token;
    const date = HelperService.dateReadableFormatWithHyphen();
    let successData = yield call(startDayService.fetchAgentDetails, {userId, access_token, date});
    if (successData) {
      yield put(StartDayActions.fetchAgentDetailsSuccess(successData));
      yield put(UserActions.updateUserStatus({
        status: successData['Attendance_Status__c'],
        checkIn_id: successData['Id'],
        checkIn_status: true,
        checkout:  successData['Check_Out__c'],
        timestamp: HelperService.getCurrentTimestamp()
      }));
      yield put(StartDayActions.updateCheckInScreenNavigation());
      yield put(UserActions.userLoginSuccess({}));
      try {
        bugsnag.setUser(userId, user.username, user.username);
      }catch(error) {
        console.log(error)
      }
      //HelperService.showToast({ message: 'Logged in successfully!!', duration: 1000, buttonText: '' });

    } else {
      yield put(StartDayActions.fetchAgentDetailsFailure());
      yield put(UserActions.updateUserStatus({
        status: '',
        timestamp:'',
        checkIn_id: '',
        checkIn_status: false,
        checkout:  false,
        timestamp: ''
      }));
      yield put(StartDayActions.updateCheckInScreenNavigation());

      HelperService.showToast({
        message: 'Please checkin to proceed',
        duration: 2000
      });

      yield put(UserActions.userLoginFailure())

    }
  }catch (error) {
    yield put(StartDayActions.fetchAgentDetailsFailure());
    yield put(UserActions.updateUserStatus({
        status: '',
        timestamp:'',
        checkIn_id: '',
        checkIn_status: false,
        checkout:  false,
        timestamp: ''
      }));
    yield put(StartDayActions.updateCheckInScreenNavigation());
      HelperService.showToast({
        message: 'Please checkin to proceed',
        duration: 2000
      });
    yield put(UserActions.userLoginFailure())

  }
}


export function* updateCheckInScreenNavigation() {
  const user = yield select(state => state.user);
  const status = user.status;
  const checkout = user.checkout;
  if (checkout) {
    NavigationService.navigateAndReset('CommunicationScreen');
  }else {
    switch(status){
      case 'Present':
        NavigationService.navigateAndReset('CheckInScreen');
        break;
      case 'On-Leave':
      case 'In-Office':
        NavigationService.navigateAndReset('CommunicationScreen');
        break;
      default:
        NavigationService.navigateAndReset('StartDayScreen'); 
    }
  }
}

export function* fetchGlobleTokenTask() {//refresh token after every 29 mintues
  while (true) {
    let userData = yield select(state => state.user); 
    const user = yield call(startDayService.fetchGlobleToken, {username: userData.username, password: userData.password});
    if (user) {
      yield put(StartDayActions.fetchGlobleTokenSuccess(user));
      yield delay(15*60*1000);
    } else {
      yield put(StartDayActions.fetchGlobleTokenFailure());
      NavigationService.navigateAndReset('LoginScreen');
      HelperService.showToast({
        message: 'Session Expired!! Please login again',
        duration: 3000
      });

      yield put(UserActions.changeLoginForm({username: '', password: ''}));//clear user data
      yield put(UserActions.updateLoginDetails({userId: ''}));
      yield put(StartDayActions.stopFetchGlobleToken());
    }
  }
}


export function* fetchGlobalTokenTaskWatcher() {
  while (true) {
      yield take(StartDayTypes.FETCH_GLOBLE_TOKEN);
      yield race( [call(fetchGlobleTokenTask), take(StartDayTypes.STOP_FETCH_GLOBLE_TOKEN)] )
  }
}

export function* fetchCurrentLocation({payload}){
  yield put(StartDayActions.fetchCurrentLocationLoading());
  let location = yield call(HelperService.requestLocation)

  if (location == 'DENIED'){
    Alert.alert("Location permission is required to proceed.", 
      "Go App Permissions and Turn on Location Permission for ShreeCementApp."
    );
    yield put(StartDayActions.fetchCurrentLocationFailure());
  }else if (!location) {
    yield put(StartDayActions.fetchCurrentLocationFailure());
  }else {
    if (payload.callAction) {
      yield put(payload.callAction(payload.args))
    }
    yield put(StartDayActions.fetchCurrentLocationSuccess(location));
  }

  yield put(StartDayActions.fetchCurrentLocationLoadingStop());  
} 


export function* checkOutAction({payload}) {
  yield put(StartDayActions.fetchCheckOutLoading());
  try {
  let successData = yield call(startDayService.checkOutAction, payload);
  if (successData) {
    yield put(StartDayActions.fetchCheckOutSuccess(successData))  
    HelperService.showToast({ message: successData.message, duration: 2000, buttonText: '' }); 

    yield put(UserActions.updateUserStatus({
      status: '',
      timestamp:'',
      checkIn_id: '',
      checkIn_status: false,
      checkout:  true,
      timestamp: ''
    }));

    NavigationService.navigateAndReset('CommunicationScreen'); 
  } else {
    yield put(StartDayActions.fetchCheckOutFailure());

  }
} catch (error) {
  yield put(StartDayActions.fetchCheckOutFailure());

}
}



