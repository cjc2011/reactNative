import React, { Component } from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Text, View, Button, RefreshControl} from 'react-native'
import { DeviceInfo } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../action/index.js'
import NavigationUtil from '../navgators/NavigationUtil.js'
import PopularItem from '../common/PopularItem.js'
import NavigationBar from '../common/NavigationBar.js'
import { 
  createMaterialTopTabNavigator,
  createAppContainer
 } from 'react-navigation'

const THEME_COLOR= '#678'
// 流行
export default class PopularPage extends Component {
  constructor(props) {
    super(props)
    this.tabNames = ['Java', 'Android', 'IOS', 'Vue', 'React', 'React Native', 'PHP']
  }

  _genTabs() {
    const tabs = {}
    this.tabNames.forEach( (item, index) => {
      tabs[`tab${index}`] = {
        screen: props => {
          return <PopularTabPage 
            {...props}
            tabLabel={item}
          ></PopularTabPage>
        },
        navigationOptions: {
          title: item
        }
      }
    })
    return createMaterialTopTabNavigator(tabs, {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false, //设置标签内容是否大写
        scrollEnabled: true,     //是否支持选项卡滚动
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
        style: {
          backgroundColor: '#678',
          height: 44
        }
      }
    })
  }

  render() {
    const statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content'
    }
    const navigationBar = <NavigationBar
      title={'最热'}
      statusBar={statusBar}
      style={{
        backgroundColor: THEME_COLOR
      }}
    ></NavigationBar>
    let Toptab = createAppContainer(this._genTabs())
    return (
      <View style={{height: 160, flex: 1, marginTop: DeviceInfo.isIPhonex_deprecated?40:0}}>
        {navigationBar}
        <Toptab></Toptab>
      </View>
    )
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props)
    const {tabLabel} = this.props
    this.storeName = tabLabel
  }

  _onRefresh() {
    this.loadData()
  }

  _store() {
    const { popular } = this.props 
    let store = popular[this.storeName]
    if (!store) {
      store = {
        items: [],
        isLoading: false,
        projectModes: [],
        hideLoadingMore: true
      }
    }
    return store
  }

  genFetchUrl() {
    return `https://api.github.com/search/repositories?q=${this.storeName}&sort=stars`
  }

  loadData(loadMore) {
    let { onRefreshPopular, onLoadMorePopular } = this.props
    let url = this.genFetchUrl()
    const store = this._store()
    if (loadMore) {
      onLoadMorePopular(this.storeName, ++store.pageIndex, pageSize = 10, store.items, () => {
        console.log('加载完成')
      })
    } else {
      onRefreshPopular(this.storeName, url, pageSize = 10)
    }
  }

  componentDidMount() {
    this.loadData()
  }

  // 底部更多组件
  genIndicator() {
    return this._store().hideLoadingMore ? null :
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          style={[styles.centering]}
        ></ActivityIndicator>
        <Text style={{flex: 1}}>加载更多</Text>
      </View>
  }

  renderItem(data) {
    const item = data.item
    return <PopularItem item={item} onSelect={ () => {
      console.log('onSelect')
    }}></PopularItem>
  }

  render() {
    const { popular } = this.props;
    const store = popular[this.storeName]
  
    return (
      <View style={styles.container}>
        <FlatList
          data={store ? store.projectModes : []}
          renderItem={data => this.renderItem(data)}
          keyExtractor={ item => item.id.toString()}
          onEndReachedThreshold={0.3}
          ListFooterComponent={() => this.genIndicator()}
          onEndReached={() =>{
            setTimeout( () => {
              if (this.canLoadMore) {
                this.loadData(true)
                this.canLoadMore = false
              }
            }, 100)
          }}
          onMomentumScrollBegin={()=>{
            this.canLoadMore = true
          }}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              titleColor={'red'}
              colors={['red', 'blue']}
              refreshing={store ? store.isLoading : false}
              onRefresh={this._onRefresh.bind(this)}
              tintColor={"black"}
            />
          }
        >

        </FlatList>
      </View>
      
    )
  }
}

const mapStateToProps = state => ({
  popular: state.popular
})

const mapDispatchToProps = dispatch =>({
  onRefreshPopular: (storeName, url, pageSize) => dispatch(Actions.onRefreshPopular(storeName, url, pageSize)),
  onLoadMorePopular: (storeName, pageIndex, pageSize, dataArray, callBack) => dispatch(Actions.onLoadMorePopular(storeName, pageIndex, pageSize, dataArray, callBack))
})

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)

const styles = StyleSheet.create({
  indicatorContainer: {
    alignItems: 'center'
  },
  centering: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  },
  tabStyle: {
    minWidth: 50,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    color: '#000000'
  }
});
