
import React from 'react';
import {TextInput, StyleSheet, View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import Global from './src/Navigators/Global';


class App extends React.Component {
  render() {
    return (
        <Global/>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



export default App;



