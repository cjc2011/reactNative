import React, { Component } from 'react'
import { StyleSheet, FlatList, Text, View, Button, RefreshControl} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../action/index.js'
import NavigationUtil from '../navgators/NavigationUtil.js'
import PopularItem from '../common/PopularItem.js'
import { 
  createMaterialTopTabNavigator,
  createAppContainer
 } from 'react-navigation'

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
          backgroundColor: '#678'
        }
      }
    })
  }

  render() {
    let Toptab = createAppContainer(this._genTabs())
    return (
      <View style={{height: 160, flex: 1, marginTop: 40, backgroundColor: 'red'}}>
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

  genFetchUrl() {
    return `https://api.github.com/search/repositories?q=${this.storeName}&sort=stars`
  }

  loadData() {
    let { onLoadPopularData } = this.props
    let url = this.genFetchUrl()
    onLoadPopularData(this.storeName, url)
  }

  componentDidMount() {
    this.loadData()
  }

  renderItem(data) {
    const item = data.item
    return <PopularItem item={item} onSelect={ () => {
      console.log('onSelect')
    }}></PopularItem>
  }

  _onRefresh() {
    this.loadData()
  }

  render() {
    const { popular } = this.props;
    const store = popular[this.storeName]

    return (
      <View style={styles.container}>
        <FlatList
          data={store ? store.items : []}
          renderItem={data => this.renderItem(data)}
          keyExtractor={ (item,index) => item.id}
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
  onLoadPopularData: (storeName, url) => dispatch(Actions.onLoadPopularData(storeName, url))
})

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    color: '#999'
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
  indicatorStyle: {
    height: 2,
    backgroundColor: 'yellow'
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
    borderColor: 'red',
    borderWidth: 1,
    color: '#000000'
  },
  text: {
    backgroundColor: '#f1f2f0',
    color: 'blue'
  }
});