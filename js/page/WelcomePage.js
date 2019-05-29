import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import NavigationUtil from '../navgators/NavigationUtil.js'

export default class WelcomePage extends Component{
  componentDidMount() {
    setTimeout( () => {
      NavigationUtil.resetToHomePage(this.props)
    }, 500)
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome Pag11e</Text>
        <Text style={styles.welcome}>welcome Pag11e</Text>
        <Text style={styles.welcome}>welcome Pag11e</Text>
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
