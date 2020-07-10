import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { DashboardTypes } from './Actions'
import _ from 'lodash'

//FEEDBACK SUCCESS, FAILURE, LOADING, STOPE

export const feedBackSuccess = (state, { payload }) => {
  return {
      ...state,
      feedBackLoader: false,
      feedBackForm: {}
  }
}

export const feedBackFailure = (state) => ({
  ...state,
  feedBackLoader: false
});

export const feedBackLoading = (state) => ({
  ...state,
  feedBackLoader: true
});

export const feedBackLoadingStop = (state) => ({
  ...state,
  feedBackLoader: false
});


export const changeFeedBackForm = (state, { payload }) => {
  let updated_form = _.cloneDeep(state.feedBackForm);
  updated_form[payload.edited_field] = payload.edited_value;

  return {
      ...state,
      feedBackForm: updated_form,
      feedBackFormValidation: {
          invalid: false,
          invalid_field: ''
      }
  }
};

export const feedBackFormValidationFailed = (state, { payload }) => ({
  ...state,
  feedBackFormValidation: {
      ...payload
  }
});

//OUTSTANDING SUCCESS, FAILURE, LOADING, STOPE

export const outStandingSuccess = (state, { payload }) => {
  return {
      ...state,
      outStandingLoader: false,
      fetchOutStandingList: payload
  }
}

export const outStandingFailure = (state) => ({
  ...state,
  outStandingLoader: false
});

export const outStandingLoading = (state) => ({
  ...state,
  outStandingLoader: true
});

export const outStandingLoadingStop = (state) => ({
  ...state,
  outStandingLoader: false
});

export const doNothing = (state) => ({
    ...state
});




export const fetchCommunicationsSuccess = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsLoader: false,
      communicationsList: payload
  }
}

export const fetchCommunicationsFailure = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsLoader: false,
      communicationsList: []
  }
}


export const fetchCommunicationsLoading = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsLoader: true
  }
}


export const fetchCommunicationsLoadingStop = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsLoader: false
  }
}



export const fetchCommunicationsAttachmentsSuccess = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsLoader: false,
      communicationsAttachmentsList: payload
  }
}

export const fetchCommunicationsAttachmentsFailure = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsLoader: false,
      communicationsAttachmentsList: []
  }
}


export const fetchCommunicationsAttachmentsLoading = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsLoader: true
  }
}


export const fetchCommunicationsAttachmentsLoadingStop = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsLoader: false
  }
}



export const fetchCommunicationsAttachmentsDetailsSuccess = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsDetailsLoader: false,
      communicationsAttachmentsDetailsList: payload
  }
}

export const fetchCommunicationsAttachmentsDetailsFailure = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsDetailsLoader: false,
      communicationsAttachmentsDetailsList: []
  }
}


export const fetchCommunicationsAttachmentsDetailsLoading = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsDetailsLoader: payload.id
  }
}


export const fetchCommunicationsAttachmentsDetailsLoadingStop = (state, { payload }) => {
  return {
      ...state,
      fetchCommunicationsAttachmentsDetailsLoader: false
  }
}



export const submitFinalObservationFormSuccess = (state, { payload }) => {
  return {
      ...state,
      finalObservationSubmitLoader: false,
      finalObservationForm: INITIAL_STATE.finalObservationForm
  }
}

export const submitFinalObservationFormFailure = (state, { payload }) => {
  return {
      ...state,
      finalObservationSubmitLoader: false
  }
}


export const submitFinalObservationFormLoading = (state, { payload }) => {
  return {
      ...state,
      finalObservationSubmitLoader: true 
  }
}


export const submitFinalObservationFormLoadingStop = (state, { payload }) => {
  return {
      ...state,
      finalObservationSubmitLoader: false 
  }
}



export const fetchFinalObservationSuccess = (state, { payload }) => {
  return {
      ...state,
      finalObservationFetchLoader: false,
      finalObservationList: payload
  }
}


export const fetchFinalObservationFailure = (state, { payload }) => {
  return {
      ...state,
      finalObservationFetchLoader: false
  }
}


export const fetchFinalObservationLoading = (state, { payload }) => {
  return {
      ...state,
      finalObservationFetchLoader: true 
  }
}


export const fetchFinalObservationLoadingStop = (state, { payload }) => {
  return {
      ...state,
      finalObservationFetchLoader: false 
  }
}


export const changeFinalObservationForm = (state, { payload }) => {
  let updatedFinalObservationForm= _.cloneDeep(state.finalObservationForm);
  updatedFinalObservationForm.map((obj) => {
    if (obj.id == payload.id) {
      obj[payload.edited_field] = payload.edited_value
    }
  });

  return {
    ...state,
    finalObservationForm: updatedFinalObservationForm
  }
}


export const addFinalObservationForm = (state, { payload }) => {
  let updatedFinalObservationForm= _.cloneDeep(state.finalObservationForm);
  updatedFinalObservationForm.push(payload);
  return {
    ...state,
    finalObservationForm: updatedFinalObservationForm
  }
}


export const removeFinalObservationForm = (state, { payload }) => {
  let updatedFinalObservationForm= []

  state.finalObservationForm.map((obj) => {
    if (obj.id != payload.id) {
        updatedFinalObservationForm.push(obj)
    }
  });

  return {
    ...state,
    finalObservationForm: updatedFinalObservationForm
  }
}


export const finalObservationFormValidationFailed = (state, { payload }) => {
  return {
    ...state,
    finalObservationFormValidation: payload
  }
}



