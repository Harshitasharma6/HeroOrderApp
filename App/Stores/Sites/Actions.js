import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({


// FETCH SITE VISIT LIST DATA ACTIONS
  fetchSites:           ['payload'],
  fetchSitesLoading:    null,
  fetchSitesSuccess:    ['payload'],
  fetchSitesFailure:    null,

  fetchSiteVisits           :    ['payload'],
  fetchSiteVisitsLoading    :    null,
  fetchSiteVisitsLoadingStop:    null,
  fetchSiteVisitsSuccess    :    ['payload'],
  fetchSiteVisitsFailure    :    null,

  selectSite:           ['payload'],
  selectSiteSuccess:    ['payload'],
  updateSiteSearchFilters:  ['payload'],
  clearSelectSite:  null,



// CREATE SITE  ACTIONS
  createSite:           ['payload'],
  createSiteLoading:    null,
  createSiteSuccess:    null,
  createSiteFailure:    null,
  changeSiteForm:       ['payload'],
  siteFormValidationFailed: ['payload'],



// CREATE SITE VISIT ACTIONS
  createSiteVisit:           ['payload'],
  createSiteVisitLoading:    null,
  createSiteVisitSuccess:    null,
  createSiteVisitFailure:    null,
  changeSiteVisitForm:       ['payload'],
  siteVisitFormValidationFailed: ['payload'],

  addSiteBrand:           ['payload'],
  removeSiteBrand:        ['payload'],
  editSiteBrand:          ['payload'],



// // ADD SITE VISIT COPETITOR
  createCompetitorForm:            ['payload'],
  createCompetitorFormLoading:     null,
  createCompetitorFormSuccess:     ['payload'],
  createCompetitorFormFailure:     null,
  createCompetitorFormLoadingStop: null,
  changeCompetitorForm:  ['payload'],
  createCompetitorFormValidationFailed: ['payload'],

  doNothing:        null,

});

export const SitesTypes = Types
export default Creators
