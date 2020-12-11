import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView,Dimensions  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import SchemeInfo from 'App/Components/SchemeInfo';


class SchemeClaimScreenLayout extends React.Component {
 

  render() {
    const {
      currentScreen
    } = this.props;
    let Result= true;

    return (
      <View>
        <Header style={Styles.header}>
        	<View style={{paddingTop: hp('1%'), paddingBottom: hp('1%')}}>
        		<BackArrowButton />
        	</View>
        {  Result ?  <Text style={Styles.heading}>{'SUBMITTED SUCCESSFULLY'}</Text>:  <Text style={Styles.heading}>{'SCHEME CLAIM FORM REJECTED'}</Text>
  }
        </Header>
        <View style={Styles.box}> 
          <SchemeInfo heading={'RM Status:'}  value={''} />
          <SchemeInfo heading={'Bank Office Status:'}  value={''} />
          <SchemeInfo heading={'Account Status:'}  value={''}/>
          
       </View>
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
)(SchemeClaimScreenLayout)


const Styles = StyleSheet.create({
  container: {
  	flexDirection: 'row'
  },
  box: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 30,
    marginVertical: 2,
    padding: 15,
    borderRadius: 10,
    position: 'relative'
  },
  heading: {
    alignSelf: 'center',
    color: Colors.black,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('4.5%'),
   
    marginTop: hp('0%'),
      textTransform: 'uppercase',
      marginBottom: hp('1%'),
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