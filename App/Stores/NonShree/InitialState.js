export const INITIAL_STATE = {
    nonShreeList:[],

    fetchNonShreeLoader: false,

    nonShreeSearchFilters: {
        area: '',
        shopType: 'Dealer',
        type: 'NonShree',
        sortType: 'ASC',
        sortBy: '',
        searchNearby: false,
        searchBy: 'Name',
        searchValue: '',
        searchByOptions: [
            {
                label: 'Name',
                value: 'Name'
            },
            {
                label: 'Code',
                value: 'Counter_Code__c'
            },
            {
                label: 'Contact Name',
                value: 'Contact_Person__c'
            }
        ]
    },

    nonShreeForm: {
        "CounterType":"Non Shree",
        "CustomerType":"Dealer",
        "Brand1":"",
        "Brand1Potential":"",
        "Brand2":"",
        "Brand2Potential":"",
        "Brand3":"",
        "Brand3Potential":"",
        "Brand4":"",
        "Brand4Potential":"",
        "Brand5":"",
        "Brand5Potential":""
    },
    nonShreeFormValidation: {
        invalid: false,
        invalid_field: ''
    },
    createNonShreeLoader: false,
    selectedNonShree: {},



    nonShreeVisitForm: {
        MeetingType: "Counter Visit",
        CounterType: "Non Shree"
    },
    submitNonShreeVisitFormLoader: false,
    nonShreeVisitFormValidation: {
        invalid: false,
        invalid_field: ''
    },
    nonShreeVisitDetailFormValidation: ['payload'],
    nonShreeVisitDetailForm: {
        Counter_Type__c: "Non Shree",
        Packing__c: "None",
        Product__c: "None",
        Brand__c: ""
    },
    createNonShreeVisitDetailLoader: false,



    nonShreeSearchList: [],
    competitoreForm: {},
    competitoreFormValidation: {
        invalid: false,
        invalid_field: ''
    },
    createCompetitoreLoader: false,
    counterType: [{
        'label': 'Shree',
        'value': 'Shree'
    },
    {
        'label': 'Non Shree',
        'value': 'Non Shree'
    }],

    customerType: [{
        'label': 'Dealer',
        'value': 'Dealer'
    },
    {
        'label': 'Retailer',
        'value': 'Retailer'
    },
    {
        'label': 'Wholesaler',
        'value': 'Wholesaler'
    }],



    previousVisits: [],
    fetchPreviousVisitsLoader: false,
}
