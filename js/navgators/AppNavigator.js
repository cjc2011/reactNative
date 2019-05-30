import React, { Component } from 'react'
import { 
  createStackNavigator, 
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
 } from 'react-navigation'
 import { Provider, connect } from 'react-redux';
 import { createReactNavigationReduxMiddleware, createReduxContainer, createNavigationReducer } from 'react-navigation-redux-helpers'
 import WelcomePage from '../page/WelcomePage.js'
 import HomePage from '../page/HomePage.js'
 import DetailPage from '../page/DetailPage.js'
 
const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null                  //通过将header设置为null 来禁用StackNavigator Bar
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null
    }
  }
})


export const RootNaviagtor = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator
},{
  navigationOptions: {
    header: null
  }
})

// export const navReducer = 

export const middlewar = createReactNavigationReduxMiddleware(
  state => state.nav
)

const WithNavigationState = createReduxContainer(RootNaviagtor)

const mapStateToProps = (state) => ({
  state: state.nav    // v2
})

export const AppWithNavigationState = connect(mapStateToProps)(WithNavigationState)