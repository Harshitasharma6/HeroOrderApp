import { DashboardTypes } from 'App/Stores/Dashboard/Actions';
import { StartupTypes } from 'App/Stores/Startup/Actions';
import { UserTypes } from 'App/Stores/User/Actions';
import { networkSaga, offlineActionTypes } from 'react-native-offline';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { SitesTypes } from 'App/Stores/Sites/Actions';
import { StartDayTypes } from '../Stores/StartDay/Actions'
import { ShreeTypes } from '../Stores/Shree/Actions';
import { NonShreeTypes } from '../Stores/NonShree/Actions';
import { VisitorTypes } from '../Stores/Visitor/Actions';



import {
    sendAttachment,
    watchCreateFeedBackRequest,
    watchFinalObservationForm,
    fetchFinalObservation,
    fetchOutStandingAction,
    fetchCommunications,
    fetchCommunicationsAttachments,
    fetchCommunicationsAttachmentsDetails
} from './DashboardSaga';

import {
    runQueue
} from './OfflineSaga';

import {
    fetchSites,
    fetchSiteVisits,
    watchCreateSiteFormRequest,
    watchCreateSiteVisitFormRequest,
    watchCreateCompetitorFormRequest
} from './SitesSaga';

import {
    startup
} from './StartupSaga';

import {
    checkAttendance,
    endDay,
    fetchAgentAreas,
    fetchAllPsm,
    markAbsent,
    watchUserLoginRequest,
    watchUserStartDayRequest
} from './UserSaga';

import { 
    fetchGlobleToken, 
    onLeaveAction, 
    checkInAction, 
    inOfficeAction, 
    fetchAllShreeDealersAction, 
    fetchAllNonShreeDealersAction,
    fetchGlobleUserDetail,
    fetchAgentDetails,
    updateCheckInScreenNavigation,
    fetchGlobalTokenTaskWatcher,
    checkOutAction,
    fetchCurrentLocation
} from './StartDaySaga'

import { 
    fetchShree,
    updateLocation,
    createShreeDealer,
    createShreeRetailer,
    fetchOutstanding,
    fetchPayments,
    fetchPreviousVisits,
    fetchLatestVisits,
    updatePotential,
    watchCreateShreeRetailerRequest,
    watchCreateShreeDealerRequest,
    watchSubmitShreeVisitForm,
    watchCreateShreeVisitDetailRequest,
    getAllCounters,
    getAllDistricts,
    fetchAllVisits,
    fetchAllSiteVisits,
    fetchSalesInfo,
    fetchAllInfluencerVisits,
    fetchShreeRetailers
} from './ShreeSaga'

import { 
    fetchNonShree,
    createCompetitor,
    watchCreateNonShreeRequest,
    watchSubmitNonShreeVisitForm,
    fetchNonShreePreviousVisits
 } from './NonShreeSaga'



 import { 
    watchSearchCustomer,
    watchRegisterCustomer,
    watchCreateFeedback,
    watchUpdateVisitor,
    getAllVisits,
    getFeedbacks
 } from './VisitorSaga'




