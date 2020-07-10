import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { NonShreeTypes } from './Actions'
import _ from 'lodash';



export const fetchNonShreeLoading = (state) => {
    return {
        ...state,
        fetchNonShreeLoader: true
    }
};


export const fetchNonShreeSuccess = (state, { payload }) => {
    return {
        ...state,
        nonShreeList: _.cloneDeep(payload),
        fetchNonShreeLoader: false
    }
}

export const fetchNonShreeFailure = (state) => ({
    ...state,
    fetchNonShreeLoader: false,
    nonShreeList: []
});


export const selectNonShree = (state, { payload }) => ({
    ...state,
    selectedNonShree: payload
});

export const selectNonShreeSuccess = (state, { payload }) => ({
    ...state,
    selectedNonShree: _.cloneDeep(payload)
});

export const clearSelectNonShree = (state) => ({
    ...state,
    selectedNonShree: {}
});

export const openMoreFilters = (state) => ({
    ...state,
    openMoreFilters: true
});


export const closeMoreFilters = (state) => ({
    ...state,
    openMoreFilters: false
});


export const updateNonShreeSearchFilters = (state, { payload }) => {
    let updated_search_filters = _.cloneDeep(state.nonShreeSearchFilters);
    updated_search_filters[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        nonShreeSearchFilters: {
            ...state.nonShreeSearchFilters,
            ...updated_search_filters
        },
        openMoreFilters: false
    }
};


export const doNothing = (state) => ({
    ...state
});

export const createNonShreeLoading = (state) => ({
    ...state,
    createNonShreeLoader: true
});


export const createNonShreeLoadingStop = (state) => ({
    ...state,
    createNonShreeLoader: false
});

export const createNonShreeSuccess = (state, { payload }) => ({
    ...state,
    nonShreeForm: INITIAL_STATE.nonShreeForm,
    createNonShreeLoader: false

});

export const createNonShreeFailure = (state, { payload }) => ({
    ...state,
    createNonShreeLoader: false
});

export const changeNonShreeForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.nonShreeForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        nonShreeForm: {
            ...state.nonShreeForm,
            ...updated_form
        },
        nonShreeFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const nonShreeFormValidationFailed = (state, { payload }) => ({
    ...state,
    nonShreeFormValidation: {
        ...payload
    }
});


export const createCompetitorLoading = (state) => ({
    ...state,
    createCompetitoreLoader: true
});


export const createCompetitorLoadingStop = (state) => ({
    ...state,
    createCompetitoreLoader: false
});

export const createCompetitorSuccess = (state, { payload }) => ({
    ...state,
    competitoreForm: INITIAL_STATE.competitoreForm,
    createCompetitoreLoader: false

});

export const createCompetitorFailure = (state, { payload }) => ({
    ...state,
    createCompetitoreLoader: false
});

export const changeCompetitorForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.competitoreForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        competitoreForm: {
            ...state.competitoreForm,
            ...updated_form
        },
        competitoreFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const competitorFormValidationFailed = (state, { payload }) => ({
    ...state,
    competitoreFormValidation: {
        ...payload
    }
});


export const addNonShreeBrand = (state, { payload }) => {
    let updatedNonShreeVisitForm = _.cloneDeep(state.nonShreeVisitForm)
    updatedNonShreeVisitForm['brands']  = updatedNonShreeVisitForm['brands'] ? updatedNonShreeVisitForm['brands'] : [];
    updatedNonShreeVisitForm['brands'].push(payload);

    return {
        ...state,
        nonShreeVisitForm: updatedNonShreeVisitForm
    }
};


export const removeNonShreeBrand = (state, { payload }) => {
    let updatedNonShreeVisitForm = _.cloneDeep(state.nonShreeVisitForm)
    let brands = [];

    updatedNonShreeVisitForm.brands.map((obj) => {
        if (obj.id != payload.id) {
            brands.push(obj)
        }
    });

    updatedNonShreeVisitForm.brands = brands;


    return {
        ...state,
        nonShreeVisitForm: updatedNonShreeVisitForm
    }
};

export const editNonShreeBrand = (state, { payload }) => {
    let updatedNonShreeVisitForm = _.cloneDeep(state.nonShreeVisitForm)
    
    updatedNonShreeVisitForm.brands.map((obj) => {
        if (obj.id == payload.id) {
            obj[payload.edited_field] = payload.edited_value
        }
    });

    return {
        ...state,
        nonShreeVisitForm: updatedNonShreeVisitForm
    }
};



export const changeNonShreeVisitForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.nonShreeVisitForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        nonShreeVisitForm: {
            ...state.nonShreeVisitForm,
            ...updated_form
        },
        nonShreeVisitFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};


export const submitNonShreeVisitFormSuccess = (state, { payload }) => {
    return {
        ...state,
        nonShreeVisitForm: INITIAL_STATE.nonShreeVisitForm,
        submitNonShreeVisitFormLoader: false
    }
};


export const submitNonShreeVisitFormFailure = (state, { payload }) => {
    return {
        ...state,
        submitNonShreeVisitFormLoader: false
    }
};


export const submitNonShreeVisitFormLoading = (state) => {
    return {
        ...state,
        submitNonShreeVisitFormLoader: true
    }
};


export const submitNonShreeVisitFormLoadingStop = (state) => {
    return {
        ...state,
        submitNonShreeVisitFormLoader: false
    }
};


export const clearNonShreeVisitForm = (state) => {
    return {
        ...state,
        nonShreeVisitForm: INITIAL_STATE.nonShreeVisitForm
    }
};





