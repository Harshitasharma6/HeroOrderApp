import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getAllDealers: ['payload'],
  getAllDealersSuccess:  ['payload'],
  getAllDealersFailure: null,
  getAllDealersLoading: null,
  getAllDealersLoadingStop: null,
  doNothing: null,

  

});

export const DealersTypes = Types
export default Creators