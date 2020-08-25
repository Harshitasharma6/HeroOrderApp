import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { DealersService } from 'App/Services/Api/DealersService';
import { DealersTypes } from 'App/Stores/Dealers/Actions';
import DealersActions from 'App/Stores/Dealers/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';


export function* getAllDealers({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DealersActions.doNothing());
		return;
	}

	try {
		yield put(DealersActions.getAllDealersLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(DealersService.getAllDealers, payload);
		if (successData) {
			yield put(DealersActions.getAllDealersLoadingStop());
			yield put(DealersActions.getAllDealersSuccess(successData));
			yield put(CommonActions.makeProductsSearchableList(HelperService.convertToSearchableListFormat({
				list: successData,
				id_key: 'sfid',
				
			})));
		} else {
			yield put(DealersActions.getAllDealersFailure());
		}
	} catch (error) {
		yield put(DealersActions.getAllDealersFailure());
	}
}


export function* getDealerClaims({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DealersActions.doNothing());
		return;
	}

	try {
		yield put(DealersActions.getAllDealerClaimsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(DealersService.getDealerClaims, payload);
		if (successData) {
			yield put(DealersActions.getAllDealerClaimsLoadingStop());
			yield put(DealersActions.getAllDealerClaimsSuccess(successData));
			yield put(CommonActions.makeProductsSearchableList(HelperService.convertToSearchableListFormat({
				list: successData,
				id_key: 'sfid',
				
			})));
		} else {
			yield put(DealersActions.getAllDealerClaimsFailure());
		}
	} catch (error) {
		yield put(DealersActions.getAllDealerClaimsFailure());
	}
}

export function* watchCreateDealerClaim() {
	while (true) {
		const { payload } = yield take(DealersTypes.CREATE_DEALER_CLAIM)
	
		yield call(CreateDealerClaim, payload)
	}
}









function* CreateDealerClaim(payload) {
	yield put(DealersActions.createDealerClaimLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(DealersActions.createDealerClaimFailure());
			HelperService.showToast({ 
				message: 'Cannot Create. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		
		
		const successData = yield call(DealersService.CreateDealerClaim, payload);

		if (successData) { 
			yield put(DealersActions.createDealerClaimSuccess(successData));
			HelperService.showToast({ 
				message: 'Dealer Scheme Created Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			NavigationService.navigate('SchemeClaimInfoScreen')
		} else {
			yield put(DealersActions.createDealerClaimFailure())
			HelperService.showToast({ 
				message: 'Error!! Dealer Claim Creation Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(DealersActions.createDealerClaimFailure());
		HelperService.showToast({ 
			message: 'Error!!  Dealer Claim Creation Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}