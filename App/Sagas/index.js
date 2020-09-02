import { DashboardTypes } from 'App/Stores/Dashboard/Actions';
import { StartupTypes } from 'App/Stores/Startup/Actions';
import { UserTypes } from 'App/Stores/User/Actions';
import { networkSaga, offlineActionTypes } from 'react-native-offline';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { StartDayTypes } from '../Stores/StartDay/Actions'
import { ShreeTypes } from '../Stores/Shree/Actions';
import { NonShreeTypes } from '../Stores/NonShree/Actions';
import { VisitorTypes } from '../Stores/Visitor/Actions';
import { ProductsTypes } from '../Stores/Products/Actions';
import { CommonTypes } from '../Stores/Common/Actions';
import { DealersTypes } from '../Stores/Dealers/Actions';
import { LeadAlertTypes } from 'App/Stores/LeadAlerts/Actions';
import { InsightsTypes } from 'App/Stores/Insights/Actions';
import { SubDealersTypes } from '../Stores/SubDealers/Actions';


import {
    sendAttachment,
    watchCreateFeedBackRequest,
    watchFinalObservationForm,
    fetchFinalObservation,
    fetchCommunications,
    fetchCommunicationsAttachments,
    fetchCommunicationsAttachmentsDetails
} from './DashboardSaga';

import {
    runQueue
} from './OfflineSaga';


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
    watchUserStartDayRequest,
    watchUserLogoutRequest,
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
    getAllProducts,
    getProductSchemes,
    addItemToCart,
    removeItemFromCart,
    changeDealerDiscount,
    removeOffer,
    addOffer
} from './ProductsSaga'

 import {
     getAllDealers,
     getDealerClaims,
     watchCreateDealerClaim,
} from  './DealerSaga'

import {
    getAllSubDealers,
    watchCreateSubDealer
} from  './SubDealerSaga'

import {
    getDashboardSummary,
    getDashboardTrendsSoldProducts,
    getDashboardTrendsRevenue,
    getAllScheme,
    getFollowUp,
    getCompletedFollowUp,
    getAllCustomer,
} from  './InsightsSaga'

import { 
    watchSearchCustomer,
    watchRegisterCustomer,
    watchRegisterCustomerCall,
    watchRegisterCustomerOutgoingCall,
    watchUpdateFollowUpCall,
    watchCreateFeedback,
    watchUpdateVisitor,
    watchPayBooking,
    getAllVisits,
    getAllFollowUps,
    getFeedbacks,
    watchUpdateBooking,
} from './VisitorSaga'


import {
    fetchLeadSources,
    fetchLeadLostReasons,
    getAllStates,
    getAllCities,
    uploadImage,
    getCallOptions,
    getBookingPicklist,
} from './CommonSaga'


import {
    fetchHotLeads,
    fetchBookingConfirmFinanceLeads,
    fetchPurchaseOverdue,
    fetchOpenLeads,
    fetchNoAction,
    fetchCallLeads,
    fetchAllOpenLeads,
    watchMarkLeadLost,
    fetchTodayFollowUp,
    fetchConfirmedBooking,
} from './LeadAlertsSaga'




