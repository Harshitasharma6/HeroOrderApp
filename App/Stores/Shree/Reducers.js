/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ShreeTypes } from './Actions'
import _ from 'lodash';





// fetch sites reducer

export const fetchShreeLoading = (state) => {
    return {
        ...state,
        fetchShreeLoader: true
    }
};

export const fetchShreeSuccess = (state, { payload }) => ({
    ...state,
    shreeList: _.cloneDeep(payload),
    fetchShreeLoader: false
});



export const fetchShreeRetailersSuccess = (state, { payload }) => ({
    ...state,
    shreeRetailersList: _.cloneDeep(payload),
    fetchShreeRetailerLoader: false
});


export const fetchShreeRetailersFailure = (state, { payload }) => ({
    ...state,
     fetchShreeRetailerLoader: false
});

export const fetchShreeRetailersLoading = (state, { payload }) => ({
    ...state,
    fetchShreeRetailerLoader: true
});


export const fetchShreeRetailersLoadingStop = (state, { payload }) => ({
    ...state,
    fetchShreeRetailerLoader: false
});




export const fetchShreeDealersSuccess = (state, { payload }) => ({
    ...state,
    shreeDealersList: _.cloneDeep(payload),
    fetchShreeLoader: false
});


export const fetchShreeFailure = (state) => ({
    ...state,
    fetchShreeLoader: false,
    shreeList: []
});


export const selectShree = (state, { payload }) => ({
    ...state,
    selectedShree: payload
});


export const clearSelectShree = (state) => ({
    ...state,
    selectedShree: {}
});

export const openMoreFilters = (state) => ({
    ...state,
    openMoreFilters: true
});


export const closeMoreFilters = (state) => ({
    ...state,
    openMoreFilters: false
});


export const updateShreeSearchFilters = (state, { payload }) => {
    let updated_search_filters = _.cloneDeep(state.shreeSearchFilters);
    updated_search_filters[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        shreeSearchFilters: {
            ...state.shreeSearchFilters,
            ...updated_search_filters
        },
        openMoreFilters: false
    }
};


export const doNothing = (state) => ({
    ...state
});


export const changeShreeDealerForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.shreeDealerForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        shreeDealerForm: {
            ...state.shreeDealerForm,
            ...updated_form
        },
        shreeDealerFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};


export const changeShreeRetailerForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.shreeRetailerForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        shreeRetailerForm: {
            ...state.shreeRetailerForm,
            ...updated_form
        },
        shreeRetailerFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};


export const shreeRetailerFormValidationFailed = (state, { payload }) => ({
    ...state,
    shreeRetailerFormValidation: {
        ...payload
    }
});


export const shreeDealerFormValidationFailed = (state, { payload }) => ({
    ...state,
    shreeDealerFormValidation: {
        ...payload
    }
});



export const createShreeDealerLoading = (state) => ({
    ...state,
    createShreeDealerLoader: true
});


export const createShreeRetailerLoading = (state) => ({
    ...state,
    createShreeRetailerLoader: true
});



export const createShreeDealerLoadingStop = (state) => ({
    ...state,
    createShreeDealerLoader: false
});



export const createShreeRetailerLoadingStop = (state) => ({
    ...state,
    createShreeRetailerLoader: false
});



export const createShreeDealerSuccess = (state, { payload }) => ({
    ...state,
    shreeDealerForm: INITIAL_STATE.shreeDealerForm,
    createShreeDealerLoader: false
});



export const createShreeRetailerSuccess = (state, { payload }) => ({
    ...state,
    shreeRetailerForm: INITIAL_STATE.shreeRetailerForm,
    createShreeRetailerLoader: false
});



export const createShreeDealerFailure = (state, { payload }) => ({
    ...state,
    createShreeDealerLoader: false
});


export const createShreeRetailerFailure = (state, { payload }) => ({
    ...state,
    createShreeRetailerLoader: false
});



export const updateLocationSuccess = (state, { payload }) => ({
    ...state,
    updateLocationLoader: false
});


export const updateLocationFailure = (state) => ({
    ...state,
    updateLocationLoader: false
});


export const updateLocationLoading = (state) => ({
    ...state,
    updateLocationLoader: true
});


export const updateLocationLoadingStop = (state) => ({
    ...state,
    updateLocationLoader: false
});



