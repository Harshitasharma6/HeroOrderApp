import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { InsightsTypes } from './Actions'


export const getDashboardSummarySuccess = (state, { payload }) => ({
  ...state,
  DashboardSummaryData: payload,
  loaders: {
    ...state.loaders,
    cLoader: false
  }
});

export const getDashboardSummaryFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardSummaryLoader: false
  }
});


export const getDashboardSummaryLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardSummaryLoader: true
  }
});


export const getDashboardSummaryLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardSummaryLoader: false
  }
});

export const doNothing = (state) => ({
  ...state
});










export const reducer = createReducer(INITIAL_STATE, {
  [InsightsTypes.GET_DASHBOARD_SUMMARY_SUCCESS]     : getDashboardSummarySuccess,
  [InsightsTypes.GET_DASHBOARD_SUMMARY_FAILURE]     : getDashboardSummaryFailure,
  [InsightsTypes.GET_DASHBOARD_SUMMARY_LOADING]     : getDashboardSummaryLoading,
  [InsightsTypes.GET_DASHBOARD_SUMMARY_LOADING_STOP]: getDashboardSummaryLoadingStop,
  [InsightsTypes.DO_NOTHING] 				                 :doNothing,
  


  
});