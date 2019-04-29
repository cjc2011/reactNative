/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class page2 extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to page2</Text>
        <Button
          title={'openDrawer'}
          onPress={ () =>{
            navigation.openDrawer()
          }}
        ></Button>
        <Button
          title={'closeDrawer'}
          onPress={ () =>{
            navigation.closeDrawer()
          }}
        ></Button>
        <Button
          title={'toggleDrawer'}
          onPress={ () =>{
            navigation.toggleDrawer()
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
  }
});
