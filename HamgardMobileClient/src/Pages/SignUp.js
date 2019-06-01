import React from 'react';
import {TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import {Button} from 'nachos-ui';
import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons'


var STORAGE_KEY = 'id_token';
const btnStyle = { margin: 15 }

class SignUpScreen extends React.Component
{

  OnSubmit()
  {
    var url = 'https://example.com/profile';
    
    var data = {username: this.state.UserName,
                password:this.state.PassWord,
                passwordConfirmation:this.state.passwordConfirmation,
                email:this.state.email,
                phoneNumber:this.state.phoneNumber};
    if(data.password == data.passwordConfirmation)
    {
      fetch(url, 
      {
          method: 'POST', 
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then((responseData) => JWTController.OnValueChange(STORAGE_KEY, responseData.token))
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    else
    {
      alert("passwordConfirmation");
    }
  }
  

  render() 
  {
    return (
      <View style={ FormStyles.container}>
          <Text>Sign Up Page</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Username"
            onChangeText={(text) => this.setState({UserName: text})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="E-mail"
            onChangeText={(text) => this.setState({email: text})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Phone Number"
            onChangeText={(text) => this.setState({phoneNumber: text})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="password"
            secureTextEntry = {true}
            onChangeText={(text) => this.setState({PassWord: text})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Confirm password"
            secureTextEntry = {true}
            onChangeText={(text) => this.setState({PassWord: text})}
          />
        <View >
        
        <TouchableHighlight style = {ButtonStyles.button}
            onPress=
            {
              () =>
              {
                this.OnSubmit();
              }
            }
            underlayColor='#99d9f4'
          >
          <Text style = {ButtonStyles.buttonText}>ثبت‌نام</Text>
          </TouchableHighlight>

          <TouchableHighlight style = {ButtonStyles.button}
            onPress=
            {
              () =>
              {
                this.props.navigation.goBack();
              }
            }
            underlayColor='#99d9f4'
          >
          <Text style = {ButtonStyles.buttonText}>بازگشت</Text>
          </TouchableHighlight>
          <Text>already have an account?</Text>
           <Text style = {{color: 'blue'}} onPress = {() => this.props.navigation.navigate('Login')} >Log in</Text>
        </View>
        
      </View>
    );
  }
}




export default SignUpScreen;
