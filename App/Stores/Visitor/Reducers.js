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
	  searchCustomerValidation: INITIAL_STATE.searchCustomerValidation
	}
};

export const searchCustomerValidationFailed = (state, { payload }) => ({
    ...state,
    searchCustomerValidation: {
        ...payload
    }
});






export const registerCustomerSuccess = (state, {payload}) => ({
  ...state,
  registerCustomerForm: INITIAL_STATE.registerCustomerForm,
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
	  }
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




export const reducer = createReducer(INITIAL_STATE, {
  	//[UserTypes.USER_LOGIN_LOADING] : searchCustomer,
	[VisitorTypes.SEARCH_CUSTOMER_SUCCESS] 	: searchCustomerSuccess,
	[VisitorTypes.SEARCH_CUSTOMER_FAILURE] 	: searchCustomerFailure,
	[VisitorTypes.SEARCH_CUSTOMER_LOADING] 	: searchCustomerLoading,
	[VisitorTypes.SEARCH_CUSTOMER_LOADING_STOP]: searchCustomerLoadingStop,
	[VisitorTypes.CHANGE_SEARCH_CUSTOMER_FORM] : changeSearchCustomerForm,
	[VisitorTypes.SEARCH_CUSTOMER_VALIDATION_FAILED] : searchCustomerValidationFailed,



	[VisitorTypes.REGISTER_CUSTOMER_SUCCESS] 	 		: registerCustomerSuccess,
	[VisitorTypes.REGISTER_CUSTOMER_FAILURE] 	 		: registerCustomerFailure,
	[VisitorTypes.REGISTER_CUSTOMER_LOADING] 	 		: registerCustomerLoading,
	[VisitorTypes.REGISTER_CUSTOMER_LOADING_STOP]		: registerCustomerLoadingStop, 
	[VisitorTypes.CHANGE_REGISTER_CUSTOMER_FORM] 		: changeRegisterCustomerForm,
	[VisitorTypes.REGISTER_CUSTOMER_VALIDATION_FAILED]  : registerCustomerValidationFailed,
	[VisitorTypes.SHOW_OPEN_LEAD_PROMPT]  				: showOpenLeadPrompt,
	[VisitorTypes.HIDE_OPEN_LEAD_PROMPT]  				: hideOpenLeadPrompt

});