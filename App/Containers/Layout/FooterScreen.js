import React from 'react'
import { StyleSheet } from 'react-native'
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
    } = this.props

    // if ( status != PRESENT || checkout) {
    //   HelperService.showToast({
    //     message: 'You are not checked-In for today.',
    //     duration: 2000
    //   });
    //   return
    // }

     NavigationService.navigate(screen)
  }  


  render() {
    const {
      status,
      checkout,
      currentScreen
    } = this.props

    let visitsActive =
      currentScreen === 'CheckInScreen' ||
      currentScreen === 'CounterSelectionScreen'||
      currentScreen === 'ShreeListsScreens'||
      currentScreen === 'ShreeRetailersListScreen' ||
      currentScreen === 'NonShreeListsScreens' ||
      currentScreen === 'ShreeInfo' ||
      currentScreen === 'ShreeVisitForm' ||
      currentScreen === 'ShreeCountersVisitsList' ||
      currentScreen === 'ShreeCounterVisitForm' ||
      currentScreen === 'SiteVisitForm' ||
      currentScreen === 'NonShreeCompatitor' ||
      currentScreen === 'NonShreeInfo' ||
      currentScreen === 'NonShreeSite' ||
      currentScreen === 'InfluencersListScreen' ||
      currentScreen === 'InfluencerInfoScreen' ||
      currentScreen === 'NewInfluencers' ||
      currentScreen === 'InfluencerVisitsList' ||
      currentScreen === 'NewInfluencerVisitForm' ||
      currentScreen === 'SiteListScreen' ||
      currentScreen === 'SitesInfoScreen'||
      currentScreen === 'NewSitesVisit' ||
      currentScreen === 'AddShreeDealerForm' ||
      currentScreen === 'AddShreeRetailerForm'||
      currentScreen === 'CounterSelectionScreen'||
      currentScreen === 'PreviousVisits'||
      currentScreen === 'Payments'||
      currentScreen === 'SalesInfo'||
      currentScreen === 'Outstandings' ||
      currentScreen === 'NewSites' ||
      currentScreen === 'FinalObservationFormScreen' ||
      currentScreen === 'FinalObservationList' ||
      currentScreen === 'NonShreeVisitForm' ||
      currentScreen === 'NonShreeVisitList' ||
      currentScreen === 'AddNonShreeForm'

    let visitsSummaryActive =  
      currentScreen === 'VisitSummaryList' || 
      currentScreen === 'VisitSummarySiteList' || 
      currentScreen === 'VisitSummaryInfluencerList';
   
    let profilesActive = currentScreen === 'ProfileScreen';
    
    let settingsActive = 
      currentScreen === 'FeedbackScreen' ||
      currentScreen === 'OutStandingScreen' ||
      currentScreen === 'CommunicationScreen' ||
      currentScreen === 'CommunicationsAttachmentsScreen'


      
    let visitsDisabled = status != PRESENT || checkout
    let visitsSummaryDisabled = status != PRESENT || checkout



    let visitorActive = 
      currentScreen == 'VisitorScreen' || 
      currentScreen == 'NewRegistrationFormScreen' ||
      currentScreen == 'VisitorInfoScreen' ||
      currentScreen == 'VisitHistoryScreen' ||
      currentScreen == 'TestDriveHistoryScreen' ||
      currentScreen == 'AddProductScreen' ||
      currentScreen == 'TestDriveFeedBackScreen' ||
      currentScreen == 'CustomerRegistrationFormScreen'

    let insightsActive = 
      currentScreen == 'InsightsScreen' ||
      currentScreen == 'ProductCatalogScreen' || 
      currentScreen == 'ProductInfoScreen' || 
      currentScreen == 'AvailableSchemesScreen' ||
      currentScreen == 'DashboardSummaryScreen' ||
      currentScreen == 'DashboardTrendsScreen' ||
      currentScreen == 'CustomersScreen' ||
      currentScreen == 'CustomerInfoScreen'

    let leadAlertsActive = 
      currentScreen == 'LeadAlertsScreen' ||
      currentScreen == 'ActionablesScreen' ||
      currentScreen == 'HandoversScreen' ||
      currentScreen == 'OpenHotLeadsScreen' ||
      currentScreen == 'PurchaseDateOverDueScreen' ||
      currentScreen == 'BookingConfirmedScreen' ||
      currentScreen == 'OpenHotAssignedLeadsScreen' ||
      currentScreen == 'NoActionScreen'


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
            disabled={true}
            onPress={() => NavigationService.navigate('ProfileScreen')}
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