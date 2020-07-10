import GenericIcon from 'App/Components/GenericIcon';
import WhiteButton from 'App/Components/WhiteButton';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';


class NewInfluencerVisitFormLayout extends React.Component {
    render() {
        return (
            <View>
                <Header transparent style={Styles.header}>

                    <View style={Styles.container}>
                        <View style={Styles.arrowContainer}>
                            <GenericIcon
                                name={'arrow-back'}
                                onPress={NavigationService.goback}
                                style={Styles.backArrow}
                            />
                        </View>

                        <WhiteButton
                          title={'Info'}
                          style={Styles.actionButton}
                          textStyle={Styles.actionButtonText}
                          onPress={() => NavigationService.navigate('InfluencerInfoScreen')}
                          selected={this.props.currentScreen == 'InfluencerInfoScreen'}
                        />

                      <WhiteButton
                          title={'Visit Details'}
                          style={Styles.actionButton}
                          textStyle={Styles.actionButtonText}
                          onPress={() => NavigationService.navigate('NewInfluencerVisitForm')}
                          selected={this.props.currentScreen == 'NewInfluencerVisitForm'}
                        />

                        <WhiteButton
                          title={'Brand Details'}
                          style={Styles.actionButton}
                          textStyle={Styles.actionButtonText}
                          onPress={() => NavigationService.navigate('InfluencerVisitsList')}
                          selected={this.props.currentScreen == 'InfluencerVisitsList' }
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
})

export default connect(
    mapStateToProps
)(NewInfluencerVisitFormLayout)


const Styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: wp('100%')
    },
    header: {
      alignItems: 'center',
      height: hp('14%')
    },
    arrowContainer: {
      width: wp('10%'),
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    backArrow: {
      color: Colors.button,
      padding: 5
    },
  actionButton: {
    overflow: 'visible',
    borderWidth: 1.5,
    width: wp('30%'),
    paddingLeft: 0,
    paddingRight: 0
  },
  actionButtonText: {
    fontSize: wp('3.9%'),
    fontFamily: ApplicationStyles.textMediumFont
  },
  countBadge: {
    position: 'absolute',
    backgroundColor: Colors.button,
    right: 0,
    top: -10
  }
  });