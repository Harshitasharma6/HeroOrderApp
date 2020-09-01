export const INITIAL_STATE = {
	loaders: {
		getAllSchemeLoader: false,
		getFollowUpLoader: false,
		getCompletedFollowUpLoader: false,
		getDashboardSummaryLoader: false,
		getDashboardTrendsSoldProductsLoader: false,
		getDashboardTrendsRevenueLoader: false,
		getAllCustomerLoader: false,


	},
	openMoreFilters: false,
	
	DashboardSummaryData: [],
	dashboardTrendsSoldProductsData: [],
	dashboardTrendsRevenueData: [],
	SchemeData: [],
	FollowUpData: [],
	completedFollowUpData: [],
	AllCustomerData:[],
	customerSearchFilters: {
        area: '',
        type: '',
        sortType: 'ASC',
        sortBy: '',
        searchBy: 'mobilephone',
        searchValue: '',
       
		searchByOptions: [
			
			
			{
				label: 'By Phone No.',
				value: 'mobilephone'
			},
			{
				label: 'By Chassis No.',
				value: 'chassis_no__c'
			}
		]
	
	},
	
}