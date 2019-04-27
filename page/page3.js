/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class page3 extends Component {
  render() {
    const {navigation} = this.props
    const {state, setParams} = navigation
    const { params } = state
    const showText = params && params.mode == 'edit' ? '编辑完成':'正在编辑'

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to page3</Text>
        <Text style={styles.welcome}>{showText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setParams({title: text})
          }}
        ></TextInput>
      </View>
      
    );
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth:1,
    borderColor: '#000000',
    margin: 20,
  }
});
