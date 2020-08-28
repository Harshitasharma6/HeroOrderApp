import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Fonts, ApplicationStyles } from 'App/Theme'
import { Footer, FooterTab } from 'native-base'
import FooterIcon from '../../Components/FooterIcon'
import Style from './LayoutScreenStyles'
import { HelperService } from 'App/Services/Utils/HelperService'
import NavigationService from 'App/Services/NavigationService'
import { PRESENT} from 'App/Constants';



class FooterScreen extends React.Component {
  onHandleClick(screen) {
     const {
      status,
      checkout
    } = this.props;

    NavigationService.navigate(screen);

  }



  render() {
    const {
      status,
      checkout,
      currentScreen
    } = this.props


   
    let profilesActive = 
    currentScreen == 'ProfileScreen'||
    currentScreen == 'DealerSalespersonFormScreen' ||
    currentScreen == ' SubDealerInfoScreen'||
    currentScreen == 'SchemeClaimInfoScreen' ||
    currentScreen == 'SubDealerFormScreen'
   

    let visitorActive = 
      currentScreen == 'VisitorScreen' || 
      currentScreen == 'NewRegistrationFormScreen' ||
      currentScreen == 'UpdateVisitorScreen' ||
      currentScreen == 'VisitorInfoScreen' ||
      currentScreen == 'VisitHistoryScreen' ||
      currentScreen == 'TestDriveHistoryScreen' ||
      currentScreen == 'AddProductScreen' ||
      currentScreen == 'TestDriveFeedBackScreen' ||
      currentScreen == 'CustomerRegistrationFormScreen' ||
      currentScreen == 'AddProductInfoScreen' ||
      currentScreen == 'AddProductsSchemesScreen' ||
      currentScreen == 'OrderCartScreen' || 
      currentScreen == 'CustomerCallFormScreen' ||
      currentScreen == 'GenerateRecieptformScreen' ||
      currentScreen == 'GenerateInvoiceformScreen' ||
      currentScreen == 'InvoiceDetailformScreen' 


    let insightsActive = 
      currentScreen == 'InsightsScreen' ||
      currentScreen == 'ProductCatalogScreen' || 
      currentScreen == 'ProductInfoScreen' || 
      currentScreen == 'AvailableSchemesScreen' ||
      currentScreen == 'DashboardSummaryScreen' ||
      currentScreen == 'DashboardTrendsScreen' ||
      currentScreen == 'CustomersScreen' ||
      currentScreen == 'CustomerInfoScreen' ||
      currentScreen == 'ProductInfoSchemesScreen'

    let leadAlertsActive = 
      currentScreen == 'LeadAlertsScreen' ||
      currentScreen == 'ActionablesScreen' ||
      currentScreen == 'HandoversScreen' ||
      currentScreen == 'OpenHotLeadsScreen' ||
      currentScreen == 'PurchaseDateOverDueScreen' ||
      currentScreen == 'BookingConfirmedScreen' ||
      currentScreen == 'OpenHotAssignedLeadsScreen' ||
      currentScreen == 'NoActionScreen' ||
      currentScreen == 'BookingConfirmed'


    return (

      <Footer style={Style.footerContainer}>
        <FooterTab style={Style.footer}>
        <FooterIcon
            icon={'person-add'}
            iconText={'Visitor'}
            active={visitorActive} 
            disabled={false}
            onPress={() => this.onHandleClick('VisitorScreen')}
          />

          <FooterIcon
            icon={'podium'}
            iconText={'Insights'}
            active={insightsActive}
            disabled={false}
            onPress={() => this.onHandleClick('InsightsScreen')}
          />

          <FooterIcon
            icon={'notifications'}
            iconText={'Lead Alerts'}
            active={leadAlertsActive}
            disabled={false}
            onPress={() => this.onHandleClick('LeadAlertsScreen')}
          />

        
          <FooterIcon
            icon={'menu'}
            iconText={'Menu'}
            active={profilesActive} 
            disabled={false}
            onPress={() => this.props.openDrawer()}
          />

        </FooterTab>
      </Footer>
    )
  }
}

const mapStateToProps = (state) => ({
  isConnected:        state.network.isConnected,
  isVisible:          state.common.isNetworkBannerVisible,
  currentScreen:      state.common.currentScreen,
  startedToday:       state.user.startDayTime ? HelperService.isToday(state.user.startDayTime) : false,
  endedToday:         state.user.endDayTime ? HelperService.isToday(state.user.endDayTime) : false,
  absentToday:        state.user.absentDayTime ? HelperService.isToday(state.user.absentDayTime) : false,
  status:             state.user.status,
  checkout:           state.user.checkout,
  statusTime:         state.user.statusTime
})

export default connect(mapStateToProps)(FooterScreen)


const Styles = StyleSheet.create({
  icon: {
    color: Colors.white,
    alignSelf: 'center'
  },
  iconText: {
    color: '#7FC4FD',
    fontFamily: ApplicationStyles.textFont,
    fontSize: Fonts.iconText.fontSize,
    alignSelf: 'center',
    textAlign: 'center',
    overflow: 'hidden',
    paddingLeft: 0,
    paddingRight: 0
  },
  iconActive: {
    color: '#BD3A24'
  },
  iconButton: {
    backgroundColor: Colors.primary,
    borderRadius: 0,
    height: '100%'
  },
  iconActiveButton: {
    backgroundColor: Colors.white
  }
});