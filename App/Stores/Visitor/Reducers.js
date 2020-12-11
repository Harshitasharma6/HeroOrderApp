// searchCustomer: ['payload'],
// 	searchCustomerSuccess:  ['payload'],
// 	searchCustomerFailure: null
// 	searchCustomerLoading: null,
// 	searchCustomerLoadingStop: null
// 	changeSearchCustomerForm: ['payload']




import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { VisitorTypes } from './Actions'

export const searchCustomerSuccess = (state, {payload}) => ({
  ...state,
  visitorSearchSuccessData: payload,
  loaders: {
  	...state.loaders,
  	searchCustomerLoader: false
  }
});


export const searchCustomerFailure = (state) => ({
  ...state,
  visitorSearchSuccessData: {},
  loaders: {
  	...state.loaders,
  	searchCustomerLoader: false
  }
});

export const searchCustomerLoading = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	searchCustomerLoader: true
  }
});

export const searchCustomerLoadingStop = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	searchCustomerLoader: false
  }
});


export const changeSearchCustomerForm = (state, { payload }) => {
  	const {
		edited_field,
		edited_value
	} = payload;

	let changed_entity = {};
	changed_entity[edited_field] = (edited_value + '').trim();
	return {
	  ...state,
	  searchCustomerForm : {
	  	...state.searchCustomerForm,
	  	...changed_entity
	  },
	  searchCustomerValidation: INITIAL_STATE.searchCustomerValidation,
	  showOpenLeadPrompt: false
	}
};

export const searchCustomerValidationFailed = (state, { payload }) => ({
    ...state,
    searchCustomerValidation: {
        ...payload
    }
});


export const clearSearchCustomerForm= (state) => ({
    ...state,
    searchCustomerForm: INITIAL_STATE.searchCustomerForm
});


export const registerCustomerSuccess = (state, {payload}) => ({
  ...state,
  registerCustomerForm: INITIAL_STATE.registerCustomerForm,
  currentVisitorData: payload,
  loaders: {
  	...state.loaders,
  	registerCustomerLoader: false
  }
});


export const updateVisitorSuccess = (state, {payload}) => ({
  ...state,
  registerCustomerForm: INITIAL_STATE.registerCustomerForm,
  currentVisitorData: payload,
  loaders: {
    ...state.loaders,
    registerCustomerLoader: false
  }
});


export const registerCustomerFailure = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	registerCustomerLoader: false
  }
});

export const registerCustomerLoading = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	registerCustomerLoader: true
  }
});

export const registerCustomerLoadingStop = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	registerCustomerLoader: false
  }
});


export const changeRegisterCustomerForm = (state, { payload }) => {
  	const {
		edited_field,
		edited_value
	} = payload;

	let changed_entity = {};
	changed_entity[edited_field] = (edited_value + '').trim();
	return {
	  ...state,
	  registerCustomerForm : {
	  	...state.registerCustomerForm,
	  	...changed_entity
	  },
	  registerCustomerValidation: INITIAL_STATE.registerCustomerValidation
	}
};

export const registerCustomerValidationFailed = (state, { payload }) => ({
    ...state,
    registerCustomerValidation: {
        ...payload
    }
});


export const showOpenLeadPrompt = (state) => ({
  ...state,
  showOpenLeadPrompt: true
});


export const hideOpenLeadPrompt = (state) => ({
  ...state,
  showOpenLeadPrompt: false
});


export const createFeedbackSuccess = (state, {payload}) => ({
  ...state,
  feedbackForm: INITIAL_STATE.feedbackForm,
  loaders: {
    ...state.loaders,
    createFeedbackLoader: false
  }
});


export const createFeedbackFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    createFeedbackLoader: false
  }
});

export const createFeedbackLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    createFeedbackLoader: true
  }
});

export const createFeedbackLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    createFeedbackLoader: false
  }
});


export const changeCreateFeedbackForm = (state, { payload }) => {
    const {
    edited_field,
    edited_value
  } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = (edited_value + '').trim();
  return {
    ...state,
    feedbackForm: {
      ...state.feedbackForm,
      ...changed_entity
    },
    createFeedbackValidation: INITIAL_STATE.createFeedbackValidation
  }
};

export const createFeedbackValidationFailed = (state, { payload }) => ({
    ...state,
    createFeedbackValidation: {
        ...payload
    }
});



