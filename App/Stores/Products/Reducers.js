import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { ProductsTypes } from './Actions'


export const getAllProductsSuccess = (state, { payload }) => ({
  ...state,
  productsData: payload,
  loaders: {
    ...state.loaders,
    cLoader: false
  }
});

export const getAllProductsFailure = (state) => ({
  ...state,
  productsData: [],
  loaders: {
    ...state.loaders,
    getAllProductsLoader: false
  }
});


export const getAllProductsLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllProductsLoader: true
  }
});


export const getAllProductsLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllProductsLoader: false
  }
});



export const getProductSchemesSuccess = (state, { payload }) => ({
  ...state,
  productSchemes: payload,
  loaders: {
    ...state.loaders,
    getProductSchemesLoader: false
  }
});

export const getProductSchemesFailure = (state) => ({
  ...state,
  productSchemes: {},
  loaders: {
    ...state.loaders,
    getProductSchemesLoader: false
  }
});


export const getProductSchemesLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getProductSchemesLoader: true
  }
});


export const getProductSchemesLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getProductSchemesLoader: false
  }
});


export const addItemToCart = (state) => ({
  ...state
});


export const removeItemFromCart = (state) => ({
  ...state
});

export const removeItemFromCartSuccess = (state) => ({
  ...state,
  cart: INITIAL_STATE.cart
});

export const addItemToCartSuccess = (state, {payload}) => ({
  ...state,
  cart: payload
})


export const editCart = (state) => ({
  ...state
});

export const editCartSuccess = (state) => ({
  ...state
});

export const openDealerDiscountEdit = (state) => ({
  ...state,
  editDealerDiscount: true
});

export const closeDealerDiscountEdit = (state) => ({
  ...state,
  editDealerDiscount: false
});

export const changeDealerDiscountSuccess = (state, {payload}) => ({
  ...state,
  cart: payload
});

export const removeOfferSuccess = (state, {payload}) => ({
  ...state,
  cart: payload
});

export const addOfferSuccess = (state, {payload}) => ({
  ...state,
  cart: payload
});





export const reducer = createReducer(INITIAL_STATE, {
  [ProductsTypes.GET_ALL_PRODUCTS_SUCCESS]     : getAllProductsSuccess,
  [ProductsTypes.GET_ALL_PRODUCTS_FAILURE]     : getAllProductsFailure,
  [ProductsTypes.GET_ALL_PRODUCTS_LOADING]     : getAllProductsLoading,
  [ProductsTypes.GET_ALL_PRODUCTS_LOADING_STOP]: getAllProductsLoadingStop,



  [ProductsTypes.GET_PRODUCT_SCHEMES_SUCCESS]     : getProductSchemesSuccess,
  [ProductsTypes.GET_PRODUCT_SCHEMES_FAILURE]     : getProductSchemesFailure,
  [ProductsTypes.GET_PRODUCT_SCHEMES_LOADING]     : getProductSchemesLoading,
  [ProductsTypes.GET_PRODUCT_SCHEMES_LOADING_STOP]: getProductSchemesLoadingStop,


  [ProductsTypes.ADD_ITEM_TO_CART_SUCCESS]     		: addItemToCartSuccess,
  [ProductsTypes.REMOVE_ITEM_FROM_CART_SUCCESS]     : removeItemFromCartSuccess,
  [ProductsTypes.EDIT_CART]     					: editCart,
  [ProductsTypes.EDIT_CART_SUCCESS]     			: editCartSuccess,
  [ProductsTypes.OPEN_DEALER_DISCOUNT_EDIT]     	: openDealerDiscountEdit,
  [ProductsTypes.CLOSE_DEALER_DISCOUNT_EDIT]     	: closeDealerDiscountEdit,
  [ProductsTypes.CHANGE_DEALER_DISCOUNT_SUCCESS]    : changeDealerDiscountSuccess,
  [ProductsTypes.REMOVE_OFFER_SUCCESS]              : removeOfferSuccess,
  [ProductsTypes.ADD_OFFER_SUCCESS]                 : addOfferSuccess,
});
