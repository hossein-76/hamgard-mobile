import React from 'react';
import {TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Button, Form, Item, Input, Label  } from 'native-base';
import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons'
import HeaderStyles from '../Styles/Headers'

var STORAGE_KEY = 'id_token';

var UserName = "";
var PassWord = "";

 class LoginScreen extends React.Component
 {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      PassWord: '',
      UserNameInputValid: false,
      PassWordInputValid: false, 
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight:<View><Text style = {HeaderStyles.TitleRight}>ورود</Text></View>,
      headerStyle: {
        backgroundColor: '#BC1D39',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
    }
  }

  OnSubmit()
  {
    if(UserName == "")
    {
        this.setState({
         UserNameInputValid: true,
         PassWordInputValid: false, 
       });
      return;
    }
    if(PassWord == "")
     { 
      this.setState({
        UserNameInputValid: false,
        PassWordInputValid: true,  
      });
       return;
     }


    var url = 'http://127.0.0.1:8000/user/api/login/';
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

      <Container> 
        <Content>
          <View style = {{...FormStyles.Container, marginTop:200}}>
            <Form style = {FormStyles.inputContainer}>
              <Item stackedLabel error={this.state.UserNameInputValid} style={FormStyles.stackedLabelItem}>
                <Label style = {FormStyles.label}>نام‌ کاربری</Label>
                <Input style={FormStyles.input}
                 onChangeText={(text) => {
                   UserName = text;
                   this.setState({UserName: text})
                   this.setState({UserNameInputValid: false})
                   }}/>
              </Item>
              <Item error={this.state.PassWordInputValid} style={FormStyles.stackedLabelItem} stackedLabel>
                <Label style = {FormStyles.label}>کلمه‌عبور</Label>
                <Input style={FormStyles.input} secureTextEntry = {true} 
                onChangeText={(text) => {
                  PassWord = text;
                  this.setState({PassWord: text});
                  this.setState({PassWordInputValid: false})}}/>
              </Item>
            </Form>
            <View style={FormStyles.buttonContainer}>
                <Button block rounded style = {FormStyles.button}
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
              </Button>
              <Button block rounded style = {FormStyles.button}
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
            </Button>
            </View>
          </View>
          <View>
            {/* <Text style={{alignSelf: 'flex-end',marginRight: 20, fontSize: 20}}>حساب‌کاربری ندارید‍!؟</Text>
            <Text style = {{alignSelf: 'flex-end',marginRight: 20, color: 'blue', fontSize: 20}} onPress = {() => this.props.navigation.navigate('ُSignUp')} >ثبت‌نام کنید</Text> */}
          </View>
        </Content>
      </Container>
      // <View style={}>
      //   <Text>Login Page</Text>
      //   <TextInput
      //     style={{height: 40}}
      //     placeholder="Username"
      //     onChangeText={(text) => this.setState({UserName: text})}
      //   />
      //   <TextInput
      //     style={{height: 40}}
      //     placeholder="password"
      //     onChangeText={(text) => this.setState({PassWord: text})}
      //   />
      //   <Button
      //     title="Submit"
      //     onPress=
      //     {
      //       () =>
      //       {
      //         this.OnSubmit();

      //       }
      //     }
      //   />
      // </View>
    );
  }
}


export default LoginScreen;