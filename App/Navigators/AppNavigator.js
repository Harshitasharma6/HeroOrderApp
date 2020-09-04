import { createAppContainer, createStackNavigator } from 'react-navigation'

//import LoginOtpScreen from 'App/Containers/Login/LoginOtpScreen'

// import StartDayScreen from 'App/Containers/StartDay'
// import PresentScreen from 'App/Containers/Present'
// import AbsentScreen from 'App/Containers/Absent'
// import EndDayScreen from 'App/Containers/EndDay'
// import CompletedDayScreen from 'App/Containers/CompletedDay'
// //import DashboardScreen from 'App/Containers/Dashboard'
// import ProfileScreen from 'App/Containers/Profile'

// import InvoiceInfoScreen from 'App/Containers/Invoice'


// import CheckInScreen from 'App/Containers/CheckInScreen/CheckInScreen'
// import ShreeVisit from 'App/Containers/ShreeVisit/ShreeVisit'
// import NonShreeVisit from 'App/Containers/NonShreeVisit/NonShreeVisit'
// import ShreeListScreen from 'App/Containers/ShreeVisit/ShreeListScreen/ShreeListScreen'
// import NonShreeListScreen from 'App/Containers/NonShreeVisit/NonShreeListScreen/NonShreeListScreen'
// import ShreeInfoScreen from 'App/Containers/ShreeVisit/ShreeInfoScreen/ShreeInfoScreen'


// import ShreeListsScreens from 'App/Containers/Shree/ShreeList/ShreeListsScreens';
// import ShreeRetailersListScreen from 'App/Containers/Shree/ShreeList/ShreeRetailersListScreen';
// import ShreeInfo from 'App/Containers/Shree/ShreeInfo/ShreeInfo';
// import ShreeRetailerInfo from 'App/Containers/Shree/ShreeInfo/ShreeRetailerInfo';

// import ShreeCountersVisitsList from 'App/Containers/Shree/ShreeCountersVisitsList';
// import ShreeCounterVisitForm from 'App/Containers/Shree/ShreeCounterVisitForm';
// import ShreeVisitForm from 'App/Containers/Shree/ShreeVisitForm';
// import NonShreeVisitForm from 'App/Containers/NonShree/NonShreeVisitForm';
// import NonShreeVisitList from 'App/Containers/NonShree/NonShreeVisitList';




// import NonShreeListsScreens from 'App/Containers/NonShree/NonShreeList/NonShreeListsScreens'
// import AddNonShreeForm from 'App/Containers/NonShree/NewNonShree/NonShreeSite';
// import NonShreeInfo from 'App/Containers/NonShree/NonShreeInfo/NonShreeInfo';
// import NonShreeCompatitor from 'App/Containers/NonShree/NonShreeComptitor/NonShreeCompatitor';

// import AddShreeRetailerForm from 'App/Containers/Shree/ShreeForms/AddShreeRetailerForm';
// import AddShreeDealerForm from 'App/Containers/Shree/ShreeForms/AddShreeDealerForm';
// import CounterSelectionScreen from 'App/Containers/CounterSelectionScreen'

// import PreviousVisits from 'App/Containers/PreviousVisits';
// import CompetitorsList from 'App/Containers/CompetitorsList';

// import Payments from 'App/Containers/Payments';
// import SalesInfo from 'App/Containers/SalesInfo';

// import FeedbackScreen from 'App/Containers/DashboardInfo/FeedbackScreen';
// import CommunicationScreen from 'App/Containers/DashboardInfo/CommunicationSceen';
// import CommunicationsAttachmentsScreen from 'App/Containers/DashboardInfo/CommunicationSceen/CommunicationsAttachmentsScreen';



// import VisitSummaryList from 'App/Containers/VisitSummarySection/VisitSummaryList';





// import VisitSummaryCompetitorList from 'App/Containers/VisitSummarySection/VisitSummaryCompetitorList';


