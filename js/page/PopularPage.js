import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import NavigationUtil from '../navgators/NavigationUtil.js'
import { 
  createMaterialTopTabNavigator,
  createAppContainer
 } from 'react-navigation'


// 流行
export default class PopularPage extends Component {
  constructor(props) {
    super(props)
    this.tabNames = ['Java', 'Android', 'IOS', 'Vue', 'React', 'React Native', 'PHP']
  }

  _genTabs() {
    const tabs = {}
    this.tabNames.forEach( (item, index) => {
      tabs[`tab${index}`] = {
        screen: props => {
          return <PopularTab 
            {...props}
            tabLabel={item}
          ></PopularTab>
        },
        navigationOptions: {
          title: item
        }
      }
    })
    return createMaterialTopTabNavigator(tabs, {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false, //设置标签内容是否大写
        scrollEnabled: true,     //是否支持选项卡滚动
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
        style: {
          backgroundColor: '#678'
        }
      }
    })
  }

  render() {
    let Toptab = createAppContainer(this._genTabs())
    return (
      <View style={{height: 160, flex: 1, marginTop: 40, backgroundColor: 'red'}}>
        <Toptab></Toptab>
      </View>
    )
  }
}

class PopularTab extends Component {
  render() {
    const { tabLabel } = this.props;
    return (
      <View style={styles.container}>
        <Text>{tabLabel}</Text>
        <Text onPress={ () => {
          let navigation = NavigationUtil.navigation
          NavigationUtil.goPage({navigation}, 'DetailPage')
        }}>点击转跳到详情页面</Text>
        <Button 
          title={'fetchDemo'}
          onPress={ () => {
            let navigation = NavigationUtil.navigation
            NavigationUtil.goPage({navigation}, 'FetchDemo')
          }}
        ></Button>
        <Button 
          title={'数据存储'}
          onPress={ () => {
            let navigation = NavigationUtil.navigation
            NavigationUtil.goPage({navigation}, 'AsyncDemo')
          }}
        ></Button>
        <Button 
          title={'数据请求离线缓存测试'}
          onPress={ () => {
            let navigation = NavigationUtil.navigation
            NavigationUtil.goPage({navigation}, 'DataStoreDemoPage')
          }}
        ></Button>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    color: '#999'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#444'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'yellow'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  },
  tabStyle: {
    minWidth: 50,
  }
});