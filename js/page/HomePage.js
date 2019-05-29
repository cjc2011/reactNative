/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MyPage from './MyPage.js';
import PopularPage from './PopularPage.js';
import FavoritePage from './FavoritePage.js';
import TrendingPage from './TrendingPage.js';
import { 
  createBottomTabNavigator,
  createAppContainer
 } from 'react-navigation'
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 import EntypoIcons from 'react-native-vector-icons/Entypo'


let iconSize = 26
export default class HomePage extends Component{
  componentDidMount() {
    let { navigation } = this.props 
    setTimeout( () => {
      // navigation.navigate('DetailPage')
    }, 3000)
  }

  _tabNavigator() {
    return createBottomTabNavigator({
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
    });
  }
  
  render() {
    const Tab = createAppContainer(this._tabNavigator())
    return (
      <Tab></Tab>
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
