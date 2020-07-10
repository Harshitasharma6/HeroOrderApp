import { dashboardService } from 'App/Services/Api/DashboardService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import DashboardActions, { DashboardTypes } from 'App/Stores/Dashboard/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { ValidationService } from 'App/Services/ValidationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { offlineApiCall } from './OfflineSaga';
import { fetchLocation } from './UserSaga';
import {Alert} from 'react-native'
import NavigationService from 'App/Services/NavigationService';
import _ from 'lodash';


export function* watchCreateFeedBackRequest() {
	while (true) {
		const { payload } = yield take(DashboardTypes.FEED_BACK_ACTION);
		try {
			const validationFailed = yield call(ValidationService.validateFeedBackForm, payload);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(DashboardActions.feedBackFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}
		
		yield call(feedBackAction, payload)
	}
}


export function* watchFinalObservationForm() {
	while (true) {
		const { payload } = yield take(DashboardTypes.SUBMIT_FINAL_OBSERVATION_FORM);

		try {
			const validationFailed = yield call(ValidationService.validateFinalObservation, payload.form);
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(DashboardActions.finalObservationFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}


		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		var formPayload  = _.cloneDeep(payload);
		
		formPayload.form.map((obj, index) => {
			obj['attributes']['referenceId'] = `ref${index+1}`;
			obj['User__c'] = `${userId}`;
			obj['OwnerId'] = `${userId}`;
			obj = HelperService.removeField(obj, 'id')
		});

		yield call(submitFinalObservationForm, formPayload)
	}
}



export function* submitFinalObservationForm(payload) {
	yield put(DashboardActions.submitFinalObservationFormLoading());
	try {
		let offlinActionData = {
			apiCall: (dashboardService.submitFinalObservationForm),
			resource: 'submitFinalObservationForm', 
			callName: 'create',
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (DashboardActions.submitFinalObservationFormSuccess),
			failureCallback: (DashboardActions.submitFinalObservationFormFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(DashboardActions.submitFinalObservationFormSuccess(payload));
			NavigationService.navigate('FinalObservationList');
			HelperService.showToast({ 
				message: 'Final observations submitted successfully.', 
				duration: 1000, 
				buttonText: '' 
			});
		} else {
			yield put(DashboardActions.submitFinalObservationFormFailure())
			HelperService.showToast({ 
				message: 'Cannot submit Final observations. Try after some time', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		console.log('Error', error)
		yield put(DashboardActions.submitFinalObservationFormFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}


export function* fetchFinalObservation() {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DashboardActions.doNothing());
		return;
	}

	yield put(DashboardActions.fetchFinalObservationLoading());

	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token
		const date = HelperService.dateReadableFormatWithHyphen();

		let successData = yield call(dashboardService.fetchFinalObservation, {state, userId, access_token, date});
		if (successData) {
			yield put(DashboardActions.fetchFinalObservationSuccess(successData));
		} else {
			yield put(DashboardActions.fetchFinalObservationFailure());
		}
	} catch (error) {
		yield put(DashboardActions.fetchFinalObservationFailure());
	}
}




export function* feedBackAction(payload) {
	
	yield put(DashboardActions.feedBackLoading());
	
	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		payload.State = state;
		payload.User = userId;
		payload.LoginUserId = userId;

		let offlinActionData = {
			apiCall: (dashboardService.feedBackAction),
			resource: 'feedBackAction', //specify for which reducer we are using it
			callName: 'create', //specify operation
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (DashboardActions.feedBackSuccess),
			failureCallback: (DashboardActions.feedBackFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			if (payload.attachment) {
				yield call(sendAttachment, {form: {"Name": `${successData.id}.jpg`, parentId: successData.id, Body: payload.attachment}, access_token: payload.access_token});
			}else {
				yield put(DashboardActions.feedBackSuccess(payload));
				HelperService.showToast({ 
					message: 'FeedBack submitted Successfully.', 
					duration: 1000, 
					buttonText: '' 
				});
			}
		} else {
			yield put(DashboardActions.feedBackFailure())
			HelperService.showToast({ 
				message: 'Error! Cannot Submit FeedBack. Try after some time', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		console.log('Error', error)
		yield put(DashboardActions.feedBackFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}

export function* sendAttachment(payload) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DashboardActions.doNothing());
		return;
	}

	yield put(DashboardActions.sendAttachmentLoading());

	try {
		let successData = yield call(dashboardService.sendAttachment, payload);
		if (successData) {
			yield put(DashboardActions.sendAttachmentSuccess(successData));
			yield put(DashboardActions.feedBackSuccess(payload));
			HelperService.showToast({ 
				message: 'FeedBack submitted Successfully.', 
				duration: 1000, 
				buttonText: '' 
			});
		} else {
			yield put(DashboardActions.sendAttachmentFailure());
			yield put(DashboardActions.feedBackFailure())
			HelperService.showToast({ 
				message: 'Attachment not send.Try Again.', 
				duration: 1000, 
				buttonText: '' 
			});
		}
	} catch (error) {
		yield put(DashboardActions.feedBackFailure())
		yield put(DashboardActions.sendAttachmentFailure());
		HelperService.showToast({ 
			message: 'Attachment not send.Try Again.', 
			duration: 1000, 
			buttonText: '' 
		});
	}
}	

export function* fetchOutStandingAction({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DashboardActions.doNothing());
		return;
	}

	yield put(DashboardActions.outStandingLoading());

	try {

		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token
		payload.state = state;
		payload.userId = userId;
		payload.access_token = access_token;

		let successData = yield call(dashboardService.fetchOutStandingAction, payload);
		if (successData) {
			yield put(DashboardActions.outStandingSuccess(successData));
		} else {
			
			yield put(DashboardActions.outStandingFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(DashboardActions.outStandingFailure());
	}
}


export function* fetchCommunications({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DashboardActions.doNothing());
		return;
	}

	yield put(DashboardActions.fetchCommunicationsLoading());

	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token
		payload.state = state;
		payload.userId = userId;
		payload.access_token = access_token;

		let successData = yield call(dashboardService.fetchCommunications, payload);
		if (successData) {
			yield put(DashboardActions.fetchCommunicationsSuccess(successData));
		} else {
			yield put(DashboardActions.fetchCommunicationsFailure());
		}
	} catch (error) {
		yield put(DashboardActions.fetchCommunicationsFailure());
	}
}


export function* fetchCommunicationsAttachments({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DashboardActions.doNothing());
		return;
	}

	yield put(DashboardActions.fetchCommunicationsAttachmentsLoading());

	try {
		const user = yield select(state => state.startDay);
		const access_token = user.access_token
		payload.access_token = access_token;

		let successData = yield call(dashboardService.fetchCommunicationsAttachments, payload);
		if (successData) {
			yield put(DashboardActions.fetchCommunicationsAttachmentsSuccess(successData));
		} else {
			yield put(DashboardActions.fetchCommunicationsAttachmentsFailure());
		}
	} catch (error) {
		yield put(DashboardActions.fetchCommunicationsAttachmentsFailure());
	}
}

export function* fetchCommunicationsAttachmentsDetails({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(DashboardActions.doNothing());
		return;
	}

	let filepath = HelperService.generateFilePath(payload.attachmentId, payload.extension);

	let fileExists = yield call(HelperService.fileExists, filepath);
	if (fileExists){
		yield put(DashboardActions.doNothing());
		HelperService.viewFile(filepath);
		return;
	}

	yield put(DashboardActions.fetchCommunicationsAttachmentsDetailsLoading({id: payload.attachmentId}));
	HelperService.showToast({ message: 'Please wait while the file is being downloaded.', duration: 1000, buttonText: '' });

	try {
		const user = yield select(state => state.startDay);
		const access_token = user.access_token
		payload.access_token = access_token;

		let successData = yield call(dashboardService.fetchCommunicationsAttachmentsDetails, payload);
		if (successData) {
			HelperService.writeFile(filepath, successData, payload.extension);
			yield put(DashboardActions.fetchCommunicationsAttachmentsDetailsSuccess(successData));
		} else {
			HelperService.deleteFile(filepath);
			yield put(DashboardActions.fetchCommunicationsAttachmentsDetailsFailure());
			HelperService.showToast({ message: 'Attachment Not Found.', duration: 1000, buttonText: '' });
		}
	} catch (error) {
		yield put(DashboardActions.fetchCommunicationsAttachmentsDetailsFailure());
	}
}










