import { put, call, take, select, } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/Api/UserService'
import { ValidationService } from 'App/Services/ValidationService'
import { Toast } from 'native-base'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors'
import ActionQueuesActions from 'App/Stores/ActionQueues/Actions'
import { offlineApiCall } from './OfflineSaga'
import StartupActions from 'App/Stores/Startup/Actions'
import {Alert} from 'react-native'
import StartDayActions from 'App/Stores/StartDay/Actions'
import { startDayService } from 'App/Services/Api/StartDayService'
import _ from 'lodash';

var deviceId = HelperService.getDeviceId();

export function* loginUser(data) {
	yield put(UserActions.userLoginLoading());
	const isOnline = yield select(getConnectionStatus);// checks whether net is connected or not.
	if (!isOnline) {
		yield put(UserActions.userLoginFailure());
		HelperService.showToast({ message: 'Cannot Login. No Internet connection.', duration: 2000, buttonText: 'Okay' });
		return;
	}
		try {
			
			let userData = yield call(userService.loginUser, data)
			if (userData) {
				yield put(UserActions.userLoginSuccess(userData.data));
				HelperService.showToast({ message: 'Logged in successfully!!', duration: 500, buttonText: '' });
				yield put(StartupActions.startup({}));
			} else {
				yield put(UserActions.userLoginFailure())
				HelperService.showToast({ message: 'Cannot Login. Invalid Number or Password', duration: 2000, buttonText: 'Okay' });
			}
		} catch (error) {
			yield put(UserActions.userLoginFailure())
			HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
		}
	}

	
	export function* logoutUser(data) {
		yield put(UserActions.userLogoutLoading());
		const isOnline = yield select(getConnectionStatus);// checks whether net is connected or not.
		if (!isOnline) {
			yield put(UserActions.userLogoutFailure());
			HelperService.showToast({ message: 'Cannot Logout. No Internet connection.', duration: 2000, buttonText: 'Okay' });
			return;
		}
			try {
				let {sfid} = yield select(state => state.user)
				data.dealers_sales_person_login_info_id = sfid

				let userData = yield call(userService.logoutUser, data)
				if (userData) {
				
				yield put(UserActions.userLogoutSuccess(userData.data));
					HelperService.showToast({ message: 'Logged Out successfully!!', duration: 500, buttonText: '' });
					NavigationService.navigateAndReset('LoginScreen');
				}else {
					yield put(UserActions.userLogoutFailure())
					HelperService.showToast({ message: 'Cannot Logout. ' , duration: 2000, buttonText: 'Okay' });
				}	
					
				} catch (error) {
				
					yield put(UserActions.userLogoutFailure())
				HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
			}
		
		}

