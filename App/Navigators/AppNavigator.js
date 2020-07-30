import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginOtpScreen from 'App/Containers/Login/LoginOtpScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import StartDayScreen from 'App/Containers/StartDay'
import PresentScreen from 'App/Containers/Present'
import AbsentScreen from 'App/Containers/Absent'
import EndDayScreen from 'App/Containers/EndDay'
import CompletedDayScreen from 'App/Containers/CompletedDay'
//import DashboardScreen from 'App/Containers/Dashboard'
import InfluencersListScreen from 'App/Containers/Influencers/InfluencerList'
import ProfileScreen from 'App/Containers/Profile'
import SiteListScreen from 'App/Containers/Sites/SitesList/SiteList'
import NewInfluencers from 'App/Containers/Influencers/NewInfluencer'
import InfluencerInfoScreen from 'App/Containers/Influencers/InfluencerInfoScreen';
import InfluencerVisitsList from 'App/Containers/Influencers/InfluencerVisitsList';


import NewSitesVisit from 'App/Containers/Sites/NewSitesVisit'
import NewSites from 'App/Containers/Sites/NewSites'

import SitesList from 'App/Containers/Sites/SitesList'
import SitesInfoScreen from 'App/Containers/Sites/SitesVisitInfoScreen'
import SiteVisitForm from 'App/Containers/Sites/SitesVisitForm'

import InvoiceInfoScreen from 'App/Containers/Invoice'


import CheckInScreen from 'App/Containers/CheckInScreen/CheckInScreen'
import ShreeVisit from 'App/Containers/ShreeVisit/ShreeVisit'
import NonShreeVisit from 'App/Containers/NonShreeVisit/NonShreeVisit'
import ShreeListScreen from 'App/Containers/ShreeVisit/ShreeListScreen/ShreeListScreen'
import NonShreeListScreen from 'App/Containers/NonShreeVisit/NonShreeListScreen/NonShreeListScreen'
import ShreeInfoScreen from 'App/Containers/ShreeVisit/ShreeInfoScreen/ShreeInfoScreen'

import SitesVisitForm from 'App/Containers/Sites/SitesVisitForm'
import SitesVisitList from 'App/Containers/Sites/SitesVisitList'


import ShreeListsScreens from 'App/Containers/Shree/ShreeList/ShreeListsScreens';
import ShreeRetailersListScreen from 'App/Containers/Shree/ShreeList/ShreeRetailersListScreen';
import ShreeInfo from 'App/Containers/Shree/ShreeInfo/ShreeInfo';
import ShreeRetailerInfo from 'App/Containers/Shree/ShreeInfo/ShreeRetailerInfo';

import ShreeCountersVisitsList from 'App/Containers/Shree/ShreeCountersVisitsList';
import ShreeCounterVisitForm from 'App/Containers/Shree/ShreeCounterVisitForm';
import ShreeVisitForm from 'App/Containers/Shree/ShreeVisitForm';
import NonShreeVisitForm from 'App/Containers/NonShree/NonShreeVisitForm';
import NonShreeVisitList from 'App/Containers/NonShree/NonShreeVisitList';

import NewInfluencerVisitForm from 'App/Containers/Influencers/NewInfluencerVisitForm';




import NonShreeListsScreens from 'App/Containers/NonShree/NonShreeList/NonShreeListsScreens'
import AddNonShreeForm from 'App/Containers/NonShree/NewNonShree/NonShreeSite';
import NonShreeInfo from 'App/Containers/NonShree/NonShreeInfo/NonShreeInfo';
import NonShreeCompatitor from 'App/Containers/NonShree/NonShreeComptitor/NonShreeCompatitor';

import AddShreeRetailerForm from 'App/Containers/Shree/ShreeForms/AddShreeRetailerForm';
import AddShreeDealerForm from 'App/Containers/Shree/ShreeForms/AddShreeDealerForm';
import CounterSelectionScreen from 'App/Containers/CounterSelectionScreen'

import PreviousVisits from 'App/Containers/PreviousVisits';
import CompetitorsList from 'App/Containers/CompetitorsList';

