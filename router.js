import React, {Component} from 'react';
import { createStackNavigator, createAppContainer,  createBottomTabNavigator } from "react-navigation";

import C1 from './components/C1/C1'
import imgComp from './components/imgComp/imgComp'
import dict from './components/dict/dict'
import App from './App'


const AppNavigator = createStackNavigator(
  {
    App: App,
    Test: Test,
    imgComp: imgComp,
    dict: dict,
  },
  {
    initialRouteName: "App"
  }
);


const tabs =  createBottomTabNavigator({
    Tab1: AppNavigator,
    Tab2: C1,
});

export default createAppContainer(tabs);
