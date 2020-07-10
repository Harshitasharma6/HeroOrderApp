import WhiteButton from 'App/Components/WhiteButton';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';


class CommunicationLayout extends React.Component {
  scrollToIndex(index){
    let distanceToBeScrolled = (index)*wp('23%');
    if (this.flatListRef){
      this.flatListRef.scrollTo({x: distanceToBeScrolled, y: 0, animated: true});
    }
  }

  render() {
    return (
      <View>
        <View style={Styles.logView}>
            <Image
                style={Styles.logo}
                source={require('App/Assets/Images/shreelogo.png')}
            />
            <View style={Styles.logoView}> 
                <Text style={Styles.logoName}>{ "Shree"}</Text>
                <Text style={Styles.logoName}>{ "Cement"}</Text>

            </View>
        </View>
        <Header transparent style={Styles.header}>
          <ScrollView 
            horizontal={true}
            style={Styles.container}
            ref={ref => {this.flatListRef = ref}}
           >
            <WhiteButton
              title={'OutStanding'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('OutStandingScreen'); this.scrollToIndex(0)}}
              selected={this.props.currentScreen == 'OutStandingScreen'}
            />

          <WhiteButton
              title={'Feed Back'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('FeedbackScreen'); this.scrollToIndex(1)}}
              selected={this.props.currentScreen == 'FeedbackScreen'}
            />


            <WhiteButton
              title={'Communication'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('CommunicationScreen') ; this.scrollToIndex(2)}}
              selected={this.props.currentScreen == 'CommunicationScreen' || this.props.currentScreen == 'OutStandingScreen' }
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
})

export default connect(
  mapStateToProps
)(CommunicationLayout)


const Styles = StyleSheet.create({
  container: {
  },
  header: {
    alignItems: 'flex-start',
    height: hp('10%'),
    flexDirection: 'column',
	justifyContent: 'flex-end',
	paddingTop: hp('1%')
  },
  actionButton: {
    overflow: 'visible',
    width: wp('34%'),
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('5%'),
  },
  actionButtonText: {
    fontSize: wp('2.7%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  countBadge: {
    position: 'absolute',
    backgroundColor: Colors.button,
    right: 0,
    top: -10
  },
  logView: {
    marginLeft: wp('5%'),
    flexDirection: 'row',
    marginRight:wp('5%'),
    width: wp('60%'),
    marginTop: hp('6%'),
    borderWidth:2,
    borderColor: '#D71E22B3'
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
   logoName: {
    alignItems: 'center',
    alignContent: 'center',
    fontFamily: ApplicationStyles.textMsgFont,
    marginLeft: 10,
    color: 'red',
    fontSize: 20

   },
   logoView: {
    marginTop: wp('5%'),
    flexDirection: 'column',
    width: wp('34%'),
    height: hp('5%'),
    marginLeft: 5

   }
});