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
import Underline from 'App/Components/Underline';


class Actionables extends React.Component {
  scrollToIndex(index){
    let distanceToBeScrolled = (index)*wp('39%');
    if (this.flatListRef){
      this.flatListRef.scrollTo({x: distanceToBeScrolled, y: 0, animated: true});
    }
  }

  componentDidMount() {
    this.props.selectFollowUp('1')
    this.scrollToIndex(0)
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
        <View style={{marginTop: hp('1%'),paddingHorizontal: wp('2%'), flex:1}}>
           <FollowUps /> 
        </View>
       
      );
    }else {
      visible_node = (<View style={{marginTop: hp('6%'), height: hp ('10%'),paddingHorizontal: wp('0%')}}><Segmentation /></View>);
    }

    return (
        <View style={{flex: 1}}>
          <View 
            style={{justifyContent: 'center', alignItems:'center' }}
           >
             
           	<Text style={Styles.heading}>{"FOLLOW UP'S"}</Text>
            <Underline/>
          
             

           <ScrollView 
            horizontal={true}
            style={{...Styles.scrollContainer}}
            ref={ref => {this.flatListRef = ref}}

           >
            <WhiteButton
              title={'Open Hot Leads'}
              style={{...Styles.actionButton, ...Styles.customSelectedStylePink}}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('1'); this.scrollToIndex(0)}}
              selected={selectedFollowUp == '1'}
              customSelectedStyle={{...Styles.customSelectedStylePink, ...Styles.selected}}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            />

            <WhiteButton
              title={'Purchase Date Over Due'}
              style={{...Styles.actionButton, ...Styles.customSelectedStyleSeaGreen}}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('2');  this.scrollToIndex(1)}}
              selected={selectedFollowUp == '2'}
              customSelectedStyle={{...Styles.customSelectedStyleSeaGreen, ...Styles.selected}}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            />

          <WhiteButton
              title={'Booking Confirmed & Finance Required'}
              style={{...Styles.actionButton, ...Styles.customSelectedStyleRedPink}}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('3');  this.scrollToIndex(2)}}
              selected={selectedFollowUp == '3'}
              customSelectedStyle={{...Styles.customSelectedStyleRedPink, ...Styles.selected}}
              customSelectedTextStyle={{...Styles.customSelectedTextStyle}}
            />

        
            <WhiteButton
              title={'Open HO Assigned Leads'}
              style={{...Styles.actionButton, ...Styles.customSelectedStyleYellow}}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('4');  this.scrollToIndex(3)}}
              selected={selectedFollowUp == '4'}
              customSelectedStyle={{...Styles.customSelectedStyleYellow, ...Styles.selected}}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            />

            <WhiteButton
              title={'No Action From Last 1 Week'}
              style={{...Styles.actionButton, ...Styles.customSelectedStyleGreyWhite}}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('5');  this.scrollToIndex(4)}}
              selected={selectedFollowUp == '5'}
              customSelectedStyle={{...Styles.customSelectedStyleGreyWhite, ...Styles.selected}}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            /> 


            <WhiteButton
              title={'Incoming Call Open Leads'}
              style={{...Styles.actionButton, ...Styles.customSelectedStyleCorpBlue}}
              textStyle={Styles.actionButtonText}
              onPress={() => {selectFollowUp('6');  this.scrollToIndex(5)}}
              selected={selectedFollowUp == '6'}
              customSelectedStyle={{...Styles.customSelectedStyleCorpBlue, ...Styles.selected}}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            />       
          </ScrollView>
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

  heading: {
    
    alignSelf: 'center',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('4.5%'),
    marginTop: hp('1%'),
    marginBottom:hp('1%'),
    textTransform: 'uppercase',
    },
  scrollContainer: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('10%'),
    
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
    marginTop: hp('2.5%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('5%'),
    minWidth: wp('25%'),
    elevation: 0,
    width: wp('40%'),
  },
  actionButtonText: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.headingBlack
  },
   actionButtonTextHeading: {
    fontSize: wp('4.9%'),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.headingBlack
  },
  countBadge: {
    position: 'absolute',
    backgroundColor: Colors.button,
    right: 0,
    top: -10
  },
  customSelectedTextStyle: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.headingBlack
  },
  customSelectedStylePink: {
    backgroundColor: Colors.darkPink,
    width: wp('40%')
  },

  customSelectedStyleSeaGreen: {
    backgroundColor: Colors.darkSeaGreen,
    width: wp('40%')
  },
  
  customSelectedStyleRedPink: {
    backgroundColor: Colors.darkRedPink,
    width: wp('40%')
  },

  customSelectedStyleYellow: {
    backgroundColor: Colors.darkYellow,
    width: wp('40%')
  },
  customSelectedStyleGreyWhite: {
    backgroundColor: Colors.darkGreyWhite,
    
    width: wp('40%')
  },
  customSelectedStyleCorpBlue: {
    backgroundColor: Colors.darkCorpBlue,
    width: wp('40%')
  },
  selected: {
    borderWidth: 1,
    borderColor: Colors.black
  }
});