export const getAllVisitsSuccess = (state, {payload}) => ({
  ...state,
  visitsMapping: payload,
  loaders: {
    ...state.loaders,
    getAllVisitsLoader: false
  }
});


export const getAllVisitsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllVisitsLoader: false
  }
});


export const getAllVisitsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllVisitsLoader: true
  }
});


export const getAllVisitsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllVisitsLoader: false
  }
});




export const getFeedbacksSuccess = (state, {payload}) => ({
  ...state,
  feedbacksMapping: payload,
  loaders: {
    ...state.loaders,
    getFeedbacksLoader: false
  }
});


export const getFeedbacksFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getFeedbacksLoader: false
  }
});


export const getFeedbacksLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getFeedbacksLoader: true
  }
});


export const getFeedbacksLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getFeedbacksLoader: false
  }
});

export const setCurrentEnquiry = (state, {payload}) => ({
  ...state,
  currentEnquiryId: payload
});


export const clearCurrentEnquiry = (state) => ({
  ...state,
  currentEnquiryId: ''
});


export const setRegistrationForm = (state, {payload}) => ({
  ...state,
  registerCustomerForm: payload
});


export const clearRegistrationForm = (state, {payload}) => ({
  ...state,
  registerCustomerForm: INITIAL_STATE.registerCustomerForm,
  registerCustomerCallForm: INITIAL_STATE.registerCustomerCallForm
});






export const registerCustomerCallSuccess = (state, {payload}) => ({
  ...state,
  registerCustomerCallForm: INITIAL_STATE.registerCustomerCallForm,
  loaders: {
    ...state.loaders,
    registerCustomerCallLoader: false
  }
});

export const registerCustomerCallFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    registerCustomerCallLoader: false
  }
});

export const registerCustomerCallLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    registerCustomerCallLoader: true
  }
});

export const registerCustomerCallLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    registerCustomerCallLoader: false
  }
});


export const changeRegisterCustomerCallForm = (state, { payload }) => {
    const {
    edited_field,
    edited_value
  } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = (edited_value + '').trim();
  return {
    ...state,
    registerCustomerCallForm : {
      ...state.registerCustomerCallForm,
      ...changed_entity
    },
    registerCustomerCallValidation: INITIAL_STATE.registerCustomerCallValidation
  }
};

export const clearRegisterCustomerCallForm = (state, {payload}) => ({
  ...state,
  registerCustomerCallForm: INITIAL_STATE.registerCustomerCallForm
});

export const registerCustomerCallValidationFailed = (state, {payload}) => ({
  ...state,
    registerCustomerCallValidation: {
        ...payload
    }
});


 //payBookingForm: {}
//payBookingFormLoader: false
//payBookingFormValidation


  // payBooking: ['payload'],
  // payBookingSuccess:  ['payload'],
  // payBookingFailure: null,
  // payBookingLoading: null,
  // payBookingLoadingStop: null,
  // changePayBookingForm: ['payload'],
  // clearPayBookingForm
  // payBookingValidationFailed: ['payload'],



  export const payBookingSuccess = (state, {payload}) => ({
  ...state,
  payBookingForm: INITIAL_STATE.payBookingForm,
  loaders: {
    ...state.loaders,
    payBookingLoader: false
  }
});

export const payBookingFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    payBookingLoader: false
  }
});

export const payBookingLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    payBookingLoader: true
  }
});

export const payBookingLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    payBookingLoader: false
  }
});


export const changePayBookingForm = (state, { payload }) => {
    const {
    edited_field,
    edited_value
  } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = (edited_value + '').trim();
  return {
    ...state,
    payBookingForm : {
      ...state.payBookingForm,
      ...changed_entity
    },
    payBookingValidation: INITIAL_STATE.payBookingValidation
  }
};


export const clearPayBookingForm = (state, {payload}) => ({
  ...state,
  payBookingForm: INITIAL_STATE.payBookingForm
});

export const payBookingValidationFailed = (state, {payload}) => ({
  ...state,
    payBookingValidation: {
        ...payload
    }
});




export const registerCustomerOutgoingCallSuccess = (state, {payload}) => ({
  ...state,
  registerCustomerOutgoingCallForm: INITIAL_STATE.registerCustomerOutgoingCallForm,
  loaders: {
    ...state.loaders,
    registerCustomerOutgoingCallLoader: false
  }
});

export const registerCustomerOutgoingCallFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    registerCustomerOutgoingCallLoader: false
  }
});

export const registerCustomerOutgoingCallLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    registerCustomerOutgoingCallLoader: true
  }
});

export const registerCustomerOutgoingCallLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    registerCustomerOutgoingCallLoader: false
  }
});

export const changeRegisterCustomerOutgoingCallForm = (state, { payload }) => {
    const {
    edited_field,
    edited_value
  } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = (edited_value + '').trim();
  return {
    ...state,
    registerCustomerOutgoingCallForm : {
      ...state.registerCustomerOutgoingCallForm,
      ...changed_entity
    },
    registerCustomerOutgoingCallValidation: INITIAL_STATE.registerCustomerOutgoingCallValidation
  }
};

export const clearRegisterCustomerOutgoingCallForm = (state) => ({
  ...state,
  registerCustomerOutgoingCallForm: INITIAL_STATE.registerCustomerOutgoingCallForm
});

export const registerCustomerOutgoingCallValidationFailed = (state, {payload}) => ({
  ...state,
    registerCustomerOutgoingCallValidation: {
        ...payload
    }
});



export const getAllFollowUpsSuccess = (state, {payload}) => ({
  ...state,
  followUpsMapping: payload,
  loaders: {
    ...state.loaders,
    getAllFollowUpsLoader: false
  }
});


export const getAllFollowUpsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllFollowUpsLoader: false
  }
});


export const getAllFollowUpsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllFollowUpsLoader: true
  }
});


export const getAllFollowUpsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllFollowUpsLoader: false
  }
});
//getFeedbacksLoader: false,
//followUpsMapping
export const updateBookingSuccess = (state, {payload}) => ({
  ...state,
  updateBookingForm: INITIAL_STATE.updateBookingForm,
  bookingInfoForm: {},
  loaders: {
    ...state.loaders,
    updateBookingLoader: false
  }
});

export const updateBookingFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    updateBookingLoader: false
  }
});

export const updateBookingLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    updateBookingLoader: true
  }
});

export const updateBookingLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    updateBookingLoader: false
  }
});


export const changeUpdateBookingForm = (state, { payload }) => {
    const {
    edited_field,
    edited_value
  } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = (edited_value + '').trim();
  return {
    ...state,
    updateBookingForm : {
      ...state.updateBookingForm,
      ...changed_entity
    },
    updateBookingValidation: INITIAL_STATE.updateBookingValidation
  }
};


export const clearUpdateBookingForm = (state, {payload}) => ({
  ...state,
  updateBookingForm: INITIAL_STATE.updateBookingForm
});



export const setUpdateBookingForm = (state, {payload}) => ({
  ...state,
  updateBookingForm: payload
});




export const updateBookingValidationFailed = (state, {payload}) => ({
  ...state,
  updateBookingValidation: {
        ...payload
    }
});




export const newBookingSuccess = (state, {payload}) => ({
  ...state,
  newBookingForm: INITIAL_STATE.newBookingForm,
  loaders: {
    ...state.loaders,
    newBookingLoader: false
  }
});

export const newBookingFailure = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    newBookingLoader: false
  }
});

export const newBookingLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    newBookingLoader: true
  }
});

export const newBookingLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    newBookingLoader: false
  }
});


export const changeNewBookingForm = (state, { payload }) => {
    const {
    edited_field,
    edited_value
  } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = (edited_value + '').trim();
  return {
    ...state,
    newBookingForm : {
      ...state.newBookingForm,
      ...changed_entity
    },
    newBookingValidation: INITIAL_STATE.newBookingValidation
  }
};


export const clearNewBookingForm = (state, {payload}) => ({
  ...state,
  newBookingForm: INITIAL_STATE.newBookingForm
});



export const setNewBookingForm = (state, {payload}) => ({
  ...state,
  newBookingForm: payload
});




export const newBookingValidationFailed = (state, {payload}) => ({
  ...state,
  newBookingValidation: {
        ...payload
    }
});


export const setBookingInfoForm = (state, {payload}) => ({
  ...state,
  bookingInfoForm: payload
});


