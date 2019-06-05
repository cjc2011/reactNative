import React, { Component } from 'react'
import { SectionList, FlatList, ScrollView, Text, View, StyleSheet, TextInput } from 'react-native'
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
        <Text>{this.state.showText.data}</Text>
        {/* <ScrollView style={{height: 600, borderColor: 'black', borderWidth: 1}}>
          <Text>===11111111111===</Text>
          <Text>11111111111</Text>
          <Text>11111111111</Text>
          <Text>11111111111</Text>
          <Text>11111111111</Text>
          <Text>11111111111</Text>
          <Text>22222222222</Text>
          <Text>22222222222</Text>
          <Text>22222222222</Text>
          <Text>22222222222</Text>
          <Text>22222222222</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
          <Text>33333333333</Text>
        </ScrollView> */}
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{`${item}`}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})