import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import { connect } from 'react-redux'
import actions from '../action/index.js'

// 流行
class FavoritePage extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={{marginTop: 40}}>
        <Text>FavoritePage</Text>
        <Button
          title="修改主题"
          onPress={ () => {
            this.props.changeTheme('yellow')
          }}
        ></Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(actions.onThemeChange(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)