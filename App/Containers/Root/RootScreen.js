import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Keyboard, StatusBar } from 'react-native'
import { Root } from "native-base";
import { connect } from 'react-redux'
import StartDayActions from 'App/Stores/StartDay/Actions'
import StartupActions from 'App/Stores/Startup/Actions'
import CommonActions from 'App/Stores/Common/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import NetworkStatusBanner from "App/Components/NetworkStatusBanner";
import GenericApplicationModal from "App/Components/GenericApplicationModal";
import {HelperService} from 'App/Services/Utils/HelperService';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Layout from 'App/Containers/Layout/LayoutScreen';

class RootScreen extends Component {
  async componentDidMount() {
    const {
      id,
      token,
      startup,
      startedToday,
      endedToday,
      absentToday,
      retailersOffset,
      retailersLimit,
      categoryOffset,
      categoryLimit,
      productLimit,
      productOffset,
      fetchCurrentLocationSuccess
    } = this.props;


    let permission = await HelperService.requestMultipleStoragePermission();
    
    if (!permission) {
      Alert.alert(
        "Storage permission Denied.",
        'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Shree.'
      );
    }

    let locationPermission = await HelperService.requestLocationPermission();

    if (locationPermission) {
      HelperService.watchLocation({callback: (fetchCurrentLocationSuccess)});
    }else {
      Alert.alert(
        "Location permission Denied.Cannot Proceed",
        'If you have denied permanently then Go "App Permissions" and Turn on "Location" Permission for Shree.'
      );
    }


    startup({
        id,
        token,
        startedToday,
        endedToday,
        absentToday,
        retailersOffset,
        retailersLimit,
        categoryOffset,
        categoryLimit,
        productLimit,
        productOffset
      });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
      this.keyboardDidHideListener.remove();
      HelperService.clearWatchLocation();
    }

  keyboardDidHide(){
      Keyboard.dismiss()
  };

  // gets the current screen from navigation state
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  }


  // componentDidCatch(error, info) {
  //   // Display fallback UI
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, info);
  //   bugsnag.notify(new Error(error));
  //   //console.log('Error:--', error)
  // }

  render() {
    const {
      isConnected,
      isVisible,
      closeModal,
      modalVisible,
      modalContent,
      modalHeading,
      modalDisabled,
      modalBodyFlexHeight
    } = this.props;
    return (
          <Root>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView style={{flex: 1}}>
            <Layout>
              <View style={Helpers.fill}>
                <NetworkStatusBanner
                  isConnected={this.props.isConnected}
                  isVisible={this.props.isVisible}
                />

                <GenericApplicationModal 
                  close={() => closeModal()} 
                  visible={modalVisible} 
                  content={modalContent}
                  heading={modalHeading}
                  bodyFlexHeight={modalBodyFlexHeight}
                  disabled={modalDisabled}
                />
         
                <AppNavigator
                  onNavigationStateChange={(prevState, currentState, action) => {
                    const currentRouteName = this.getActiveRouteName(currentState);
                    this.props.screenChanged(currentRouteName);
                  }}
                  // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
                  ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                  }}
                />
              </View>
            </Layout>
            </SafeAreaView>
          </Root>
        
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
  isConnected: PropTypes.bool,
  isVisible: PropTypes.bool
}

const mapStateToProps = (state) => ({
  id: state.user.id,
  token: state.user.token,
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  modalVisible: state.common.genericActionModal.visible,
  modalContent: state.common.genericActionModal.content,
  modalHeading: state.common.genericActionModal.heading,
  modalDisabled: state.common.genericActionModal.disable,
  modalBodyFlexHeight: state.common.genericActionModal.bodyFlexHeight,
  startedToday: state.user.startDayTime ? HelperService.isToday(state.user.startDayTime) : false,
  endedToday: state.user.endDayTime ? HelperService.isToday(state.user.endDayTime) : false,
  absentToday: state.user.absentDayTime ? HelperService.isToday(state.user.absentDayTime) : false,
});

const mapDispatchToProps = (dispatch) => ({
  startup: (params)                  => dispatch(StartupActions.startup(params)),
  screenChanged: (previousRouteName) => dispatch(CommonActions.screenChanged(previousRouteName)),
  closeModal:()                      => dispatch(CommonActions.closeModal()),
  fetchCurrentLocationSuccess:(params)=> dispatch(StartDayActions.fetchCurrentLocationSuccess(params)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
