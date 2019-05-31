import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import { connect } from 'react-redux'
import actions from '../action/index.js'

//趋势
class TrendingPage extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{marginTop: 140}}>
        <Text>TrendingPage</Text>
        <Button 
          title="改变主题颜色"
          onPress={ () => {
            let theme = {
              tintColor: 'red',
              updateTime: new Date().getTime()
            }
            console.log('改变颜色')
            this.props.onThemeChange('red')
          }}></Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage)