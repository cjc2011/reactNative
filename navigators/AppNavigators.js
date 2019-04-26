import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import { Button } from 'react-native'
import HomePage from '../page/HomePage.js'
import Page1 from '../page/page1.js'
import Page2 from '../page/page2.js'
import Page3 from '../page/page3.js'
import Page4 from '../page/page4.js'
import Page5 from '../page/page5'

export const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}页面名`
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      title: 'page2页面名称'
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: (props) => {
      const { navigation } = props;
      const { state, setParams} = navigation 
      const { params } = state 
      return {
        title: params.title || 'This is Page3',
        headerRight: (
          <Button 
            title={params.mode === 'deit' ? '保存' : '编辑'}
            onPress={()=>setParams({mode: params.mode === 'edit'?'':'edit'})}
          ></Button>
        )
      }
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      title: 'page4页面名称'
    }
  }
})