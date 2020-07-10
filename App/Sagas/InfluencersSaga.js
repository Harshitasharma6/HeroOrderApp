import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { influencersService } from 'App/Services/Api/InfluencersService';
import InfluencersActions, { InfluencersTypes } from 'App/Stores/Influencers/Actions';
import SiteActions from '../Stores/Sites/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native';
import { fetchLocation } from './UserSaga';

export function* watchCreateInfluencerRequest() {
	while (true) {
		const { payload } = yield take(InfluencersTypes.CREATE_INFLUENCER)
		try {
			const validationFailed = yield call(ValidationService.validateInfluencerForm, payload.form);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(InfluencersActions.influencerFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createInfluencer, payload)
	}
}

export function* createInfluencer(payload) {
	yield put(InfluencersActions.createInfluencerLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.form['Latitude'] = location.latitude;
			payload.form['Longitude'] = location.longitude;
		} else {
			yield put(InfluencersActions.doNothing());
		    yield put(InfluencersActions.createInfluencerLoadingStop());
		    return;
		}

		let offlinActionData = {
			apiCall: (influencersService.createInfluencer),
			resource: 'createInfluencer', //specify for which reducer we are using it
			callName: 'create', //specify operation
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (InfluencersActions.createInfluencerSuccess),
			failureCallback: (InfluencersActions.createInfluencerFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(InfluencersActions.createInfluencerSuccess(payload));
			HelperService.showToast({ message: 'Influencer created Successfully.', duration: 1000, buttonText: '' });
			yield put(InfluencersActions.createInfluencerSuccess(payload));
			yield put(InfluencersActions.fetchInfluencers());

			NavigationService.goback();
		} else {
			yield put(InfluencersActions.createInfluencerFailure())
			HelperService.showToast({ message: 'Cannot Create Influencer. Try after some time', duration: 2000, buttonText: 'Okay' });

		}
	} catch (error) {
		console.log('Error', error)
		yield put(InfluencersActions.createInfluencerFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}

export function* watchCreateContactRequest() {
	while (true) {
		const { payload } = yield take(InfluencersTypes.CREATE_INFLUENCER);
		try {
			const validationFailed = yield call(ValidationService.validateInfluencerForm, payload);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(InfluencersActions.influencerFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createContact, payload)
	}
}

export function* fetchInfluencers() {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(InfluencersActions.doNothing());
		return;
	}
	yield put(InfluencersActions.fetchInfluencersLoading());
	try {
		const startDay = yield select(state => state.startDay);
		const access_token = startDay.access_token;
		const userId = startDay.userDetailList.Id;
		const state = startDay.userDetailList.State;

		let successData = yield call(influencersService.fetchInfluencers, {access_token,userId, state});
		if (successData) {
			yield put(InfluencersActions.fetchInfluencersSuccess(successData));
			yield put(InfluencersActions.makeInfluencersSearchableList(HelperService.convertToSearchableListFormat({
				list:successData, 
				id_key: 'Id', 
				label_key: 'LastName'
			})));
		} else {
			yield put(InfluencersActions.fetchInfluencersFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(InfluencersActions.fetchInfluencersFailure());
	}
}

export function* extractInfluencerInfoData({ payload }) {
	try {
		let id = payload.id
		let selectedInfluencerdata = {}
		let influencerList = yield select(state => state.influencers.influencerList);
		if (influencerList && influencerList.length) {
			influencerList.map((obj) => {
				if (obj.id == id) {
					selectedInfluencerdata = obj.data
				}
			});

			yield put(InfluencersActions.selectInfluencer({ id: id, data: selectedInfluencerdata, type: 'Influencers' }));
		} else {
			let influencers = yield select(state => state.influencers);
			let user = yield select(state => state.user);
			let successData = yield call(influencersService.fetchInfluencers, {
				agentid: user.id,
				token: user.token,
				offset: influencers.influencerOffset,
				limit: influencers.influencerLimit
			});

			if (successData) {
				yield put(InfluencersActions.fetchInfluencersSuccess(successData));
				if (successData && successData.length) {
					successData.map((obj) => {
						if (obj.data.id == id) {
							selectedInfluencerdata = obj.data
						}
					});
					yield put(InfluencersActions.selectInfluencer({ id: id, data: selectedInfluencerdata, type: 'Influencers' }));
				}
			} else {
				yield put(InfluencersActions.fetchInfluencersFailure());
			}
		}
	} catch (error) {
		yield put(InfluencersActions.doNothing());
	}
}


export function* watchCreateInfluencerVisitFormRequest() {
	while (true) {
		const { payload } = yield take(InfluencersTypes.CREATE_INFLUENCER_VISIT_FORM)
		try {
			const validationFailed = yield call(ValidationService.validateInfluencerVisitForm, payload.form);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(InfluencersActions.influencerVisitFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createInfluencerVisitForm, payload)
	}
}

export function* createInfluencerVisitForm(payload) {
	yield put(InfluencersActions.createInfluencerVisitFormLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.form['latitude'] = location.latitude;
			payload.form['longitude'] = location.longitude;


			

		} else {
			yield put(InfluencersActions.doNothing());
		    yield put(InfluencersActions.createInfluencerVisitFormLoadingStop());
		    return;
		}

		let offlinActionData = {
			apiCall: (influencersService.createInfluencerVisitForm),
			resource: 'createInfluencerVisitForm',
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (InfluencersActions.createInfluencerVisitFormSuccess),
			failureCallback: (InfluencersActions.createInfluencerVisitFormFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) {
			yield put(InfluencersActions.createInfluencerVisitFormSuccess(payload));
			yield put(InfluencersActions.fetchInfluencersVisits({influencerId: payload.form.InfluencerName}));
			NavigationService.navigate('InfluencerVisitsList');
			HelperService.showToast({ 
				message: 'Influencer Visit Form created Successfully.', 
				duration: 1000, 
				buttonText: '' 
			});
		} else {
			yield put(InfluencersActions.createInfluencerVisitFormFailure())
			HelperService.showToast({ message: 'Cannot Create Influencer Visit form. Try after some time', duration: 2000, buttonText: 'Okay' });

		}
	} catch (error) {
		console.log('Error', error)
		yield put(InfluencersActions.createInfluencerVisitFormFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}

export function* fetchInfluencersVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(InfluencersActions.doNothing());
		return;
	}
	yield put(InfluencersActions.fetchInfluencersVisitsLoading());
	try {
		const startDay = yield select(state => state.startDay);
		const access_token = startDay.access_token;
		const userId = startDay.userDetailList.Id;
		const state = startDay.userDetailList.State;

		payload.userId = userId;
		payload.state = state;
		payload.access_token = access_token;
		let successData = yield call(influencersService.fetchInfluencersVisits, payload);
		if (successData) {
			yield put(InfluencersActions.fetchInfluencersVisitsSuccess(successData));
		} else {
			yield put(InfluencersActions.fetchInfluencersVisitsFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(InfluencersActions.fetchInfluencersVisitsFailure());
	}
}
