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

export default class page1 extends Component{
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to HomePage</Text>
        <Button
          title={'Go to Page1'}
          onPress={() => {
            navigation.navigete('Page1', {name: '动态的'})
          }}
        ></Button>
        <Button
          title={'Go to Page2'}
          onPress={() => {
            navigation.navigete('Page2')
          }}
        ></Button>
        <Button
          title={'Go to Page3'}
          onPress={() => {
            navigation.navigete('Page3', {name: 'devio'})
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
