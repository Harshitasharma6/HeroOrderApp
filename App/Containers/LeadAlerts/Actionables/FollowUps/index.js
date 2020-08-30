import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import BookingConfirmed from './BookingConfirmed'
import NoAction from './NoAction'
import OpenHotAssignedLeads from './OpenHotAssignedLeads'
import OpenHotLeads from './OpenHotLeads'
import CallLeads from './CallLeads'
import AllOpenLeads from './AllOpenLeads'
import PurchaseDateOverDue from './PurchaseDateOverDue'
import TodayFollowUps from './TodayFollowUp'


class FollowUps extends React.Component {
  render() {
    const {
      currentScreen,
      selectFollowUp,
      selectedFollowUp
    } = this.props;

    let visibleNode = <OpenHotLeads />

    switch(selectedFollowUp) {
    	case '1':
    		visibleNode = <OpenHotLeads />
    		break;
    	case '2':
    		visibleNode = <PurchaseDateOverDue />
    		break;
    	case '3':
    		visibleNode = <BookingConfirmed />
    		break;
    	case '4':
    		visibleNode = <OpenHotAssignedLeads />
    		break;
    	case '5':
    		visibleNode = <NoAction />
    		break;
      case '6':
        visibleNode = <AllOpenLeads />
        break;
      case '7':
        visibleNode = <CallLeads />
        break;
      case '8':
        visibleNode = <TodayFollowUps/>  
        break;
    	default:
    		visibleNode = <OpenHotLeads />
    		break;
   	}

    return (visibleNode)
  }
} 


const mapStateToProps = (state) => ({
	  isConnected: state.network.isConnected,
  	isVisible: state.common.isNetworkBannerVisible,
  	currentScreen: state.common.currentScreen,
  	selectedActionable:  state.leadAlerts.selectedActionable,
  	selectedFollowUp:    state.leadAlerts.selectedFollowUp
});


const mapDispatchToProps = (dispatch) => ({
  selectActionable: (params) => dispatch(LeadAlertsAction.selectActionable(params)),
  selectFollowUp: (params)   => dispatch(LeadAlertsAction.selectFollowUp(params))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowUps)


const Styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
  	height: hp('8%')
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  actionButton: {
    overflow: 'visible',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('5%'),
    minWidth: wp('25%'),
  },
  actionButtonText: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  countBadge: {
    position: 'absolute',
    backgroundColor: Colors.button,
    right: 0,
    top: -10
  }
});





