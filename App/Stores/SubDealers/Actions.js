import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getAllSubDealers: ['payload'],
  getAllSubDealersSuccess:  ['payload'],
  getAllSubDealersFailure: null,
  getAllSubDealersLoading: null,
  getAllSubDealersLoadingStop: null,
  doNothing: null,

  

});

export const SubDealersTypes = Types
export default Creators