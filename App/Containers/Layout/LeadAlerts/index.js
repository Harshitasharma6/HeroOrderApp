import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';


class LeadAlertsLayout extends React.Component {
  render() {
    const {
      currentScreen
    } = this.props;

    return (
     <Header transparent style={Styles.header}>
       <BackArrowButton />
       <View style={{alignItems:'center', justifyContent: 'center', width: wp('50%'), height: 100, marginHorizontal: wp('23%')}}>
          <Image
              style={{ width: '100%', height: '100%', resizeMode: 'contain'}}
              source={require('App/Assets/Images/herologo.png')}
          />
      </View>  
    </Header>
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
)(LeadAlertsLayout)


const Styles = StyleSheet.create({
   buttonBox: {
    ...Helpers.textCenter,
  },
  container: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 110,
    paddingBottom: 60,
    shadowColor: Colors.white,
    shadowOffset: { width: 20, height: 30 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
   header: {
    alignItems: 'flex-start',
    height: hp('23%'),
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