export const sendAttachmentSuccess = (state, { payload }) => {
  return {
      ...state,
      sendAttachmentLoader: false,
      feedBackForm: {}
  }
}


export const sendAttachmentFailure = (state, { payload }) => {
  return {
      ...state,
      sendAttachmentLoader: false 
  }
}

export const sendAttachmentLoading = (state, { payload }) => {
  return {
      ...state,
      sendAttachmentLoader: true 
  }
}

export const sendAttachmentLoadingStop = (state, { payload }) => {
  return {
      ...state,
      sendAttachmentLoader: false 
  }
}


export const updateDashboardSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.searchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;
    return {
        ...state,
        searchFilters: {
            ...state.searchFilters,
            ...updated_search_filters
        }
    }
}



export const reducer = createReducer(INITIAL_STATE, {

    [DashboardTypes.DO_NOTHING] 				                 :doNothing,
    [DashboardTypes.FEED_BACK_SUCCESS]                   :feedBackSuccess,
    [DashboardTypes.FEED_BACK_FAILURE]                   :feedBackFailure,
    [DashboardTypes.FEED_BACK_LOADING]                   :feedBackLoading,
    [DashboardTypes.FEED_BACK_LOADING_STOP]              :feedBackLoadingStop,
    [DashboardTypes.CHANGE_FEED_BACK_FORM]               :changeFeedBackForm,
    [DashboardTypes.FEED_BACK_FORM_VALIDATION_FAILED]    :feedBackFormValidationFailed,




    //[DashboardTypes.SEND_ATTACHMENT_SUCCESS]                   :sendAttachment,
    [DashboardTypes.SEND_ATTACHMENT_SUCCESS]                   :sendAttachmentSuccess,
    [DashboardTypes.SEND_ATTACHMENT_FAILURE]                   :sendAttachmentFailure,
    [DashboardTypes.SEND_ATTACHMENT_LOADING]                   :sendAttachmentLoading,
    [DashboardTypes.SEND_ATTACHMENT_LOADING_STOP]              :sendAttachmentLoadingStop,


    [DashboardTypes.OUT_STANDING_SUCCESS]                 :outStandingSuccess,
    [DashboardTypes.OUT_STANDING_FAILURE]                 :outStandingFailure,
    [DashboardTypes.OUT_STANDING_LOADING]                 :outStandingLoading,
    [DashboardTypes.OUT_STANDING_LOADING_STOP]            :outStandingLoadingStop,



    [DashboardTypes.FETCH_COMMUNICATIONS_SUCCESS]         :fetchCommunicationsSuccess,
    [DashboardTypes.FETCH_COMMUNICATIONS_FAILURE]         :fetchCommunicationsFailure,
    [DashboardTypes.FETCH_COMMUNICATIONS_LOADING]         :fetchCommunicationsLoading,
    [DashboardTypes.FETCH_COMMUNICATIONS_LOADING_STOP]    :fetchCommunicationsLoadingStop,



    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_SUCCESS]         :fetchCommunicationsAttachmentsSuccess,
    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_FAILURE]         :fetchCommunicationsAttachmentsFailure,
    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_LOADING]         :fetchCommunicationsAttachmentsLoading,
    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_LOADING_STOP]    :fetchCommunicationsAttachmentsLoadingStop,




    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS_SUCCESS]         :fetchCommunicationsAttachmentsDetailsSuccess,
    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS_FAILURE]         :fetchCommunicationsAttachmentsDetailsFailure,
    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS_LOADING]         :fetchCommunicationsAttachmentsDetailsLoading,
    [DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS_LOADING_STOP]    :fetchCommunicationsAttachmentsDetailsLoadingStop,

    //[DashboardTypes.SUBMIT_FINAL_OBSERVATION_FORM]                 :submitFinalObservationForm,
    [DashboardTypes.SUBMIT_FINAL_OBSERVATION_FORM_SUCCESS]         :submitFinalObservationFormSuccess,
    [DashboardTypes.SUBMIT_FINAL_OBSERVATION_FORM_FAILURE]         :submitFinalObservationFormFailure,
    [DashboardTypes.SUBMIT_FINAL_OBSERVATION_FORM_LOADING]         :submitFinalObservationFormLoading,
    [DashboardTypes.SUBMIT_FINAL_OBSERVATION_FORM_LOADING_STOP]    :submitFinalObservationFormLoadingStop,
    
    //[DashboardTypes.FETCH_FINAL_OBSERVATION]                 :fetchFinalObservation,
    [DashboardTypes.FETCH_FINAL_OBSERVATION_SUCCESS]         :fetchFinalObservationSuccess,
    [DashboardTypes.FETCH_FINAL_OBSERVATION_FAILURE]         :fetchFinalObservationFailure,
    [DashboardTypes.FETCH_FINAL_OBSERVATION_LOADING]         :fetchFinalObservationLoading,
    [DashboardTypes.FETCH_FINAL_OBSERVATION_LOADING_STOP]    :fetchFinalObservationLoadingStop,



    [DashboardTypes.CHANGE_FINAL_OBSERVATION_FORM]                :changeFinalObservationForm,
    [DashboardTypes.ADD_FINAL_OBSERVATION_FORM]                   :addFinalObservationForm,
    [DashboardTypes.REMOVE_FINAL_OBSERVATION_FORM]                :removeFinalObservationForm,
    [DashboardTypes.FINAL_OBSERVATION_FORM_VALIDATION_FAILED]     :finalObservationFormValidationFailed,



    [DashboardTypes.UPDATE_DASHBOARD_SEARCH_FILTERS]     :updateDashboardSearchFilters

});