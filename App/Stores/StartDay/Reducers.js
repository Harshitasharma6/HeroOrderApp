import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { StartDayTypes } from './Actions'
import _ from 'lodash';


export const inOfficeFormValidationFailed = (state, { payload }) => ({
    ...state,
    startFormValidation: {
        ...payload
    }
});

export const changeRemarkForm = (state, { payload }) => ({
    ...state,
    remark: payload.remark
});


export const clearRemarkForm = (state, { payload }) => ({
    ...state,
    startForm: {},
    remark:''
});


export const fetchGlobleTokenSuccess = (state, { payload }) => ({
    ...state,
    globleList: _.cloneDeep(payload),
    access_token:payload.access_token
});

export const fetchGlobleTokenFailure = (state) => {
    return {
        ...state,
        globleList: [],
        access_token: ''
    }
}

export const fetchOnLeaveSuccess = (state, { payload }) => ({
    ...state,
    fetchOnLeaveList: _.cloneDeep(payload),
    fetchOnLeaveLoader:false
});

export const fetchOnLeaveFailure = (state) => {
    return {
        ...state,
        fetchOnLeaveList: [],
        fetchOnLeaveLoader:false
    }
}

export const fetchOnLeaveLoading = (state) => {
    return {
        ...state,
        fetchOnLeaveLoader: true
    }
}

export const fetchOnLeaveLoadingStop = (state) => {
    return {
        ...state,
        fetchOnLeaveLoader:false
    }
}


export const fetchCheckInSuccess = (state, { payload }) => ({
    ...state,
    fetchCheckInList: _.cloneDeep(payload),
    fetchCheckInLoader: false
});



export const fetchCheckInFailure = (state) => {
    return {
        ...state,
        fetchCheckInList: [],
        fetchCheckInLoader: false
    }
}



export const fetchCheckInLoading = (state) => {
    return {
        ...state,
        fetchCheckInLoader: true
    }
}

export const fetchCheckInLoadingStop = (state) => {
    return {
        ...state,
        fetchCheckInLoader:false
    }
}


export const fetchInOfficeSuccess = (state, { payload }) => ({
    ...state,
    fetchInOfficeList: _.cloneDeep(payload),
    fetchInOfficeLoader:false,
    showRemarkModal: false
});

export const fetchInOfficeFailure = (state) => {
    return {
        ...state,
        fetchInOfficeList: [],
        fetchInOfficeLoader:false,
        showRemarkModal: false
    }
}

export const fetchInOfficeLoading = (state) => {
    return {
        ...state,
        fetchInOfficeLoader:true
    }
}

export const fetchInOfficeLoadingStop = (state) => {
    return {
        ...state,
        fetchInOfficeLoader:false
    }
}

export const fetchAllShreeDealersSuccess = (state, { payload }) => ({
    ...state,
    shreeDealersList: _.cloneDeep(payload)
});

export const fetchAllShreeDealersFailure = (state) => {
    return {
        ...state,
        shreeDealersList: []
    }
}


export const fetchAllNonShreeDealersSuccess = (state, { payload }) => ({
    ...state,
    nonShreeDealersList: _.cloneDeep(payload)
});

export const fetchAllNonShreeDealersFailure = (state) => {
    return {
        ...state,
        nonShreeDealersList: []
    }
}

export const fetchGlobleUserDetailSuccess = (state, { payload }) => ({
    ...state,
    userDetailList: _.cloneDeep(payload),
    userName:payload.Name

});

export const fetchGlobleUserDetailFailure = (state) => {
    return {
        ...state,
        userDetailList: []
    }
}


export const showRemarks = (state) => {
    return {
        ...state,
        showRemarkModal: true
    }
}


export const hideRemarks = (state) => {
    return {
        ...state,
        showRemarkModal: false
    }
}

export const fetchAgentDetailsSuccess = (state, { payload }) => {
    return {
        ...state,
        agentLoginDetails: payload
    }
}



export const fetchAgentDetailsFailure = (state) => {
    return {
        ...state,
        agentLoginDetails: {}
    }
}

//CHECK OUT SUCCESS, LOADING, FAILURE AND STOP

export const fetchCheckOutSuccess = (state, { payload }) => ({
    ...state,
    fetchCheckOutList: _.cloneDeep(payload),
    fetchCheckOutLoader:false
});

export const fetchCheckOutFailure = (state) => {
    return {
        ...state,
        fetchCheckOutList: [],
        fetchCheckOutLoader:false
    }
}

export const fetchCheckOutLoading = (state) => {
    return {
        ...state,
        fetchCheckOutLoader: true
    }
}


export const fetchCheckOutLoadingStop = (state) => {
    return {
        ...state,
        fetchCheckOutLoader:false
    }
}

export const fetchCurrentLocationSuccess = (state, {payload}) => {
    return {
        ...state,
        currentLocation: payload
    }
}


export const fetchCurrentLocationFailure = (state, {payload}) => {
    return {
        ...state,
        currentLocation: INITIAL_STATE.currentLocation
    }
}

