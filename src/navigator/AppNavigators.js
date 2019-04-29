import React, {Component} from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation'
import { Button, Platform, ScrollView, SafeAreaView, DrawerItems} from 'react-native'
import WelcomePage from '../page/WelcomePage.js'


export default InitNavigation = createStackNavigator({
  WelcomePage: {
    scrren: WelcomePage,
    navigationOptions: {
      title: 'welcome page'
    }
  }
})