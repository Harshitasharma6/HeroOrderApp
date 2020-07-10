import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
    // Login action informations
    checkInAction: ['payload'],
    onLeaveAction: ['payload'],
    inOfficeAction: ['payload'],
    changeRemarkForm: ['payload'],
    showRemarks: null,
    hideRemarks: null,


    fetchGlobleToken: null,
    fetchGlobleTokenSuccess: ['payload'],
    fetchGlobleTokenFailure: null,
    stopFetchGlobleToken: null,


    fetchOnLeaveLoading: null,
    fetchOnLeaveLoadingStop: null,
    fetchOnLeaveSuccess: ['payload'],
    fetchOnLeaveFailure: null,

    fetchCheckInLoading: null,
    fetchCheckInLoadingStop: null,
    fetchCheckInSuccess: ['payload'],
    fetchCheckInFailure: null,

    fetchInOfficeLoading: null,
    fetchInOfficeLoadingStop: null,
    fetchInOfficeSuccess: ['payload'],
    fetchInOfficeFailure: null,

    clearRemarkForm: null,

    fetchAllShreeDealersAction: ['payload'],
    fetchAllShreeDealersSuccess: ['payload'],
    fetchAllShreeDealersFailure: null,

    fetchAllNonShreeDealersAction: ['payload'],
    fetchAllNonShreeDealersSuccess: ['payload'],
    fetchAllNonShreeDealersFailure: null,


    fetchGlobleUserDetail: ['payload'],
    fetchGlobleUserDetailSuccess: ['payload'],
    fetchGlobleUserDetailFailure: null,

    inOfficeFormValidationFailed: ['payload'],

    fetchAgentDetails: ['payload'],
    fetchAgentDetailsSuccess:  ['payload'],
    fetchAgentDetailsFailure: null,


    updateCheckInScreenNavigation: null,
    
    checkOutAction: ['payload'],
    fetchCheckOutLoading: null,
    fetchCheckOutLoadingStop: null,
    fetchCheckOutSuccess: ['payload'],
    fetchCheckOutFailure: null,


    fetchCurrentLocation: ['payload'],
    fetchCurrentLocationSuccess: ['payload'],
    fetchCurrentLocationFailure: ['payload'],
    fetchCurrentLocationLoading: null,
    fetchCurrentLocationLoadingStop: null,
    updateCurrentLocation: ['payload'],


    makeBrandSearchableList: ['payload'],
    makeBrandSearchableListSuccess: ['payload']

})

export const StartDayTypes = Types
export default Creators