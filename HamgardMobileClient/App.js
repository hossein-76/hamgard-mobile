
import React from 'react';
import {TextInput, StyleSheet, View, Text, Button } from 'react-native';
import {connect, Provider} from 'react-redux';
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {createStore, applyMiddleware} from "redux"; 
import rootReducer from './src/Reducers/RootReducer';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import Global from './src/Navigators/Global';

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

class App extends React.Component {
  render() {
    
    return (
      <Provider store={store}>
        <Global/>
      </Provider>
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



