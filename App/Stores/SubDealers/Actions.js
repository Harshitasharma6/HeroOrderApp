import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getAllSubDealers: ['payload'],
  getAllSubDealersSuccess:  ['payload'],
  getAllSubDealersFailure: null,
  getAllSubDealersLoading: null,
  getAllSubDealersLoadingStop: null,
  doNothing: null,


  createSubDealer: ['payload'],
	createSubDealerSuccess:  ['payload'],
	createSubDealerFailure: null,
	createSubDealerLoading: null,
	createSubDealerLoadingStop: null,
	changeSubDealerForm: ['payload'],
	createSubDealerValidationFailed: ['payload'],
	
	setRegistrationForm: ['payload'],
	clearRegistrationForm: null,

  

});

export const SubDealersTypes = Types
export default Creators