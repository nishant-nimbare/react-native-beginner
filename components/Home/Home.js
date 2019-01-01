import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Alert,Button,TouchableOpacity,Platform, StyleSheet, Text, View ,StatusBar ,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer,  createBottomTabNavigator } from "react-navigation";

// import C1 from './components/C1/C1'
// import imgComp from './components/imgComp/imgComp'
// import dict from './components/dict/dict'


type Props = {};



export default class App extends Component<Props> {

  static navigationOptions = {
  title: 'Home',
  };

  constructor(props){
    super(props);
    const {navigation} = this.props;
    const statusColor = navigation.getParam('statusColor','red');
    this.state={
      statusColor: statusColor,
    }

  }


  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={this.state.statusColor}
        />
        <Button
          title="Go to Test"
          onPress={() => {this.props.navigation.navigate('Test');
                          Alert.alert('statusColor', this.props.navigation.state.params.statusColor);
                          }}
        />

        <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('dict', {text: 'welcome neo'})
              }
            }>
              <Text style={styles.welcome}>search a word</Text>
        </TouchableOpacity>

        <TouchableHighlight  onPress={()=> {
          this.props.navigation.navigate('List')
        }}>
        <Text style={styles.welcome}>list here </Text>
        </TouchableHighlight>
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
});
