/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AppRegistry,
  TouchableOpacity,
  StatusBar
} from 'react-native';

class imgComp extends Component {

  constructor(){
    super();

    this.state={
      background:'white',
      statusColor: 'white',
    }
  }
  // clicked() {
  //   this.forceUpdate();
  //   console.log('clicked');
  // }


  changeBackground(color){
    this.setState({
      background: color,
      });
  }

  changeStatus(color){
    const {navigation}=this.props;
    navigation.setParams({statusColor:color});
    navigation.goBack();
  }

    change(key,color){
     if(key==0){
       this.changeBackground(color);
     }else{
       this.changeStatus(color);
     }
    }

  render() {

    let arr=[]
    for(let i=0;i<3;i++){
      arr.push(
        <View style={{flex: 1, margin:10}} key={i}>
          <View style={styles.text,{backgroundColor:'yellow',flex:1}}>
              <Text >Status Bar colours</Text>
          </View>
          <View style={styles.optionsCon}>
            <TouchableOpacity style={{backgroundColor:'green',flex:1,margin :5 }} onPress={()=>this.change(i,'green')}></TouchableOpacity>
            <View style={{backgroundColor:'red',flex:1,margin :5 }}></View>
            <View style={{backgroundColor:'blue',flex:1,margin :5 }}></View>
          </View>
        </View>
        )
    }
    return (
      <View style={{flex:1,backgroundColor:this.state.background}}>
      {arr}
      </View>
    );
  }
}
export default imgComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  img: {
    width: 200,
    height: 200,
  },

  text: {
    margin: 10,
    flex:1,
    fontSize:20,
    textAlign: 'center',
  },
  optionsCon: {
      flexDirection: 'row',
      flex: 2,
      margin: 5,
  }
});
//
// AppRegistry.registerComponent("myapp", ()=> imgComp);
