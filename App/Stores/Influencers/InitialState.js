export const INITIAL_STATE = {

    influencersList: [],
    influencerSiteList: [],
    influencersSearchableList: [],
    fetchInfluencersLoader: false,
    fetchInfluencerSiteLoader: false,
    influencerSearchFilters: {
        area: '',
        type: 'Influencers',
        sortType: 'ASC',
        sortBy: '',
        searchBy: 'LastName',
        searchValue: '',
        searchNearby: false
    },
    openMoreFilters: false,
    influencerForm: {
        InfluencerType: 'Mason'  
    },
    influencerFormValidation: {
        invalid: false,
        invalid_field: ''
    },
    createInfluencerLoader: false,
    selectedInfluencer: {},

    influencerVisitForm: {
        currentBrand: '',
        currentProduct: 'None',
        currentPacking: 'None',
        proposeShreeBrand: 'NO',
        proposeShreeProduct: 'None',
        ProposedShreePacking: 'None'
    },
    createInfluencerVisitLoader: false,
    influencerVisitFormValidation: {
        invalid: false,
        invalid_field: ''
    },

    influencersVisitList: [],
    fetchInfluencersVisitLoader: false,

    potentialType: [{
        'label': 'Low',
        'value': 'low'
    },
    {
        'label': 'Medium',
        'value': 'Medium'
    },
    {
        'label': 'High',
        'value': 'high'
    }
    ],
    statusType: [{
        'label': 'Active',
        'value': 'active'
    },
    {
        'label': 'Inactive',
        'value': 'inactive'
    }],
    titleType: [{
        'label': 'Mr.',
        'value': 'Mr.'
    }, {
        'label': 'Mrs.',
        'value': 'Mrs.'
    }]
}