export function* startDay(data) {
	yield put(UserActions.userStartDayLoading());
	try {
		let offlinActionData = {
			apiCall: (userService.startDay),
			resource: 'startDay', //specify for which reducer we are using it
			callName: 'create', //specify operation
			params: HelperService.decorateWithLocalId(data),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (UserActions.userStartDaySuccess),
			failureCallback: (UserActions.userStartDayFailure),
			replaceServerParams: false
		};

		const userData = yield call(offlineApiCall, offlinActionData);

		if (userData) { //Todo : change it to userData
			yield put(UserActions.userStartDaySuccess(data));
			HelperService.showToast({ message: 'Marked Present Successfully', duration: 1000, buttonText: '' });
			//navigate to today's visit page
			NavigationService.navigateAndReset('VisitsScreen');
		} else {
			yield put(UserActions.userStartDayFailure())
			HelperService.showToast({ message: 'Cannot Repeat action, Marked Present Already.', duration: 2000, buttonText: 'Okay' });

		}
	} catch (error) {
		yield put(UserActions.userStartDayFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}

export function* endDay({ user }) {
	yield put(UserActions.userEndDayLoading());
	try {
		let offlinActionData = {
			apiCall: (userService.endDay),
			resource: 'endDay', //specify for which reducer we are using it
			callName: 'create', //specify operation
			params: HelperService.decorateWithLocalId(user),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (UserActions.userEndDaySuccess),
			failureCallback: (UserActions.userEndDayFailure),
			replaceServerParams: false
		};

		const userData = yield call(offlineApiCall, offlinActionData);


		if (userData) {
			yield put(UserActions.userEndDaySuccess(user));
			HelperService.showToast({ message: 'Day Ended Successfully.', duration: 1000, buttonText: '' });
			NavigationService.navigateAndReset('CompletedDayScreen');
			setTimeout(() => {
				NavigationService.navigateAndReset('DashboardScreen')
			}, 2000);
		} else {
			yield put(UserActions.userEndDayFailure())
			HelperService.showToast({ message: 'Error Occurred , Try Again', duration: 2000, buttonText: 'Okay' });
		}
	} catch (error) {
		yield put(UserActions.userEndDayFailure())
		HelperService.showToast({ message: 'Error Occurred , Try Again', duration: 2000, buttonText: 'Okay' });
	}
}

export function* markAbsent({ user }) {
	yield put(UserActions.userMarkedAbsentLoading());
	try {
		let offlinActionData = {
			apiCall: (userService.markUserAbsent),
			resource: 'markAbsent', //specify for which reducer we are using it
			callName: 'create', //specify operation
			params: HelperService.decorateWithLocalId(user),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (UserActions.userMarkedAbsentSuccess),
			failureCallback: (UserActions.userMarkedAbsentFailure),
			replaceServerParams: false
		};

		const userData = yield call(offlineApiCall, offlinActionData);
		if (userData) { //Todo : change it to user
			yield put(UserActions.userMarkedAbsentSuccess(user));
			HelperService.showToast({ message: 'Absent Marked successfully.', duration: 1000, buttonText: '' });
			NavigationService.navigateAndReset('DashboardScreen');
		} else {
			yield put(UserActions.userMarkedAbsentFailure());
			HelperService.showToast({ message: 'Cannot Repeat action, Absent Already Marked.', duration: 2000, buttonText: 'Okay' });
		}
	} catch (error) {
		yield put(UserActions.userMarkedAbsentFailure());
		HelperService.showToast({ message: 'Cannot Repeat action, Absent Already Marked.', duration: 2000, buttonText: 'Okay' });
	}
}

export function* fetchAgentAreas({ user }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(UserActions.doNothing());
		return;
	}

	yield put(UserActions.fetchAllAreasLoading());
	try {
		let data = yield call(userService.getAgentAreas, user);
		if (data) {
			console.log(data, "AGENT AREAS");
			data = HelperService.convertToSearchableListFormat({ list: data, id_key: 'sfid', label_key: 'area_name' });
			yield put(UserActions.fetchAllAreasSuccess(data));
		} else {
			yield put(UserActions.fetchAllAreasFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(UserActions.fetchAllAreasFailure());
	}
}

export function* fetchAgentDetails({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(UserActions.doNothing());
		return;
	}

	try {
		let data = yield call(userService.getAgentDetails, payload);
		if (data) {
			yield put(UserActions.fetchAgentDetailsSuccess(data));
		} else {
			yield put(UserActions.fetchAgentDetailsFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(UserActions.fetchAgentDetailsFailure());
	}
}

export function* checkAttendance({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(UserActions.doNothing());
		return;
	}
	try {
		let data = yield call(userService.checkAttendance, payload);
		if (data && !_.isEmpty(data)) {
			yield call(updateAttendance, data);
		} else {
			yield put(UserActions.checkAttendanceFailure());
		}
	} catch (error) {
		console.log('checkAttendance Error', error)
		yield put(UserActions.checkAttendanceFailure());
	}
}

export function* fetchAllPsm({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(UserActions.doNothing());
		return;
	}

	try {
		let data = yield call(userService.getAllPSM, payload);
		if (data) {
			yield put(UserActions.fetchAllPsmSuccess(HelperService.convertToSearchableListFormat({ list: data, id_key: 'sfid', label_key: 'team_member_name__c' })));
			yield put(InfluencerActions.makePsmSearchableList(HelperService.convertToSearchableListFormat({ list: data, id_key: 'sfid', label_key: 'team_member_name__c' })));
			yield put(SiteActions.makePsmSearchableList(HelperService.convertToSearchableListFormat({ list: data, id_key: 'sfid', label_key: 'team_member_name__c' })));
		} else {
			yield put(UserActions.fetchAllPsmFailure());
		}
	} catch (error) {
		console.log('error', error)
		yield put(UserActions.fetchAllPsmFailure());
	}
}


export function* updateAttendance(payload) {
	let currentDate = HelperService.getCurrentTimestamp();
	let absentDayTime = payload.type__c == 'Absent' ? currentDate : null;
	let startDayTime = !!payload.start_day__c ? currentDate : null;
	let endDayTime = !!payload.end_time__c ? currentDate : null;

	yield put(UserActions.updateAgentAttendanceDetails({
		absentDayTime,
		startDayTime,
		endDayTime
	}));
}


export function* fetchLocation(params) {
	let result = false;
	try {
		let location = yield call(HelperService.requestLocation);
		if (location == 'DENIED'){
			location == 'DENIED'
		    Alert.alert("Location permission is required to proceed.", 
		      "Go App Permissions and Turn on Location Permission for ShreeCementApp."
		    );

		    result = false;
		    // yield put(ShreeActions.doNothing());
		    // yield put(ShreeActions.submitShreeVisitFormLoadingStop());
		    // return;
		}else if(!location) {
	    	Alert.alert("Cannot fetch location, Location permission is required to proceed.");
	    	result = false;
	    	// yield put(ShreeActions.doNothing());
	    	// yield put(ShreeActions.submitShreeVisitFormLoadingStop());
	     //  	return;
		}

		result = location;
	}catch(error) {
		result = false;
	}

	return result;
}


export function* watchUserLoginRequest() {
	while (true) {
		const { data } = yield take(UserTypes.LOGIN_USER)

		try {
			const validationFailed = yield call(ValidationService.validateLoginForm, data);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(UserActions.userLoginValidationFailed(validationFailed));
				continue;
			}
		} catch (err) { }

		yield call(loginUser, data)
	}
}

export function* watchUserLogoutRequest() {
	while (true) {
		const { data } = yield take(UserTypes.LOGOUT_USER)

		yield call(logoutUser, data)
	}
}


export function* watchUserStartDayRequest() {
	while (true) {
		const { user } = yield take(UserTypes.START_USER_DAY)
		try {
			const validationFailed = yield call(ValidationService.validateStartDay, user);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(UserActions.userStartDayValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}
		yield call(startDay, user)
	}
}