export const reducer = createReducer(INITIAL_STATE, {
	[VisitorTypes.SEARCH_CUSTOMER_SUCCESS] 	             : searchCustomerSuccess,
	[VisitorTypes.SEARCH_CUSTOMER_FAILURE] 	             : searchCustomerFailure,
	[VisitorTypes.SEARCH_CUSTOMER_LOADING] 	             : searchCustomerLoading,
	[VisitorTypes.SEARCH_CUSTOMER_LOADING_STOP]          : searchCustomerLoadingStop,
	[VisitorTypes.CLEAR_SEARCH_CUSTOMER_FORM]            : clearSearchCustomerForm,
	[VisitorTypes.CHANGE_SEARCH_CUSTOMER_FORM]           : changeSearchCustomerForm,
	[VisitorTypes.SEARCH_CUSTOMER_VALIDATION_FAILED]     : searchCustomerValidationFailed,

	[VisitorTypes.REGISTER_CUSTOMER_SUCCESS] 	 		       : registerCustomerSuccess,
	[VisitorTypes.REGISTER_CUSTOMER_FAILURE] 	 		       : registerCustomerFailure,
	[VisitorTypes.REGISTER_CUSTOMER_LOADING]             : registerCustomerLoading,
	[VisitorTypes.REGISTER_CUSTOMER_LOADING_STOP]        : registerCustomerLoadingStop, 
	[VisitorTypes.CHANGE_REGISTER_CUSTOMER_FORM] 		     : changeRegisterCustomerForm,
	[VisitorTypes.REGISTER_CUSTOMER_VALIDATION_FAILED]   : registerCustomerValidationFailed,

  [VisitorTypes.UPDATE_VISITOR_SUCCESS]                : updateVisitorSuccess,
	[VisitorTypes.SHOW_OPEN_LEAD_PROMPT]  				       : showOpenLeadPrompt,
	[VisitorTypes.HIDE_OPEN_LEAD_PROMPT]  				       : hideOpenLeadPrompt,
	[VisitorTypes.SET_REGISTRATION_FORM]  				       : setRegistrationForm,
	[VisitorTypes.CLEAR_REGISTRATION_FORM]  		         : clearRegistrationForm,

  [VisitorTypes.CREATE_FEEDBACK_SUCCESS]               : createFeedbackSuccess,
  [VisitorTypes.CREATE_FEEDBACK_FAILURE]               : createFeedbackFailure,
  [VisitorTypes.CREATE_FEEDBACK_LOADING]               : createFeedbackLoading,
  [VisitorTypes.CREATE_FEEDBACK_LOADING_STOP]          : createFeedbackLoadingStop,
  [VisitorTypes.CHANGE_CREATE_FEEDBACK_FORM]           : changeCreateFeedbackForm,
  [VisitorTypes.CREATE_FEEDBACK_VALIDATION_FAILED]     : createFeedbackValidationFailed,

  [VisitorTypes.GET_ALL_VISITS_SUCCESS]                : getAllVisitsSuccess,
  [VisitorTypes.GET_ALL_VISITS_FAILURE]                : getAllVisitsFailure,
  [VisitorTypes.GET_ALL_VISITS_LOADING]                : getAllVisitsLoading,
  [VisitorTypes.GET_ALL_VISITS_LOADING_STOP]           : getAllVisitsLoadingStop,


  [VisitorTypes.GET_ALL_FOLLOW_UPS_SUCCESS]                : getAllFollowUpsSuccess,
  [VisitorTypes.GET_ALL_FOLLOW_UPS_FAILURE]                : getAllFollowUpsFailure,
  [VisitorTypes.GET_ALL_FOLLOW_UPS_LOADING]                : getAllFollowUpsLoading,
  [VisitorTypes.GET_ALL_FOLLOW_UPS_LOADING_STOP]           : getAllFollowUpsLoadingStop,



	[VisitorTypes.GET_FEEDBACKS_SUCCESS]                 : getFeedbacksSuccess,
	[VisitorTypes.GET_FEEDBACKS_FAILURE]                 : getFeedbacksFailure,
	[VisitorTypes.GET_FEEDBACKS_LOADING]                 : getFeedbacksLoading,
	[VisitorTypes.GET_FEEDBACKS_LOADING_STOP]            : getFeedbacksLoadingStop,

	[VisitorTypes.SET_CURRENT_ENQUIRY]      	           : setCurrentEnquiry,
	[VisitorTypes.CLEAR_CURRENT_ENQUIRY]      	         : clearCurrentEnquiry,

  [VisitorTypes.REGISTER_CUSTOMER_CALL_SUCCESS]        : registerCustomerCallSuccess,
  [VisitorTypes.REGISTER_CUSTOMER_CALL_FAILURE]        : registerCustomerCallFailure,
  [VisitorTypes.REGISTER_CUSTOMER_CALL_LOADING]        : registerCustomerCallLoading,
  [VisitorTypes.REGISTER_CUSTOMER_CALL_LOADING_STOP]   : registerCustomerCallLoadingStop,
  [VisitorTypes.CHANGE_REGISTER_CUSTOMER_CALL_FORM]    : changeRegisterCustomerCallForm,
  [VisitorTypes.REGISTER_CUSTOMER_CALL_VALIDATION_FAILED]: registerCustomerCallValidationFailed,


  [VisitorTypes.REGISTER_CUSTOMER_OUTGOING_CALL_SUCCESS]          : registerCustomerOutgoingCallSuccess,
  [VisitorTypes.REGISTER_CUSTOMER_OUTGOING_CALL_FAILURE]          : registerCustomerOutgoingCallFailure,
  [VisitorTypes.REGISTER_CUSTOMER_OUTGOING_CALL_LOADING]          : registerCustomerOutgoingCallLoading,
  [VisitorTypes.REGISTER_CUSTOMER_OUTGOING_CALL_LOADING_STOP]     : registerCustomerOutgoingCallLoadingStop,
  [VisitorTypes.CHANGE_REGISTER_CUSTOMER_OUTGOING_CALL_FORM]      : changeRegisterCustomerOutgoingCallForm,
  [VisitorTypes.CLEAR_REGISTER_CUSTOMER_OUTGOING_CALL_FORM]       : clearRegisterCustomerOutgoingCallForm,
  [VisitorTypes.REGISTER_CUSTOMER_OUTGOING_CALL_VALIDATION_FAILED]: registerCustomerOutgoingCallValidationFailed,


  [VisitorTypes.PAY_BOOKING_SUCCESS]           : payBookingSuccess,
  [VisitorTypes.PAY_BOOKING_FAILURE]           : payBookingFailure,
  [VisitorTypes.PAY_BOOKING_LOADING]           : payBookingLoading,
  [VisitorTypes.PAY_BOOKING_LOADING_STOP]      : payBookingLoadingStop,
  [VisitorTypes.CHANGE_PAY_BOOKING_FORM]       : changePayBookingForm,
  [VisitorTypes.CLEAR_PAY_BOOKING_FORM]        : clearPayBookingForm,
  [VisitorTypes.PAY_BOOKING_VALIDATION_FAILED] : payBookingValidationFailed,

  [VisitorTypes.UPDATE_BOOKING_SUCCESS]          : updateBookingSuccess,
  [VisitorTypes.UPDATE_BOOKING_FAILURE]          : updateBookingFailure,
  [VisitorTypes.UPDATE_BOOKING_LOADING]          : updateBookingLoading,
  [VisitorTypes.UPDATE_BOOKING_LOADING_STOP]     : updateBookingLoadingStop,
  [VisitorTypes.CHANGE_UPDATE_BOOKING_FORM]      : changeUpdateBookingForm,
  [VisitorTypes.CLEAR_UPDATE_BOOKING_FORM]       : clearUpdateBookingForm,
  [VisitorTypes.SET_UPDATE_BOOKING_FORM]         : setUpdateBookingForm,
  [VisitorTypes.UPDATE_BOOKING_VALIDATION_FAILED]: updateBookingValidationFailed,


  [VisitorTypes.NEW_BOOKING_SUCCESS]          : newBookingSuccess,
  [VisitorTypes.NEW_BOOKING_FAILURE]          : newBookingFailure,
  [VisitorTypes.NEW_BOOKING_LOADING]          : newBookingLoading,
  [VisitorTypes.NEW_BOOKING_LOADING_STOP]     : newBookingLoadingStop,
  [VisitorTypes.CHANGE_NEW_BOOKING_FORM]      : changeNewBookingForm,
  [VisitorTypes.CLEAR_NEW_BOOKING_FORM]       : clearNewBookingForm,
  [VisitorTypes.SET_NEW_BOOKING_FORM]         : setNewBookingForm,
  [VisitorTypes.NEW_BOOKING_VALIDATION_FAILED]: newBookingValidationFailed,


  [VisitorTypes.SET_BOOKING_INFO_FORM]         : setBookingInfoForm
});