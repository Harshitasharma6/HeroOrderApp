export const INITIAL_STATE = { 
    sitesList: [],
    siteVisitsList: [],
    fetchSitesLoader: false,
    fetchSiteVisitsLoader: false,
    selectedSite: {},
    siteSearchList: [],

    siteSearchFilters: {
        area: '',
        type: 'Sites',
        sortType: 'ASC',
        sortBy: '',
        searchBy: 'Name',
        searchValue: '',
        searchNearby: false
    },



    // CREATE SITE FORM 
    createSiteLoader: false,
    siteForm: {
        SiteType:"Residential",
        "CurrentBrandUsed":""

    },
    siteFormValidation: {
        invalid: false,
        invalid_field: ''
    },



// CREATE SITE VISIT FORM 
    createSiteVisitLoader: false,
    siteVisitForm: {
        ContactType:        'Engineer',
        Shreesite:          false,
        SiteType:           'Residential',
        RepeatVisit:        false,
        InfluencerInvolved: false,
        DealerInvolved:     false,
        CanConvertSiteToShree:false,
        ConventedBrand:     '',
        ConvertedProduct:   'None'
    },
    siteVisitFormValidation: {
        invalid: false,
        invalid_field: ''
    },


//ADD SITE COMPETITOR
    createCompetitorLoader: false,
    siteCompetitorForm: {
        Packing__c: "None",
        Product__c: "None",
        Brand__c: "",
        "RSP__c" : "",
        "WSP__c" : ""
    },

    siteCompetitorFormValidation: {
        invalid: false,
        invalid_field: ''
    },


// STATIC SELECTOR LIST DATA
    projectType: [
        {
            'label': 'Residential',
            'value': 'Residential'
        },
        {
            'label': 'School',
            'value': 'School'
        },
        {
            'label': 'HealthCare',
            'value': 'HealthCare'
        },
        {
            'label': 'Retail',
            'value': 'Retail'
        },
        {
            'label': 'Factory',
            'value': 'Factory'
        },
         {
            'label': 'Others',
            'value': 'Others'
        }
    ],
    sourceType: [
        {
            'label': 'Sales',
            'value': 'Sales'
        },
        {
            'label': 'Retailer',
            'value': 'Retailer'
        },
        {
            'label': 'Electrician',
            'value': 'Electrician'
        },
        {
            'label': 'Incoming',
            'value': 'Incoming'
        },
        {
            'label': 'Engineer',
            'value': 'Engineer'
        }
    ],
    statusType: [
        {
            'label': 'Funnel',
            'value': 'Funnel'
        },
        {
            'label': 'Lost',
            'value': 'Lost'
        },
        {
            'label': 'Won',
            'value': 'Won'
        },
        {
            'label': 'Rejected',
            'value': 'Rejected'
        }
    ],
    siteStagesType: [
        {
            'label': 'Bricking',
            'value': 'Bricking'
        },
        {
            'label': 'Plastering',
            'value': 'Plastering'
        },
        {
            'label': 'Wiring',
            'value': 'Wiring'
        },
        {
            'label': 'Installing',
            'value': 'Installing'
        }
    ],

    MeetingType: [
        {
            'label': 'Shree',
            'value': 'Shree'
        },
        {
            'label': 'Non Shree',
            'value': 'Non Shree'
        }
    ],

    SiteType: [

        {
            'label': 'School',
            'value': 'School'
        },
        {
            'label': 'Hospital',
            'value': 'Hospital'
        },
        {
            'label': 'Others',
            'value': 'Others'
        }
    ],

    RepeatVisit: [

        {
            'label': 'true',
            'value': 'true'
        },
        {
            'label': 'false',
            'value': 'false'
        }
    ],

    influencerName: [
        {
            'label': 'Hem',
            'value': 'Hem'
        },
        {
            'label': 'Rrrrrrrr',
            'value': 'Rrrrrrrr'
        }
        
    ]
  
}
