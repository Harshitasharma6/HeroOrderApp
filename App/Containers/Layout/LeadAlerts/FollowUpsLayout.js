import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LeadAlertsLayout from './index'


class FollowUpsLayout extends React.Component {
  scrollToIndex(index){
    let distanceToBeScrolled = (index)*wp('23%');
    if (this.flatListRef){
      this.flatListRef.scrollTo({x: distanceToBeScrolled, y: 0, animated: true});
    }
  }

  render() {
    const {
      currentScreen
    } = this.props;

    return (
      <View>
      	<LeadAlertsLayout />
        <Header transparent style={Styles.header}>
        	<View style={{paddingTop: hp('1%'), paddingBottom: hp('1%')}}>
        		<BackArrowButton />
        	</View>
          <ScrollView 
            horizontal={true}
            style={Styles.container}
            ref={ref => {this.flatListRef = ref}}
           >
           	<WhiteButton
              title={'Open Hot Leads'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('OpenHotLeadsScreen'); this.scrollToIndex(0)}}
              selected={currentScreen == 'OpenHotLeadsScreen'}
            />

            <WhiteButton
              title={'Purchase Date Over Due'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('PurchaseDateOverDueScreen'); this.scrollToIndex(1)}}
              selected={currentScreen == 'PurchaseDateOverDueScreen'}
            />

          <WhiteButton
              title={'Booking Confirmed & Finance Required'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('BookingConfirmedScreen'); this.scrollToIndex(2)}}
              selected={currentScreen == 'BookingConfirmedScreen'}
            />

        
            <WhiteButton
              title={'Open Hot Assigned Leads'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('OpenHotAssignedLeadsScreen') ; this.scrollToIndex(3)}}
              selected={currentScreen == 'OpenHotAssignedLeadsScreen' }
            />

             <WhiteButton
              title={'No Action From Last 1 Week'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('NoActionScreen') ; this.scrollToIndex(4)}}
              selected={currentScreen == 'NoActionScreen' }
            />
           
            
          </ScrollView>
        </Header>
        {this.props.children}
      </View>
    )
  }
}  



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  isRetailer : state.shree.selectedShree.data && (state.shree.selectedShree.data['Party_Type__c'] == 'Retailer' || state.shree.selectedShree.data['Shop_Type__c'] == 'Retailer')
})

export default connect(
  mapStateToProps
)(FollowUpsLayout)


const Styles = StyleSheet.create({
  container: {
  	flexDirection: 'row'
  },
  header: {
    alignItems: 'flex-start',
    height: hp('17%'),
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





