import { put, select, call } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import StartDayActions from 'App/Stores/StartDay/Actions'
import ShreeActions from 'App/Stores/Shree/Actions'
import NonShreeActions from 'App/Stores/NonShree/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import {oauth, net} from 'react-native-force';
import { startDayService } from 'App/Services/Api/StartDayService'
import { userService } from 'App/Services/Api/UserService'
import {Alert} from 'react-native'
import { fetchLocation } from './UserSaga';
import ProductsActions from 'App/Stores/Products/Actions';
import CommonActions from 'App/Stores/Common/Actions';


export function* startup({ params }) {
    let user = yield select(state => state.user); 
    if (user.token && user.dealer__c && user.state__c && HelperService.datesAreOnSameDay(HelperService.getCurrentTimestamp(), user.is_logged_in)) { //user already logged in
        NavigationService.navigateAndReset('InsightsScreen');
        let state_id = user.state__c;
        yield put(ProductsActions.getAllProducts({
            state_id
        }));
        yield put(CommonActions.fetchLeadSources({}));
        yield put(CommonActions.fetchLeadLostReasons({}));
        yield put(CommonActions.getCallOptions({}));
        yield put(CommonActions.getBookingPicklist({}));
        yield put(CommonActions.getAllStates({}));
        yield put(CommonActions.getAllCities({}));
        yield put(UserActions.getTaxDetails({}));
        const appData = yield call(userService.getAppVersion, {token: user.token}); 
        let android_version = '';
        appData.map((obj) => {
            if(obj.device__c == 'android'){
                android_version = obj.version__c;
            }
        })
        
        appData ? HelperService.checkAppVersion(android_version) : '';

    }else { //user not logged in or session expired
        NavigationService.navigateAndReset('LoginScreen');
        yield put(UserActions.userLogoutSuccess({}));
    }
}

