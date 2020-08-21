/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
    username: '', //
    password: '',//password for user
    token: '', //user token after user is logged in, indication that user is loggin or not.
    id: '',//agent id after generated.
    user_started_day: false, //has user started the day
    user_ended_day: false, //has user ended the day
    user_marked_absent: false, // has user marked absent,
    userLoginIsLoading: false,
    userLoginErrorMessage: false,
    validation: {
        invalid_number: false,
        invalid_password: false,
        invalid_area: false,
        error_message: '',
    },
    area: '',
    latitude: '',
    longitude: '',
    agentAreas: [],
    fetchAllAreasLoading: false,
    fetchAllAreasFailure: false,
    startDayTime: '',
    endDayTime: '',
    absentDayTime: '',
    absentReason: 'Leave',
    leaveType: 'Absent',
    userStartDayLoading: false,
    userEndDayLoading: false,
    userMarkedAbsentLoading: false,
    agentDetails: {},
    isASM: false,
    psmList: [],
    fetchAllPsmLoader: false,


    loginDetails: {

    },
    userDetails: {

    },
    status: '',
    statusTime: '',
    checkInLat: '',
    checkInLong: '',
    checkIn_id:'',
    checkout: false,
    checkIn_status: false,


    state__c: "a059D000000tNcxQAE",
   
    
}
