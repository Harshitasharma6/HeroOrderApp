export const INITIAL_STATE = {
	loaders: {
		getAllSchemeLoader: false,
		getFollowUpLoader: false,
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
	AllCustomerData:[],

	customerSearchFilters: {
        area: '',
        type: '',
        sortType: 'ASC',
        sortBy: '',
        searchBy: 'name',
        searchValue: '',
       
    },


}