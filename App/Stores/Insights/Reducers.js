import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { InsightsTypes } from './Actions'


export const getDashboardSummarySuccess = (state, { payload }) => ({
  ...state,
  DashboardSummaryData: payload,
  loaders: {
    ...state.loaders,
    getDashboardSummaryLoader: false
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






export const getDashboardTrendsSoldProductsSuccess = (state, { payload }) => ({
  ...state,
  dashboardTrendsSoldProductsData: payload,
  loaders: {
    ...state.loaders,
    getDashboardTrendsSoldProductsLoader: false
  }
});

export const getDashboardTrendsSoldProductsFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardTrendsSoldProductsLoader: false
  }
});


export const getDashboardTrendsSoldProductsLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardTrendsSoldProductsLoader: true
  }
});


export const getDashboardTrendsSoldProductsLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardTrendsSoldProductsLoader: false
  }
});




export const getDashboardTrendsRevenueSuccess = (state, { payload }) => ({
  ...state,
  dashboardTrendsRevenueData: payload,
  loaders: {
    ...state.loaders,
    getDashboardTrendsRevenueLoader: false
  }
});



export const getDashboardTrendsRevenueFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardTrendsRevenueLoader: false
  }
});


export const getDashboardTrendsRevenueLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardTrendsRevenueLoader: true
  }
});


export const getDashboardTrendsRevenueLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getDashboardTrendsRevenueLoader: false
  }
});


export const getAllSchemeSuccess = (state, { payload }) => ({
  ...state,
  SchemeData: payload,
  loaders: {
    ...state.loaders,
    cLoader: false
  }
});

export const getAllSchemeFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSchemeLoader: false
  }
});


export const getAllSchemeLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSchemeLoader: true
  }
});


export const getAllSchemeLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSchemeLoader: false
  }
});

export const getFollowUpSuccess = (state, { payload }) => ({
  ...state,
  FollowUpData: payload,
  loaders: {
    ...state.loaders,
    cLoader: false
  }
});

export const getFollowUpFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getFollowUpLoader: false
  }
});


export const getFollowUpLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getFollowUpLoader: true
  }
});


export const getFollowUpLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getFollowUpLoader: false
  }
});




export const getCompletedFollowUpSuccess = (state, { payload }) => ({
  ...state,
  completedFollowUpData: payload,
  loaders: {
    ...state.loaders,
    getCompletedFollowUpLoader: false
  }
});

export const getCompletedFollowUpFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getCompletedFollowUpLoader: false
  }
});


export const getCompletedFollowUpLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getCompletedFollowUpLoader: true
  }
});


export const getCompletedFollowUpLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getCompletedFollowUpLoader: false
  }
});





export const reducer = createReducer(INITIAL_STATE, {
  [InsightsTypes.GET_DASHBOARD_SUMMARY_SUCCESS]     : getDashboardSummarySuccess,
  [InsightsTypes.GET_DASHBOARD_SUMMARY_FAILURE]     : getDashboardSummaryFailure,
  [InsightsTypes.GET_DASHBOARD_SUMMARY_LOADING]     : getDashboardSummaryLoading,
  [InsightsTypes.GET_DASHBOARD_SUMMARY_LOADING_STOP]: getDashboardSummaryLoadingStop,

  // //getDashboardTrendsSoldProducts: ['payload'],
  [InsightsTypes.GET_DASHBOARD_TRENDS_SOLD_PRODUCTS_SUCCESS]     : getDashboardTrendsSoldProductsSuccess,
  [InsightsTypes.GET_DASHBOARD_TRENDS_SOLD_PRODUCTS_FAILURE]     : getDashboardTrendsSoldProductsFailure,
  [InsightsTypes.GET_DASHBOARD_TRENDS_SOLD_PRODUCTS_LOADING]     : getDashboardTrendsSoldProductsLoading,
  [InsightsTypes.GET_DASHBOARD_TRENDS_SOLD_PRODUCTS_LOADING_STOP]: getDashboardTrendsSoldProductsLoadingStop,


  //getDashboardTrendsRevenue: ['payload'],
  [InsightsTypes.GET_DASHBOARD_TRENDS_REVENUE_SUCCESS]     : getDashboardTrendsRevenueSuccess,
  [InsightsTypes.GET_DASHBOARD_TRENDS_REVENUE_FAILURE]     : getDashboardTrendsRevenueFailure,
  [InsightsTypes.GET_DASHBOARD_TRENDS_REVENUE_LOADING]     : getDashboardTrendsRevenueLoading,
  [InsightsTypes.GET_DASHBOARD_TRENDS_REVENUE_LOADING_STOP]: getDashboardTrendsRevenueLoadingStop,


  [InsightsTypes.DO_NOTHING] 				         : doNothing,
  [InsightsTypes.GET_ALL_SCHEME_SUCCESS]     : getAllSchemeSuccess,
  [InsightsTypes.GET_ALL_SCHEME_FAILURE]     : getAllSchemeFailure,
  [InsightsTypes.GET_ALL_SCHEME_LOADING]     : getAllSchemeLoading,
  [InsightsTypes.GET_ALL_SCHEME_LOADING_STOP]: getAllSchemeLoadingStop,



  [InsightsTypes.GET_FOLLOW_UP_SUCCESS]     : getFollowUpSuccess,
  [InsightsTypes.GET_FOLLOW_UP_FAILURE]     : getFollowUpFailure,
  [InsightsTypes.GET_FOLLOW_UP_LOADING]     : getFollowUpLoading,
  [InsightsTypes.GET_FOLLOW_UP_LOADING_STOP]: getFollowUpLoadingStop,



  [InsightsTypes.GET_COMPLETED_FOLLOW_UP_SUCCESS]     : getCompletedFollowUpSuccess,
  [InsightsTypes.GET_COMPLETED_FOLLOW_UP_FAILURE]     : getCompletedFollowUpFailure,
  [InsightsTypes.GET_COMPLETED_FOLLOW_UP_LOADING]     : getCompletedFollowUpLoading,
  [InsightsTypes.GET_COMPLETED_FOLLOW_UP_LOADING_STOP]: getCompletedFollowUpLoadingStop,

  
});