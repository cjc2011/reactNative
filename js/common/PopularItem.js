import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'

export default class PopularItem extends Component {
  render() {
    const {item} = this.props
    if (!item || !item.owner) return null 
    return <TouchableOpacity
      onPress={()=>{
        this.props.onSelect()
      }}
    >
      <View style={styles.cellContainer}>
        <Text style={styles.title}>
          {item.full_name}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <Text>
          {item.description}
        </Text>
        <View style={styles.row}>
          <View>
            <Text>Author:</Text>
            <Image style={{height:22,width:22}} source={{uri:item.owner.avatar_url}} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Start:</Text>
            <Text>{item.stargazers_count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 13,
    // marginBotton: 2,
    color: '#757575'
  },
  title: {
    fontSize: 16,
    // marginBotton: 2,
    color: '#212121'
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cellContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    borderColor: '#dddddd',
    borderWidth: 0.5,
    borderRadius: 2,
    shadowColor: 'gray',
    // shadowOffse: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2
  }
})