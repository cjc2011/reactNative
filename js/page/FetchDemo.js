import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native'
import { connect } from 'react-redux'
import actions from '../action/index.js'

// 流行
export default class FetchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'php',
      showText: '111'
    };
  }

  loadData() {
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`
    fetch(url)
      .then( res => {
        if (res.ok) return res.text()
        throw new Error('Nextwork error')
        
      })
      .then( res => {
        this.setState({
          showText: res
        })
      })
      .catch( e => {
        this.setState({
          showText: e
        })
      })
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{marginTop: 40}}>
        <Text>Fetch使用</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={ text => {
            this.setState({
              text
            })
          }}
        ></TextInput>
        <Button
          title="获取用户数据"
          onPress={ () => {
            console.log('获取数据')
            this.loadData()
          }}
        ></Button>
        <Text>{this.state.showText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 32,
    // flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 40
  }
})