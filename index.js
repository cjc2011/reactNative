/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import  ReduxNav from './js/navgators/AppNavigator.js'
import Root from './js/store/index.js'

AppRegistry.registerComponent(appName, () => Root);
