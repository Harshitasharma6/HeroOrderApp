import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({

  fetchInfluencers: ['payload'],
  fetchInfluencersLoading: null,
  fetchInfluencersSuccess: ['payload'],
  fetchInfluencersFailure: null,
  fetchInfluencersLoadingStop: null,
  makeInfluencersSearchableList: ['payload'],

  fetchInfluencerSites: ['payload'],
  fetchInfluencerSiteLoading: null,
  fetchInfluencerSiteSuccess: ['payload'],
  fetchInfluencerSiteFailure: null,

  updateInfluencersSearchFilters: ['payload'],

  createInfluencer: ['payload'],
  createInfluencerLoading: null,
  createInfluencerSuccess: ['payload'],
  createInfluencerFailure: null,
  createInfluencerLoadingStop: null,

  openMoreFilterOption: null,
  closeMoreFilterOption: null,

  changeInfluencerForm: ['payload'],
  influencerFormValidationFailed: ['payload'],

  extractFormData: ['payload'],
  extractInfluencerInfoData: ['payload'],

  selectInfluencer: ['payload'],
  selectInfluencerSuccess: ['payload'],
  makeRetailerSearchableList: ['payload'],
  makeDealerSearchableList: ['payload'],
  makePsmSearchableList: ['payload'],

  clearInfluencerForm: null,
  clearSelectInfluencer: null,

  doNothing: null,

  changeInfluencerVisitForm: ['payload'],
  createInfluencerVisitForm: ['payload'],
  createInfluencerVisitFormLoading: null,
  createInfluencerVisitFormSuccess: ['payload'],
  createInfluencerVisitFormFailure: null,
  createInfluencerVisitFormLoadingStop: null,

  influencerVisitFormValidationFailed: ['payload'],

  fetchInfluencersVisits: ['payload'],
  fetchInfluencersVisitsLoading: null,
  fetchInfluencersVisitsSuccess: ['payload'],
  fetchInfluencersVisitsFailure: null,
  fetchInfluencersVisitsLoadingStop: null

});

export const InfluencersTypes = Types
export default Creators
