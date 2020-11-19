import { HelperService } from 'App/Services/Utils/HelperService';

export const INITIAL_STATE = {
	loaders: {
		getAllDealersLoader: false,
		createDealerClaimLoader: false,
		createDealerDraftLoader: false,
		getAllDealerClaimsLoader: false,
		
	},
	DealersData: [],
	
	  editDiscountEdit: false,
	  
	 DealerClaimsData: {},

	
	createDealerClaimValidation: {
    	invalid: false,
        invalid_field: ''
    },

	createDealerClaimForm: {},

	currentDealerClaimData: {},

	
	

	schemeClaimSearchFilters: {

       searchFilters: {
			name: '',
			area: '',
			claim_type: 'Submitted'
		},
        selectedDateType: 'Date', //or Month,
        selectedMonth: (new Date(HelperService.getCurrentTimestamp())).getMonth(),
        selectedYear: (new Date(HelperService.getCurrentTimestamp())).getFullYear(),
       
    },
	
	  

}