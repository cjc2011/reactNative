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

type props = {};
export default class page1 extends Component<Props> {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to page1</Text>
        <Button
          title={'Go Back'}
          onPress={() => {
            navigation.goBack()
          }}
        ></Button>
        <Button
          title={'Go Page4'}
          onPress={() => {
            navigation.navigete('Page4')
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