export const updatePotentialSuccess = (state, { payload }) => ({
    ...state,
    updatePotentialLoader: false,
    editPotentialField: false
});


export const updatePotentialFailure = (state) => ({
    ...state,
    updatePotentialLoader: false
});


export const updatePotentialLoading = (state) => ({
    ...state,
    updatePotentialLoader: true
});


export const updatePotentialLoadingStop = (state) => ({
    ...state,
    updatePotentialLoader: false
});


export const fetchOutstandingSuccess = (state, { payload }) => ({
    ...state,
    outstanding: payload,
    fetchOutstandingLoader: false
});


export const fetchOutstandingFailure = (state) => ({
    ...state,
    outstanding: [],
    fetchOutstandingLoader: false
});


export const fetchOutstandingLoading = (state) => ({
    ...state,
    fetchOutstandingLoader: true
});


export const fetchOutstandingLoadingStop = (state) => ({
    ...state,
    fetchOutstandingLoader: false
});



export const fetchPaymentsSuccess = (state, { payload }) => ({
    ...state,
    payments: payload,
    fetchPaymentsLoader: false
});


export const fetchPaymentsFailure = (state) => ({
    ...state,
    payments: [],
    fetchPaymentsLoader: false
});


export const fetchPaymentsLoading = (state) => ({
    ...state,
    fetchPaymentsLoader: true
});


export const fetchPaymentsLoadingStop = (state) => ({
    ...state,
    fetchPaymentsLoader: false
});


export const fetchPreviousVisitsSuccess = (state, { payload }) => ({
    ...state,
    previousVisits: payload,
    fetchPreviousVisitsLoader: false
});


export const fetchPreviousVisitsFailure = (state) => ({
    ...state,
    previousVisits: [],
    fetchPreviousVisitsLoader: false
});


export const fetchPreviousVisitsLoading = (state) => ({
    ...state,
    fetchPreviousVisitsLoader: true
});


export const fetchPreviousVisitsLoadingStop = (state) => ({
    ...state,
    fetchPreviousVisitsLoader: false
});





export const fetchLatestVisitsSuccess = (state, { payload }) => ({
    ...state,
    latestVisits: payload,
    fetchLatestVisitsLoader: false
});


export const fetchLatestVisitsFailure = (state) => ({
    ...state,
    latestVisits: [],
    fetchLatestVisitsLoader: false
});


export const fetchLatestVisitsLoading = (state) => ({
    ...state,
    fetchLatestVisitsLoader: true
});


export const fetchLatestVisitsLoadingStop = (state) => ({
    ...state,
    fetchLatestVisitsLoader: false
});





export const fetchAllVisitsSuccess = (state, { payload }) => ({
    ...state,
    allVisits: payload,
    allVisitsLoader: false
});


export const fetchAllVisitsFailure = (state) => ({
    ...state,
    allVisits: [],
    allVisitsLoader: false
});


export const fetchAllVisitsLoading = (state) => ({
    ...state,
    allVisitsLoader: true
});


export const fetchAllVisitsLoadingStop = (state) => ({
    ...state,
    allVisitsLoader: false
});







export const fetchAllSiteVisitsSuccess = (state, { payload }) => ({
    ...state,
    allSiteVisits: payload,
    allSiteVisitsLoader: false
});


export const fetchAllSiteVisitsFailure = (state) => ({
    ...state,
    allSiteVisits: [],
    allSiteVisitsLoader: false
});


export const fetchAllSiteVisitsLoading = (state) => ({
    ...state,
    allSiteVisitsLoader: true
});


export const fetchAllSiteVisitsLoadingStop = (state) => ({
    ...state,
    allSiteVisitsLoader: false
});







export const fetchAllInfluencerVisitsSuccess = (state, { payload }) => ({
    ...state,
    allInfluencerVisits: payload,
    allInfluencerVisitsLoader: false
});


export const fetchAllInfluencerVisitsFailure = (state) => ({
    ...state,
    allInfluencerVisits: [],
    allInfluencerVisitsLoader: false
});


export const fetchAllInfluencerVisitsLoading = (state) => ({
    ...state,
    allInfluencerVisitsLoader: true
});


export const fetchAllInfluencerVisitsLoadingStop = (state) => ({
    ...state,
    allInfluencerVisitsLoader: false
});









export const openEditPotentialField = (state) => ({
    ...state,
    editPotentialField: true
});


