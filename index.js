/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import { createAppContainer } from 'react-navigation'
import { AppStackNavigator } from './navigators/AppNavigators.js'
import {name as appName} from './app.json';
console.log('createAppContainer');
const App = createAppContainer(AppStackNavigator)

AppRegistry.registerComponent(appName, () => App);