import Payments from 'App/Containers/Payments';
import SalesInfo from 'App/Containers/SalesInfo';
import Outstandings from 'App/Containers/Outstandings';

import FeedbackScreen from 'App/Containers/DashboardInfo/FeedbackScreen';
import OutStandingScreen from 'App/Containers/DashboardInfo/OutStadingScreen';
import CommunicationScreen from 'App/Containers/DashboardInfo/CommunicationSceen';
import CommunicationsAttachmentsScreen from 'App/Containers/DashboardInfo/CommunicationSceen/CommunicationsAttachmentsScreen';



import VisitSummaryList from 'App/Containers/VisitSummarySection/VisitSummaryList';
import VisitSummarySiteList from 'App/Containers/VisitSummarySection/VisitSummarySiteList';
import VisitSummaryInfluencerList from 'App/Containers/VisitSummarySection/VisitSummaryInfluencerList';





import VisitSummaryCompetitorList from 'App/Containers/VisitSummarySection/VisitSummaryCompetitorList';


import FinalObservationFormScreen from 'App/Containers/FinalObservations/FinalObservationFormScreen';
import FinalObservationList from 'App/Containers/FinalObservations/FinalObservationList';





//Hero app Navigation
import LoginScreen from 'App/Containers/Login'
import InsightsScreen from 'App/Containers/Insights'
import VisitorScreen from 'App/Containers/Visitor'
import NewRegistrationFormScreen from 'App/Containers/Visitor/NewRegistration'
import VisitorInfoScreen from 'App/Containers/Visitor/VisitorInfo'
import VisitHistoryScreen from 'App/Containers/Visitor/VisitHistory'
import AddProductScreen from 'App/Containers/Visitor/AddProduct'
import ProductCatalogScreen from 'App/Containers/Insights/ProductCatalog'
import TestDriveHistoryScreen from 'App/Containers/Visitor/TestDriveHistory'
import TestDriveFeedBackScreen from 'App/Containers/Visitor/TestDriveFeedBack'

/**
 * The root screen contains the application's navigation.
 *
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen,
    StartDayScreen,
    EndDayScreen,
    PresentScreen,
    AbsentScreen,
    CompletedDayScreen,
    LoginOtpScreen,
    InfluencersListScreen,
    InfluencerInfoScreen,
    ProfileScreen,
    SiteListScreen,
    NewInfluencers,
    NewSitesVisit,
    NewSites,
    SitesList,
    SitesInfoScreen,
    SiteVisitForm,
    
    InvoiceInfoScreen,
    ShreeRetailerInfo,

    // Shree apps screens

    CheckInScreen,
    ShreeVisit,
    NonShreeVisit,
    ShreeListScreen,
    NonShreeListScreen,
    ShreeInfoScreen,

    ShreeListsScreens,
    ShreeRetailersListScreen,
    ShreeInfo,
    ShreeCountersVisitsList,
    ShreeCounterVisitForm,



    InfluencerVisitsList,



    NonShreeListsScreens,
    AddNonShreeForm,
    AddShreeRetailerForm,
    AddShreeDealerForm,
    NonShreeInfo, 
    NonShreeCompatitor,
    ShreeVisitForm,
    NonShreeVisitForm,
    NonShreeVisitList,
    NewInfluencerVisitForm,

    SitesVisitForm,
    SitesVisitList,

    CounterSelectionScreen,
    PreviousVisits,
    Payments,
    SalesInfo,
    Outstandings,
    CompetitorsList,

    VisitSummaryList,
    VisitSummaryCompetitorList,
    VisitSummarySiteList,
    VisitSummaryInfluencerList,



    FeedbackScreen,
    OutStandingScreen,
    CommunicationScreen,
    CommunicationsAttachmentsScreen,


    FinalObservationFormScreen,
    FinalObservationList,




    //Hero app
    LoginScreen,
    VisitorScreen,
    InsightsScreen,
    AddProductScreen,
    VisitorInfoScreen,
    VisitHistoryScreen,
    ProductCatalogScreen,
    TestDriveHistoryScreen,
    TestDriveFeedBackScreen,
    NewRegistrationFormScreen

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)