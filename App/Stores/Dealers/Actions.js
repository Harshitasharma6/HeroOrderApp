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

  

});

export const DealersTypes = Types
export default Creators