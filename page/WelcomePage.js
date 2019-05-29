/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class WelcomePage extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome Page</Text>
        <Text style={styles.welcome}>welcome Page</Text>
        <Text style={styles.welcome}>welcome Page</Text>
        <Text style={styles.welcome}>welcome Page</Text>
        <Text style={styles.welcome}>welcome Page</Text>
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
    color: '#444'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
