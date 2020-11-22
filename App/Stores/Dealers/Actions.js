import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getAllDealers: ['payload'],
  getAllDealersSuccess:  ['payload'],
  getAllDealersFailure: null,
  getAllDealersLoading: null,
  getAllDealersLoadingStop: null,
  doNothing: null,
  
  getAllDealerClaims: ['payload'],
  getAllDealerClaimsSuccess:  ['payload'],
  getAllDealerClaimsFailure: null,
  getAllDealerClaimsLoading: null,
  getAllDealerClaimsLoadingStop: null,
  
  createDealerClaim: ['payload'],
	createDealerClaimSuccess:  ['payload'],
	createDealerClaimFailure: null,
	createDealerClaimLoading: null,
	createDealerClaimLoadingStop: null,
	changeDealerClaimForm: ['payload'],
  createDealerClaimValidationFailed: ['payload'],
  

  setDealerClaimInfoForm: ['payload'],
	
	setRegistrationForm: ['payload'],
	clearRegistrationForm: null,

  updateDealerClaimsSearchFilters: ['payload'],

  changeClaimSearchFilters: ['payload'],
  

});

export const DealersTypes = Types
export default Creators