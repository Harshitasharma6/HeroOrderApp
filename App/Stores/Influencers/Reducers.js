import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { InfluencersTypes } from './Actions'
import _ from 'lodash';

export const fetchInfluencersLoading = (state) => ({
    ...state,
    fetchInfluencersLoader: true
});

export const fetchInfluencersLoadingStop = (state) => ({
    ...state,
    fetchInfluencersLoader: false
});

export const fetchInfluencersSuccess = (state, { payload }) => {
    return {
        ...state,
        fetchInfluencersLoader: false,
        influencersList: _.cloneDeep(payload),
    }
};

export const fetchInfluencersFailure = (state) => ({
    ...state,
    fetchInfluencersLoader: false,
    influencersList: []
});



export const fetchInfluencerSiteLoading = (state) => ({
    ...state,
    fetchInfluencerSiteLoader: true
});


export const fetchInfluencerSiteSuccess = (state, { payload }) => {
    return {
        ...state,
        fetchInfluencerSiteLoader: false,
        influencerSiteList: _.cloneDeep(payload),
    }
};

export const fetchInfluencerSiteFailure = (state) => ({
    ...state,
    fetchInfluencerSiteLoader: false,
    influencerSiteList: []
});

export const openMoreFilters = (state) => ({
    ...state,
    openMoreFilters: true
});


export const closeMoreFilters = (state) => ({
    ...state,
    openMoreFilters: false
});


export const updateInfluencersSearchFilters = (state, { payload }) => {
    let updated_search_filters = _.cloneDeep(state.influencerSearchFilters);
    updated_search_filters[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        influencerSearchFilters: {
            ...state.influencerSearchFilters,
            ...updated_search_filters
        },
        openMoreFilters: false
    }
};

export const createContactLoading = (state) => ({
    ...state,
    createContactLoader: true
});


export const createContactLoadingStop = (state) => ({
    ...state,
    createContactLoader: false
});

export const createContactSuccess = (state, { payload }) => ({
    ...state,
    contactForm: {},
    createContactLoader: false

});

export const createContactFailure = (state, { payload }) => ({
    ...state,
    createContactLoader: false
});

export const changeInfluencerForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.influencerForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        influencerForm: {
            ...state.influencerForm,
            ...updated_form
        },
        influencerFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const influencerFormValidationFailed = (state, { payload }) => ({
    ...state,
    influencerFormValidation: {
        ...payload
    }
});

export const extractFormData = (state, { payload }) => ({
    ...state,
    influencerForm: payload
});


export const doNothing = (state) => ({
    ...state
});

export const selectInfluencer = (state, { payload }) => ({
    ...state,
    selectedInfluencer: payload
});

export const selectInfluencerSuccess = (state, { payload }) => ({
    ...state,
    selectedInfluencer: _.cloneDeep(payload)
});

export const clearSelectInfluencer = (state) => ({
    ...state,
    selectedInfluencer: {}
});

export const clearInfluencerForm = (state) => ({
    ...state,
    influencerForm: INITIAL_STATE.influencerForm
});


export const influencerVisitFormValidationFailed = (state, { payload }) => ({
    ...state,
    influencerVisitFormValidation: {
        ...payload
    }
});


export const changeInfluencerVisitForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.influencerVisitForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        influencerVisitForm: {
            ...state.influencerVisitForm,
            ...updated_form
        },
        influencerVisitFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};


export const createInfluencerVisitFormLoading = (state) => ({
    ...state,
    createInfluencerVisitLoader: true
});


export const createInfluencerVisitFormLoadingStop = (state) => ({
    ...state,
    createInfluencerVisitLoader: false
});


export const createInfluencerVisitFormSuccess = (state, { payload }) => ({
    ...state,
    influencerVisitForm: INITIAL_STATE.influencerVisitForm,
    createInfluencerVisitLoader: false
});


export const createInfluencerVisitFormFailure = (state, { payload }) => ({
    ...state,
    createInfluencerVisitLoader: false
});


export const fetchInfluencersVisitsLoading = (state) => ({
    ...state,
    fetchInfluencersVisitLoader: true
});

export const fetchInfluencersVisitsLoadingStop = (state) => ({
    ...state,
    fetchInfluencersVisitLoader: false
});

export const fetchInfluencersVisitsSuccess = (state, { payload }) => {
    return {
        ...state,
        fetchInfluencersVisitLoader: false,
        influencersVisitList: payload,
    }
};

export const fetchInfluencersVisitsFailure = (state) => ({
    ...state,
    fetchInfluencersVisitLoader: false,
    influencersVisitList: []
});


export const createInfluencerLoading = (state) => ({
    ...state,
    createInfluencerLoader: true
});


