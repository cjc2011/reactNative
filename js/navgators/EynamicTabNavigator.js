/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MyPage from '../page/MyPage.js';
import PopularPage from '../page/PopularPage.js';
import FavoritePage from '../page/FavoritePage.js';
import TrendingPage from '../page/TrendingPage.js';
import { 
  createBottomTabNavigator,
  createAppContainer
 } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import NavigationUtil from './NavigationUtil.js'
import {BottomTabBar} from 'react-navigation-tabs'
import { connect } from 'react-redux'

let iconSize = 26
const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => {
        return <MaterialIcons
          name={'whatshot'}
          size={iconSize}
          style={{color: tintColor}}
        ></MaterialIcons>
      }
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => {
        return <MaterialIcons
          name={'trending-up'}
          size={iconSize}
          style={{color: tintColor}}
        ></MaterialIcons>
      }
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => {
        return <MaterialIcons
          name={'favorite'}
          size={iconSize}
          style={{color: tintColor}}
        ></MaterialIcons>
      }
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => {
        return <EntypoIcons
          name={'user'}
          size={iconSize}
          style={{color: tintColor}}
        ></EntypoIcons>
      }
    }
  }
}
class EynamicTabNavigator extends Component{
  constructor(props) {
    super(props)
  }

  //动态生成底部标签
  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs
    }
    const {PopularPage, TrendingPage, FavoritePage, MyPage}  = TABS
    const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage }
    PopularPage.navigationOptions.tabBarLabel = '最冷'   //动态配置Tab属性

    const Navbar = createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}></TabBarComponent>
      }
    });
    return this.Tabs = createAppContainer(Navbar)
  }
  
  render() {
    const Tab = this._tabNavigator()
    return (
      <Tab></Tab>
    )
  }
}

// 重写底部导航栏tab组件
class TabBarComponent extends Component{
  constructor(props) {
    super(props)
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }

  render() {
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.props.theme}
      ></BottomTabBar>
    )
  }
}

const mapStateToProps = state => ({
  // theme: state.theme.theme
})

export default connect(mapStateToProps)(EynamicTabNavigator)

