import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

//趋势
export default class TrendingPage extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{marginTop: 40}}>
        <Text>TrendingPage</Text>
        <Button 
          title="改变主题颜色"
          onPress={ () => {
            navigation.setParams({
              theme: {
                tintColor: 'red',
                updateTime: new Date().getTime()
              }
            })
          }}></Button>
      </View>
    )
  }
}