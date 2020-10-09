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
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

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
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c

		let successData = yield call(ProductsService.getProductSchemes, payload);
		if (successData) {
			let productSchemes = _.cloneDeep(yield select(state => state.products.productSchemes))
			productSchemes[payload.product_id] = successData
			yield put(ProductsActions.getProductSchemesSuccess(productSchemes));
			
		} else {
			yield put(ProductsActions.getProductSchemesFailure());
		}
	} catch (error) {
		yield put(ProductsActions.getProductSchemesFailure());
	}
}

export function* addItemToCart({payload}) {
	let cart = _.cloneDeep(yield select(state => state.products.cart));
	let products = cart.products;
	if (products.length) {
		HelperService.showToast({ 
			message: 'Item Already Present in cart !!',
			duration: 2000, 
			buttonText: 'Okay' 
		});
		return;
	}

	products.push(payload);
	cart.products = products;
	let tax = yield select(state => state.user.Tax ? state.user.Tax[0] : {});
	let tax_calculation = Number(tax['tatal__c'] || 5)/100

	let basicPrice = cart.basicPrice;
	let taxes      = cart.taxes;
	let totalAmount= cart.totalAmount;
	let subsidy    = cart.subsidy;
	let dealerDiscount = cart.dealerDiscount;
	let offerAmount= 0
	let offersApplied = cart.offersApplied;
	offersApplied.map((obj) => {
		offerAmount += Number(obj.scheme_amount__c)
	});
	
	cart.offerAmount = offerAmount;
	cart.basicPrice += Number(payload.price__c);
	cart.taxes      += Math.round(Number(payload.price__c)*tax_calculation);
	cart.subsidy    += Number(payload.subsidy_amount__c);
	cart.totalAmount+= cart.basicPrice + cart.taxes  - cart.subsidy - Number(offerAmount) - cart.dealerDiscount
	yield put(ProductsActions.addItemToCartSuccess(cart));
}

export function* removeItemFromCart({payload}) {
	yield put(ProductsActions.removeItemFromCartSuccess());
}

export function* removeOffer({payload}) {
	let cart = _.cloneDeep(yield select(state => state.products.cart));

	let offersApplied = cart.offersApplied;
	let offerAmount = 0;
	offersApplied = offersApplied.filter((obj) => obj.scheme_name__c != payload);
	cart.offersApplied = offersApplied;
	offersApplied.map((obj) => {
		offerAmount += Number(obj.scheme_amount__c)
	});
	cart.offerAmount = offerAmount;
	cart.totalAmount = cart.basicPrice + cart.taxes  - cart.subsidy - Number(offerAmount) - cart.dealerDiscount
	yield put(ProductsActions.removeOfferSuccess(cart));
}

export function* addOffer({payload}) {
	let cart = _.cloneDeep(yield select(state => state.products.cart));
	let offersApplied = cart.offersApplied;
	let offerAmount = 0;
	offersApplied.push(payload);
	cart.offersApplied = offersApplied;
	offersApplied.map((obj) => {
		offerAmount += Number(obj.scheme_amount__c)
	});
	cart.offerAmount = offerAmount;
	cart.totalAmount = cart.basicPrice + cart.taxes  - cart.subsidy - Number(offerAmount) - cart.dealerDiscount
	yield put(ProductsActions.addOfferSuccess(cart));
}

export function* changeDealerDiscount({payload}) {
	let cart = _.cloneDeep(yield select(state => state.products.cart));
	let dealerDiscount = payload;
	cart.dealerDiscount = dealerDiscount;
	cart.totalAmount = cart.basicPrice + cart.taxes  - cart.subsidy - cart.offerAmount - dealerDiscount;
	yield put(ProductsActions.changeDealerDiscountSuccess(cart));
}






