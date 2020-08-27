import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';


class DashboardScreenLayout extends React.Component {
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
        <Header style={Styles.header}>
        
          	<ScrollView 
            	horizontal={true}
            	style={Styles.container}
            	ref={ref => {this.flatListRef = ref}}
           	>
           	<WhiteButton
              title={'Summary'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('DashboardSummaryScreen'); this.scrollToIndex(0)}}
              selected={currentScreen == 'DashboardSummaryScreen'}
            />

            <WhiteButton
              title={'Trends'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('DashboardTrendsScreen'); this.scrollToIndex(1)}}
              selected={currentScreen == 'DashboardTrendsScreen'}
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
  currentScreen: state.common.currentScreen
})

export default connect(
  mapStateToProps
)(DashboardScreenLayout)


const Styles = StyleSheet.create({
  container: {
  	flexDirection: 'row'
  },
  header: {
    height: hp('14%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 0,
    paddingTop: hp('4.5%')
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
    width: wp('45%')
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
  logoContainer: {
  	width: wp('40%'),
    height: hp('12%'),
    marginLeft: 5,
    marginBottom: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    
    position: 'relative'
  },
  logo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    top: 0
  },
});

