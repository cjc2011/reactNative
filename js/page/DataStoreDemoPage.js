import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import DataStore from '../expand/dao/DataStore.js'

let getApi = new DataStore()

export default class DataStoreDemoPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      showText: ''
    }
  }

  lodaData() {
    console.log('////////')
    let url = `https://api.github.com/search/repositories?q=${this.value}`
    getApi.fetchData(url)
      .then(data => {
        let showData = `初次加载事件：${data.timestamp}\n${JSON.stringify(data.data)}`
        console.log(showData, 'sdsdsdsd')
        this.setState({
          showText: showData
        })
      })
      .catch( err => {
        console.log(err, 'errrere')
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>离线数据框架测试</Text>
        <TextInput
          style={styles.input}
          onChangeText={ text => {
            this.value = text
          }}
        ></TextInput>
        <View 
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderColor: 'yellow',
            borderWidth: 1
          }}
        >
          <Text 
            onPress={ () => {
              this.lodaData()
            }}
          >获取数据</Text> 
        </View>
        <Text>{this.state.showText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'red'
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1
  }
})