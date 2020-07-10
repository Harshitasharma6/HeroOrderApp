import GenericIcon from 'App/Components/GenericIcon';
import WhiteButton from 'App/Components/WhiteButton';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';


class ShreeRetailerInfoLayout extends React.Component {
  scrollToIndex(index){
    let distanceToBeScrolled = (index)*wp('23%');
    if (this.flatListRef){
      this.flatListRef.scrollTo({x: distanceToBeScrolled, y: 0, animated: true});
    }
  }

  render() {
    return (
      <View>
        <Header transparent style={Styles.header}>
            <View style={Styles.arrowContainer}>
              <GenericIcon
                name={'arrow-back'}
                onPress={() => NavigationService.goback()}
                style={Styles.backArrow}
              />
            </View>
          <ScrollView 
            horizontal={true}
            style={Styles.container}
            ref={ref => {this.flatListRef = ref}}
           >
            <WhiteButton
              title={'Dealer Info'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('ShreeInfo'); this.scrollToIndex(0)}}
              selected={this.props.currentScreen == 'ShreeInfo'}
            />

          <WhiteButton
              title={'Visit Form'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('ShreeVisitForm'); this.scrollToIndex(1)}}
              selected={this.props.currentScreen == 'ShreeVisitForm'}
            />


            <WhiteButton
              title={'Visit Details'}
              style={Styles.actionButton}
              textStyle={Styles.actionButtonText}
              onPress={() => {NavigationService.navigate('ShreeCountersVisitsList') ; this.scrollToIndex(2)}}
              selected={this.props.currentScreen == 'ShreeCountersVisitsList' || this.props.currentScreen == 'ShreeCounterVisitForm'  }
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
)(ShreeRetailerInfoLayout)


const Styles = StyleSheet.create({
  container: {
  },
  header: {
    alignItems: 'flex-start',
    height: hp('18%'),
    flexDirection: 'column',
    justifyContent: 'flex-end'
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
    width: wp('31%'),
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
  }
});





