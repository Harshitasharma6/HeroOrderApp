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
  getProductSchemesLoadingStop: null

});

export const ProductsTypes = Types
export default Creators
