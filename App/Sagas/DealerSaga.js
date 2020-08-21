import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { DealersService } from 'App/Services/Api/DealersService';
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
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';

		let successData = yield call(DealersService.getAllDealers, payload);
		if (successData) {
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


