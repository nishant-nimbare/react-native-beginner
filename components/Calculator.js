/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class Calculator extends Component {

  constructor(props){
    super(props);

    this.state={
      result : 'initial result',
    }
  }

  pressed(val) {
    let res=this.state.result;

    if(val==='='){
       res= eval(this.state.result).toString();
      this.setState({
        result: res,
      });

    }
    else if (val==='DEL') {
      this.setState({
        result: ' ',
      });
    }
    else{
       res =  res.concat(val);
      this.setState({
        result: res,
      });
    }
  }

  render() {

      let ops=[];
      let ops_text=['DEL','/','*','-','+'];
      let numbers=[];
      let num_text=[[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
     for(let i=0;i<4;i++){

        let row=[];
        for(let j=0;j<3;j++){
          row.push(
            <View style={styles.num}>
            <TouchableOpacity  onPress={()=>{this.pressed(num_text[i][j]);}}>
            <Text style={{textAlign:'center',fontSize: 20, color:'#21e6c1',}}>
            {num_text[i][j]}
            </Text>
            </TouchableOpacity>
            </View>
          );
        }

        numbers.push(
          <View style={{flex:1,flexDirection: 'row'}}>
          {row}
          </View>
        );
      }

      for(let i=0;i<5;i++){
        ops.push(
          <View style={{flex:1,justifyContent: 'center',}}>
          <TouchableOpacity  onPress={()=> { this.pressed(ops_text[i]); } }>
          <Text style={{textAlign:'center',fontSize: 20, color:'#21e6c1',}}>
          {ops_text[i]}
          </Text>
          </TouchableOpacity>
          </View>
        );
      }

    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='#21e6c1'
        />
        <View style={{flex:1}}>
          <Text style={styles.screen}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
          {numbers}
          </View>
          <View style={styles.operators}>
          {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen:{
    flex:1,
    backgroundColor: '#21e6c1',
    textAlign: 'right',
    fontSize: 30,
    color:'#071e3d',
  },
  buttons:{
    flex:3,
    backgroundColor: '#071e3d',
    flexDirection: 'row',
  },
  numbers:{
    flex:3,
  },
  operators:{
    flex:1,
    backgroundColor: '#1f4287',
  },
  num:{
    flex:1,
    textAlign:'center',
    justifyContent: 'center',
    fontSize: 25,
    margin: 5,
  }
});
