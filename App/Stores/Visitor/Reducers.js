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
	changed_entity[edited_field] = edited_value;
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
	changed_entity[edited_field] = edited_value;
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
  changed_entity[edited_field] = edited_value;
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
  changed_entity[edited_field] = edited_value;
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


  // [VisitorTypes.REGISTER_CUSTOMER_CALL_SUCCESS]        : registerCustomerCallSuccess,
  // [VisitorTypes.REGISTER_CUSTOMER_CALL_FAILURE]        : registerCustomerCallFailure,
  // [VisitorTypes.REGISTER_CUSTOMER_CALL_LOADING]        : registerCustomerCallLoading,
  // [VisitorTypes.REGISTER_CUSTOMER_CALL_LOADING_STOP]   : registerCustomerCallLoadingStop,
  // [VisitorTypes.CHANGE_REGISTER_CUSTOMER_CALL_FORM]    : changeRegisterCustomerCallForm


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
  [VisitorTypes.REGISTER_CUSTOMER_CALL_VALIDATION_FAILED]: registerCustomerCallValidationFailed

});