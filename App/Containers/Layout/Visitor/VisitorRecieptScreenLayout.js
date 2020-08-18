import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';


class VisitorRecieptScreenLayout extends React.Component {
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
      <View >
        <Header transparent style={Styles.header}>
        	<View style={{paddingTop: hp('1%'), paddingBottom: hp('1%')}}>
        		<BackArrowButton />
        	</View>
          <View 
            
            style={Styles.container}
          
           >
           	<WhiteButton
              title={'PAY FOR BOOKING'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('GenerateRecieptformScreen'); }}
              selected={currentScreen == 'GenerateRecieptformScreen'}
            />

            <WhiteButton
              title={'PAY FULL'}
              style={Styles.actionButton1}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('GenerateInvoiceformScreen'); }}
              selected={currentScreen == 'GenerateInvoiceformScreen'}
            
            />

         

        
            
           
            
          </View>
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
)(VisitorRecieptScreenLayout)


const Styles = StyleSheet.create({
  container: {
      flexDirection: 'row', 
      justifyContent: 'space-around',
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
    paddingLeft: wp('6%'),
    paddingRight: wp('4%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    marginLeft: wp('3%'),
    height: hp('5%'),
    minWidth: wp('25%'),
  },
  actionButton1: {
    overflow: 'visible',
    paddingLeft: wp('6%'),
    paddingRight: wp('4%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    marginRight: wp('4%'),
    marginLeft: wp('20%'),
    height: hp('5%'),
    minWidth: wp('32%'),
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





