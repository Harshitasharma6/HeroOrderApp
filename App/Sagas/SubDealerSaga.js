import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { SubDealersService } from 'App/Services/Api/SubDealersService';
import SubDealersActions from 'App/Stores/SubDealers/Actions';
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
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhME85RDAwMDAwMWhMVjlVQU0iLCJpYXQiOjE1OTQ0NjY5MzF9.zswVWSPfiaLOfxzuEDbaTsSRVt_QWQyduwAJejNCccY';

		let successData = yield call(SubDealersService.getAllSubDealers, payload);
		if (successData) {
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