export default function* root() {
    yield all([
        fork(networkSaga, {
            pingInterval: 30000
        }),
        takeLatest(StartupTypes.STARTUP, startup),// Run the startup saga when the application starts
        takeLatest(offlineActionTypes.CONNECTION_CHANGE, runQueue),




        fork(watchUserLoginRequest),
        fork(watchUserStartDayRequest),
        fork(watchUserLogoutRequest),
        takeLatest(UserTypes.FETCH_ALL_AREAS, fetchAgentAreas),
        takeLatest(UserTypes.END_USER_DAY, endDay),
        takeLatest(UserTypes.MARK_USER_ABSENT, markAbsent),
        takeLatest(UserTypes.CHECK_ATTENDANCE, checkAttendance),
        takeLatest(UserTypes.FETCH_ALL_PSM, fetchAllPsm),
        

  

    
       
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


        

        fork(watchCreateFeedBackRequest),
        fork(watchFinalObservationForm),
        takeLatest(DashboardTypes.FETCH_COMMUNICATIONS, fetchCommunications),
        takeLatest(DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS, fetchCommunicationsAttachments),
        takeLatest(DashboardTypes.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS, fetchCommunicationsAttachmentsDetails),
        takeLatest(DashboardTypes.FETCH_FINAL_OBSERVATION, fetchFinalObservation),




        takeLatest(CommonTypes.FETCH_LEAD_SOURCES, fetchLeadSources),
        takeLatest(CommonTypes.FETCH_LEAD_LOST_REASONS, fetchLeadLostReasons),
        takeLatest(CommonTypes.GET_ALL_STATES, getAllStates),
        takeLatest(CommonTypes.GET_ALL_CITIES, getAllCities),
        takeLatest(CommonTypes.UPLOAD_IMAGE, uploadImage),
        takeLatest(CommonTypes.GET_BOOKING_PICKLIST,  getBookingPicklist),
        takeLatest(CommonTypes.GET_CALL_OPTIONS,getCallOptions),




        takeLatest(ProductsTypes.GET_ALL_PRODUCTS, getAllProducts),
        takeLatest(ProductsTypes.GET_PRODUCT_SCHEMES, getProductSchemes),
        takeLatest(ProductsTypes.ADD_ITEM_TO_CART, addItemToCart),
        takeLatest(ProductsTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart),
        takeLatest(ProductsTypes.REMOVE_OFFER, removeOffer),
        takeLatest(ProductsTypes.ADD_OFFER, addOffer),
        takeLatest(ProductsTypes.CHANGE_DEALER_DISCOUNT, changeDealerDiscount),

        fork(watchCreateDealerClaim),
        takeLatest(DealersTypes.GET_ALL_DEALERS, getAllDealers),
        takeLatest(DealersTypes.GET_ALL_DEALER_CLAIMS, getDealerClaims),
        
        fork(watchCreateSubDealer),
        takeLatest(SubDealersTypes.GET_ALL_SUB_DEALERS, getAllSubDealers),


        takeLatest(InsightsTypes.GET_DASHBOARD_SUMMARY,  getDashboardSummary),
        takeLatest(InsightsTypes.GET_DASHBOARD_TRENDS_SOLD_PRODUCTS,  getDashboardTrendsSoldProducts),
        takeLatest(InsightsTypes.GET_DASHBOARD_TRENDS_REVENUE,  getDashboardTrendsRevenue),
        takeLatest(InsightsTypes.GET_ALL_SCHEME,  getAllScheme),
        takeLatest(InsightsTypes.GET_FOLLOW_UP,  getFollowUp),
        takeLatest(InsightsTypes.GET_COMPLETED_FOLLOW_UP,  getCompletedFollowUp),
        takeLatest(InsightsTypes.GET_ALL_CUSTOMER, getAllCustomer),

        
        fork(watchUpdateVisitor),
        fork(watchSearchCustomer),
        fork(watchRegisterCustomer),
        fork(watchRegisterCustomerCall),
        fork(watchRegisterCustomerOutgoingCall),
        fork(watchUpdateFollowUpCall),
        fork(watchCreateFeedback),
        fork(watchPayBooking),
        fork(watchUpdateBooking),
        takeLatest(VisitorTypes.GET_ALL_VISITS, getAllVisits),
        takeLatest(VisitorTypes.GET_ALL_FOLLOW_UPS, getAllFollowUps),
        takeLatest(VisitorTypes.GET_FEEDBACKS, getFeedbacks),


        fork(watchMarkLeadLost),
        takeLatest(LeadAlertTypes.FETCH_HOT_LEADS, fetchHotLeads),
        takeLatest(LeadAlertTypes.FETCH_BOOKING_CONFIRM_FINANCE_LEADS, fetchBookingConfirmFinanceLeads),
        takeLatest(LeadAlertTypes.FETCH_PURCHASE_OVERDUE, fetchPurchaseOverdue),
        takeLatest(LeadAlertTypes.FETCH_OPEN_LEADS, fetchOpenLeads),
        takeLatest(LeadAlertTypes.FETCH_NO_ACTION, fetchNoAction),
        takeLatest(LeadAlertTypes.FETCH_CALL_LEADS, fetchCallLeads),
        takeLatest(LeadAlertTypes.FETCH_ALL_OPEN_LEADS, fetchAllOpenLeads),
        takeLatest(LeadAlertTypes.FETCH_TODAY_FOLLOW_UP, fetchTodayFollowUp),
        takeLatest(LeadAlertTypes.FETCH_CONFIRMED_BOOKING, fetchConfirmedBooking), 


    ]);
}
