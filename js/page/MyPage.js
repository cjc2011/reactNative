import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import NavigationBar from '../common/NavigationBar.js'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const THEME_COLOR = '#678'

export default class MyPage extends Component {
  getRightButton() {
    return <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <View style={{ padding: 5, marginRight: 8 }}>
          <Feather
            name={'search'}
            size={24}
            style={{ color: 'white' }}
          />
        </View>
      </TouchableOpacity>
    </View>

  }

  getLeftButton(callBack) {
    return <TouchableOpacity
      style={{ padding: 8, paddingLeft: 12 }}
      onPress={callBack}
    >
      <Icon
        name={'ios-arrow-back'}
        size={26}
        style={{ color: 'white' }}
      />
    </TouchableOpacity>
  }

  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content'
    }
    let navigationBar = <NavigationBar
      title={'我的'}
      statusBar={statusBar}
      style={{ backgroundColor: THEME_COLOR }}
      leftButton={this.getLeftButton()}
      rightButton={this.getRightButton()}
    />

    return (
      <View style={styles.container}>
        {navigationBar}
        <Text style={styles.welcome}>我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  }
});