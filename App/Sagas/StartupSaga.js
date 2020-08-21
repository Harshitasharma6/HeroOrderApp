import { put, select, call } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import StartDayActions from 'App/Stores/StartDay/Actions'
import ShreeActions from 'App/Stores/Shree/Actions'
import NonShreeActions from 'App/Stores/NonShree/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import {oauth, net} from 'react-native-force';
import { startDayService } from 'App/Services/Api/StartDayService'
import {Alert} from 'react-native'
import { fetchLocation } from './UserSaga';
import ProductsActions from 'App/Stores/Products/Actions';
import CommonActions from 'App/Stores/Common/Actions';



export function* startup({ params }) {
    // let startDay = yield select(state => state.startDay); 
    // let user = yield select(state => state.user); 
    // let brands = startDay.Brands;
    // const userId = user.loginDetails.userId;

    // brands = HelperService.convertArrayToSearchableListFormat(brands);

    // yield put(StartDayActions.makeBrandSearchableListSuccess({data: brands}));

    // if (user.username && user.password && startDay.access_token && userId) {
    //    const userData = yield call(startDayService.fetchGlobleToken, {username: user.username, password:  user.password}); 
    //    if (userData) {
    //     const access_token  = userData.access_token

    //     yield put(StartDayActions.fetchGlobleTokenSuccess(userData));

    //     yield put(StartDayActions.fetchGlobleUserDetail({
    //       access_token
    //     }));

    //     yield put(StartDayActions.fetchAgentDetails());

    //     const appData = yield call(startDayService.getAppVersion, {access_token}); 

    //     appData ? HelperService.checkAppVersion(appData.Name) : '';

    //   }else {
    //     yield put(StartDayActions.fetchGlobleTokenFailure())
    //     NavigationService.navigateAndReset('LoginScreen');
    //     HelperService.showToast({
    //       message: 'Access Token Invalid.Please Login Again',
    //       duration: 2000
    //     });
    //   }

    //   yield put(StartDayActions.fetchGlobleToken()); // to initiate fetch global token at regular intervals

    //   try {
    //     bugsnag.setUser(userId, user.username, user.username);
    //   }catch(error) {
    //     console.log(error)
    //   }

    // }else {

        let user = yield select(state => state.user); 
        let state_id = user.state__c;
        yield put(ProductsActions.getAllProducts({
            state_id
        }));

        yield put(CommonActions.fetchLeadSources({}));

        yield put(CommonActions.fetchLeadLostReasons({}));

        NavigationService.navigateAndReset('LoginScreen')
    //}
}

