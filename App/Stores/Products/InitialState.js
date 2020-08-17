export const INITIAL_STATE = {
	loaders: {
		getAllProductsLoader: false,
		getProductSchemesLoader: false
	},
	productsData: [],
	productSchemes: {},
	cart: {
	  	products: [],
	  	offersApplied: [],
	  	dealerDiscount: 0,
	  	taxes: 0,
	  	totalAmount: 0,
	  	subsidy: 0,
	  	basicPrice: 0,
	  	offerAmount: 0
  	},
  	editDiscountEdit: false
}