export const fetchCurrentLocationLoading = (state) => {
    return {
        ...state,
        fetchCurrentLocationLoader: true
    }
}

export const fetchCurrentLocationLoadingStop = (state) => {
    return {
        ...state,
        fetchCurrentLocationLoader: false
    }
}


export const updateCurrentLocation = (state, {payload}) => {
    return {
        ...state,
        currentLocation: INITIAL_STATE.currentLocation
    }
}


export const makeBrandSearchableListSuccess = (state, {payload}) => {
    return {
        ...state,
        Brand: payload.data
    }
}


export const reducer = createReducer(INITIAL_STATE, {
    [StartDayTypes.CHANGE_REMARK_FORM]: changeRemarkForm,
    [StartDayTypes.CLEAR_REMARK_FORM]: clearRemarkForm,
    [StartDayTypes.FETCH_GLOBLE_TOKEN_SUCCESS]: fetchGlobleTokenSuccess,
    [StartDayTypes.FETCH_GLOBLE_TOKEN_FAILURE]: fetchGlobleTokenFailure,


    [StartDayTypes.FETCH_ON_LEAVE_SUCCESS]: fetchOnLeaveSuccess,
    [StartDayTypes.FETCH_ON_LEAVE_FAILURE]: fetchOnLeaveFailure,
    [StartDayTypes.FETCH_ON_LEAVE_LOADING]: fetchOnLeaveLoading,
    [StartDayTypes.FETCH_ON_LEAVE_LOADING_STOP]: fetchOnLeaveLoadingStop,
    

    [StartDayTypes.FETCH_CHECK_IN_SUCCESS]: fetchCheckInSuccess,
    [StartDayTypes.FETCH_CHECK_IN_FAILURE]: fetchCheckInFailure,
    [StartDayTypes.FETCH_CHECK_IN_LOADING]: fetchCheckInLoading,
    [StartDayTypes.FETCH_CHECK_IN_LOADING_STOP]: fetchCheckInLoadingStop,


    [StartDayTypes.FETCH_IN_OFFICE_SUCCESS]: fetchInOfficeSuccess,
    [StartDayTypes.FETCH_IN_OFFICE_FAILURE]: fetchInOfficeFailure,
    [StartDayTypes.FETCH_IN_OFFICE_LOADING]: fetchInOfficeLoading,
    [StartDayTypes.FETCH_IN_OFFICE_LOADING_STOP]: fetchInOfficeLoadingStop,


    [StartDayTypes.FETCH_ALL_SHREE_DEALERS_SUCCESS]: fetchAllShreeDealersSuccess,
    [StartDayTypes.FETCH_ALL_SHREE_DEALERS_FAILURE]: fetchAllShreeDealersFailure,

    [StartDayTypes.FETCH_ALL_NON_SHREE_DEALERS_SUCCESS]: fetchAllNonShreeDealersSuccess,
    [StartDayTypes.FETCH_ALL_NON_SHREE_DEALERS_FAILURE]: fetchAllNonShreeDealersFailure,

    [StartDayTypes.FETCH_GLOBLE_USER_DETAIL_SUCCESS]: fetchGlobleUserDetailSuccess,
    [StartDayTypes.FETCH_GLOBLE_USER_DETAIL_FAILURE]: fetchGlobleUserDetailFailure,

    [StartDayTypes.SHOW_REMARKS]: showRemarks,
    [StartDayTypes.HIDE_REMARKS]: hideRemarks,


    [StartDayTypes.FETCH_AGENT_DETAILS_SUCCESS]: fetchAgentDetailsSuccess,
    [StartDayTypes.FETCH_AGENT_DETAILS_FAILURE]: fetchAgentDetailsFailure,


    [StartDayTypes.FETCH_CHECK_OUT_SUCCESS]: fetchCheckOutSuccess,
    [StartDayTypes.FETCH_CHECK_OUT_FAILURE]: fetchCheckOutFailure,
    [StartDayTypes.FETCH_CHECK_OUT_LOADING]: fetchCheckOutLoading,
    [StartDayTypes.FETCH_CHECK_OUT_LOADING_STOP]: fetchCheckOutLoadingStop,


    [StartDayTypes.FETCH_CURRENT_LOCATION_SUCCESS]     : fetchCurrentLocationSuccess,
    [StartDayTypes.FETCH_CURRENT_LOCATION_FAILURE]     : fetchCurrentLocationFailure,
    [StartDayTypes.FETCH_CURRENT_LOCATION_LOADING]     : fetchCurrentLocationLoading,
    [StartDayTypes.FETCH_CURRENT_LOCATION_LOADING_STOP]: fetchCurrentLocationLoadingStop,
    [StartDayTypes.UPDATE_CURRENT_LOCATION]            : updateCurrentLocation,



    [StartDayTypes.MAKE_BRAND_SEARCHABLE_LIST_SUCCESS] : makeBrandSearchableListSuccess

});