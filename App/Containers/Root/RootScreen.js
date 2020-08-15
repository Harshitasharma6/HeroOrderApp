import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Keyboard, StatusBar, Alert } from 'react-native'
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
import CallDetectorManager from 'react-native-call-detection'
import VIForegroundService from '@voximplant/react-native-foreground-service';

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
    startup();
    
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    this.callDetector = new CallDetectorManager((event, phoneNumber)=> {
      // For iOS event will be either "Connected",
      // "Disconnected","Dialing" and "Incoming"

      // For Android event will be either "Offhook",
      // "Disconnected", "Incoming" or "Missed"
      // phoneNumber should store caller/called number


      if (event === 'Disconnected') {
        Alert.alert(
            `${phoneNumber} disconnected`,
        );
      }
      else if (event === 'Connected') {

      }
      else if (event === 'Incoming') {
       
      }
      else if (event === 'Dialing') {
      // Do something call got dialing
      // This clause will only be executed for iOS
      }
      else if (event === 'Offhook') {
      //Device call state: Off-hook.
      // At least one call exists that is dialing,
      // active, or on hold,
      // and no calls are ringing or waiting.
      // This clause will only be executed for Android
      }
      else if (event === 'Missed') {
          // Do something call got missed
          // This clause will only be executed for Android
      }
    },
    true, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
    ()=>{}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
    {
    title: 'Phone State Permission',
    message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
    } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
    );

    HelperService.startForegroundService()


  }

  componentWillUnmount() {
      this.keyboardDidHideListener.remove();
      HelperService.clearWatchLocation();
      //this.callDetector && this.callDetector.dispose();
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
