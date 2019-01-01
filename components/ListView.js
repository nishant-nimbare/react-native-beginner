/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class List extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[
        {key:'nishant'},
        {key:'vishakha'},
        {key:'mohan'},
        {key:'manasi'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
           data={this.state.data}
           renderItem={({item}) => <Text style={styles.row}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center' ,
    fontSize: 30,
  }
});
