import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ReduxNetworkProvider } from 'react-native-offline'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import Loading from 'App/Components/Loading';
import SplashScreen from 'react-native-splash-screen';
import {Alert} from "react-native";
import {
  setJSExceptionHandler,
  setNativeExceptionHandler
} from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';
import { Client } from 'bugsnag-react-native';
import { HelperService } from 'App/Services/Utils/HelperService'
const bugsnag = new Client("c5d8e34c5182d96434237338016d7e31");

import { Buffer } from 'buffer';
global.Buffer = Buffer;
global.bugsnag = bugsnag;
const { store, persistor } = createStore();


const reporter = (error) => {
  console.log(error); 
};

const errorHandler = (e, isFatal) => {
  bugsnag.notify(new Error(e));
};

setJSExceptionHandler(errorHandler, true);
setNativeExceptionHandler((errorString => {
  bugsnag.notify(new Error('Native exception!!!'));
}), true);



export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <ReduxNetworkProvider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <RootScreen />
          </PersistGate>
        </ReduxNetworkProvider>
      </Provider>
    )
  }
}
