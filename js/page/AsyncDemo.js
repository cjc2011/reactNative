import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const KEY = 'save_key'

export default class AsyncDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: '/'
    }
  }

  doRmove() {
    AsyncStorage.removeItem(KEY, error => {
      error && console.log(error, 'error')
    })
  }

  doSave() {
    console.log(this.value, 'this value')
    AsyncStorage.setItem(KEY, this.value, error => {
      error && console.log(error.toString())
    })
  }

  getData() {
    AsyncStorage.getItem(KEY, (error, value) => {
      this.setState({
        showText: value
      })
      console.log(value)
      error && console.log(error.toString())
    })
  }

  render() {
    return (
      <View style={styles.view} >
        <Text>数据存储demo</Text>
        <View style={styles.viewContainer}>
          <Button style={styles.button} title={'存储数据'} onPress={ ()=> {
            this.doSave()
          }}></Button>
          <Button style={styles.button} title={'删除数据'} onPress={ ()=> {
            this.doRmove()
          }}></Button>
          <Button style={styles.button} title={'获取数据'} onPress={ ()=> {
            this.getData()
          }}></Button>
        </View>
        <TextInput 
          style={styles.input}
          onChangeText={ text => {
            this.value = text
          }}
        ></TextInput>
        <Text>{this.state.showText}</Text>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  input: {
    borderColor: 'red',
    borderWidth: 1
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  view: {
    marginTop: 40
  }
})