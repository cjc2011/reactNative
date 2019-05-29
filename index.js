/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';

// import { createAppContainer } from 'react-navigation'
import {name as appName} from './app.json';
import WelcomePage from './page/WelcomePage.js'

AppRegistry.registerComponent(appName, () => WelcomePage);
