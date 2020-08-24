import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { InsightsService } from 'App/Services/Api/InsightsService';
import InsightsActions from 'App/Stores/Insights/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';



export function* getDashboardSummary({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(InsightsActions.doNothing());
		return;
	}

	try {
		yield put(InsightsActions.getDashboardSummaryLoading());
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
		payload.dealer_id = '0019D000009zum3QAA'

		let successData = yield call(InsightsService.getDashboardSummary, payload);
		if (successData) {
			yield put(InsightsActions.getDashboardSummarySuccess(successData));
			
		} else {
			yield put(InsightsActions.getDashboardSummaryFailure());
		}
	} catch (error) {
		yield put(InsightsActions.getDashboardSummaryFailure());
	}
}


export function* getDashboardTrendsSoldProducts({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(InsightsActions.doNothing());
		return;
	}

	try {
		yield put(InsightsActions.getDashboardTrendsSoldProductsLoading());
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
		payload.dealer_id = '0019D000009zum3QAA'

		let successData = yield call(InsightsService.getDashboardTrendsSoldProducts, payload);
		if (successData) {
			yield put(InsightsActions.getDashboardTrendsSoldProductsSuccess(successData));
			
		} else {
			yield put(InsightsActions.getDashboardTrendsSoldProductsFailure());
		}
	} catch (error) {
		yield put(InsightsActions.getDashboardTrendsSoldProductsFailure());
	}
}


export function* getDashboardTrendsRevenue({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(InsightsActions.doNothing());
		return;
	}

	try {
		yield put(InsightsActions.getDashboardTrendsRevenueLoading());
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
		payload.dealer_id = '0019D000009zum3QAA'

		let successData = yield call(InsightsService.getDashboardTrendsRevenue, payload);
		if (successData) {
			yield put(InsightsActions.getDashboardTrendsRevenueSuccess(successData));
			
		} else {
			yield put(InsightsActions.getDashboardTrendsRevenueFailure());
		}
	} catch (error) {
		yield put(InsightsActions.getDashboardTrendsRevenueFailure());
	}
}


    // getDashboardTrendsSoldProducts,
    // getDashboardTrendsRevenue,