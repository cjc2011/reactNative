import React, {Component} from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation'
import { Button, Platform } from 'react-native'
import HomePage from '../page/HomePage.js'
import Page1 from '../page/page1.js'
import Page2 from '../page/page2.js'
import Page3 from '../page/page3.js'
import Page4 from '../page/page4.js'
import Page5 from '../page/page5'
import IosIcon from 'react-native-vector-icons/FontAwesome5'

const AppTopNavigator = createMaterialTopTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'All',
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'IOS',
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'ReactNative',
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: 'Page-4',
    }
  },
  Page5: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page-4',
    }
  }
}, {
  tabBarOptions: {
    tabStyle: {minWidth: 50},
    upperCaseLabel: false,
    scrollEnabled: true,
    style: {
      backgroundColor: '#678'
    },
    indicatorStyle: {
      height: 2,
      backgroundColor: 'white'
    },
    labelStyle: {
      fontSize: 13,
      marginTop: 6,
      marginBottom: 6
    }
  }
})

const AppBottomNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <IosIcon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{color: tintColor}}
        /> 
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <IosIcon
          name={'ios-people'}
          size={26}
          style={{color: tintColor}}
        ></IosIcon>
      )
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <IosIcon
          name={'ios-chatboxes'}
          size={26}
          style={{color: tintColor}}
        ></IosIcon>
      )
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <IosIcon
          name={'ios-aperture'}
          size={26}
          style={{color: tintColor}}
        ></IosIcon>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
  }
})

export const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    screen: Page1,
    navigationOptions: {
      title: 'dsdsds',
      headerBackTitle: 'page1 back'
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: ({navigation}) => ({
      title: `page2`,
      headerBackTitle: 'page2 back'
    })
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
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={()=>{
              return setParams({mode: params.mode === 'edit'?'':'edit'})
            }}
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
  },
  Bottom: {
    screen: AppBottomNavigator,
    navigationOptions: {
      title: 'bottomNavigator'
    }
  },
  Top: {
    screen: AppTopNavigator,
    navigationOptions: {
      title: 'TopNavigator'
    }
  }
  
})