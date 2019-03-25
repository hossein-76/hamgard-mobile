
import React from 'react';
import {TextInput, StyleSheet, View, Text, Button } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {UserName: '', PassWord: ''};
  }

  render() 
  {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(text) => this.setState({UserName: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="password"
          onChangeText={(text) => this.setState({PassWord: text})}
        />
        <Button
          title="Submit"
          onPress=
          {
            () =>
            {
              alert(this.state.PassWord + this.state.UserName)

            }
          }
        />
      </View>
    );
  }
}

class SignUpScreen extends React.Component
{
  render() 
  {
    return (
      <View style={ styles.container}>
        <Text>Sign Up Page</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(text) => this.setState({UserName: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="password"
          onChangeText={(text) => this.setState({PassWord: text})}
        />
        <View style = {{ flexDirection: 'row',alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Submit"
            onPress=
            {
              () =>
              {
                alert(this.state.PassWord + this.state.UserName)

              }
            }
          />
          <Button
            title="Cancel"
            onPress=
            {
              () =>
              {
                this.props.navigation.goBack();

              }
            }
          />
        </View>
        <Text>already have an account?</Text>
        <Text style = {{color: 'blue'}} onPress = {() => this.props.navigation.navigate('Login')} >Log in</Text>
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



