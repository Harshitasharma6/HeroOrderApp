/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {

    shreeList:[],
    shreeRetailersList: [],
    shreeDealersList: [],


    fetchShreeLoader: false,
    fetchShreeRetailerLoader: false,


    shreeSearchFilters: {
        area: '',
        type: 'Shree',
        sortType: 'ASC',
        sortBy: '',
        searchBy: 'Name',
        searchNearby: false,
        searchValue: '',
        searchByOptions: [
            {
                label: 'Name',
                value: 'Name'
            },
            {
                label: 'Code',
                value: 'Counter_Code__c'
            }
        ]
    },


    selectedShree: {},


    shreeSearchList: [],


    shreeDealerForm:{
        "CounterType":"Shree",
        "CustomerType":"Dealer",
    },


    shreeRetailerForm:{
        "CounterType":"Shree",
        "CustomerType":"Retailer"
    },


    shreeDealerFormValidation: {
        invalid: false,
        invalid_field: ''
    },


    shreeRetailerFormValidation: {
        invalid: false,
        invalid_field: ''
    },


    createShreeDealerLoader: false,
    createShreeRetailerLoader: false,


    updateLocationLoader: false,
    updatePotentialLoader: false,


    outstanding: [],
    fetchOutstandingLoader: false,


    payments: [],
    fetchPaymentsLoader: false,


    salesInfo: {},//mapping with dealer id
    fetchSalesInfoLoader: false,


    previousVisits: [],
    fetchPreviousVisitsLoader: false,


    latestVisits: [],
    fetchLatestVisitsLoader: false,


    editPotentialField: false,


    allVisits: [],
    allVisitsLoader: false,


    allSiteVisits: [],
    allSiteVisitsLoader: false,


    allInfluencerVisits: [],
    allInfluencerVisitsLoader: false,


    shreeLocationAction: {
        isAtLocation: false
    },

    shreeVisitForm: {
        MeetingType: "Counter Visit",
        CounterType: "Shree"
    },
    submitShreeVisitFormLoader: false,
    shreeVisitFormValidation: {
        invalid: false,
        invalid_field: ''
    },
    shreeVisitDetailFormValidation: ['payload'],
    shreeVisitDetailForm: {
        Counter_Type__c: "Shree",
        Packing__c: "None",
        Product__c: "None",
        Brand__c: ""
    },
    createShreeVisitDetailLoader: false,

    shreeVisitDetailType: [
        {
            label: 'Shree',
            value: 'Shree'
        },
        {
            label: 'Non Shree',
            value: 'Non Shree'
        }
    ],


    allCounters: [],
    allCountersLoader: false,

    allDistricts: [],
    allDistrictsLoader: false,
    
    allCountersSearchList: [],
    allCountersSearchDealerList: [],
    allCountersSearchRetailerList: [],

    shreeCurrentVisits: []
}
