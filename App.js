/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import React, {Component} from 'react';
 import { createStackNavigator, createAppContainer,  createBottomTabNavigator ,createDrawerNavigator } from "react-navigation";
 import {Icon} from 'react-native-elements'

 import Test from './components/C1/C1'
 import imgComp from './components/imgComp/imgComp'
 import dict from './components/dict/dict'
 import Home from './components/Home/Home'
 import List from './components/ListView'
 import Calculator from './components/Calculator'
 import Pomodoro from './components/Pomodoro'


 const AppNavigator = createStackNavigator(
   {
     Home: Home,
     Test: Test,
     dict: dict,
     List: List,
   },
   {
     initialRouteName: "Home"
   }
 );

 const tabs =  createBottomTabNavigator({
     Tab1: {
       screen:AppNavigator,
       navigationOptions:{
            title:'Home',
            tabBarColor: 'rgb(20,20,20)',
            tabBarIcon: ()=>{
              return <Icon name='home'/>
            },
         },
      },
     Tab2: {
       screen: imgComp ,
       navigationOptions:{
           title: 'settings',
           tabBarColor: 'rgb(00,20,00)',
           tabBarIcon: ()=>{
             return <Icon name='settings'/>
           }
         }
      },
    },
 {
   animationEnabled: true,
   swipeEnabled: true,
   tabBarOptions:{
     activeTintColor: 'tomato',
     activeBackgroundColor: '#dddddd',
     inactiveTintColor: 'grey',
   },
 }
 );


 const drawer= createDrawerNavigator({
   Home:{
     screen : Test
   },
   Calculator:{
     screen : Calculator
   },
   Pomodoro:{
     screen: Pomodoro
   },
 },
   {
     initialRouteName: 'Pomodoro',
   }
   );

 export default createAppContainer(drawer);
