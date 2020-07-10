/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SitesTypes } from './Actions'
import _ from 'lodash';


//FETCH SITE VISIT REDUCERS  
export const fetchSitesLoading = (state) => ({
    ...state,
    fetchSitesLoader: true
});

export const fetchSitesSuccess = (state, { payload }) => ({
    ...state,
    sitesList: _.cloneDeep(payload),
    fetchSitesLoader: false
});

export const fetchSitesFailure = (state) => ({
    ...state,
    fetchSitesLoader: false,
    sitesList: []
});

export const selectSite = (state, { payload }) => ({
    ...state,
    selectedSite: payload
});

export const selectSiteSuccess = (state, { payload }) => ({
    ...state,
    selectedSite: _.cloneDeep(payload)
});

export const clearSelectSite = (state) => ({
    ...state,
    selectedSite: {}
});

export const updateSiteSearchFilters = (state, { payload }) => {
    let updated_search_filters = _.cloneDeep(state.siteSearchFilters);
    updated_search_filters[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        siteSearchFilters: {
            ...state.siteSearchFilters,
            ...updated_search_filters
        },
        openMoreFilters: false
    }
};




//CREATE SITE  REDUCER ACTIONS
export const createSiteLoading = (state) => ({
    ...state,
    createSiteLoader: true
});

export const createSiteSuccess = (state) => ({
    ...state,
    siteForm: INITIAL_STATE.siteForm,
    createSiteLoader: false

});


export const createSiteFailure = (state) => ({
    ...state,
    createSiteLoader: false
});

export const changeSiteForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.siteForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        siteForm: {
            ...state.siteForm,
            ...updated_form
        },
        siteFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const siteFormValidationFailed = (state, { payload }) => ({
    ...state,
    siteFormValidation: {
        ...payload
    }
});




//CREATE SITE VISIT REDUCERS  
export const createSiteVisitLoading = (state) => ({
    ...state,
    createSiteVisitLoader: true
});

export const createSiteVisitSuccess = (state) => ({
    ...state,
    siteVisitForm: INITIAL_STATE.siteVisitForm,
    createSiteVisitLoader: false

});


export const createSiteVisitFailure = (state) => ({
    ...state,
    createSiteVisitLoader: false
});

export const changeSiteVisitForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.siteVisitForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        siteVisitForm: {
            ...state.siteVisitForm,
            ...updated_form
        },
        siteVisitFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const siteVisitFormValidationFailed = (state, { payload }) => ({
    ...state,
    siteVisitFormValidation: {
        ...payload
    }
});




//ADD SITE VISIT COMPETITOR REDUCERS  
export const changeCompetitorForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.siteCompetitorForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        siteCompetitorForm: {
            ...state.siteCompetitorForm,
            ...updated_form
        },
        siteCompetitorFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const createCompetitorFormValidationFailed = (state, { payload }) => ({
    ...state,
    siteCompetitorFormValidation: {
        ...payload
    },
    createCompetitorLoader: false,
    createSiteVisitLoader: false
});

export const createCompetitorFormLoading = (state) => ({
    ...state,
    createCompetitorLoader: true
});

export const createCompetitorFormSuccess = (state) => ({
    ...state,
    siteCompetitorForm: INITIAL_STATE.siteCompetitorForm,
    createCompetitorLoader: false,
    createSiteVisitLoader: false

});

export const createCompetitorFormFailure = (state) => ({
    ...state,
    createCompetitorLoader: false,
    createSiteVisitLoader: false
});

export const createCompetitorFormLoadingStop = (state) => ({
    ...state,
    createCompetitorLoader: false
});



export const doNothing = (state) => ({
    ...state
});



export const fetchSiteVisitsLoading = (state) => ({
    ...state,
    fetchSiteVisitsLoader: true
});


export const fetchSiteVisitsLoadingStop = (state) => ({
    ...state,
    fetchSiteVisitsLoader: false
});


export const fetchSiteVisitsSuccess = (state, { payload }) => ({
    ...state,
    siteVisitsList: _.cloneDeep(payload),
    fetchSiteVisitsLoader: false
});

export const fetchSiteVisitsFailure = (state) => ({
    ...state,
    fetchSiteVisitsLoader: false,
    siteVisitsList: []
});


