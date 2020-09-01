import { createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
  screenChanged: ['screen'],
  connectionChanged: ['payload'],
  openModal: ['payload'],
  closeModal: null,
  disableModal: null,
  enableModal: null,
  makeProductsSearchableList: ['payload'],
  makeStatesSearchableList: ['payload'],
  makeCitiesSearchableList: ['payload'],
  makePurposeOfCallSearchableList: ['payload'],
  makeOutPurposeOfCallSearchableList: ['payload'],
  makeReasonNotConnectSearchableList: ['payload'],
  makeFinancierNameSearchableList: ['payload'],
  makeModelColorSearchableList: ['payload'],
  makePaymentModeSearchableList: ['payload'],

  fetchLeadLostReasons: ['payload'],
  fetchLeadLostReasonsLoading: null,
  fetchLeadLostReasonsLoadingStop: null,
  fetchLeadLostReasonsSuccess: ['payload'],
  fetchLeadLostReasonsFailure: null,



  fetchLeadSources: ['payload'],
  fetchLeadSourcesLoading: null,
  fetchLeadSourcesLoadingStop: null,
  fetchLeadSourcesSuccess: ['payload'],
  fetchLeadSourcesFailure: null,

  getAllStates: ['payload'],
  getAllStatesLoading: null,
  getAllStatesLoadingStop: null,
  getAllStatesFailure: null,


  getAllCities: ['payload'],
  getAllCitiesLoading: null,
  getAllCitiesLoadingStop: null,
  getAllCitiesFailure: null,

  getCallOptions: ['payload'],
  getCallOptionsLoading: null,
  getCallOptionsLoadingStop: null,
  getCallOptionsFailure: null,

  getBookingPicklist: ['payload'],
  getBookingPicklistLoading: null,
  getBookingPicklistLoadingStop: null,
  getBookingPicklistFailure: null,

  
  showCallModal: null,
  hideCallModal: null,
  showConnectedOptions: null,
  showDisconnectedOptions: null,
  clearCallModalData: null,


  uploadImage: ['payload'],
  uploadImageLoading: null,
  uploadImageLoadingStop: null,
  uploadImageSuccess: ['payload'],
  uploadImageFailure: null


})

export const CommonTypes = Types
export default Creators
