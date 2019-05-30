import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import NavigationUtil from '../navgators/NavigationUtil.js'
import { 
  createMaterialTopTabNavigator,
  createAppContainer
 } from 'react-navigation'


// 流行
export default class PopularPage extends Component {
  render() {
    const TabNavigator = createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2'
        }
      }
    })
    let Toptab = createAppContainer(TabNavigator)
    return (
      <View style={{flex: 1, marginTop: 40, backgroundColor: '#f20223'}}>
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
        <Text>111</Text>
        <Text onPress={ () => {
          let navigation = NavigationUtil.navigation
          console.log(NavigationUtil.navigation, 'NavigationUtil.navigation')
          NavigationUtil.goPage({navigation}, 'DetailPage')
        }}>点击转跳到详情页面</Text>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});