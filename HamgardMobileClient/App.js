
import React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

class ArrivalScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Arrival!</Text>
        <Button
          title="Log In"
          onPress=
          {
            () =>
            {
              this.props.navigation.navigate('Login')
            }
          }
        />

        <Button
          title="Sign Up"
          onPress=
          {
            () =>
            {
              this.props.navigation.navigate('SignUp')
            }
          }
        />
      </View>
    );
  }
}

class LoginScreen extends React.Component
{
  render() 
  {
    return (
      <View style={styles.container}>
        <Text>Log In</Text>
      </View>
    );
  }
}

class SignUpScreen extends React.Component
{
  render() 
  {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
      </View>
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


const AppNavigator = createStackNavigator({
  Arrival: ArrivalScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen
}, {
    initialRouteName: 'Arrival'
});

export default createAppContainer(AppNavigator);