export const closeEditPotentialField = (state) => ({
    ...state,
    editPotentialField: false,
    selectedShree: {
        ...state.selectedShree,
        data: {
            ...state.selectedShree.data,
            Potential__c: ''
        }
    }
});

export const changePotentialField = (state, {payload}) => ({
    ...state,
    selectedShree: {
        ...state.selectedShree,
        data: {
            ...state.selectedShree.data,
            Potential__c: payload.value
        }
    }
});

export const updateShreeLocationAction = (state, {payload}) => ({
    ...state,
    shreeLocationAction: {
        ...state.shreeLocationAction,
        ...payload
    }
});


export const changeShreeVisitDetailForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.shreeVisitDetailForm);
    updated_form[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        shreeVisitDetailForm: {
            ...state.shreeVisitDetailForm,
            ...updated_form
        },
        shreeVisitDetailFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};


export const shreeVisitDetailFormValidationFailed = (state, { payload }) => ({
    ...state,
    shreeVisitDetailFormValidation: {
        ...payload
    }
});


export const changeShreeVisitForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.shreeVisitForm);
    updated_form[payload.edited_field] = payload.edited_value;
    return {
        ...state,
        shreeVisitForm: updated_form,
        shreeVisitFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};


export const clearShreeVisitForm = (state, { payload }) => {
    return {
        ...state,
        shreeVisitForm: INITIAL_STATE.shreeVisitForm
    }
};





export const submitShreeVisitFormSuccess = (state, { payload }) => {
    return {
        ...state,
        shreeVisitForm: INITIAL_STATE.shreeVisitForm,
        submitShreeVisitFormLoader: false
    }
};


export const submitShreeVisitFormFailure = (state, { payload }) => {
    return {
        ...state,
        submitShreeVisitFormLoader: false
    }
};


export const submitShreeVisitFormLoading = (state) => {
    return {
        ...state,
        submitShreeVisitFormLoader: true
    }
};


export const submitShreeVisitFormLoadingStop = (state) => {
    return {
        ...state,
        submitShreeVisitFormLoader: false
    }
};


export const shreeVisitFormValidationFailed = (state, { payload }) => {
    return {
        ...state,
        shreeVisitFormValidation: payload
    }
};

export const createShreeVisitDetailLoading = (state) => ({
    ...state,
    createShreeVisitDetailLoader: true
});



export const createShreeVisitDetailLoadingStop = (state) => ({
    ...state,
    createShreeVisitDetailLoader: false
});



export const createShreeVisitDetailSuccess = (state, { payload }) => ({
    ...state,
    shreeVisitDetailForm: INITIAL_STATE.shreeVisitDetailForm,
    createShreeVisitDetailLoader: false
});


export const createShreeVisitDetailFailure = (state, { payload }) => ({
    ...state,
    createShreeVisitDetailLoader: false
});





export const getAllCountersSuccess = (state,  { payload }) => ({
    ...state,
    allCounters: payload.list,
    allCountersSearchList: payload.searchList,
    allCountersSearchDealerList: payload.searchDealerList,
    allCountersSearchRetailerList: payload.searchRetailerList,
    allCountersLoader: false
});


export const getAllCountersFailure = (state) => ({
    ...state,
    allCounters: [],
    allCountersLoader: false
});

export const getAllCountersLoading = (state) => ({
    ...state,
    allCountersLoader: true
});


export const getAllCountersLoadingStop = (state) => ({
    ...state,
    allCountersLoader: false
});




export const getAllDistrictsSuccess = (state,  { payload }) => ({
    ...state,
    allDistricts: payload.list,
    allDistrictsLoader: false
});


export const getAllDistrictsFailure = (state) => ({
    ...state,
    allDistricts: [],
    allDistrictsLoader: false
});

export const getAllDistrictsLoading = (state) => ({
    ...state,
    allDistrictsLoader: true
});


export const getAllDistrictsLoadingStop = (state) => ({
    ...state,
    allDistrictsLoader: false
});







export const fetchSalesInfoSuccess = (state,  { payload }) => ({
    ...state,
    salesInfo: {
        ...state.salesInfo, 
        ...payload
    },
    fetchSalesInfoLoader: false
});


export const fetchSalesInfoFailure = (state) => ({
    ...state,
    fetchSalesInfoLoader: false
});

