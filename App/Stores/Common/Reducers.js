import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { CommonTypes } from './Actions'

export const connectionChanged = (state, { payload }) => {
  if (network.isConnected != payload && !payload) {
    return { ...state, isNetworkBannerVisible: true };
  } else {
    return { ...state, isNetworkBannerVisible: false };
  }
}

export const screenChanged = (state, { screen }) => ({
  ...state,
  currentScreen: screen
});

export const openModal = (state, { payload }) => ({
  ...state,
  genericActionModal: {
    ...state.genericActionModal,
    content: payload.content,
    heading: payload.heading,
    bodyFlexHeight: payload.bodyFlexHeight,
    visible: true,
    disable: false
  }
});

export const closeModal = (state) => ({
  ...state,
  genericActionModal: {
    ...state.genericActionModal,
    content: [],
    heading: '',
    bodyFlexHeight: '',
    visible: false,
    disable: false
  }
});

export const disableModal = (state) => ({
  ...state,
  genericActionModal: {
    ...state.genericActionModal,
    disable: true
  }
});

export const enableModal = (state) => ({
  ...state,
  genericActionModal: {
    ...state.genericActionModal,
    disable: false
  }
});


export const makeProductsSearchableList = (state, { payload }) => ({
  ...state,
  productsList: payload
});

export const makeStatesSearchableList = (state, { payload }) => ({
  ...state,
  statesList: payload
});

export const makeCitiesSearchableList = (state, { payload }) => ({
  ...state,
  citiesList: payload
});

export const makePurposeOfCallSearchableList = (state, { payload }) => ({
  ...state,
  purpose_of_call: payload
});

export const makeOutPurposeOfCallSearchableList = (state, { payload }) => ({
  ...state,
  outcome_purpose_of_call: payload
});

export const makeReasonNotConnectSearchableList = (state, { payload }) => ({
  ...state,
  reasons_for_not_Connected: payload
});

export const makeFinancierNameSearchableList = (state, { payload }) => ({
  ...state,
  financier_name: payload
});

export const makeModelColorSearchableList = (state, { payload }) => ({
  ...state,
  model_color: payload
});

export const makePaymentModeSearchableList = (state, { payload }) => ({
  ...state,
  payment_mode: payload
});



export const fetchLeadLostReasonsSuccess = (state, {payload}) => ({
  ...state,
  leadLostReasonsList: payload,
  loaders: {
    ...state.loaders,
    fetchLeadLostReasonsLoader: false
  }
});


export const fetchLeadLostReasonsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchLeadLostReasonsLoader: false
  }
});


export const fetchLeadLostReasonsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchLeadLostReasonsLoader: true
  }
});


export const fetchLeadLostReasonsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchLeadLostReasonsLoader: false
  }
});





export const fetchLeadSourcesSuccess = (state, {payload}) => ({
  ...state,
  sourceEnquiryList: payload,
  loaders: {
    ...state.loaders,
    fetchLeadSourcesLoader: false
  }
});


export const fetchLeadSourcesFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchLeadSourcesLoader: false
  }
});


export const fetchLeadSourcesLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchLeadSourcesLoader: true
  }
});


export const fetchLeadSourcesLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchLeadSourcesLoader: false
  }
});




export const showCallModal = (state) => ({
  ...state,
  isCallModalVisible: true
});


export const hideCallModal = (state) => ({
  ...state,
  isCallModalVisible: false,
  callConnected: false,
  callDisconnected: false
});


export const showConnectedOptions = (state) => ({
  ...state,
  callConnected: true,
  callDisconnected: false
});


export const showDisconnectedOptions = (state) => ({
  ...state,
  callConnected: false,
  callDisconnected: true
});

export const clearCallModalData = (state) => ({
  ...state,
  callConnected: false,
  callDisconnected: false,
  isCallModalVisible: false
});


export const getAllStatesFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllStatesLoader: false
  }
});


export const getAllStatesLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllStatesLoader: true
  }
});


export const getAllStatesLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllStatesLoader: false
  }
});

export const  getAllCitiesFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllCitiesLoader: false
  }
});


export const  getAllCitiesLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllCitiesLoader: true
  }
});


export const  getAllCitiesLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllCitiesLoader: false
  }
});
export const  getCallOptionsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getCallOptionsLoader: false
  }
});


export const  getCallOptionsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getCallOptionsLoader: true
  }
});


export const  getCallOptionsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getCallOptionsLoader: false
  }
});

export const  getBookingPicklistFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getBookingPicklistLoader: false
  }
});


export const  getBookingPicklistLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getBookingPicklistLoader: true
  }
});


export const  getBookingPicklistLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getBookingPicklistLoader: false
  }
});



export const uploadImageSuccess = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    uploadImageLoader: false
  }
});


export const uploadImageFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    uploadImageLoader: false
  }
});


export const uploadImageLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    uploadImageLoader: true
  }
});


export const uploadImageLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    uploadImageLoader: false
  }
});

