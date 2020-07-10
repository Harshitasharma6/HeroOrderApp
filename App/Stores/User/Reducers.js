updateLoginDetails/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const userLoginLoading = (state) => ({
  ...state,
  userLoginIsLoading: true
});

export const userLoginSuccess = (state, { user }) => ({
  ...state,
  userLoginIsLoading: false,
  userLoginErrorMessage: null
});

export const userLoginFailure = (state, { errorMessage }) => ({
  ...state,
  id: null,
  token: null,
  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage
});

export const changeLoginForm = (state, {user}) => ({
  ...state,
  username: user.username,
  password: user.password,
  userLoginIsLoading: false,
  validation: {...INITIAL_STATE.validation}
});

export const userLoginValidationFailed = (state, {validation}) => ({
  ...state,
  validation: {...state.validation, ...validation}
});

export const updateUserLocation = (state, {location}) => ({
  ...state,
  latitude: location.latitude,
  longitude: location.longitude
});

export const updateUserStartDayTime = (state, {startDayTime}) => ({
  ...state,
  startDayTime: startDayTime.date
});

export const updateUserArea = (state, {area}) => ({
  ...state,
  area: area,
  validation: {...INITIAL_STATE.validation}
});

export const fetchAllAreasLoading = (state) => ({
  ...state,
  fetchAllAreasLoading: true
});


export const fetchAllAreasSuccess = (state, {areas}) => ({
  ...state,
  agentAreas: areas,
  fetchAllAreasLoading: false
});


export const fetchAllAreasFailure = (state, {areas}) => ({
  ...state,
  fetchAllAreasLoading: false
});

export const userStartDayLoading = (state) => ({
  ...state,
  userStartDayLoading: true
});

export const userStartDayLoadingStop = (state) => ({
  ...state,
  userStartDayLoading: false
});

export const userStartDaySuccess = (state, {user}) => ({
  ...state,
  endDayTime: null,
  absentDayTime: null,
  startDayTime: user.date,
  logitude: user.logitude,
  latitude: user.latitude,
  area: user.area,
  userStartDayLoading: false
});

export const userStartDayFailure = (state) => ({
  ...state,
  endDayTime: null,
  startDayTime: null,
  absentDayTime: null,
  userStartDayLoading: false
});

export const userEndDaySuccess = (state, {user}) => ({
  ...state,
  endDayTime:  user.date,
  startDayTime: null,
  absentDayTime: null,
  userEndDayLoading: false
});

export const userEndDayLoading = (state) => ({
  ...state,
  userEndDayLoading: true
});

export const userEndDayLoadingStop = (state) => ({
  ...state,
  userEndDayLoading: false
});

export const userEndDayFailure = (state) => ({
  ...state,
  endDayTime: null,
  userEndDayLoading: false
});

export const userMarkedAbsentSuccess = (state, {user}) => ({
  ...state,
  absentDayTime: user.date,
  startDayTime: null,
  endDayTime: null,
  userMarkedAbsentLoading: false
});

export const userMarkedAbsentFailure = (state) => ({
  ...state,
  absentDayTime: null,
  startDayTime: null,
  endDayTime: null,
  userMarkedAbsentLoading: false
});

export const userMarkedAbsentLoading = (state) => ({
  ...state,
  userMarkedAbsentLoading: true
});

export const updateUserMarkedAbsentReason = (state, {reason}) => ({
  ...state,
  absentReason: reason.absentReason
});

export const userStartDayValidationFailed = (state, {validation}) => ({
  ...state,
  userStartDayLoading: false,
  validation: {...state.validation, ...validation}
});

export const fetchAgentDetailsSuccess = (state, {payload}) => ({
  ...state,
  agentDetails: payload,
  isASM: (payload['agentDetail']['member_type'] == 'ASM')
})

export const fetchAgentDetailsFailure = (state, {payload}) => ({
  ...state,
  agentDetails: {}
});


export const updateAgentAttendanceDetails = (state, {payload}) => ({
  ...state,
    absentDayTime: payload.absentDayTime,
    startDayTime: payload.startDayTime,
    endDayTime: payload.endDayTime
});
 

export const checkAttendanceFailure = (state, {payload}) => ({
  ...state
}); 


export const doNothing = (state) => ({
    ...state
});



