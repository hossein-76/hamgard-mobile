import React from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

var STORAGE_KEY = 'id_token';

class JWTController extends React.Component
{
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
    
    static async DeleteToken()
    {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, null);
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
    }

    static async OnValueChange(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
      }
  
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem(STORAGE_KEY);
      this.props.navigation.navigate(userToken ?  'MainSession' : 'Authentication');
    };
  
    render() {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }

    //   async _getProtectedQuote() {
    //     var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    //     fetch("http://localhost:3001/api/protected/random-quote", {
    //       method: "GET",
    //       headers: {
    //         'Authorization': 'Bearer ' + DEMO_TOKEN
    //       }
    //     })
    //     .then((response) => response.text())
    //     .then((quote) => {
    //       alert(
    //         "Chuck Norris Quote:", quote)
    //     })
    //     .done();
    //   }
}

export default JWTController;