export const createInfluencerLoadingStop = (state) => ({
    ...state,
    createInfluencerLoader: false
});


export const createInfluencerSuccess = (state, { payload }) => ({
    ...state,
    influencerForm: INITIAL_STATE.influencerForm,
    createInfluencerLoader: false
});


export const createInfluencerFailure = (state, { payload }) => ({
    ...state,
    createInfluencerLoader: false
});


export const makeInfluencersSearchableList = (state, { payload }) => ({
    ...state,
    influencersSearchableList: payload
});



export const reducer = createReducer(INITIAL_STATE, {
    [InfluencersTypes.FETCH_INFLUENCERS_LOADING]:                       fetchInfluencersLoading,
    [InfluencersTypes.FETCH_INFLUENCERS_LOADING_STOP]:                  fetchInfluencersLoadingStop,
    [InfluencersTypes.FETCH_INFLUENCERS_SUCCESS]:                       fetchInfluencersSuccess,
    [InfluencersTypes.FETCH_INFLUENCERS_FAILURE]:                       fetchInfluencersFailure,
    [InfluencersTypes.FETCH_INFLUENCER_SITE_LOADING]:                   fetchInfluencerSiteLoading,
    [InfluencersTypes.FETCH_INFLUENCER_SITE_SUCCESS]:                   fetchInfluencerSiteSuccess,
    [InfluencersTypes.FETCH_INFLUENCER_SITE_FAILURE]:                   fetchInfluencerSiteFailure,
    [InfluencersTypes.UPDATE_INFLUENCERS_SEARCH_FILTERS]:               updateInfluencersSearchFilters,
    [InfluencersTypes.OPEN_MORE_FILTER_OPTION]:                         openMoreFilters,
    [InfluencersTypes.CLOSE_MORE_FILTER_OPTION]:                        closeMoreFilters,
    [InfluencersTypes.CREATE_INFLUENCER_LOADING]:                       createInfluencerLoading,
    [InfluencersTypes.CREATE_INFLUENCER_LOADING_STOP]:                  createInfluencerLoadingStop,
    [InfluencersTypes.CREATE_INFLUENCER_SUCCESS]:                       createInfluencerSuccess,
    [InfluencersTypes.CREATE_INFLUENCER_FAILURE]:                       createInfluencerFailure,
    [InfluencersTypes.CHANGE_INFLUENCER_FORM]:                          changeInfluencerForm,
    [InfluencersTypes.INFLUENCER_FORM_VALIDATION_FAILED]:               influencerFormValidationFailed,
    [InfluencersTypes.EXTRACT_FORM_DATA]:                               extractFormData,
    [InfluencersTypes.SELECT_INFLUENCER]:                               selectInfluencer,
    [InfluencersTypes.SELECT_INFLUENCER_SUCCESS]:                       selectInfluencerSuccess,
    [InfluencersTypes.CLEAR_SELECT_INFLUENCER]:                         clearSelectInfluencer,
    [InfluencersTypes.CLEAR_INFLUENCER_FORM]:                           clearInfluencerForm,
    [InfluencersTypes.DO_NOTHING]:                                      doNothing,
    [InfluencersTypes.CREATE_INFLUENCER_VISIT_FORM_LOADING]:            createInfluencerVisitFormLoading,
    [InfluencersTypes.CREATE_INFLUENCER_VISIT_FORM_LOADING_STOP]:       createInfluencerVisitFormLoadingStop,
    [InfluencersTypes.CREATE_INFLUENCER_VISIT_FORM_SUCCESS]:            createInfluencerVisitFormSuccess,
    [InfluencersTypes.CREATE_INFLUENCER_VISIT_FORM_FAILURE]:            createInfluencerVisitFormFailure,
    [InfluencersTypes.CHANGE_INFLUENCER_VISIT_FORM]:                    changeInfluencerVisitForm,
    [InfluencersTypes.INFLUENCER_VISIT_FORM_VALIDATION_FAILED]:         influencerVisitFormValidationFailed,
    [InfluencersTypes.FETCH_INFLUENCERS_VISITS_LOADING]:                fetchInfluencersVisitsLoading,
    [InfluencersTypes.FETCH_INFLUENCERS_VISITS_LOADING_STOP]:           fetchInfluencersVisitsLoadingStop,
    [InfluencersTypes.FETCH_INFLUENCERS_VISITS_SUCCESS]:                fetchInfluencersVisitsSuccess,
    [InfluencersTypes.FETCH_INFLUENCERS_VISITS_FAILURE]:                fetchInfluencersVisitsFailure,
    [InfluencersTypes.MAKE_INFLUENCERS_SEARCHABLE_LIST]:                makeInfluencersSearchableList

});