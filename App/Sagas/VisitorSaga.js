import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { VisitorTypes } from 'App/Stores/Visitor/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { VisitorService } from 'App/Services/Api/VisitorService';
import VisitorActions from 'App/Stores/Visitor/Actions';
import ProductsActions from 'App/Stores/Products/Actions';
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


export function* watchUpdateFollowUpCall() {
	while (true) {
		const { payload } = yield take(VisitorTypes.UPDATE_FOLLOW_UP_CALL)
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

		yield call(updateFollowUpCall, payload)
	}
}


//updateFollowUpCall

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

export function* watchUpdateBooking() {
	while (true) {
		const { payload } = yield take(VisitorTypes.UPDATE_BOOKING)
		

		yield call(updateBooking, payload)
	}
}

export function* watchNewBooking() {
	while (true) {
		const { payload } = yield take(VisitorTypes.NEW_BOOKING)
		

		yield call(newBooking, payload)
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
			yield put(ProductsActions.removeItemFromCartSuccess()); 
			yield put(VisitorActions.clearSearchCustomerForm());
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


function* updateFollowUpCall(payload) {
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
		const successData = yield call(VisitorService.updateFollowUpCall, payload);

		if (successData) { 
			yield put(VisitorActions.registerCustomerOutgoingCallSuccess(successData));
			yield put(CommonActions.hideCallModal());
			HelperService.showToast({ 
				message: 'Follow Up updated Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		} else {
			yield put(VisitorActions.registerCustomerOutgoingCallFailure())
			HelperService.showToast({ 
				message: 'Error!! Verify fields and try again.', 
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


//updateFollowUpCall


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

		let {token, dealer__c, sfid} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		payload.dealers_sales_person_login_info__c =  sfid;
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

export function* getAllFollowUps({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(VisitorActions.doNothing());
		return;
	}
	
	try {
		yield put(VisitorActions.getAllFollowUpsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(VisitorService.getAllFollowUps, payload);
		if (successData) {
			let followUpsMapping = _.cloneDeep(yield select(state => state.visitor.followUpsMapping));
			followUpsMapping[payload.enquiry] = successData;
			yield put(VisitorActions.getAllFollowUpsSuccess(followUpsMapping));
		} else {
			yield put(VisitorActions.getAllFollowUpsFailure());
		}
	} catch (error) {
		yield put(VisitorActions.getAllFollowUpsFailure());
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

function* updateBooking(payload) {
	yield put(VisitorActions.updateBookingLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.updateBookingFailure());
			HelperService.showToast({ 
				message: 'Cannot Save. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, sfid} = yield select(state => state.user)
		payload.token = token;
		
	
		const successData = yield call(VisitorService.updateBooking, payload);

		if (successData) { 
			HelperService.showToast({ 
				message: 'Booking Updated Successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			NavigationService.navigateAndReset('BookingConfirmed');
			yield put(ProductsActions.removeItemFromCartSuccess()); 
			yield put(VisitorActions.updateBookingSuccess(successData));

		} else {
			yield put(VisitorActions.updateBookingFailure())
			HelperService.showToast({ 
				message: 'Error!!  Failed.Verify fields and try again.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(VisitorActions.updateBookingFailure());
		HelperService.showToast({ 
			message: 'Error!! Failed.Verify fields and try again.', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}


function* newBooking(payload) {
	yield put(VisitorActions.newBookingLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(VisitorActions.newBookingFailure());
			HelperService.showToast({ 
				message: 'Cannot Save. No Internet connection.', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
			return;
		}

		let {token, sfid} = yield select(state => state.user)
		payload.token = token;
	
		const successData = yield call(VisitorService.newBooking, payload);

		if (successData) { 
			yield put(VisitorActions.newBookingSuccess(successData));
		} else {
			yield put(VisitorActions.newBookingFailure())
			
		}
	} catch (error) {
		yield put(VisitorActions.newBookingFailure());
	}
}


export function* orderCheckout({payload}) {
	let cart = yield select(state => state.products.cart);
	let visitor = yield select(state => state.visitor.currentVisitorData);
	// 	  "tally_invoice_no__c" : "",
	//    "customer_gstin_no__c" : "sadasd",
	//    "online_order_no__c":"wewewe",
	//    "reference_no__c":"weqwewqe",
	//    "amount_paid_at_booking__c":"amount paid at booking",
	//    "first_name__c": "Rohit",
	//    "last_name__c": "Shukla",
	//    "contact_number__c": "09818512785",
	//    "email_id__c":  "xyz@gmails.com",
	//    "address_line_1__c": "delhi",
	   
	   
	//    "chassis_no__c": "weweqwe",
	//    "motor_no__c": "qwewqe",
	//    "charger_no__c": "ewewqeq",
	//    "battery_no__c": "asdasd",
	//    "model_color__c":"Red",
	//    "make_of_battery__c":"wewewe",
	//    "capacity_of_each_battery__c":"xasasd",
	//    "type_of_battery__c":"wwewe",
	//    "owner_s_handbook_no__c":"wqewqewe",
	//    "other_financier_name__c":"IDFC",
	//    "financier_name__c":"eeeee"
	   
	   
	//    "aadhar_card__c":"https://abc.com/a.png",
	//    "acknowledgement__c": "https://abc.com/a.png",
	//    "driving_license__c" : "https://abc.com/a.png",
	//    "insurance__c" :"https://abc.com/a.png",
	//    "rc__c" : "https://abc.com/a.png",
	//    "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
	//    "voter_id_card__c" :"https://abc.com/a.png",  
	   
	   
	//    "product__c":"a029D000002ZFPtQAO",
	   
	//   "outstanding_amount__c":"222",
	//   "amount_paid_at_booking__c":"amount paid at booking", [RENAME THIS FIELD ON PAGE ]
	//   "total_amount_payable__c": "TOTAL AMOUNT OF BOOKING AT THE TIME CHECKOUT"
	//   "basic_amount__c" = "BASIC PRICE "
	//    "total_tax__c": "taxes",  
	//    "total_subsidy__c": "FRAME SUBSODY",
	//    "dealer_discount__c" : "DEALE DISCONT",
	//    Offer_Applied__c = "true/false"
	//    ,
	   
	   
	//    MISSING , please add this. FOR BACKEND
	//    lead_satge__c ='Booking'

	//VISITOR DATA
	// aadhar_card__c: null
	// acknowledgement__c: null
	// address_line_1__c: "SST Nagar, Patiala, Punjab, India"
	// address_line_2__c: null
	// age__c: 28
	// amount_paid_at_booking__c: null
	// attach_documents__c: null
	// basic_amount__c: 0
	// battery_no__c: null
	// billing_date__c: null
	// billing_ref_no__c: null
	// booking_date__c: null
	// booking_ref_no__c: null
	// capacity_of_each_battery__c: null
	// cgst__c: null
	// cgst_in_rs__c: null
	// charger_no__c: null
	// chassis_no__c: null
	// city__c: null
	// competitor__c: null
	// contact_number__c: "9971710994"
	// createddate: 1598977614000
	// customer__c: "0039D000008CLk8QAG"
	// customer_anniversary__c: "2020-09-30T00:00:00.000Z"
	// customer_birthday__c: "2020-09-25T00:00:00.000Z"
	// customer_gstin_no__c: null
	// dealer__c: "0019D000009zum3QAA"
	// dealer_discount__c: null
	// dealers_sales_person__c: "a0O9D000001hLV9UAM"
	// designation__c: null
	// discount_percent__c: null
	// driving_license__c: null
	// email_id__c: "saurabhsg@gmail.co"
	// exchange_required__c: "Yes"
	// existing_two_wheelers__c: "Yes"
	// expected_close_date__c: 1600214400000
	// expected_delivery_date__c: null
	// expected_revenue__c: null
	// finance_required__c: null
	// financier_name__c: null
	// first_name__c: "Dinesh"
	// follow_up_date__c: null
	// genders__c: "Male"
	// id: 575
	// igst__c: null
	// igst_in_rs__c: null
	// insurance__c: null
	// isdeleted: false
	// last_name__c: "Kaushik"
	// lastmodifiedbyid: "0052v00000g1xfXAAQ"
	// lastmodifieddate: 1599123554000
	// lastvieweddate: 1599123554000
	// lead_from__c: "Non HO"
	// lead_source__c: "Head Office"
	// lead_stage__c: "Test Drive"
	// lead_status__c: "Open"
	// lead_status_reason__c: null
	// make_of_battery__c: null
	// mode_of_buying__c: "Cash"
	// model_color__c: null
	// motor_no__c: null
	// name: "ENQ-00571"
	// number_of_employees__c: null
	// occupation__c: "Retired"
	// online_order_no__c: null
	// other_financier_name__c: null
	// others__c: null
	// outstanding_amount__c: null
	// owner_s_handbook_no__c: null
	// payment_mode__c: null
	// pg_id__c: "442bbb1f-d191-41ae-949d-00f47770ecc4"
	// pincode__c: null
	// product__c: "a029D000002ZFPoQAO"
	// product_type__c: null
	// purchased_date__c: null
	// purpose_of_buying__c: null
	// rc__c: null
	// recieved_advance__c: null
	// recordtypeid: null
	// reference_no__c: null
	// scheme_applied__c: null
	// sfid: "a009D000002f6rmQAA"
	// sgst__c: null
	// sgst_in_rs__c: null
	// source_of_enquiry__c: null
	// state__c: "a059D000000tNcxQAE"
	// systemmodstamp: 1599123554000
	// tally_invoice_no__c: null
	// test_drive_offered__c: "No"
	// total_amount_payable__c: null
	// total_discount__c: null
	// total_subsidy__c: null
	// total_tax__c: null
	// type_of_battery__c: null
	// usage__c: null
	// visitor_type__c: null
	// voter_id_card__c: null
	// _hc_err: null
	// _hc_lastop: "SYNCED"

	//CART
	// 	basicPrice: 71990
	// dealerDiscount: 0
	// offerAmount: 0
	// offersApplied: []
	// products: Array(1)
	// 0:
	// battery__c: "LI"
	// battery_capacity_in_v_ah__c: "250"
	// bldc_hub_motor_watt__c: "250"
	// charging_time__c: 4
	// color__c: null
	// ground_clearance_in_mm__c: null
	// id: 16
	// kerb_weight__c: null
	// licence_registration__c: null
	// name: "Optima ER"
	// price__c: 71990
	// product_category__c: null
	// product_images: []
	// quantity: 1
	// range_in_kmph__c: 50
	// sfid: "a029D000002ZFPjQAO"
	// state: "Delhi"
	// subsidy_amount__c: 17998
	// top_speed__c: 30
	// wheel_size_in_inch__c: null
	// __proto__: Object
	// length: 1
	// __proto__: Array(0)
	// subsidy: 17998
	// taxes: 3600
	// totalAmount: 57592
	let form_data = {
		first_name__c: visitor.first_name__c,
		last_name__c: visitor.last_name__c,
		contact_number__c: visitor.contact_number__c,
		email_id__c: visitor.email_id__c,
		address_line_1__c:  visitor.address_line_1__c,
		product__c: cart.products[0]['sfid'],
		total_amount_payable__c: cart.totalAmount,
		basic_amount__c: cart.basicPrice,
		total_tax__c: cart.taxes,
		total_subsidy__c: cart.subsidy,
		dealer_discount__c: cart.dealerDiscount,
		offer_applied__c: !!(cart.offersApplied && cart.offersApplied.length),
		total_scheme_amount__c: cart.offerAmount,
		id: visitor.id,
		sfid: visitor.sfid, 
	   "lead_stage__c": 'Booking'
	}
	//active_from__c: "2020-08-01T00:00:00.000Z"
	// active_from__c: "2020-08-01T00:00:00.000Z"
	// active_to__c: "2020-10-31T00:00:00.000Z"
	// dealer__c: null
	// p_scheme_id: "a0B9D000001xrM9UAI"
	// scheme_amount__c: 2000
	// scheme_name__c: "Offer 1"
	// scheme_scope__c: "Pan India"
	// scheme_type__c: "Cash Discount"
	// sfid: "a0K9D000000vx0UUAQ"
	// state__c: null

	let new_booking_form_data = {
		enquiry__c: visitor.sfid,
		schemes: cart.offersApplied.map((obj) => {
			return ({
				p_scheme__c: obj.p_scheme_id,
				Scheme_Details__c: obj.sfid, 
				scheme_Amount__c: obj.scheme_amount__c
			})
		})
	}


	yield put(VisitorActions.setUpdateBookingForm(form_data));
	yield put(VisitorActions.setNewBookingForm(new_booking_form_data));

	
}

