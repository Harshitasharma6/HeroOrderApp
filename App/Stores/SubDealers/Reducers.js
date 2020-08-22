import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { SubDealersTypes } from './Actions'


export const getAllSubDealersSuccess = (state, { payload }) => ({
  ...state,
  SubDealersData: payload,
  loaders: {
    ...state.loaders,
    cLoader: false
  }
});

export const getAllSubDealersFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: false
  }
});


export const getAllSubDealersLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: true
  }
});


export const getAllSubDealersLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: false
  }
});

export const doNothing = (state) => ({
  ...state
});










export const reducer = createReducer(INITIAL_STATE, {
  [SubDealersTypes.GET_ALL_SUB_DEALERS_SUCCESS]     : getAllSubDealersSuccess,
  [SubDealersTypes.GET_ALL_SUB_DEALERS_FAILURE]     : getAllSubDealersFailure,
  [SubDealersTypes.GET_ALL_SUB_DEALERS_LOADING]     : getAllSubDealersLoading,
  [SubDealersTypes.GET_ALL_SUB_DEALERS_LOADING_STOP]: getAllSubDealersLoadingStop,
  [SubDealersTypes.DO_NOTHING] 				                 :doNothing,



  
});