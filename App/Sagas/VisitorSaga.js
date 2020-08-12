import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { VisitorTypes } from 'App/Stores/Visitor/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { VisitorService } from 'App/Services/Api/VisitorService';
import VisitorActions from 'App/Stores/Visitor/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
//import { fetchLocation } from './UserSaga';
import _ from 'lodash';

//watchSearchCustomer
//searchCustomer

export function* watchSearchCustomer() {
	while (true) {
		const { payload } = yield take(VisitorTypes.SEARCH_CUSTOMER)
		try {
			const validationFailed = yield call(ValidationService.validateSearchCustomerForm, payload);
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(VisitorActions.searchCustomerValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(searchCustomer, payload)
	}
}


export function* watchRegisterCustomer() {
	while (true) {
		const { payload } = yield take(VisitorTypes.REGISTER_CUSTOMER)
		try {
			const validationFailed = yield call(ValidationService.validateRegisterCustomerForm, payload);
			
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(VisitorActions.registerCustomerValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(registerCustomer, payload)
	}
}


function* searchCustomer(payload) {
	yield put(VisitorActions.searchCustomerLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.searchCustomerFailure());
			HelperService.showToast({ 
				message: 'Cannot Search. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
		payload.dealer_id = '0019D000009zum3QAA'
		
		const successData = yield call(VisitorService.searchCustomer, payload);

		if (successData) { 
			yield put(VisitorActions.searchCustomerSuccess(successData));
			switch(successData.table) {
				case 'Contact':
					HelperService.showToast({ 
						message: 'Customer already registered.', 
						duration: 2000, 
						buttonText: 'Okay' 
					});
					NavigationService.navigate('CustomerRegistrationFormScreen');
					break;
				case 'Enquiry':
					HelperService.showToast({ 
						message: 'Open Lead found!', 
						duration: 2000, 
						buttonText: 'Okay' 
					});
					yield put(VisitorActions.showOpenLeadPrompt());
					break;
				default: 
					HelperService.showToast({ 
						message: 'Register New Customer.', 
						duration: 2000, 
						buttonText: 'Okay' 
					});
					NavigationService.navigate('NewRegistrationFormScreen')
					break;
			}
		} else {
			yield put(VisitorActions.searchCustomerFailure())
			HelperService.showToast({ 
				message: 'Error!! Cannot Search.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		console.log(error)
		yield put(VisitorActions.searchCustomerFailure());
		HelperService.showToast({ 
			message: 'Error!! Cannot Search.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}




function* registerCustomer(payload) {
	yield put(VisitorActions.registerCustomerLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.registerCustomerFailure());
			HelperService.showToast({ 
				message: 'Cannot Registration. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
		payload.dealer_id = '0019D000009zum3QAA'
		
		const successData = yield call(VisitorService.registerCustomer, payload);

		if (successData) { 
			yield put(VisitorActions.registerCustomerSuccess(payload));
		} else {
			yield put(VisitorActions.registerCustomerFailure())
			HelperService.showToast({ 
				message: 'Error!! Customer Registration Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.registerCustomerFailure());
		HelperService.showToast({ 
			message: 'Error!! Customer Registration Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}