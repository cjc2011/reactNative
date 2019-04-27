/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button } from 'react-native'
import {StyleSheet, Text, View} from 'react-native';

export default class HomePage extends Component{
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: '哈哈哈哈😄'
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to HomePage</Text>
        <Button
          title={'Go to Page1'}
          onPress={() => {
            navigation.navigate('Page1', {name: '动态的'})
          }}
        ></Button>
        <Button
          title={'Go to Page2'}
          onPress={() => {
            navigation.navigate('Page2')
          }}
        ></Button>
        <Button
          title={'Go to Page3'}
          onPress={() => {
            navigation.navigate('Page3', {mode: ''})
          }}
        ></Button>
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
});
