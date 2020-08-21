import { createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
  screenChanged: ['screen'],
  connectionChanged: ['payload'],
  openModal: ['payload'],
  closeModal: null,
  disableModal: null,
  enableModal: null,
  makeProductsSearchableList: ['payload'],

  fetchLeadLostReasons: ['payload'],
  fetchLeadLostReasonsLoading: null,
  fetchLeadLostReasonsLoadingStop: null,
  fetchLeadLostReasonsSuccess: ['payload'],
  fetchLeadLostReasonsFailure: null,



  fetchLeadSources: ['payload'],
  fetchLeadSourcesLoading: null,
  fetchLeadSourcesLoadingStop: null,
  fetchLeadSourcesSuccess: ['payload'],
  fetchLeadSourcesFailure: null
})

export const CommonTypes = Types
export default Creators
