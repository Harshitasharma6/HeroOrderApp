import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getDashboardSummary: ['payload'],
  getDashboardSummarySuccess:  ['payload'],
  getDashboardSummaryFailure: null,
  getDashboardSummaryLoading: null,
  getDashboardSummaryLoadingStop: null,
  doNothing: null,
  

  

});

export const InsightsTypes = Types
export default Creators