export const nonShreeVisitFormValidationFailed = (state, { payload }) => {
    return {
        ...state,
        nonShreeVisitFormValidation: payload
    }
};


export const fetchNonShreePreviousVisitsSuccess = (state, { payload }) => ({
    ...state,
    previousVisits: payload,
    fetchPreviousVisitsLoader: false
});


export const fetchNonShreePreviousVisitsFailure = (state) => ({
    ...state,
    previousVisits: [],
    fetchPreviousVisitsLoader: false
});


export const fetchNonShreePreviousVisitsLoading = (state) => ({
    ...state,
    fetchPreviousVisitsLoader: true
});


export const fetchNonShreePreviousVisitsLoadingStop = (state) => ({
    ...state,
    fetchPreviousVisitsLoader: false
});



    // [NonShreeTypes.CHANGE_NON_SHREE_VISIT_FORM]      : changeNonShreeVisitForm,
    // [NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM]      : submitNonShreeVisitForm,
    // [NonShreeTypes.ADD_NON_SHREE_BRAND]              : addNonShreeBrand,
    // [NonShreeTypes.REMOVE_NON_SHREE_BRAND]           : removeNonShreeBrand,
    // [NonShreeTypes.EDIT_NON_SHREE_BRAND]             : editNonShreeBrand,


export const reducer = createReducer(INITIAL_STATE, {
    [NonShreeTypes.FETCH_NON_SHREE_LOADING]: fetchNonShreeLoading,
    [NonShreeTypes.FETCH_NON_SHREE_FAILURE]: fetchNonShreeFailure,
    [NonShreeTypes.FETCH_NON_SHREE_SUCCESS]: fetchNonShreeSuccess,
    



    [NonShreeTypes.SELECT_NON_SHREE]: selectNonShree,
    [NonShreeTypes.SELECT_NON_SHREE_SUCCESS]: selectNonShreeSuccess,
    [NonShreeTypes.CLEAR_SELECT_NON_SHREE]: clearSelectNonShree,



    [NonShreeTypes.UPDATE_NON_SHREE_SEARCH_FILTERS]: updateNonShreeSearchFilters,



    [NonShreeTypes.OPEN_MORE_FILTERS_OPTION]: openMoreFilters,
    [NonShreeTypes.CLOSE_MORE_FILTERS_OPTION]: closeMoreFilters,



    [NonShreeTypes.CREATE_NON_SHREE_LOADING]: createNonShreeLoading,
    [NonShreeTypes.CREATE_NON_SHREE_SUCCESS]: createNonShreeSuccess,
    [NonShreeTypes.CREATE_NON_SHREE_FAILURE]: createNonShreeFailure,
    [NonShreeTypes.CHANGE_NON_SHREE_FORM]: changeNonShreeForm,
    [NonShreeTypes.CREATE_NON_SHREE_LOADING_STOP]: createNonShreeLoadingStop,
    [NonShreeTypes.NON_SHREE_FORM_VALIDATION_FAILED]: nonShreeFormValidationFailed,


    [NonShreeTypes.CREATE_COMPETITOR_LOADING]: createCompetitorLoading,
    [NonShreeTypes.CREATE_COMPETITOR_SUCCESS]: createCompetitorSuccess,
    [NonShreeTypes.CREATE_COMPETITOR_FAILURE]: createCompetitorFailure,
    [NonShreeTypes.CHANGE_COMPETITOR_FORM]: changeCompetitorForm,
    [NonShreeTypes.CREATE_COMPETITOR_LOADING_STOP]: createCompetitorLoadingStop,
    [NonShreeTypes.COMPETITOR_FORM_VALIDATION_FAILED]: competitorFormValidationFailed,


    [NonShreeTypes.CHANGE_NON_SHREE_VISIT_FORM]      : changeNonShreeVisitForm,
    //[NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM]      : submitNonShreeVisitForm,


    [NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM_SUCCESS]      : submitNonShreeVisitFormSuccess,
    [NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM_FAILURE]      : submitNonShreeVisitFormFailure,
    [NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM_LOADING]      : submitNonShreeVisitFormLoading,
    [NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM_LOADING_STOP] : submitNonShreeVisitFormLoadingStop,
    [NonShreeTypes.NON_SHREE_VISIT_FORM_VALIDATION_FAILED]   : nonShreeVisitFormValidationFailed,


    [NonShreeTypes.CLEAR_NON_SHREE_VISIT_FORM]               : clearNonShreeVisitForm,

    [NonShreeTypes.ADD_NON_SHREE_BRAND]              : addNonShreeBrand,
    [NonShreeTypes.REMOVE_NON_SHREE_BRAND]           : removeNonShreeBrand,
    [NonShreeTypes.EDIT_NON_SHREE_BRAND]             : editNonShreeBrand,

    [NonShreeTypes.DO_NOTHING]: doNothing,




    //[NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM_SUCCESS]      : fetchNonShreePreviousVisits,
    [NonShreeTypes.FETCH_NON_SHREE_PREVIOUS_VISITS_SUCCESS]      : fetchNonShreePreviousVisitsSuccess,
    [NonShreeTypes.FETCH_NON_SHREE_PREVIOUS_VISITS_FAILURE]      : fetchNonShreePreviousVisitsFailure,
    [NonShreeTypes.FETCH_NON_SHREE_PREVIOUS_VISITS_LOADING]      : fetchNonShreePreviousVisitsLoading,
    [NonShreeTypes.FETCH_NON_SHREE_PREVIOUS_VISITS_LOADING_STOP] : fetchNonShreePreviousVisitsLoadingStop
});
