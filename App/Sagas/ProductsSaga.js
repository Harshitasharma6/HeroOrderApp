import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { ProductsService } from 'App/Services/Api/ProductsService';
import ProductsActions from 'App/Stores/Products/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';


export function* getAllProducts({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ProductsActions.doNothing());
		return;
	}

	try {
		yield put(ProductsActions.getAllProductsLoading());
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';

		let successData = yield call(ProductsService.getAllProducts, payload);
		if (successData) {
			yield put(ProductsActions.getAllProductsSuccess(successData));
			yield put(CommonActions.makeProductsSearchableList(HelperService.convertToSearchableListFormat({
				list: successData,
				id_key: 'sfid',
				label_key: 'name'
			})));
		} else {
			yield put(ProductsActions.getAllProductsFailure());
		}
	} catch (error) {
		yield put(ProductsActions.getAllProductsFailure());
	}
}


export function* getProductSchemes({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ProductsActions.doNothing());
		return;
	}

	try {
		yield put(ProductsActions.getProductSchemesLoading());
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';

		let successData = yield call(ProductsService.getProductSchemes, payload);
		if (successData) {
			let productSchemes = _.cloneDeep(yield select(state => state.products.productSchemes))
			productSchemes[payload.product_id] = successData
			yield put(ProductsActions.getProductSchemesSuccess(successData));
			
		} else {
			yield put(ProductsActions.getProductSchemesFailure());
		}
	} catch (error) {
		yield put(ProductsActions.getProductSchemesFailure());
	}
}




