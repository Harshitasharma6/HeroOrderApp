import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchNonShree: ['payload'],
  fetchNonShreeLoading: null,
  fetchNonShreeSuccess: ['payload'],
  fetchNonShreeFailure: null,

  selectNonShree: ['payload'],
  selectNonShreeSuccess: ['payload'],
  doNothing: null,
  clearSelectNonShree: null,
  updateNonShreeSearchFilters: ['payload'],


  createNonShree: ['payload'],
  createNonShreeLoading: null,
  createNonShreeSuccess: ['payload'],
  createNonShreeFailure: null,
  createNonShreeLoadingStop: null,

  changeNonShreeForm: ['payload'],
  nonShreeFormValidationFailed: ['payload'],
  clearnonShreeForm: null,


  createCompetitor: ['payload'],
  createCompetitorLoading: null,
  createCompetitorSuccess: ['payload'],
  createCompetitorFailure: null,
  createCompetitorLoadingStop: null,

  changeCompetitorForm: ['payload'],
  competitorFormValidationFailed: ['payload'],

  openMoreFiltersOption: null,
  closeMoreFiltersOption: null,


  changeNonShreeVisitForm: ['payload'],
  addNonShreeBrand: ['payload'],
  removeNonShreeBrand: ['payload'],
  editNonShreeBrand: ['payload'],


  submitNonShreeVisitForm: ['payload'],
  submitNonShreeVisitFormSuccess:['payload'],
  submitNonShreeVisitFormFailure: null,
  submitNonShreeVisitFormLoading: null,
  submitNonShreeVisitFormLoadingStop: null,
  nonShreeVisitFormValidationFailed: ['payload'],
  clearNonShreeVisitForm: null,


  fetchNonShreePreviousVisits: ['payload'],
  fetchNonShreePreviousVisitsSuccess: ['payload'],
  fetchNonShreePreviousVisitsFailure: null,
  fetchNonShreePreviousVisitsLoading: null,
  fetchNonShreePreviousVisitsLoadingStop: null
});

export const NonShreeTypes = Types
export default Creators