export const fetchSalesInfoLoading = (state) => ({
    ...state,
    fetchSalesInfoLoader: true
});


export const fetchSalesInfoLoadingStop = (state) => ({
    ...state,
    fetchSalesInfoLoader: false
});







export const addShreeBrand = (state, { payload }) => {
    let updatedShreeVisitForm = _.cloneDeep(state.shreeVisitForm)
    updatedShreeVisitForm['brands']  = updatedShreeVisitForm['brands'] ? updatedShreeVisitForm['brands'] : [];
    updatedShreeVisitForm['brands'].push(payload);
    return {
        ...state,
        shreeVisitForm: updatedShreeVisitForm
    }
};


export const removeShreeBrand = (state, { payload }) => {
    let updatedShreeVisitForm = _.cloneDeep(state.shreeVisitForm)
    let brands = [];

    updatedShreeVisitForm.brands.map((obj) => {
        if (obj.id != payload.id) {
            brands.push(obj)
        }
    });

    updatedShreeVisitForm.brands = brands;

    return {
        ...state,
        shreeVisitForm: updatedShreeVisitForm
    }
};

export const editShreeBrand = (state, { payload }) => {
    let updatedShreeVisitForm = _.cloneDeep(state.shreeVisitForm)
    
    updatedShreeVisitForm.brands.map((obj) => {
        if (obj.id == payload.id) {
            obj[payload.edited_field] = payload.edited_value
        }
    });

    return {
        ...state,
        shreeVisitForm: updatedShreeVisitForm
    }
};