export default function* root() {
    yield all([
        fork(networkSaga, {
            pingInterval: 30000
        }),
        takeLatest(StartupTypes.STARTUP, startup),// Run the startup saga when the application starts
        takeLatest(offlineActionTypes.CONNECTION_CHANGE, runQueue),

        fork(watchUserLoginRequest),
        fork(watchUserStartDayRequest),
        takeLatest(UserTypes.FETCH_ALL_AREAS, fetchAgentAreas),
        takeLatest(UserTypes.END_USER_DAY, endDay),
        takeLatest(UserTypes.MARK_USER_ABSENT, markAbsent),
        takeLatest(UserTypes.CHECK_ATTENDANCE, checkAttendance),
        takeLatest(UserTypes.FETCH_ALL_PSM, fetchAllPsm),

        takeLatest(SitesTypes.FETCH_SITES, fetchSites),
        takeLatest(SitesTypes.FETCH_SITE_VISITS, fetchSiteVisits),

        fork(watchCreateSiteVisitFormRequest),
        fork(watchCreateSiteFormRequest),
        fork(watchCreateCompetitorFormRequest),

        
    
       
        fork(fetchGlobalTokenTaskWatcher),
        takeLatest(StartDayTypes.FETCH_CURRENT_LOCATION, fetchCurrentLocation),
        takeLatest(StartDayTypes.ON_LEAVE_ACTION, onLeaveAction),
        takeLatest(StartDayTypes.CHECK_IN_ACTION, checkInAction),
        takeLatest(StartDayTypes.IN_OFFICE_ACTION, inOfficeAction), 
        takeLatest(StartDayTypes.FETCH_ALL_SHREE_DEALERS_ACTION, fetchAllShreeDealersAction),
        takeLatest(StartDayTypes.FETCH_ALL_NON_SHREE_DEALERS_ACTION, fetchAllNonShreeDealersAction),
        takeLatest(StartDayTypes.FETCH_GLOBLE_USER_DETAIL, fetchGlobleUserDetail),
        takeLatest(StartDayTypes.FETCH_AGENT_DETAILS, fetchAgentDetails),
        takeLatest(StartDayTypes.UPDATE_CHECK_IN_SCREEN_NAVIGATION, updateCheckInScreenNavigation),
        takeLatest(StartDayTypes.CHECK_OUT_ACTION, checkOutAction),



        takeLatest(ShreeTypes.FETCH_SHREE, fetchShree),
        takeLatest(ShreeTypes.FETCH_SHREE_RETAILERS, fetchShreeRetailers),
        takeLatest(ShreeTypes.UPDATE_LOCATION, updateLocation),
        takeLatest(ShreeTypes.UPDATE_POTENTIAL, updatePotential),
        takeLatest(ShreeTypes.FETCH_OUTSTANDING, fetchOutstanding),
        takeLatest(ShreeTypes.FETCH_PAYMENTS, fetchPayments),
        takeLatest(ShreeTypes.FETCH_PREVIOUS_VISITS, fetchPreviousVisits),
        takeLatest(ShreeTypes.FETCH_LATEST_VISITS, fetchLatestVisits),
        takeLatest(ShreeTypes.GET_ALL_COUNTERS, getAllCounters),
        takeLatest(ShreeTypes.GET_ALL_DISTRICTS, getAllDistricts),

        takeLatest(ShreeTypes.FETCH_ALL_VISITS, fetchAllVisits),
        takeLatest(ShreeTypes.FETCH_ALL_SITE_VISITS, fetchAllSiteVisits),
        takeLatest(ShreeTypes.FETCH_SALES_INFO, fetchSalesInfo),
        takeLatest(ShreeTypes.FETCH_ALL_INFLUENCER_VISITS, fetchAllInfluencerVisits),

        fork(watchCreateShreeRetailerRequest),
        fork(watchCreateShreeDealerRequest),
        fork(watchSubmitShreeVisitForm),
        fork(watchCreateShreeVisitDetailRequest),


        takeLatest(NonShreeTypes.FETCH_NON_SHREE, fetchNonShree),
        takeLatest(NonShreeTypes.CREATE_COMPETITOR, createCompetitor),
        takeLatest(NonShreeTypes.FETCH_NON_SHREE_PREVIOUS_VISITS, fetchNonShreePreviousVisits),

        
        fork(watchSubmitNonShreeVisitForm),
        //takeLatest(NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM, submitNonShreeVisitForm),


        fork(watchCreateNonShreeRequest),

        


        fork(watchCreateFeedBackRequest),
        fork(watchFinalObservationForm),
        takeLatest(DashboardTypes.FETCH_OUT_STANDING_ACTION, fetchOutStandingAction),
        takeLatest(DashboardTypes.FETCH_COMMUNICATIONS, fetchCommunications),
        takeLatest(DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS, fetchCommunicationsAttachments),
        takeLatest(DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS, fetchCommunicationsAttachmentsDetails),
        takeLatest(DashboardTypes.FETCH_FINAL_OBSERVATION, fetchFinalObservation),




        //
        fork(watchUpdateVisitor),
        fork(watchSearchCustomer),
        fork(watchRegisterCustomer),
        fork(watchCreateFeedback),
        takeLatest(VisitorTypes.GET_ALL_VISITS, getAllVisits),
        takeLatest(VisitorTypes.GET_FEEDBACKS, getFeedbacks)

    ]);
}
