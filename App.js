
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './js/store/index.js'
import { AppWithNavigationState } from './js/navgators/AppNavigator.js'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState></AppWithNavigationState>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