export const fetchAllPsmLoading = (state) => ({
  ...state,
  fetchAllPsmLoader: true
});

export const fetchAllPsmLoadingStop =  (state) => ({
  ...state,
  fetchAllPsmLoader: false
});

export const fetchAllPsmSuccess = (state, {payload}) => ({
  ...state,
  fetchAllPsmLoader: false,
  psmList: payload
});

export const fetchAllPsmFailure = (state, {payload}) => ({
  ...state,
  fetchAllPsmLoader: false
});


export const updateUserCheckInLocation = (state, {payload}) => ({
  ...state,
    checkInLat: payload.latitude,
    checkInLong: payload.longitude
});


export const updateLoginDetails = (state, {payload}) => ({
  ...state,
    loginDetails: payload
});

export const updateUserStatus = (state, {payload}) => ({
  ...state,
    status: payload.status,
    statusTime: payload.timestamp,
    checkIn_id: payload.checkIn_id,
    checkout: payload.checkout
});






export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_LOGIN_LOADING]              : userLoginLoading,
  [UserTypes.USER_LOGIN_SUCCESS]              : userLoginSuccess,
  [UserTypes.USER_LOGIN_FAILURE]              : userLoginFailure,
  [UserTypes.CHANGE_LOGIN_FORM]               : changeLoginForm,
  [UserTypes.USER_LOGIN_VALIDATION_FAILED]    : userLoginValidationFailed,
  [UserTypes.USER_START_DAY_VALIDATION_FAILED]: userStartDayValidationFailed,
  [UserTypes.UPDATE_USER_LOCATION]            : updateUserLocation,
  [UserTypes.UPDATE_USER_START_DAY_TIME]      : updateUserStartDayTime,
  [UserTypes.UPDATE_USER_AREA]                : updateUserArea,
  [UserTypes.FETCH_ALL_AREAS_LOADING]         : fetchAllAreasLoading,
  [UserTypes.FETCH_ALL_AREAS_SUCCESS]         : fetchAllAreasSuccess,
  [UserTypes.FETCH_ALL_AREAS_FAILURE]         : fetchAllAreasFailure,
  [UserTypes.USER_START_DAY_SUCCESS]          : userStartDaySuccess,
  [UserTypes.USER_START_DAY_FAILURE]          : userStartDayFailure,
  [UserTypes.USER_START_DAY_LOADING]          : userStartDayLoading,
  [UserTypes.USER_END_DAY_SUCCESS]            : userEndDaySuccess,
  [UserTypes.USER_END_DAY_FAILURE]            : userEndDayFailure,
  [UserTypes.USER_END_DAY_LOADING]            : userEndDayLoading,
  [UserTypes.USER_MARKED_ABSENT_SUCCESS]      : userMarkedAbsentSuccess,
  [UserTypes.USER_MARKED_ABSENT_FAILURE]      : userMarkedAbsentFailure,
  [UserTypes.USER_MARKED_ABSENT_LOADING]      : userMarkedAbsentLoading,
  [UserTypes.USER_START_DAY_LOADING_STOP]     : userStartDayLoadingStop,
  [UserTypes.USER_END_DAY_LOADING_STOP]       : userEndDayLoadingStop,
  [UserTypes.UPDATE_USER_MARKED_ABSENT_REASON]: updateUserMarkedAbsentReason,
  [UserTypes.UPDATE_AGENT_ATTENDANCE_DETAILS] : updateAgentAttendanceDetails,
  [UserTypes.CHECK_ATTENDANCE_FAILURE]        : checkAttendanceFailure,
  [UserTypes.DO_NOTHING]                      : doNothing,
  [UserTypes.FETCH_ALL_PSM_LOADING]           : fetchAllPsmLoading,
  [UserTypes.FETCH_ALL_PSM_LOADING_STOP]      : fetchAllPsmLoadingStop,
  [UserTypes.FETCH_ALL_PSM_SUCCESS]           : fetchAllPsmSuccess,
  [UserTypes.FETCH_ALL_PSM_FAILURE]           : fetchAllPsmFailure,


  [UserTypes.UPDATE_USER_CHECK_IN_LOCATION]   : updateUserCheckInLocation,
  [UserTypes.UPDATE_LOGIN_DETAILS]            : updateLoginDetails,
  [UserTypes.UPDATE_USER_STATUS]              : updateUserStatus

});
