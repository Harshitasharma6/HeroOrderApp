import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { SubDealersTypes } from './Actions'


export const getAllSubDealersSuccess = (state, { payload }) => ({
  ...state,
  SubDealersData: payload,
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: false
  }
});

export const getAllSubDealersFailure = (state) => ({
  ...state,
  SubDealersData: [],
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: false
  }
});


export const getAllSubDealersLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: true
  }
});


export const getAllSubDealersLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllSubDealersLoader: false
  }
});

export const doNothing = (state) => ({
  ...state
});


export const createSubDealerSuccess = (state, {payload}) => ({
  ...state,
  createSubDealerForm: INITIAL_STATE.createSubDealerForm,
  currentSubDealerData: payload,
  loaders: {
  	...state.loaders,
  	createSubDealerLoader: false
  }
});

export const createSubDealerFailure = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	createSubDealerLoader: false
  }
});

export const createSubDealerLoading = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	createSubDealerLoader: true
  }
});

export const createSubDealerLoadingStop = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
  	createSubDealerLoader: false
  }
});


export const changeSubDealerForm = (state, { payload }) => {
  	const {
		edited_field,
		edited_value
	} = payload;

	let changed_entity = {};
	changed_entity[edited_field] = edited_value;
	return {
	  ...state,
	  createSubDealerForm : {
	  	...state.createSubDealerForm,
	  	...changed_entity
	  },
	  createSubDealerValidation: INITIAL_STATE.createSubDealerValidation
	}
};

export const createSubDealerValidationFailed = (state, { payload }) => ({
    ...state,
    createSubDealerValidation: {
        ...payload
    }
});

export const setRegistrationForm = (state, {payload}) => ({
  ...state,
  createSubDealerForm: payload
});

export const clearRegistrationForm = (state, {payload}) => ({
  ...state,
  createSubDealerForm: INITIAL_STATE.createSubDealerForm,
  
});





export const reducer = createReducer(INITIAL_STATE, {
  [SubDealersTypes.GET_ALL_SUB_DEALERS_SUCCESS]     : getAllSubDealersSuccess,
  [SubDealersTypes.GET_ALL_SUB_DEALERS_FAILURE]     : getAllSubDealersFailure,
  [SubDealersTypes.GET_ALL_SUB_DEALERS_LOADING]     : getAllSubDealersLoading,
  [SubDealersTypes.GET_ALL_SUB_DEALERS_LOADING_STOP]: getAllSubDealersLoadingStop,
  [SubDealersTypes.DO_NOTHING] 				                 :doNothing,

  [SubDealersTypes.CREATE_SUB_DEALER_SUCCESS] 	 		       : createSubDealerSuccess,
	[SubDealersTypes.CREATE_SUB_DEALER_FAILURE] 	 		       : createSubDealerFailure,
	[SubDealersTypes.CREATE_SUB_DEALER_LOADING]             : createSubDealerLoading,
	[SubDealersTypes.CREATE_SUB_DEALER_LOADING_STOP]        : createSubDealerLoadingStop, 
	[SubDealersTypes.CHANGE_SUB_DEALER_FORM] 		             : changeSubDealerForm,
  [SubDealersTypes.CREATE_SUB_DEALER_VALIDATION_FAILED]   : createSubDealerValidationFailed,
  

  [SubDealersTypes.SET_REGISTRATION_FORM]  				       : setRegistrationForm,
	[SubDealersTypes.CLEAR_REGISTRATION_FORM]  		         : clearRegistrationForm,


  
});