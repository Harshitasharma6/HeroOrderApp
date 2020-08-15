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



export const reducer = createReducer(INITIAL_STATE, {
  [CommonTypes.CONNECTION_CHANGED]           : connectionChanged,
  [CommonTypes.SCREEN_CHANGED]               : screenChanged,
  [CommonTypes.OPEN_MODAL]                   : openModal,
  [CommonTypes.CLOSE_MODAL]                  : closeModal,
  [CommonTypes.DISABLE_MODAL]                : disableModal,
  [CommonTypes.ENABLE_MODAL]                 : enableModal,
  [CommonTypes.MAKE_PRODUCTS_SEARCHABLE_LIST]: makeProductsSearchableList
});
