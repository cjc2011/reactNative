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

export default class EynamicTabNavigator extends Component{
  constructor(props) {
    super(props)
    console.disableYellowBox = true 
  }

  componentDidMount() {
    let { navigation } = this.props 
    setTimeout( () => {
      // navigation.navigate('DetailPage')
    }, 3000)
  }

  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage}  = TABS
    const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage }
    PopularPage.navigationOptions.tabBarLabel = '最冷'   //动态配置Tab属性
    return createBottomTabNavigator(tabs, {
      tabBarComponent: tabBarComponent
    });
  }
  
  render() {
    const Tab = createAppContainer(this._tabNavigator())
    return (
      <Tab></Tab>
    )
  }
}

class tabBarComponent extends Component{
  constructor(props) {
    super(props)
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }

  render() {
    const {routes, index} = this.props.navigation.state;
    console.log(routes, index)
    if (routes[index].params) {
      const {theme} = routes[index].params 
      if (theme && theme.updateTime > this.theme.updateTime) {
        console.log('update theme')
        this.theme = theme
      }
    }
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.tintColor || this.props.activeTintColor}
      ></BottomTabBar>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  home: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
