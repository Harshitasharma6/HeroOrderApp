import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import FollowUps from './FollowUps'
import Segmentation from './Segmentation'
import LeadAlertsAction from 'App/Stores/LeadAlerts/Actions'


class Actionables extends React.Component {
  scrollToIndex(index){
    let distanceToBeScrolled = (index)*wp('50%');
    if (this.flatListRef){
      this.flatListRef.scrollTo({x: distanceToBeScrolled, y: 0, animated: true});
    }
  }

  render() {
    const {
      currentScreen,
      selectActionable,
      selectedActionable,
      selectedFollowUp,
      selectFollowUp

    } = this.props;


    let visible_node = [];

    if (selectedActionable == '1') {
      visible_node = (
        <View style={{marginTop: hp('3%'),paddingHorizontal: wp('2%')}}>
          <ScrollView 
            horizontal={true}
            style={{...Styles.scrollContainer}}
            ref={ref => {this.flatListRef = ref}}

           >
             <WhiteButton
              title={'Open Hot Leads'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('1'); this.scrollToIndex(0)}}
              selected={selectedFollowUp == '1'}
            />

            <WhiteButton
              title={'Purchase Date Over Due'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('2');  this.scrollToIndex(1)}}
              selected={selectedFollowUp == '2'}
            />

          <WhiteButton
              title={'Booking Confirmed & Finance Required'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('3');  this.scrollToIndex(2)}}
              selected={selectedFollowUp == '3'}
            />

        
            <WhiteButton
              title={'Open Hot Assigned Leads'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('4');  this.scrollToIndex(3)}}
              selected={selectedFollowUp == '4'}
            />

             <WhiteButton
              title={'No Action From Last 1 Week'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('5');  this.scrollToIndex(4)}}
              selected={selectedFollowUp == '5'}
            />            
          </ScrollView>
          <FollowUps /> 
        </View>
      );
    }else {
      visible_node = (<View style={{marginTop: hp('6%'), flex: 1, paddingHorizontal: wp('0%')}}><Segmentation /></View>);
    }

    return (
        <View style={{flex: 1}}>
          <View 
            horizontal={true}
            style={{...Styles.container, justifyContent: 'center'}}
            ref={ref => {this.flatListRef = ref}}
           >
            <WhiteButton
              title={"Follow Up's"}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectActionable('1')}}
              selected={selectedActionable == '1'}
            />

            <WhiteButton
              title={"Segmentation"}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectActionable('2')}}
              selected={selectedActionable == '2'}
            />
          </View>
          {visible_node}
        </View>
    )
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
)(Actionables)


const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('4%'),
    marginTop: hp('1%')
  },
  scrollContainer: {
    flexDirection: 'row',
    height: hp('7.5%'),
    marginTop: hp('1%')
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  arrowContainer: {
    width: wp('20%'),
    paddingTop: hp('1%')
  },
  backArrow: {
    color: Colors.primary,
    padding: 5
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





