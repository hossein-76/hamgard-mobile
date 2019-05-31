import React from 'react';
import {AppRegistry, AsyncStorage} from 'react-native';



class JWTController 
{
    
    
    

    static async OnValueChange(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
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