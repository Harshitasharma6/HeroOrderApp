import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getAllProducts: ['payload'],
  getAllProductsSuccess:  ['payload'],
  getAllProductsFailure: null,
  getAllProductsLoading: null,
  getAllProductsLoadingStop: null,

  getProductSchemes: ['payload'],
  getProductSchemesSuccess:  ['payload'],
  getProductSchemesFailure: null,
  getProductSchemesLoading: null,
  getProductSchemesLoadingStop: null,


  addItemToCart: ['payload'],
  removeItemFromCart: ['payload'],
  addItemToCartSuccess: ['payload'],
  removeItemFromCartSuccess: ['payload'],
  editCart: ['payload'],
  editCartSuccess: ['payload'],
  openDealerDiscountEdit: null,
  closeDealerDiscountEdit: null,
  changeDealerDiscount: ['payload'],
  changeDealerDiscountSuccess: ['payload'],

  removeOffer: ['payload'],
  addOffer: ['payload'],
  addOfferSuccess: ['payload'],
  removeOfferSuccess: ['payload']

});

export const ProductsTypes = Types
export default Creators
