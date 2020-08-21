import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { DealersTypes } from './Actions'


export const getAllDealersSuccess = (state, { payload }) => ({
  ...state,
  DealersData: payload,
  loaders: {
    ...state.loaders,
    cLoader: false
  }
});

export const getAllDealersFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealersLoader: false
  }
});


export const getAllDealersLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealersLoader: true
  }
});


export const getAllDealersLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealersLoader: false
  }
});

export const doNothing = (state) => ({
  ...state
});










export const reducer = createReducer(INITIAL_STATE, {
  [DealersTypes.GET_ALL_DEALERS_SUCCESS]     : getAllDealersSuccess,
  [DealersTypes.GET_ALL_DEALERS_FAILURE]     : getAllDealersFailure,
  [DealersTypes.GET_ALL_DEALERS_LOADING]     : getAllDealersLoading,
  [DealersTypes.GET_ALL_DEALERS_LOADING_STOP]: getAllDealersLoadingStop,
  [DealersTypes.DO_NOTHING] 				                 :doNothing,



  
});