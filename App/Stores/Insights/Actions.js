import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getDashboardSummary: ['payload'],
  getDashboardSummarySuccess:  ['payload'],
  getDashboardSummaryFailure: null,
  getDashboardSummaryLoading: null,
  getDashboardSummaryLoadingStop: null,
  doNothing: null,


  getDashboardTrendsSoldProducts: ['payload'],
  getDashboardTrendsSoldProductsSuccess:  ['payload'],
  getDashboardTrendsSoldProductsFailure: null,
  getDashboardTrendsSoldProductsLoading: null,
  getDashboardTrendsSoldProductsLoadingStop: null,


  getDashboardTrendsRevenue: ['payload'],
  getDashboardTrendsRevenueSuccess:  ['payload'],
  getDashboardTrendsRevenueFailure: null,
  getDashboardTrendsRevenueLoading: null,
  getDashboardTrendsRevenueLoadingStop: null,
  
  getAllScheme: ['payload'],
  getAllSchemeSuccess:  ['payload'],
  getAllSchemeFailure: null,
  getAllSchemeLoading: null,
  getAllSchemeLoadingStop: null,

  getFollowUp: ['payload'],
  getFollowUpSuccess:  ['payload'],
  getFollowUpFailure: null,
  getFollowUpLoading: null,
  getFollowUpLoadingStop: null,


  getCompletedFollowUp: ['payload'],
  getCompletedFollowUpSuccess:  ['payload'],
  getCompletedFollowUpFailure: null,
  getCompletedFollowUpLoading: null,
  getCompletedFollowUpLoadingStop: null,


  getAllCustomer: ['payload'],
  getAllCustomerSuccess:  ['payload'],
  getAllCustomerFailure: null,
  getAllCustomerLoading: null,
  getAllCustomerLoadingStop: null,


  updateCustomersSearchFilters: ['payload']

});

export const InsightsTypes = Types
export default Creators