export const addSiteBrand = (state, { payload }) => {
    let updatedSiteVisitForm = _.cloneDeep(state.siteVisitForm);
    updatedSiteVisitForm['brands']  = updatedSiteVisitForm['brands'] ? updatedSiteVisitForm['brands'] : [];
    updatedSiteVisitForm['brands'].push(payload);
    return {
        ...state,
        siteVisitForm: updatedSiteVisitForm
    }
};


export const removeSiteBrand = (state, { payload }) => {
    let updatedSiteVisitForm = _.cloneDeep(state.siteVisitForm);
    let brands = [];
    updatedSiteVisitForm.brands.map((obj) => {
        if (obj.id != payload.id) {
            brands.push(obj)
        }
    });
    updatedSiteVisitForm.brands = brands;
    return {
        ...state,
        siteVisitForm: updatedSiteVisitForm
    }
};

export const editSiteBrand = (state, { payload }) => {
    let updatedSiteVisitForm = _.cloneDeep(state.siteVisitForm);
    updatedSiteVisitForm.brands.map((obj) => {
        if (obj.id == payload.id) {
            obj[payload.edited_field] = payload.edited_value
        }
    });
    return {
        ...state,
        siteVisitForm: updatedSiteVisitForm
    }
};




export const reducer = createReducer(INITIAL_STATE, {
    [SitesTypes.CREATE_SITE_LOADING]:                 createSiteLoading,
    [SitesTypes.CREATE_SITE_SUCCESS]:                 createSiteSuccess,
    [SitesTypes.CREATE_SITE_FAILURE]:                 createSiteFailure,
    [SitesTypes.CHANGE_SITE_FORM]:                    changeSiteForm,
    [SitesTypes.SITE_FORM_VALIDATION_FAILED]:         siteFormValidationFailed,

    [SitesTypes.CREATE_SITE_VISIT_LOADING]:                 createSiteVisitLoading,
    [SitesTypes.CREATE_SITE_VISIT_SUCCESS]:                 createSiteVisitSuccess,
    [SitesTypes.CREATE_SITE_VISIT_FAILURE]:                 createSiteVisitFailure,
    [SitesTypes.CHANGE_SITE_VISIT_FORM]:                    changeSiteVisitForm,
    [SitesTypes.SITE_VISIT_FORM_VALIDATION_FAILED]:         siteVisitFormValidationFailed,



    [SitesTypes.FETCH_SITES_LOADING]:                       fetchSitesLoading,
    [SitesTypes.FETCH_SITES_SUCCESS]:                       fetchSitesSuccess,
    [SitesTypes.FETCH_SITES_FAILURE]:                       fetchSitesFailure,


    [SitesTypes.FETCH_SITE_VISITS_LOADING]:                 fetchSiteVisitsLoading,
    [SitesTypes.FETCH_SITE_VISITS_LOADING_STOP]:            fetchSiteVisitsLoadingStop,
    [SitesTypes.FETCH_SITE_VISITS_SUCCESS]:                 fetchSiteVisitsSuccess,
    [SitesTypes.FETCH_SITE_VISITS_FAILURE]:                 fetchSiteVisitsFailure,


    [SitesTypes.SELECT_SITE]:                               selectSite,
    [SitesTypes.SELECT_SITE_SUCCESS]:                       selectSiteSuccess,
    [SitesTypes.CLEAR_SELECT_SITE]:                         clearSelectSite,
    [SitesTypes.UPDATE_SITE_SEARCH_FILTERS]:                updateSiteSearchFilters,


    [SitesTypes.ADD_SITE_BRAND]:                            addSiteBrand,
    [SitesTypes.REMOVE_SITE_BRAND]:                         removeSiteBrand,
    [SitesTypes.EDIT_SITE_BRAND]:                           editSiteBrand,


    [SitesTypes.CHANGE_COMPETITOR_FORM]:                    changeCompetitorForm,
    [SitesTypes.CREATE_COMPETITOR_FORM_VALIDATION_FAILED]:  createCompetitorFormValidationFailed,
    [SitesTypes.CREATE_COMPETITOR_FORM_LOADING]:            createCompetitorFormLoading,
    [SitesTypes.CREATE_COMPETITOR_FORM_SUCCESS]:            createCompetitorFormSuccess,
    [SitesTypes.CREATE_COMPETITOR_FORM_FAILURE]:            createCompetitorFormFailure,
    [SitesTypes.CREATE_COMPETITOR_FORM_LOADING_STOP]:       createCompetitorFormLoadingStop,

    [SitesTypes.DO_NOTHING]: doNothing

});

