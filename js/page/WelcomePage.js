/**
 * 引导页面
 **/
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navgators/NavigationUtil.js'

export default class WelcomePage extends Component{
  componentDidMount() {
    setTimeout( () => {
      console.log(this.props, 'this.props this.props')
      NavigationUtil.resetToHomePage(this.props)
    }, 3500)
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome Pages</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
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
