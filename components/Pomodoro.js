/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';

export default class Pomodoro extends Component {


  constructor(props){
    super(props);

    this.state={
      workTime : 10,
      breakTime : 10,
      time: 10,
      running: false,
      mode : 'work',
    }
 }


    // set target time as state and pass a callback to tick that changes mode and target
    // compare state.target in tick
    // set inital target that of work
    // pause resume in pressed

//Tick every sec , changes the time

 tick(){

  let t=this.state.time;

  console.log('t is '+t);
  if(t===0){
    this.changeMode();

   }else{

     this.setState({
        time: (t-1) ,
       });

   }
 }

//handle start/pause button press event
 pressed(){

   if(this.state.running ===false){

     this.setState({
          running : true,
       });

       this.timer('start'); //start the timer
   }
   else{
     this.setState({
       running: false,
       });

      this.timer('pause');
   }

 }

//Manages the setInterval of tick()

 timer(option){

   if(option==='start'){

         Clock = setInterval(()=>{
               this.tick()
             },1000);

   }else if(option==='pause'){

      clearInterval(Clock);

   }
 }

 changeMode(){

      if(this.state.mode==='work'){
        this.setState({
              mode: 'break',
              time: this.state.breakTime,
          },function () {
            //console.clear();
            //console.log(this.state);
            });
      }else{
        this.setState({
              mode: 'work',
              time: this.state.workTime,
          },function () {
            //console.clear();
            //console.log(this.state);
            });
      }
 }

 submit(time,mode){

  if(this.state.running===true){
      this.timer('pause');
  }


  if(mode===0){
  this.setState({
      workTime :parseInt(time),
      time: parseInt(time),
      running: false,
      mode : 'work',
    },function () {
        //console.clear();
        //console.log(this.state);
      });


  }else{

    this.setState({
        breakTime:parseInt(time),
        time: parseInt(time),
        running: false,
        mode : 'break',
      },function () {
        //console.clear();
        //console.log(this.state);
        });

  }
 }

  render() {

    if(this.state.time>=15){

      //console.log(this.state);
      this.timer('pause');

    }

    let title = ()=> this.state.mode;

    return (
      <View style={styles.container}>

          <View style={styles.icon}>
            <Icon name='navicon' type='font-awesome' onPress={()=>this.props.navigation.toggleDrawer()}/>
          </View>

      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TextInput
        style={{height:40,flex:1 , backgroundColor:'#278ea5',margin:15,}}
         placeholder='work minutes'
         onSubmitEditing={(event)=>{
           this.submit(event.nativeEvent.text,0);  //0 is for work
           }}
         />

       <TextInput
        style={{height:40,flex:1,backgroundColor:'#278ea5',margin:15}}
        placeholder='break minutes'
        onSubmitEditing={(event)=>{
          this.submit(event.nativeEvent.text,1); //1 is for break
          }}
        />

      </View>

        <Text style={styles.title}>{this.state.mode}</Text>

        <Text style={styles.title}>{this.state.time}</Text>

        <TouchableOpacity
        onPress={()=>{this.pressed()}}>
          <Text style={{fontSize:40,color:'#21e6c1',margin:20,}}>{this.state.running?'pause':'start'}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#071e3d',
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    color: '#21e6c1',
    margin: 15,
  },
  hand: {
    flex:1,
    width: 20,
    height: 20,
    backgroundColor : 'blue',
  },
  icon:{
      justifyContent:'flex-start',
      position:'absolute',
      top:0,
      left:0,
      backgroundColor : '#21e6c1',
      margin:10,
    },
});
