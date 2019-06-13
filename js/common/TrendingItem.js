import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class TrendingItem extends Component {
  render() {
    const {item} = this.props
    let favoriteButton = <TouchableOpacity 
                            style={{padding: 6}} 
                            underlayColor={'transparent'}
                         >
                           <FontAwesome name={'star-o'} size={26} style={{color: 'red'}}></FontAwesome>
                        </TouchableOpacity> 
    return <TouchableOpacity
      onPress={()=>{
        this.props.onSelect()
      }}
    >
      <View style={styles.cellContainer}>
        <Text style={styles.title}>
          {item.fullName}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <Text>
          {item.description}
        </Text>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text>Author:</Text>
            {/* 作者头像是一个集合 */}
            {item.contributors.map( (item, index)=> {
              return <Image style={{height:22,width:22, marginLeft:2}} source={{uri:item}} />
            })}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Start:</Text>
            <Text>{item.starCount}</Text>
          </View>
          {favoriteButton}
        </View>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 13,
    marginBottom: 2,
    color: '#757575'
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
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
    shadowOffset:{  width: 0.5,  height: 0.5,},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2
  }
})