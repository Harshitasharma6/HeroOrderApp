import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({

  fetchShree: ['payload'],
  fetchShreeLoading: null,
  fetchShreeSuccess: ['payload'],
  fetchShreeFailure: null,
  fetchShreeDealersSuccess: ['payload'],




  fetchShreeRetailers: ['payload'],
  fetchShreeRetailersLoading: null,
  fetchShreeRetailersLoadingStop: null,
  fetchShreeRetailersFailure: null,
  fetchShreeRetailersSuccess: ['payload'],
  

  
  selectShree: ['payload'],
  doNothing: null,
  clearSelectShree: null,
  updateShreeSearchFilters: ['payload'],

  
  openMoreFiltersOption: null,
  closeMoreFiltersOption: null,
  changeShreeDealerForm: ['payload'],
  changeShreeRetailerForm: ['payload'],

  
  createShreeDealer: ['payload'],
  createShreeRetailer: ['payload'],


  createShreeDealerSuccess: ['payload'],
  createShreeRetailerSuccess: ['payload'],


  createShreeDealerFailure: null,
  createShreeRetailerFailure: null,


  createShreeDealerLoading: null,
  createShreeRetailerLoading: null,


  createShreeDealerLoadingStop: null,
  createShreeRetailerLoadingStop: null,


  shreeRetailerFormValidationFailed: ['payload'],
  shreeDealerFormValidationFailed: ['payload'],


  updateLocation: ['payload'],
  updateLocationSuccess: ['payload'],
  updateLocationFailure: null,
  updateLocationLoading: null,
  updateLocationLoadingStop: null,


  updatePotential: ['payload'],
  updatePotentialSuccess: ['payload'],
  updatePotentialFailure: null,
  updatePotentialLoading: null,
  updatePotentialLoadingStop: null,


  fetchOutstanding: ['payload'],
  fetchOutstandingSuccess: ['payload'],
  fetchOutstandingFailure: null,
  fetchOutstandingLoading: null,
  fetchOutstandingLoadingStop: null,



  fetchPayments: ['payload'],
  fetchPaymentsSuccess: ['payload'],
  fetchPaymentsFailure: null,
  fetchPaymentsLoading: null,
  fetchPaymentsLoadingStop: null,



  fetchPreviousVisits: ['payload'],
  fetchPreviousVisitsSuccess: ['payload'],
  fetchPreviousVisitsFailure: null,
  fetchPreviousVisitsLoading: null,
  fetchPreviousVisitsLoadingStop: null,


  fetchLatestVisits: ['payload'],
  fetchLatestVisitsSuccess: ['payload'],
  fetchLatestVisitsFailure: null,
  fetchLatestVisitsLoading: null,
  fetchLatestVisitsLoadingStop: null,



  fetchAllVisits: ['payload'],
  fetchAllVisitsSuccess: ['payload'],
  fetchAllVisitsFailure: null,
  fetchAllVisitsLoading: null,
  fetchAllVisitsLoadingStop: null,



  fetchAllSiteVisits: ['payload'],
  fetchAllSiteVisitsSuccess: ['payload'],
  fetchAllSiteVisitsFailure: null,
  fetchAllSiteVisitsLoading: null,
  fetchAllSiteVisitsLoadingStop: null,




  fetchSalesInfo: ['payload'],
  fetchSalesInfoSuccess: ['payload'],
  fetchSalesInfoFailure: null,
  fetchSalesInfoLoading: null,
  fetchSalesInfoLoadingStop: null,



  fetchAllInfluencerVisits: ['payload'],
  fetchAllInfluencerVisitsSuccess: ['payload'],
  fetchAllInfluencerVisitsFailure: null,
  fetchAllInfluencerVisitsLoading: null,
  fetchAllInfluencerVisitsLoadingStop: null,





  openEditPotentialField: null,
  closeEditPotentialField: null,
  changePotentialField: ['payload'],

  updateShreeLocationAction: ['payload'],


  clearShreeVisitForm: null,
  changeShreeVisitForm: ['payload'],
  submitShreeVisitForm: ['payload'],
  submitShreeVisitFormSuccess: ['payload'],
  submitShreeVisitFormFailure: null,
  submitShreeVisitFormLoading: null,
  submitShreeVisitFormLoadingStop: null,
  shreeVisitFormValidationFailed: ['payload'],



  changeShreeVisitDetailForm: ['payload'],
  createShreeVisitDetail: ['payload'],
  createShreeVisitDetailSuccess: ['payload'],
  createShreeVisitDetailFailure: null,
  createShreeVisitDetailLoading: null,
  createShreeVisitDetailLoadingStop: null,
  shreeVisitDetailFormValidationFailed: ['payload'],



  getAllCounters: null,
  getAllCountersSuccess: ['payload'],
  getAllCountersFailure: null,
  getAllCountersLoading: null,
  getAllCountersLoadingStop: null,


  getAllDistricts: null,
  getAllDistrictsSuccess: ['payload'],
  getAllDistrictsFailure: null,
  getAllDistrictsLoading: null,
  getAllDistrictsLoadingStop: null,


  addShreeBrand: ['payload'],
  removeShreeBrand: ['payload'],
  editShreeBrand: ['payload']
});

export const ShreeTypes = Types
export default Creators
