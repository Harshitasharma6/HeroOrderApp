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
  getDashboardTrendsRevenueLoadingStop: null
  

  

});

export const InsightsTypes = Types
export default Creators