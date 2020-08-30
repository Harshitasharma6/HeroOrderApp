import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { VisitorTypes } from 'App/Stores/Visitor/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { VisitorService } from 'App/Services/Api/VisitorService';
import VisitorActions from 'App/Stores/Visitor/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';


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


export function* watchRegisterCustomerCall() {
	while (true) {
		const { payload } = yield take(VisitorTypes.REGISTER_CUSTOMER_CALL)
		try {
			const validationFailed = yield call(ValidationService.validateRegisterCustomerCallForm, payload);
		
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(VisitorActions.registerCustomerCallValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(registerCustomerCall, payload)
	}
}

export function* watchRegisterCustomerOutgoingCall() {
	while (true) {
		const { payload } = yield take(VisitorTypes.REGISTER_CUSTOMER_OUTGOING_CALL)
		try {
			const validationFailed = yield call(ValidationService.validateRegisterCustomerCallForm, payload);
		
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(VisitorActions.registerCustomerOutgoingCallValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(registerCustomerOutgoingCall, payload)
	}
}

export function* watchPayBooking() {
	while (true) {
		const { payload } = yield take(VisitorTypes.PAY_BOOKING)
		try {
			const validationFailed = yield call(ValidationService.validateRegisterCustomerCallForm, payload);
		
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(VisitorActions.registerCustomerCallValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(payBooking, payload)
	}
}


export function* watchUpdateVisitor() {
	while (true) {
		const { payload } = yield take(VisitorTypes.UPDATE_VISITOR)
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

		yield call(updateVisitor, payload)
	}
}


export function* watchCreateFeedback() {
	while (true) {
		const { payload } = yield take(VisitorTypes.CREATE_FEEDBACK)
		try {
			const validationFailed = yield call(ValidationService.validateCreateFeedbackForm, payload);
			
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(VisitorActions.createFeedbackValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createFeedback, payload)
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

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		
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
						message: 'Lead already exist!', 
						duration: 2000, 
						buttonText: 'Okay' 
					});

					let data = successData.data[0];
					yield put(VisitorActions.registerCustomerSuccess(data));
					yield put(VisitorActions.setCurrentEnquiry(data.id));
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

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		
		const successData = yield call(VisitorService.registerCustomer, payload);

		if (successData) { 
			yield put(VisitorActions.registerCustomerSuccess(successData));
			yield put(VisitorActions.setCurrentEnquiry(successData.id));
			HelperService.showToast({ 
				message: 'Visitor Registered Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			NavigationService.navigate('VisitorInfoScreen')
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

function* registerCustomerCall(payload) {
	yield put(VisitorActions.registerCustomerCallLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.registerCustomerCallFailure());
			HelperService.showToast({ 
				message: 'Cannot Registration. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		const successData = yield call(VisitorService.registerCustomerCall, payload);

		if (successData) { 
			yield put(VisitorActions.registerCustomerCallSuccess(successData));
			HelperService.showToast({ 
				message: 'Call Registered Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		} else {
			yield put(VisitorActions.registerCustomerCallFailure())
			HelperService.showToast({ 
				message: 'Error!! Call Registration Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.registerCustomerCallFailure());
		HelperService.showToast({ 
			message: 'Error!! Call Registration Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}


function* registerCustomerOutgoingCall(payload) {
	yield put(VisitorActions.registerCustomerOutgoingCallLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.registerCustomerOutgoingCallFailure());
			HelperService.showToast({ 
				message: 'Cannot Registration. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, dealer__c, sfid} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		payload.dealers_sales_person_login_info_id = sfid
		const successData = yield call(VisitorService.registerCustomerOutgoingCall, payload);

		if (successData) { 
			yield put(VisitorActions.registerCustomerOutgoingCallSuccess(successData));
			yield put(CommonActions.hideCallModal());
			HelperService.showToast({ 
				message: 'Call Registered Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		} else {
			yield put(VisitorActions.registerCustomerOutgoingCallFailure())
			HelperService.showToast({ 
				message: 'Error!! Call Registration Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.registerCustomerOutgoingCallFailure());
		HelperService.showToast({ 
			message: 'Error!! Call Registration Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}


function* payBooking(payload) {
	yield put(VisitorActions.payBookingLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.payBookingFailure());
			HelperService.showToast({ 
				message:  'No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		const successData = yield call(VisitorService.payBooking, payload);

		if (successData) { 
			yield put(VisitorActions.payBookingSuccess(successData));
			HelperService.showToast({ 
				message: 'Booking Payment done Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		} else {
			yield put(VisitorActions.payBookingFailure())
			HelperService.showToast({ 
				message: 'Error!! Payment Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.payBookingFailure());
		HelperService.showToast({ 
			message: 'Error!! Payment Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}



function* updateVisitor(payload) {
	yield put(VisitorActions.registerCustomerLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.registerCustomerFailure());
			HelperService.showToast({ 
				message: 'Cannot Update. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		
		const successData = yield call(VisitorService.updateVisitor, payload);

		if (successData) { 
			yield put(VisitorActions.updateVisitorSuccess(successData));
			successData
			HelperService.showToast({ 
				message: 'Updated Successfully!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			NavigationService.navigate('VisitorInfoScreen')
		} else {
			yield put(VisitorActions.registerCustomerFailure())
			HelperService.showToast({ 
				message: 'Error!! Update Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.registerCustomerFailure());
		HelperService.showToast({ 
			message: 'Error!! Update Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}




function* createFeedback(payload) {
	yield put(VisitorActions.createFeedbackLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.createFeedbackFailure());
			HelperService.showToast({ 
				message: 'Cannot create Feedback. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		payload.enquiry = payload.enquiry_id
		
		const successData = yield call(VisitorService.createFeedback, payload);

		if (successData) { 
			yield put(VisitorActions.createFeedbackSuccess(payload));
			HelperService.showToast({ 
				message: 'Feedback submitted successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			NavigationService.navigate('VisitorInfoScreen')
		} else {
			yield put(VisitorActions.createFeedbackFailure())
			HelperService.showToast({ 
				message: 'Error!! Feedback Not Created.Verify try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.createFeedbackFailure());
		HelperService.showToast({ 
			message: 'Error!! Feedback Not Created.Verify try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
		});
	}
}



export function* getAllVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(VisitorActions.doNothing());
		return;
	}
	
	try {
		yield put(VisitorActions.getAllVisitsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(VisitorService.getAllVisits, payload);
		if (successData) {
			let visitsMapping = _.cloneDeep(yield select(state => state.visitor.visitsMapping));
			visitsMapping[payload.enquiry] = successData;
			yield put(VisitorActions.getAllVisitsSuccess(visitsMapping));
		} else {
			yield put(VisitorActions.getAllVisitsFailure());
		}
	} catch (error) {
		yield put(VisitorActions.getAllVisitsFailure());
	}
}


export function* getFeedbacks({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(VisitorActions.doNothing());
		return;
	}
	
	try {
		yield put(VisitorActions.getFeedbacksLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(VisitorService.getFeedbacks, payload);
		if (successData) {
			let feedbacksMapping = yield select(state => state.visitor.feedbacksMapping);
			feedbacksMapping[payload.enquiry] = successData;
			yield put(VisitorActions.getFeedbacksSuccess(feedbacksMapping));
		} else {
			yield put(VisitorActions.getFeedbacksFailure());
		}
	} catch (error) {
		console.log('error', error)
		yield put(VisitorActions.getFeedbacksFailure());
	}
}



