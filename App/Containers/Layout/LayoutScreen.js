import GenericIcon from 'App/Components/GenericIcon';
import NavigationService from 'App/Services/NavigationService';
import { Colors } from 'App/Theme';
import { Body, Container, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import DashboardLayout from './DashboardLayout';
import FooterScreen from './FooterScreen';
import SchemeClaimScreenLayout from './SchemeClaimScreenLayout'
import Drawer from './SideBarLayout/Drawer';
import NewRetailerLayout from './OrderListLayout';
import ShreeListLayout from './Shree/ShreeListLayout';
import ShreeInfoLayout from './Shree/ShreeInfoLayout';
import VisitSummaryLayout from './Shree/VisitSummaryLayout';
import NonShreeListLayout from './NonShree/NonShreeListLayout'
import NonShreeInfoLayout from './NonShree/NonShreeInfoLayout';
import NonShreeVisitInfoLayout from './NonShree/NonShreeVisitLayout';
import FinalObservationLayout from './FinalObservationLayout';
import VisitorInfoScreenLayout from './Visitor/VisitorInfoScreenLayout';
import VisitorRecieptScreenLayout from './Visitor/VisitorRecieptScreenLayout'
import VisitorInvoiceDetailScreenLayout from './Visitor/VisitorInvoiceDetailScreenLayout'
import DashboardScreenLayout  from './Insights/Dashboard/Layout'
import CustomerListLayout from './Insights/Customers/list'
import LeadAlertsLayout from './LeadAlerts'
import FollowUpsLayout from './LeadAlerts/FollowUpsLayout'
import ConfirmBookingLayout from './LeadAlerts/ConfirmedBookingLayout'



class LayoutScreen extends React.Component {
  getCurrentLayoutScreen() {
    let customLayoutNode = [];
    let showTopHeader = false;
    let showBackArrow = false;
    let showMoreIcon = false;
    switch (this.props.currentScreen) {
      case 'DealerInfoScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerInfoScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerInvoiceListScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerOrdersListScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerInfoScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerInfoScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerInvoiceListScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'DealerOrdersListScreen':
        customLayoutNode = <DealerInfoLayout />;
        break;

      case 'VisitsScreen':
        customLayoutNode = [];
        break;

      
          
      case 'InvoiceDetailformScreen' :
        customLayoutNode = <VisitorInvoiceDetailScreenLayout/>;
        break; 

      case 'DashboardScreen':
        customLayoutNode = <DashboardLayout/>;
        break;

      case 'UnplannedOptionsScreen':
        customLayoutNode = <NewRetailerLayout />;
        break;

      case 'RetailerResultListScreen':
      case 'OrderInfoScreen':
      case 'InvoiceInfoScreen':
      case 'DealerOrderInfoScreen':
      case 'VisitInfoScreen':
      case 'CounterSelectionScreen':
      case 'AddNonShreeForm':
      case 'AddShreeRetailerForm':
      case 'AddShreeDealerForm':
      case 'VisitSummaryCompetitorList':
      case 'ProfileScreen':
        customLayoutNode = <NewRetailerLayout />;
        break;

      case 'StartVisitForm':
      case 'VisitBookOrder':
      case 'VisitOrderCart':
      case 'VisitRetailerInfo':
        customLayoutNode = <StartVisitLayout />;
        break;
        
      case 'FinalObservationFormScreen':
      case 'FinalObservationList':
        customLayoutNode = <FinalObservationLayout />;
        break;
  
      case 'SearchByAreaScreen':
        customLayoutNode = <SearchByAreaLayout />;
        break;

      case 'SearchByLocationScreen':
        customLayoutNode = <SearchByLocationLayout />;
        break;

      case 'AddParticipantScreen':
        customLayoutNode = <AddParticipantListScreenLayout />;
        break;

      case 'ProfileScreen':
        customLayoutNode = [];
        break;

      case 'BookingConfirmed':
        customLayoutNode = <ConfirmBookingLayout /> ;
        break;

      case 'TravelUpdateScreen':
      case 'ConvenienceUpdateScreen':
      case 'UpdateHotelScreen':
      case 'UpdateOtherScreen':
      case 'UpdateIncidentalScreen':
      case 'UpdateFoodScreen':
        customLayoutNode = <NewEventLayout />

      case 'AddTravelScreen':
      case 'AddConvenienceScreen':
      case 'AddHotelScreen':
      case 'AddOtherScreen':
      case 'AddIncidentalScreen':
      case 'AddFoodScreen':

      case 'CheckInScreen':
        customLayoutNode = []
        break;

     

      case 'ShreeListsScreens':
      case 'ShreeRetailersListScreen':
        customLayoutNode = <ShreeListLayout />
        break;

      case 'ShreeInfo':
      case 'ShreeCountersVisitsList':
      case 'ShreeCounterVisitForm':
      case 'ShreeVisitForm':
      case 'VisitDetails':
      case 'PreviousVisits':
      case 'Payments':
      case 'SalesInfo':
      case 'CompetitorsList':
        customLayoutNode = <ShreeInfoLayout />
        break;


      case 'ShreeRetailerInfo':
      customLayoutNode = <ShreeInfoLayout />
      break;

          

     

     
      case 'NonShreeListsScreens':
        customLayoutNode = <NonShreeListLayout />
        break;

    

      case 'NonShreeInfo':
      case 'NonShreeVisitForm':
      case 'NonShreeVisitList':
        customLayoutNode = <NonShreeInfoLayout />
        break;

     

      case 'FeedbackScreen':
        customLayoutNode = <DashboardLayout />
        break;

      case 'CommunicationScreen':
      case 'CommunicationsAttachmentsScreen':
        customLayoutNode = <DashboardLayout />
        break;


      case 'VisitSummaryList': 

      case 'InsightsScreen':
        customLayoutNode = []
        break;
      case 'NewRegistrationFormScreen':
      case 'UpdateVisitorScreen':
      case 'CustomerRegistrationFormScreen':
      case 'TestDriveFeedBackScreen':
      case 'ProductCatalogScreen':
      case 'ProductInfoScreen':
      case 'AvailableSchemesScreen':
      case 'CustomerInfoScreen':
      case 'AddProductInfoScreen':
      case 'AddProductsSchemesScreen':
      case 'OrderCartScreen':
      case 'CustomerCallFormScreen':
      case  'WarrantyRegistrationformScreen':
      case  'SubDealerFormScreen':  
      case 'DealerSalespersonFormScreen':
      case 'SchemeClaimInfoScreen':
      case 'SubDealerInfoScreen':
      case  'SchemeClaimformScreen':
      case 'ActionablesScreen':
      case 'ProductInfoSchemesScreen':
      case 'GenerateInvoiceformScreen':
      customLayoutNode = <NewRetailerLayout />
        break;
      
      case 'HandoversScreen':
        customLayoutNode = <LeadAlertsLayout />
        break;
      case 'OpenHotLeadsScreen':
      case 'PurchaseDateOverDueScreen':
      case 'BookingConfirmedScreen':
      case 'OpenHotAssignedLeadsScreen':
      case 'NoActionScreen':
        customLayoutNode = <FollowUpsLayout />
        break;
      case 'VisitorInfoScreen':
      case 'VisitHistoryScreen':
      case 'AddProductScreen':
      case 'TestDriveHistoryScreen':
        customLayoutNode = <VisitorInfoScreenLayout />
        break;
      case 'DashboardSummaryScreen':
      case 'DashboardTrendsScreen':
        customLayoutNode = <DashboardScreenLayout />
        break;
      case 'CustomersScreen':
        customLayoutNode = <CustomerListLayout />
        break;
      default:
        customLayoutNode = [];

    }
    return {
      node: customLayoutNode,
      showTopHeader,
      showBackArrow,
      showMoreIcon
    }
  }



  getFooterScreenNode() {
    let footerScreenNode = <FooterScreen openDrawer={() => this.props.openDrawer()}/>
    switch (this.props.currentScreen) {
      case 'SplashScreen':
        footerScreenNode = [];
        break;
      case 'LoginScreen':
        footerScreenNode = [];
        break;
      default:
        footerScreenNode = <FooterScreen openDrawer={() => this.props.openDrawer()}/>
    }

    return footerScreenNode;
  }


  render() {
    var data = this.getCurrentLayoutScreen()
    return (
      <Container>
        {!data.showTopHeader ? [] :
          (<Header style={Styles.header}>
            <Left>
              {
                !data.showBackArrow ? [] :
                  (<TouchableOpacity onPress={NavigationService.goback}>
                    <GenericIcon
                      name={'arrow-back'}
                      style={Styles.backIcon}
                    />
                  </TouchableOpacity>)
              }
            </Left>
            <Body>
              <Title >

              </Title>
            </Body>
            <Right>
              {
                !data.showMoreIcon ? [] :
                  (<Drawer>
                    <Icon name="menu" style={Styles.menuIcon} />
                  </Drawer>)
              }
            </Right>
          </Header>)
        }
        {data.node}
        {this.props.children}
        {this.getFooterScreenNode()}
      </Container>
    )
  }
}



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen
})

export default connect(
  mapStateToProps
)(LayoutScreen)


const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    borderBottomWidth: 0,
    elevation: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 0
  },
  backIcon: {
    color: Colors.button,
    padding: 15,
    fontSize: wp('6%')
  },
  menuIcon: {
    color: Colors.button,
    fontSize: 25,
    padding: 10
  }
});
