/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class dict extends Component {

  constructor(props){
    super(props);
    this.state={
      data: 'meaning will appear here',
    };
  }

  search(text){
    fetch(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${text}`,{
            method: 'GET' ,
            headers: {
                'X-Mashape-Key': 'VnYQAf8KwdmshsVIDX178lG5YTVWp1xgALujsnJgKT3ZOq2mm1',
              }
            })
   .then(response => response.json())
   .then(parsedJSON => {console.log(parsedJSON);
                         this.setState({
                           data: parsedJSON.list[0].example,
                           })
                         })
   .catch(error => console.log(error));
  }

  render() {

    const {navigation}=this.props;
    const text= navigation.getParam('text','default text');

    return (
      <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
        <TextInput
         style={{height: 60}}
         placeholder='type here'
         onSubmitEditing={ (text) => this.search(text)}
         />
         <Text style={styles.text}>{this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  }
});