export const reducer = createReducer(INITIAL_STATE, {
    [ShreeTypes.FETCH_SHREE_LOADING]       : fetchShreeLoading,
    [ShreeTypes.FETCH_SHREE_SUCCESS]       : fetchShreeSuccess,
    [ShreeTypes.FETCH_SHREE_FAILURE]       : fetchShreeFailure,


    [ShreeTypes.SELECT_SHREE]              : selectShree,
    [ShreeTypes.CLEAR_SELECT_SHREE]        : clearSelectShree,

    [ShreeTypes.UPDATE_SHREE_SEARCH_FILTERS]     : updateShreeSearchFilters,

    [ShreeTypes.OPEN_MORE_FILTERS_OPTION]  : openMoreFilters,
    [ShreeTypes.CLOSE_MORE_FILTERS_OPTION] : closeMoreFilters,


    [ShreeTypes.DO_NOTHING]                : doNothing,

    [ShreeTypes.CHANGE_SHREE_DEALER_FORM]  : changeShreeDealerForm,
    [ShreeTypes.CHANGE_SHREE_RETAILER_FORM]: changeShreeRetailerForm,


    [ShreeTypes.SHREE_RETAILER_FORM_VALIDATION_FAILED]: shreeRetailerFormValidationFailed,
    [ShreeTypes.SHREE_DEALER_FORM_VALIDATION_FAILED]: shreeDealerFormValidationFailed,



    [ShreeTypes.CREATE_SHREE_DEALER_SUCCESS]        : createShreeDealerSuccess,
    [ShreeTypes.CREATE_SHREE_RETAILER_SUCCESS]      : createShreeRetailerSuccess,


    [ShreeTypes.CREATE_SHREE_DEALER_FAILURE]        : createShreeDealerFailure,
    [ShreeTypes.CREATE_SHREE_RETAILER_FAILURE]      : createShreeRetailerFailure,


    [ShreeTypes.CREATE_SHREE_DEALER_LOADING]        : createShreeDealerLoading,
    [ShreeTypes.CREATE_SHREE_RETAILER_LOADING]      : createShreeRetailerLoading,


    [ShreeTypes.CREATE_SHREE_DEALER_LOADING_STOP]   : createShreeDealerLoadingStop,
    [ShreeTypes.CREATE_SHREE_RETAILER_LOADING_STOP] : createShreeRetailerLoadingStop,



    [ShreeTypes.UPDATE_LOCATION_SUCCESS]            : updateLocationSuccess,
    [ShreeTypes.UPDATE_LOCATION_FAILURE]            : updateLocationFailure,
    [ShreeTypes.UPDATE_LOCATION_LOADING]            : updateLocationLoading,
    [ShreeTypes.UPDATE_LOCATION_LOADING_STOP]       : updateLocationLoadingStop,



    [ShreeTypes.UPDATE_POTENTIAL_SUCCESS]            : updatePotentialSuccess,
    [ShreeTypes.UPDATE_POTENTIAL_FAILURE]            : updatePotentialFailure,
    [ShreeTypes.UPDATE_POTENTIAL_LOADING]            : updatePotentialLoading,
    [ShreeTypes.UPDATE_POTENTIAL_LOADING_STOP]       : updatePotentialLoadingStop,



    [ShreeTypes.FETCH_OUTSTANDING_SUCCESS]            : fetchOutstandingSuccess,
    [ShreeTypes.FETCH_OUTSTANDING_FAILURE]            : fetchOutstandingFailure,
    [ShreeTypes.FETCH_OUTSTANDING_LOADING]            : fetchOutstandingLoading,
    [ShreeTypes.FETCH_OUTSTANDING_LOADING_STOP]       : fetchOutstandingLoadingStop,



    [ShreeTypes.FETCH_PAYMENTS_SUCCESS]               : fetchPaymentsSuccess,
    [ShreeTypes.FETCH_PAYMENTS_FAILURE]               : fetchPaymentsFailure,
    [ShreeTypes.FETCH_PAYMENTS_LOADING]               : fetchPaymentsLoading,
    [ShreeTypes.FETCH_PAYMENTS_LOADING_STOP]          : fetchPaymentsLoadingStop,




    [ShreeTypes.FETCH_PREVIOUS_VISITS_SUCCESS]        : fetchPreviousVisitsSuccess,
    [ShreeTypes.FETCH_PREVIOUS_VISITS_FAILURE]        : fetchPreviousVisitsFailure,
    [ShreeTypes.FETCH_PREVIOUS_VISITS_LOADING]        : fetchPreviousVisitsLoading,
    [ShreeTypes.FETCH_PREVIOUS_VISITS_LOADING_STOP]   : fetchPreviousVisitsLoadingStop,


    [ShreeTypes.FETCH_LATEST_VISITS_SUCCESS]        : fetchLatestVisitsSuccess,
    [ShreeTypes.FETCH_LATEST_VISITS_FAILURE]        : fetchLatestVisitsFailure,
    [ShreeTypes.FETCH_LATEST_VISITS_LOADING]        : fetchLatestVisitsLoading,
    [ShreeTypes.FETCH_LATEST_VISITS_LOADING_STOP]   : fetchLatestVisitsLoadingStop,



    [ShreeTypes.FETCH_ALL_VISITS_SUCCESS]             : fetchAllVisitsSuccess,
    [ShreeTypes.FETCH_ALL_VISITS_FAILURE]             : fetchAllVisitsFailure,
    [ShreeTypes.FETCH_ALL_VISITS_LOADING]             : fetchAllVisitsLoading,
    [ShreeTypes.FETCH_ALL_VISITS_LOADING_STOP]        : fetchAllVisitsLoadingStop,




    [ShreeTypes.FETCH_ALL_SITE_VISITS_SUCCESS]        : fetchAllSiteVisitsSuccess,
    [ShreeTypes.FETCH_ALL_SITE_VISITS_FAILURE]        : fetchAllSiteVisitsFailure,
    [ShreeTypes.FETCH_ALL_SITE_VISITS_LOADING]        : fetchAllSiteVisitsLoading,
    [ShreeTypes.FETCH_ALL_SITE_VISITS_LOADING_STOP]   : fetchAllSiteVisitsLoadingStop,



    [ShreeTypes.FETCH_ALL_INFLUENCER_VISITS_SUCCESS]      : fetchAllInfluencerVisitsSuccess,
    [ShreeTypes.FETCH_ALL_INFLUENCER_VISITS_FAILURE]      : fetchAllInfluencerVisitsFailure,
    [ShreeTypes.FETCH_ALL_INFLUENCER_VISITS_LOADING]      : fetchAllInfluencerVisitsLoading,
    [ShreeTypes.FETCH_ALL_INFLUENCER_VISITS_LOADING_STOP] : fetchAllInfluencerVisitsLoadingStop,




    [ShreeTypes.FETCH_SALES_INFO_SUCCESS]              : fetchSalesInfoSuccess,
    [ShreeTypes.FETCH_SALES_INFO_FAILURE]              : fetchSalesInfoFailure,
    [ShreeTypes.FETCH_SALES_INFO_LOADING]              : fetchSalesInfoLoading,
    [ShreeTypes.FETCH_SALES_INFO_LOADING_STOP]         : fetchSalesInfoLoadingStop,



    [ShreeTypes.OPEN_EDIT_POTENTIAL_FIELD]            : openEditPotentialField,
    [ShreeTypes.CLOSE_EDIT_POTENTIAL_FIELD]           : closeEditPotentialField,
    [ShreeTypes.CHANGE_POTENTIAL_FIELD]               : changePotentialField,


    [ShreeTypes.UPDATE_SHREE_LOCATION_ACTION]         : updateShreeLocationAction,


    [ShreeTypes.FETCH_SHREE_RETAILERS_SUCCESS]        : fetchShreeRetailersSuccess,
    //[ShreeTypes.FETCH_SHREE_RETAILERS]                : fetchShreeRetailers,
    [ShreeTypes.FETCH_SHREE_RETAILERS_LOADING]        : fetchShreeRetailersLoading,
    [ShreeTypes.FETCH_SHREE_RETAILERS_LOADING_STOP]   : fetchShreeRetailersLoadingStop,
    [ShreeTypes.FETCH_SHREE_RETAILERS_FAILURE]        : fetchShreeRetailersFailure,



    [ShreeTypes.FETCH_SHREE_DEALERS_SUCCESS]          : fetchShreeDealersSuccess,

    [ShreeTypes.CLEAR_SHREE_VISIT_FORM]                       : clearShreeVisitForm,
    [ShreeTypes.CHANGE_SHREE_VISIT_FORM]                      : changeShreeVisitForm,
    [ShreeTypes.SUBMIT_SHREE_VISIT_FORM_SUCCESS]              : submitShreeVisitFormSuccess,
    [ShreeTypes.SUBMIT_SHREE_VISIT_FORM_FAILURE]              : submitShreeVisitFormFailure,
    [ShreeTypes.SUBMIT_SHREE_VISIT_FORM_LOADING]              : submitShreeVisitFormLoading,
    [ShreeTypes.SUBMIT_SHREE_VISIT_FORM_LOADING_STOP]         : submitShreeVisitFormLoadingStop,
    [ShreeTypes.SHREE_VISIT_FORM_VALIDATION_FAILED]           : shreeVisitFormValidationFailed,
    [ShreeTypes.CHANGE_SHREE_VISIT_DETAIL_FORM]               : changeShreeVisitDetailForm,
    [ShreeTypes.SHREE_VISIT_DETAIL_FORM_VALIDATION_FAILED]    : shreeVisitDetailFormValidationFailed,
    [ShreeTypes.CREATE_SHREE_VISIT_DETAIL_SUCCESS]            : createShreeVisitDetailSuccess,
    [ShreeTypes.CREATE_SHREE_VISIT_DETAIL_FAILURE]            : createShreeVisitDetailFailure,
    [ShreeTypes.CREATE_SHREE_VISIT_DETAIL_LOADING]            : createShreeVisitDetailLoading,
    [ShreeTypes.CREATE_SHREE_VISIT_DETAIL_LOADING_STOP]       : createShreeVisitDetailLoadingStop,





    [ShreeTypes.GET_ALL_COUNTERS_SUCCESS]             : getAllCountersSuccess,
    [ShreeTypes.GET_ALL_COUNTERS_FAILURE]             : getAllCountersFailure,
    [ShreeTypes.GET_ALL_COUNTERS_LOADING]             : getAllCountersLoading,
    [ShreeTypes.GET_ALL_COUNTERS_LOADING_STOP]        : getAllCountersLoadingStop,



    [ShreeTypes.GET_ALL_DISTRICTS_SUCCESS]             : getAllDistrictsSuccess,
    [ShreeTypes.GET_ALL_DISTRICTS_FAILURE]             : getAllDistrictsFailure,
    [ShreeTypes.GET_ALL_DISTRICTS_LOADING]             : getAllDistrictsLoading,
    [ShreeTypes.GET_ALL_DISTRICTS_LOADING_STOP]        : getAllDistrictsLoadingStop,


    [ShreeTypes.ADD_SHREE_BRAND]                      : addShreeBrand,
    [ShreeTypes.REMOVE_SHREE_BRAND]                   : removeShreeBrand,
    [ShreeTypes.EDIT_SHREE_BRAND]                     : editShreeBrand

});
