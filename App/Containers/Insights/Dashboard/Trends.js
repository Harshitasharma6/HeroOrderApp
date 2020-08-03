import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import HeadingBox from 'App/Components/HeadingBox'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import Separator from 'App/Components/Separator';
//import LineChart from 'App/Components/LineChart';


class DashboardTrendsScreen extends React.Component {
  render() {
    const {
      currentScreen
    } = this.props;

    return (
      	<ScrollView style={Styles.container}>
          	<HeadingBox value={'Revenue Trend'}/>
          		
          	<HeadingBox value={'Vehicle Sold Count'}/>
          		
        </ScrollView>
    );
  }
}  



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen
})

export default connect(
  mapStateToProps
)(DashboardTrendsScreen)


const Styles = StyleSheet.create({
  container: {
  	flex: 1,
  	marginBottom: hp('2%')
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
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5
  },
});