// import FinalObservationFormScreen from 'App/Containers/FinalObservations/FinalObservationFormScreen';
// import FinalObservationList from 'App/Containers/FinalObservations/FinalObservationList';





//Hero app Navigation
import LoginScreen from 'App/Containers/Login';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import InsightsScreen from 'App/Containers/Insights';
import VisitorScreen from 'App/Containers/Visitor';
import NewRegistrationFormScreen from 'App/Containers/Visitor/NewRegistration'
import CustomerCallFormScreen from 'App/Containers/Visitor/CustomerCallForm'
import GenerateRecieptformScreen from 'App/Containers/Visitor/GenerateReciept'
import GenerateInvoiceformScreen from  'App/Containers/Visitor/GenerateInvoice'
import InvoiceDetailformScreen from  'App/Containers/Visitor/InvoiceDetail'
import UpdateVisitorScreen from 'App/Containers/Visitor/UpdateVisitor'
import CustomerRegistrationFormScreen from 'App/Containers/Visitor/CustomerRegistrationForm'
import VisitorInfoScreen from 'App/Containers/Visitor/VisitorInfo'
import VisitHistoryScreen from 'App/Containers/Visitor/VisitHistory'
import AllFollowUpsScreen from 'App/Containers/Visitor/AllFollowUps'
import AddProductScreen from 'App/Containers/Visitor/AddProduct'
import AddProductsSchemesScreen from 'App/Containers/Visitor/AddProduct/ProductsSchemes'
import ProductCatalogScreen from 'App/Containers/Insights/ProductCatalog'
import ProductInfoScreen from 'App/Containers/Insights/ProductInfo'
import AddProductInfoScreen from 'App/Containers/Visitor/AddProduct/AddProductInfoScreen'
import TestDriveHistoryScreen from 'App/Containers/Visitor/TestDriveHistory'
import TestDriveFeedBackScreen from 'App/Containers/Visitor/TestDriveFeedBack'
import AvailableSchemesScreen from 'App/Containers/Insights/AvailableSchemes'
import AvailableSchemesDetailScreen from 'App/Containers/Insights/AvailableSchemes/AvailableSchemesDetail'
import DashboardSummaryScreen from 'App/Containers/Insights/Dashboard/Summary'
import DashboardTrendsScreen from 'App/Containers/Insights/Dashboard/Trends'
import CustomersScreen from 'App/Containers/Insights/Customers'
import CustomerInfoScreen from 'App/Containers/Insights/Customers/CustomerInfo'
import CustomerSummaryScreen  from 'App/Containers/Insights/Customers/CustomerSummary'
import CustomerProductInfoScreen from 'App/Containers/Insights/CustomerProductInfo'
import CustomerOfferAppliedScreen from 'App/Containers/Insights/CustomerProductInfo/CustomerOfferApplied'
import LeadAlertsScreen from 'App/Containers/LeadAlerts'
import ActionablesScreen from 'App/Containers/LeadAlerts/Actionables'
import BookingConfirmed from 'App/Containers/LeadAlerts/BookingConfirmed'
import HandoversScreen from 'App/Containers/LeadAlerts/Handovers'
import OpenHotLeadsScreen from 'App/Containers/LeadAlerts/Actionables/FollowUps/OpenHotLeads'
import PurchaseDateOverDueScreen from 'App/Containers/LeadAlerts/Actionables/FollowUps/PurchaseDateOverDue'
import BookingConfirmedScreen from 'App/Containers/LeadAlerts/Actionables/FollowUps/BookingConfirmed'
import OpenHotAssignedLeadsScreen from 'App/Containers/LeadAlerts/Actionables/FollowUps/OpenHotAssignedLeads'
import NoActionScreen from 'App/Containers/LeadAlerts/Actionables/FollowUps/NoAction'
import OrderCartScreen from 'App/Containers/Visitor/AddProduct/OrderCart'
import WarrantyRegistrationformScreen from 'App/Containers/WarrantyRegistration'
import SubDealerFormScreen from 'App/Containers/AddSubDealer'
import ProfileScreen from 'App/Containers/Profile'
import DealerSalespersonFormScreen from 'App/Containers/DealerSalesperson'
import SchemeClaimInfoScreen from 'App/Containers/SchemeClaim'
import SubDealerInfoScreen from 'App/Containers/SubDealerInfo'
import SchemeClaimformScreen from 'App/Containers/SchemeClaim/AddSchemeClaim'
import ProductInfoSchemesScreen from 'App/Containers/Visitor/AddProduct/ProductsSchemes'

