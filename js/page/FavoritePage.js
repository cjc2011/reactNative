import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

// 流行
export default class FavoritePage extends Component {
  render() {
    const {navigation} = this.props

    return (
      <View style={{marginTop: 40}}>
        <Text>FavoritePage</Text>
        <Button
          title="修改主题"
          onPress={ () => {
            navigation.setParams({
              theme: {
                tintColor: 'green',
                updateTime: new Date().getTime()
              }
            })
          }}
        ></Button>
      </View>
    )
  }
}