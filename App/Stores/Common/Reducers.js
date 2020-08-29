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



export const reducer = createReducer(INITIAL_STATE, {
  [CommonTypes.CONNECTION_CHANGED]           : connectionChanged,
  [CommonTypes.SCREEN_CHANGED]               : screenChanged,
  [CommonTypes.OPEN_MODAL]                   : openModal,
  [CommonTypes.CLOSE_MODAL]                  : closeModal,
  [CommonTypes.DISABLE_MODAL]                : disableModal,
  [CommonTypes.ENABLE_MODAL]                 : enableModal,
  [CommonTypes.MAKE_PRODUCTS_SEARCHABLE_LIST]: makeProductsSearchableList,

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
  [CommonTypes.CLEAR_CALL_MODAL_DATA]       : clearCallModalData

});
