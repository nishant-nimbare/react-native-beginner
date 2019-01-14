/* @flow */

import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';

import {Icon} from 'react-native-elements';

export default class Test extends Component{
 static navigationOptions = {
   drawerLabel: 'Quotes'
 };

 constructor(){
   super();
   this.state={
     data : 'this is test data',
   };
 }

fetchdata() {
  fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',{
          method: 'GET' ,
          headers: {
              'X-Mashape-Key': 'VnYQAf8KwdmshsVIDX178lG5YTVWp1xgALujsnJgKT3ZOq2mm1',
              'Content-type': 'applicaion/json',
            }
          })
 .then(response => response.json())
 .then(parsedJSON => {console.log(parsedJSON);
                       this.setState({
                         data: parsedJSON[0].quote,
                         })})
 .catch(error => console.log(error));
}

_pressed() {
  this.setState({
     data : 'calling getQuote() '
    });
    console.log("calling getQuote");
  fetchdata();
}

 render(){
   return(
     <View style={{flex:1}} >
               <View style={styles.icon}>
                 <Icon name='navicon' type='font-awesome' onPress={()=>this.props.navigation.toggleDrawer()}/>
               </View>
     <View style={{flex:1 , alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:30, color: 'green'}}>Get a random quote</Text>
     </View>
     <TouchableOpacity onPress={() => this.fetchdata() } >
       <Text style={styles.welcome}>{this.state.data}</Text>
     </TouchableOpacity>
     <Button onPress={() => this.fetchdata()} title="click me"/>
     <View style={{flex:1}}></View>
     </View>
     );
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon:{
    justifyContent:'flex-start',
    position:'absolute',
    top:0,
    left:0,
    backgroundColor: '#21e6c1',
    margin: 10,
    color:'white',
  },
});
