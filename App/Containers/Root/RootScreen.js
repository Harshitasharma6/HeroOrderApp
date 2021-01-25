import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Keyboard, StatusBar, Alert, Text, Platform } from 'react-native'
import { Root } from "native-base";
import { connect } from 'react-redux'
import StartDayActions from 'App/Stores/StartDay/Actions'
import StartupActions from 'App/Stores/Startup/Actions'
import VisitorActions from 'App/Stores/Visitor/Actions'
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
import { Drawer } from 'native-base';
import SideBar from 'App/Containers/Layout/SideBarLayout/SideBar';
import CallsModal from 'App/Containers/CallsModal';
import SplashScreen from 'react-native-splash-screen';
navigator.geolocation = require('react-native-geolocation-service');

class RootScreen extends Component {
  async componentDidMount() {
    const {
      id,
      token,
      startup,
      changeForm,
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
    let cameraPermission= await HelperService.requestCameraPermission();
    
    if (!permission) {
      Alert.alert(
        "Storage permission Denied.",
        'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for HeroElectric.'
      );
    }

    let locationPermission = await HelperService.requestLocationPermission();

    if (locationPermission) {
      //HelperService.watchLocation({callback: (fetchCurrentLocationSuccess)});
    }else {
      Alert.alert(
        "Location permission Denied.Cannot Proceed",
        'If you have denied permanently then Go "App Permissions" and Turn on "Location" Permission for Shree.'
      );
    }

    startup();
    SplashScreen.hide();
    if (Platform.OS == 'android') {
      // let phoneStatePermission = await HelperService.requestPhoneStatePermission();
      // if (phoneStatePermission) {
      //     this.callDetector = new CallDetectorManager((event, phoneNumber)=> {
      //       if (event === 'Disconnected') {
      //         Alert.alert(
      //           `Do you want to register the recent call from number ${phoneNumber} ?`,
      //           'Pressing Yes will take you to screen where you can create record for this call.',
      //           [
      //             {
      //               text: 'Cancel',
      //               onPress: () => console.log('Cancel Pressed'),
      //               style: 'cancel'
      //             },
      //             { text: 'Yes', onPress: () => {changeForm({edited_field: 'contact_number__c', edited_value: phoneNumber}); NavigationService.navigate('CustomerCallFormScreen') }}
      //           ],
      //           { cancelable: false }
      //         );
      //       }
      //       else if (event === 'Connected') {

      //       }
      //       else if (event === 'Incoming') {
              
      //       }
      //       else if (event === 'Dialing') {
           
      //       }
      //       else if (event === 'Offhook') {
           
      //       }
      //       else if (event === 'Missed') {
      //       }
      //     },
      //     true, 
      //     ()=>{},
      //     {
      //       title: 'Phone State Permission',
      //       message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
      //     }
      //   );
      // }else {
      //   Alert.alert(
      //     "Phone State and Call Logs Permission",
      //     'If you have denied permanently then Go "App Permissions" and Turn on "Call Log" and "Phone State" Permission for HeroElectric.'
      //   );
      // }
    }
  }

  closeDrawer(){
    this.drawer._root.close()
  };

  openDrawer(){
    this.drawer._root.open()
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

  render() {
    const {
      isConnected,
      isVisible,
      closeModal,
      modalVisible,
      modalContent,
      modalHeading,
      modalDisabled,
      hideCallModal,
      isCallModalVisible,
      modalBodyFlexHeight
    } = this.props;
    return (
          <Root>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView style={{flex: 1}}>
            <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<SideBar closeDrawer={() => this.closeDrawer()}/>}
              side="right"
              >
            <Layout openDrawer={() => this.openDrawer()}>
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

                <CallsModal 
                  isVisible={isCallModalVisible}
                  onCloseModal={() => hideCallModal()}
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
             </Drawer>
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
  isCallModalVisible: state.common.isCallModalVisible
});

const mapDispatchToProps = (dispatch) => ({
  startup: (params)                   => dispatch(StartupActions.startup(params)),
  screenChanged: (previousRouteName)  => dispatch(CommonActions.screenChanged(previousRouteName)),
  closeModal:()                       => dispatch(CommonActions.closeModal()),
  fetchCurrentLocationSuccess:(params)=> dispatch(StartDayActions.fetchCurrentLocationSuccess(params)),
  changeForm: (params)                => dispatch(VisitorActions.changeRegisterCustomerCallForm(params)),
  showCallModal: (params)             => dispatch(CommonActions.showCallModal(params)),
  hideCallModal: (params)             => dispatch(CommonActions.hideCallModal(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