export const reducer = createReducer(INITIAL_STATE, {
  [CommonTypes.CONNECTION_CHANGED]           : connectionChanged,
  [CommonTypes.SCREEN_CHANGED]               : screenChanged,
  [CommonTypes.OPEN_MODAL]                   : openModal,
  [CommonTypes.CLOSE_MODAL]                  : closeModal,
  [CommonTypes.DISABLE_MODAL]                : disableModal,
  [CommonTypes.ENABLE_MODAL]                 : enableModal,
  [CommonTypes.MAKE_PRODUCTS_SEARCHABLE_LIST]: makeProductsSearchableList,
  [CommonTypes.MAKE_STATES_SEARCHABLE_LIST]  : makeStatesSearchableList,
  [CommonTypes.MAKE_CITIES_SEARCHABLE_LIST]  : makeCitiesSearchableList,
  [CommonTypes.MAKE_PURPOSE_OF_CALL_SEARCHABLE_LIST]  : makePurposeOfCallSearchableList,
  [CommonTypes.MAKE_OUT_PURPOSE_OF_CALL_SEARCHABLE_LIST]  : makeOutPurposeOfCallSearchableList,
  [CommonTypes.MAKE_REASON_NOT_CONNECT_SEARCHABLE_LIST]  : makeReasonNotConnectSearchableList,
  [CommonTypes.MAKE_FINANCIER_NAME_SEARCHABLE_LIST]  : makeFinancierNameSearchableList,
  [CommonTypes.MAKE_MODEL_COLOR_SEARCHABLE_LIST]  : makeModelColorSearchableList,
  [CommonTypes.MAKE_PAYMENT_MODE_SEARCHABLE_LIST]  : makePaymentModeSearchableList,

  //[CommonTypes.FETCH_LEAD_LOST_REASONS]              : fetchLeadLostReasons,
  [CommonTypes.FETCH_LEAD_LOST_REASONS_LOADING]      : fetchLeadLostReasonsLoading,
  [CommonTypes.FETCH_LEAD_LOST_REASONS_LOADING_STOP] : fetchLeadLostReasonsLoadingStop,
  [CommonTypes.FETCH_LEAD_LOST_REASONS_SUCCESS]      : fetchLeadLostReasonsSuccess,
  [CommonTypes.FETCH_LEAD_LOST_REASONS_FAILURE]      : fetchLeadLostReasonsFailure,

  //[CommonTypes.FETCH_LEAD_SOURCES]                   : fetchLeadSources,
  [CommonTypes.FETCH_LEAD_SOURCES_LOADING]           : fetchLeadSourcesLoading,
  [CommonTypes.FETCH_LEAD_SOURCES_LOADING_STOP]      : fetchLeadSourcesLoadingStop,
  [CommonTypes.FETCH_LEAD_SOURCES_SUCCESS]           : fetchLeadSourcesSuccess,
  [CommonTypes.FETCH_LEAD_SOURCES_FAILURE]           : fetchLeadSourcesFailure,


  [CommonTypes.SHOW_CALL_MODAL]   : showCallModal,
  [CommonTypes.HIDE_CALL_MODAL]   : hideCallModal,


  [CommonTypes.SHOW_CONNECTED_OPTIONS]      : showConnectedOptions,
  [CommonTypes.SHOW_DISCONNECTED_OPTIONS]   : showDisconnectedOptions,
  [CommonTypes.CLEAR_CALL_MODAL_DATA]       : clearCallModalData,

  [CommonTypes.GET_ALL_STATES_LOADING]           : getAllStatesLoading,
  [CommonTypes.GET_ALL_STATES_LOADING_STOP]      : getAllStatesLoadingStop,
  [CommonTypes.GET_ALL_STATES_FAILURE]           : getAllStatesFailure,


  [CommonTypes.GET_ALL_CITIES_LOADING]           : getAllCitiesLoading,
  [CommonTypes.GET_ALL_CITIES_LOADING_STOP]      : getAllCitiesLoadingStop,
  [CommonTypes.GET_ALL_CITIES_FAILURE]           : getAllCitiesFailure,

  [CommonTypes.GET_CALL_OPTIONS_LOADING]           : getCallOptionsLoading,
  [CommonTypes.GET_CALL_OPTIONS_LOADING_STOP]      : getCallOptionsLoadingStop,
  [CommonTypes.GET_CALL_OPTIONS_FAILURE]           : getCallOptionsFailure,

  [CommonTypes.GET_BOOKING_PICKLIST_LOADING]           : getBookingPicklistLoading,
  [CommonTypes.GET_BOOKING_PICKLIST_LOADING_STOP]      : getBookingPicklistLoadingStop,
  [CommonTypes.GET_BOOKING_PICKLIST_FAILURE]           : getBookingPicklistFailure,



  [CommonTypes.UPLOAD_IMAGE_LOADING]      : uploadImageLoading,
  [CommonTypes.UPLOAD_IMAGE_LOADING_STOP] : uploadImageLoadingStop,
  [CommonTypes.UPLOAD_IMAGE_SUCCESS]      : uploadImageSuccess,
  [CommonTypes.UPLOAD_IMAGE_FAILURE]      : uploadImageFailure

  // //uploadImage: ['payload'],
  // uploadImageLoading: null,
  // uploadImageLoadingStop: null,
  // uploadImageSuccess: ['payload'],
  // uploadImageFailure: null
});
