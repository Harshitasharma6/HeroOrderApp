import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { offlineActionTypes, reducer as network } from "react-native-offline";
import { DealersTypes } from './Actions'
import _ from 'lodash';

export const getAllDealersSuccess = (state, { payload }) => ({
  ...state,
  DealersData: payload,
  loaders: {
    ...state.loaders,
    getAllDealersLoader: false
  }
});

export const getAllDealersFailure = (state) => ({
  ...state,
  DealersData:[],
  loaders: {
    ...state.loaders,
    getAllDealersLoader: false
  }
});


export const getAllDealersLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealersLoader: true
  }
});


export const getAllDealersLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealersLoader: false
  }
});

export const doNothing = (state) => ({
  ...state
});

export const getAllDealerClaimsSuccess = (state, { payload }) => ({
  ...state,
  DealerClaimsData: payload,
  loaders: {
    ...state.loaders,
    getAllDealerClaimsLoader: false
  }
});

export const getAllDealerClaimsFailure = (state) => ({
  ...state,
  DealerClaimsData: [],
  loaders: {
    ...state.loaders,
    getAllDealerClaimsLoader: false
  }
});


export const getAllDealerClaimsLoading = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealerClaimsLoader: true
  }
});


export const getAllDealerClaimsLoadingStop = (state) => ({
  ...state,
  loaders: {
    ...state.loaders,
    getAllDealerClaimsLoader: false,
  }
});




export const createDealerClaimSuccess = (state, {payload}) => ({
  ...state,
  createDealerClaimForm: INITIAL_STATE.createDealerClaimForm,
  currentDealerClaimData: payload,
  loaders: {
  	...state.loaders,
    createDealerClaimLoader: false,
    createDealerDraftLoader: false,
  }
});

export const createDealerClaimFailure = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
    createDealerClaimLoader: false,
    createDealerDraftLoader: false,
  }
});

export const createDealerClaimLoading = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
    createDealerClaimLoader: true,
    createDealerDraftLoader: true,
  }
});

export const createDealerClaimLoadingStop = (state) => ({
  ...state,
  loaders: {
  	...state.loaders,
    createDealerClaimLoader: false,
    createDealerDraftLoader: false,
  }
});


export const changeDealerClaimForm = (state, { payload }) => {
  	const {
		edited_field,
		edited_value
	} = payload;

	let changed_entity = {};
	changed_entity[edited_field] = edited_value;
	return {
	  ...state,
	  createDealerClaimForm : {
	  	...state.createDealerClaimForm,
	  	...changed_entity
	  },
	  createDealerClaimValidation: INITIAL_STATE.createDealerClaimValidation
	}
};

export const createDealerClaimValidationFailed = (state, { payload }) => ({
    ...state,
    createDealerClaimValidation: {
        ...payload
    }
});

export const setRegistrationForm = (state, {payload}) => ({
  ...state,
  createDealerClaimForm: payload
});

export const clearRegistrationForm = (state, {payload}) => ({
  ...state,
  createDealerClaimForm: INITIAL_STATE.createDealerClaimForm,
  
});

export const updatDealerClaimsSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.dealerSearchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;

  return {
      ...state,
      dealerSearchFilters: {
          ...state.dealerSearchFilters,
          ...updated_search_filters
      },
      openMoreFilters: false
  }
};






export const reducer = createReducer(INITIAL_STATE, {
  [DealersTypes.GET_ALL_DEALERS_SUCCESS]     : getAllDealersSuccess,
  [DealersTypes.GET_ALL_DEALERS_FAILURE]     : getAllDealersFailure,
  [DealersTypes.GET_ALL_DEALERS_LOADING]     : getAllDealersLoading,
  [DealersTypes.GET_ALL_DEALERS_LOADING_STOP]: getAllDealersLoadingStop,
  [DealersTypes.DO_NOTHING] 				                 :doNothing,
  
  [DealersTypes.GET_ALL_DEALER_CLAIMS_SUCCESS]     : getAllDealerClaimsSuccess,
  [DealersTypes.GET_ALL_DEALER_CLAIMS_FAILURE]     : getAllDealerClaimsFailure,
  [DealersTypes.GET_ALL_DEALER_CLAIMS_LOADING]     : getAllDealerClaimsLoading,
  [DealersTypes.GET_ALL_DEALER_CLAIMS_LOADING_STOP]: getAllDealerClaimsLoadingStop,

  [DealersTypes.CREATE_DEALER_CLAIM_SUCCESS] 	 		       : createDealerClaimSuccess,
	[DealersTypes.CREATE_DEALER_CLAIM_FAILURE] 	 		       : createDealerClaimFailure,
	[DealersTypes.CREATE_DEALER_CLAIM_LOADING]             : createDealerClaimLoading,
	[DealersTypes.CREATE_DEALER_CLAIM_LOADING_STOP]        : createDealerClaimLoadingStop, 
	[DealersTypes.CHANGE_DEALER_CLAIM_FORM] 		             : changeDealerClaimForm,
  [DealersTypes.CREATE_DEALER_CLAIM_VALIDATION_FAILED]   : createDealerClaimValidationFailed,
  

  [DealersTypes.SET_REGISTRATION_FORM]  				       : setRegistrationForm,
	[DealersTypes.CLEAR_REGISTRATION_FORM]  		         : clearRegistrationForm,
  
  [DealersTypes.UPDATE_DEALER_CLAIMS_SEARCH_FILTERS]      : updatDealerClaimsSearchFilters,
  
});