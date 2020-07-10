/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
    showHideRemark: false,
    showRemarkModal: false,
    remark:'',
    startForm: {},
    startFormValidation: {
        invalid: false,
        invalid_field: ''
    },

    globleList:[],
    access_token: null, //user token after user is logged in, indication that user is loggin or not.
    userName:'',


    fetchOnLeaveList:[],
    fetchOnLeaveLoader:false,

    fetchCheckInList:[],
    fetchCheckInLoader:false,

    fetchInOfficeList:[],
    fetchInOfficeLoader:false,

    shreeDealersList:[],
    nonShreeDealersList:[],

    userDetailList:[],

    agentLoginDetails: {},

    fetchCheckOutLoader:false,
    fetchCheckOutList:[],

    fetchCurrentLocationLoader: false,

    currentLocation: {
        latitude:'',
        longitude: ''
    },

    Brands: [
        "ACC",
        "ACC CONCRETE PLUS",
        "ACC F2R",
        "ACC GOLD",
        "ACC SURAKSHA",
        "AMBUJA",
        "AMBUJA ROOF SPECIAL",
        "BAGALKOT CEMENT",
        "BANGUR",
        "BANGUR POWER",
        "BHARATI / VICATE",
        "BHAVYA",
        "BIG CEM",
        "BINANI",
        "BIRLA A1",
        "BIRLA GOLD",
        "BIRLA PERFECT",
        "BIRLA SATNA",
        "BIRLA SHAKTI",
        "BIRLA UTTAM ",
        "CCI",
        "CHETAK (BCW-BIRLA SMARAT)",
        "CHETTINAD",
        "DALMIA", 
        "DALMIA (DSP)",
        "DECCAN",
        "EMAMI",
        "HATHI",
        "INDIA CEMENT (ICL)",
        "J K LAKSHMI",
        "J K LAKSHMI PRO +",
        "J K PLATINUM",
        "J K SIXER",
        "J K SUPER",
        "JAYPEE",
        "JINDAL",
        "JSW",
        "KCP",
        "KONARK OCL",
        "MAHASHAKTI",
        "MP BIRLA (RELIANCE)",
        "MY CEM", 
        "NAGARJUNA",
        "NIRMAX",
        "NUVOCO",
        "NUVOCO CONCRETO",
        "PARASHAKTI",
        "PENNA",
        "PRISM",
        "PRIYA",
        "RAMCO",
        "ROCKSTRONG",
        "ROOFON", 
        "SAGAR",
        "SANGHI",
        "SHREE",
        "SHRIRAM",
        "STAR CEMENT", 
        "ULTRATECH",
        "ULTRATECH SUPER",
        "WONDER",
        "ZAURI"
    ],

    Brand: [],

    product: [
    {
        'label': 'PPC',
        'value': 'PPC'
    }, {
        'label': 'PSC',
        'value': 'PSC'
    }, {
        'label': 'PCC',
        'value': 'PCC'
    },{
        'label': 'LPP',
        'value': 'LPP'
    }, {
        'label': 'OPC_43',
        'value': 'OPC_43'
    }, {
        'label': 'OPC_53',
        'value': 'OPC_53'
    }, {
        'label': 'NONE',
        'value': 'None'
    }
    ],

packing: [
{
    'label': 'HDPE',
    'value': 'HDPE'
}, {
    'label': 'PAPER',
    'value': 'PAPER'
}, {
    'label': 'NONE',
    'value': 'None'
    }
],
influencer_type: [{
    'label': 'Mason',
    'value': 'Mason'
},
{
    'label': 'Engineer',
    'value': 'Engineer'
},
{
    'label': 'Architect',
    'value': 'Architect'
},
{
    'label': 'Contractor',
    'value': 'Contractor'
},
{
    'label': 'Builder',
    'value': 'Builder'
},
{
    'label': 'Others',
    'value': 'Others'
}],
projects2: [{
    'label': 'YES',
    'value': 'YES'
},
{
    'label': 'NO',
    'value': 'NO'
}],
productPPC: [{
    'label': 'PPC',
    'value': 'PPC'
},
{
    'label': 'PSC',
    'value': 'PSC'
},
{
    'label': 'PCC',
    'value': 'PCC'
},
{
    'label': 'OPC 43',
    'value': 'OPC 43'
},
{
    'label': 'OPC 53',
    'value': 'OPC 53'
}],
counterName: [{
    'label': 'Kamal Kumar',
    'value': 'Kamal Kumar'
},
{
    'label': 'Kamal Kumar',
    'value': 'Kamal Kumar'
},
{
    'label': 'Kamal Kumar',
    'value': 'Kamal Kumar'
},
{
    'label': 'Kamal Kumar',
    'value': 'Kamal Kumar'
},
{
    'label': 'Kamal Kumar',
    'value': 'Kamal Kumar'
}]
}

