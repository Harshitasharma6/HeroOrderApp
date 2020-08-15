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


export const reducer = createReducer(INITIAL_STATE, {
  [ProductsTypes.GET_ALL_PRODUCTS_SUCCESS]     : getAllProductsSuccess,
  [ProductsTypes.GET_ALL_PRODUCTS_FAILURE]     : getAllProductsFailure,
  [ProductsTypes.GET_ALL_PRODUCTS_LOADING]     : getAllProductsLoading,
  [ProductsTypes.GET_ALL_PRODUCTS_LOADING_STOP]: getAllProductsLoadingStop,



  [ProductsTypes.GET_PRODUCT_SCHEMES_SUCCESS]     : getProductSchemesSuccess,
  [ProductsTypes.GET_PRODUCT_SCHEMES_FAILURE]     : getProductSchemesFailure,
  [ProductsTypes.GET_PRODUCT_SCHEMES_LOADING]     : getProductSchemesLoading,
  [ProductsTypes.GET_PRODUCT_SCHEMES_LOADING_STOP]: getProductSchemesLoadingStop
});
