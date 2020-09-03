export const INITIAL_STATE = {
	loaders: {
		getAllDealersLoader: false,
		createDealerClaimLoader: false,
		createDealerDraftLoader: false,
		getAllDealerClaimsLoader: false,
		
	},
	DealersData: [],
	
	  editDiscountEdit: false,
	  
	 DealerClaimsData: [],

	
	createDealerClaimValidation: {
    	invalid: false,
        invalid_field: ''
    },

	createDealerClaimForm: {},

	currentDealerClaimData: {},

	
	dealerSearchFilters: {
       
        searchBy: '',
        searchValue: '',
		
		searchByOptions: [
			{
				label: 'All',
				value: ''
			},
			{
				label: 'Submitted',
				value: 'Submitted'
			},
			{
				label: 'Approved',
				value: 'Approved'
			},
	
			{
				label: 'Rejected',
				value: 'Rejected'
			},
	
		]
		
	
	},
	
	  

}