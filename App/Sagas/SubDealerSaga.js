import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { SubDealersService } from 'App/Services/Api/SubDealersService';
import SubDealersActions from 'App/Stores/SubDealers/Actions';
import { SubDealersTypes } from 'App/Stores/SubDealers/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';


export function* getAllSubDealers({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(SubDealersActions.doNothing());
		return;
	}

	try {
		yield put(SubDealersActions.getAllSubDealersLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(SubDealersService.getAllSubDealers, payload);
		if (successData) {
			yield put(SubDealersActions.getAllSubDealersLoadingStop());
			yield put(SubDealersActions.getAllSubDealersSuccess(successData));
			

			yield put(CommonActions.makeProductsSearchableList(HelperService.convertToSearchableListFormat({
				list: successData,
				id_key: 'sfid',
				
			})));
		} else {
			yield put(SubDealersActions.getAllSubDealersFailure());
		}
	} catch (error) {
		yield put(SubDealersActions.getAllSubDealersFailure());
	}
}



export function* watchCreateSubDealer() {
	while (true) {
		const { payload } = yield take(SubDealersTypes.CREATE_SUB_DEALER)
		try {
			const validationFailed = yield call(ValidationService.validateCreateSubDealerForm, payload);
			
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(SubDealersActions.createSubDealerValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(CreateSubDealer, payload)
	}
}









function* CreateSubDealer(payload) {
	yield put(SubDealersActions.createSubDealerLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(SubDealersActions.createSubDealerFailure());
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
		
		
		const successData = yield call(SubDealersService.CreateSubDealer, payload);

		if (successData) { 
			yield put(SubDealersActions.createSubDealerSuccess(successData));
			HelperService.showToast({ 
				message: 'SubDealer Created Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			NavigationService.navigate('SubDealerInfoScreen')
		} else {
			yield put(SubDealersActions.createSubDealerFailure())
			HelperService.showToast({ 
				message: 'Error!! SubDealer Creation Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(SubDealersActions.createSubDealerFailure());
		HelperService.showToast({ 
			message: 'Error!!  SubDealer Creation Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}
