/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import {Icon} from 'react-native-elements';

export default class Pomodoro extends Component {

  constructor(props){
    super(props);

    let t = new Date().getSeconds();

    console.log('inside constructor');
    this.state={
      time: 5,
      target: (t+5),
      running: false,
      mode : 'work',
    }
 }

 componentDidMount(){

   console.log('component mounted');
   // setInterval(()=>{
   //    console.log("render bitch");
   //    let a=new Date().getSeconds();
   //    this.setState({
   //      time: a,
   //      })
   //    this.tick()
   //   },1000);

 }

    // set target time as state and pass a callback to tick that changes mode and target
    // compare state.target in tick
    // set inital target that of work
    // pause resume in pressed

 tick(){
   let current= new Date().getSeconds();

    console.log('sec is '+current);
  if(current<this.state.target){
   this.setState({
      time: (this.state.target-current) ,
     });

   }else{
     this.changeMode();
   }
 }

 pressed(){


   if(this.state.running ===false){

     let before = new Date().getSeconds();

     this.setState({
          running : true,
          target : (this.state.time+before),
       });


    Clock = setInterval(()=>{
          this.tick()
        },1000);
   }
   else{
     this.setState({
       running: false,
       });

       clearInterval(Clock);
   }

 }

 changeMode(){

   let target = new Date().getSeconds();

      if(this.state.mode==='work'){
        this.setState({
              mode: 'break',
              target: (target+10),
              time: 10,
          });
      }else{
        this.setState({
              mode: 'work',
              target: (target+5),
              time: 5,
          });
      }
 }

  render() {
    console.log('rendered');
    return (
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <View style={{flex:1}}>
        <Text style={styles.title}>{this.state.mode}</Text>

        <Text style={styles.title}>{this.state.time}</Text>

        <Button title='start/pause' onPress={()=>{this.pressed()}}/>
        </View>
        <View style={{flex:1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menu:{
    left:0,
    top:0,
    alignItems:'center',
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  }
});
