/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';
import {name as appNameIos} from './appIos.json';


if (Platform.OS == 'android') {
	AppRegistry.registerComponent(appName, () => App);
}else {
	AppRegistry.registerComponent(appNameIos, () => App);
}

