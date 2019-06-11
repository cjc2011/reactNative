import React, { Component } from 'react' 
import { Text, Image, TouchableOpacity, StyleSheet, Platform, StatusBar, View } from 'react-native'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

const StatusBarShape = {
  barStyle: PropTypes.oneOf(['light-content', 'default']),  //限定barStyle值为数组的其中一项
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string
}
const NAV_BAR_HEIGHT_IOS = 44 //导航栏ios端高度
const NAV_BAR_HEIGHT_ANDROID = 50 // 导航栏安卓端高度
const STATUS_BAR_HEIGHT = 20 //状态栏高度


// 运行平台环境判断 ios || android
const isIOS = Platform.OS === 'ios'

export default class NavigationBar extends Component {
  // 类型检查
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    titleLayoutStyle: ViewPropTypes.style,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape(StatusBarShape),
    rightButton: PropTypes.element,
    leftButton: PropTypes.element
  }

  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false,
    }
  }

  getButtonElement(data) {
    return (
      <View style={styles.navBarButton}>
        {data ? data : null}
      </View>
    )
  }

  render() {
    var statuBar = <View style={[styles.statuBarStyle,this.props.statusBar]}>
                    <StatusBar
                      {...this.props.statusBar}
                    />
                  </View>
    var titleView = this.props.titleView ? this.props.titleView : <Text ellipsizeMode="head" numberOfLines={1} style={styles.titleStyle}>{this.props.title}</Text>
    var content = this.props.hide ? null :
        <View style={styles.navBar}>
          {this.getButtonElement(this.props.leftButton)}
          <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
            {titleView}
          </View>
          {this.getButtonElement(this.props.rightButton)}
        </View>
    return(
        <View style={[styles.container,this.props.style]}>
            {statuBar}
            {content}
        </View>
    );
  }
} 

const styles = StyleSheet.create({
  navBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: isIOS ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID
  }, 
  statuBarStyle: {
    height: isIOS ? STATUS_BAR_HEIGHT : 0
  },
  titleStyle: {
    fontSize: 20,
    color: '#fff'
  },
  navBarButton: {
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#2196f3'
  },
  navBarTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  }
})