import React from 'react';
import {TextInput, View, Text, Button } from 'react-native';

import JWTController from '../Controllers/AuthenticationController';
import styles from '../Styles/Form';

var STORAGE_KEY = 'id_token';



 class LoginScreen extends React.Component
 {
  constructor(props) {
    super(props);
    this.state = {UserName: '', PassWord: ''};
  }

  OnSubmit()
  {
    var url = 'https://example.com/profile';
    var data = {username: this.state.UserName, password:this.state.PassWord};

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
              this.OnSubmit();

            }
          }
        />
      </View>
    );
  }
}


export default LoginScreen;