//ProductInfoSchemesScreen

//OpenHotLeadsScreen
//PurchaseDateOverDueScreen
//BookingConfirmedScreen
//OpenHotAssignedLeadsScreen
//NoActionScreen


/**
 * The root screen contains the application's navigation.
 *
 */
const StackNavigator = createStackNavigator(
  {
    // StartDayScreen,
    // EndDayScreen,
    // PresentScreen,
    // AbsentScreen,
    // CompletedDayScreen,
    // LoginOtpScreen,
    // ProfileScreen,
    
    // InvoiceInfoScreen,
    // ShreeRetailerInfo,

    // // Shree apps screens

    // CheckInScreen,
    // ShreeVisit,
    // NonShreeVisit,
    // ShreeListScreen,
    // NonShreeListScreen,
    // ShreeInfoScreen,

    // ShreeListsScreens,
    // ShreeRetailersListScreen,
    // ShreeInfo,
    // ShreeCountersVisitsList,
    // ShreeCounterVisitForm,





    // NonShreeListsScreens,
    // AddNonShreeForm,
    // AddShreeRetailerForm,
    // AddShreeDealerForm,
    // NonShreeInfo, 
    // NonShreeCompatitor,
    // ShreeVisitForm,
    // NonShreeVisitForm,
    // NonShreeVisitList,

    // CounterSelectionScreen,
    // PreviousVisits,
    // Payments,
    // SalesInfo,
    // CompetitorsList,

    // VisitSummaryList,
    // VisitSummaryCompetitorList,



    // FeedbackScreen,
    // CommunicationScreen,
    // CommunicationsAttachmentsScreen,


    // FinalObservationFormScreen,
    // FinalObservationList,




    //Hero app
    SplashScreen,
    LoginScreen,
    VisitorScreen,
    InsightsScreen,
    AddProductScreen,
    AddProductsSchemesScreen,
    ProductInfoSchemesScreen,
    ProductInfoScreen,
    AddProductInfoScreen,
    VisitorInfoScreen,
    VisitHistoryScreen,
    AllFollowUpsScreen,
    ProductCatalogScreen,
    TestDriveHistoryScreen,
    AvailableSchemesScreen,
    TestDriveFeedBackScreen,
    NewRegistrationFormScreen,
    UpdateVisitorScreen,
    CustomerRegistrationFormScreen,
    DashboardSummaryScreen,
    DashboardTrendsScreen,
    CustomersScreen,
    CustomerInfoScreen,
    LeadAlertsScreen,
    ActionablesScreen,
    HandoversScreen,
    OpenHotLeadsScreen,
    PurchaseDateOverDueScreen,
    BookingConfirmedScreen,
    OpenHotAssignedLeadsScreen,
    NoActionScreen,
    OrderCartScreen,
    CustomerCallFormScreen,
    GenerateRecieptformScreen,
    GenerateInvoiceformScreen ,
    InvoiceDetailformScreen ,
    WarrantyRegistrationformScreen,
    SubDealerFormScreen,
    ProfileScreen,
    DealerSalespersonFormScreen,
    SchemeClaimInfoScreen,
    SubDealerInfoScreen,
    SchemeClaimformScreen,
    BookingConfirmed,
    AvailableSchemesDetailScreen,
    CustomerSummaryScreen,
    CustomerProductInfoScreen,
    CustomerOfferAppliedScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)