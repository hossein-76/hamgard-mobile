import React from 'react';
import {TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Button, Form, Item, Input, Label  } from 'native-base';
import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons'
import HeaderStyles from '../Styles/Headers'


var STORAGE_KEY = 'id_token';
const btnStyle = { margin: 15 }

var UserName = "";
var Email = "";
var PhoneNumber = "";
var PassWord = "";
var PassWordConfirmation = "";

 
class SignUpScreen extends React.Component
{
  constructor(props){
    super(props);
    this.state= {
      UserNameInputValid: false,
      EmailInputValid: false,
      PhoneNumberInputValid: false,
      PassWordInputValid: false,
      PassWordConfirmationInputValid: false,  
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight:<View><Text style = {HeaderStyles.TitleRight}>ثبت‌نام</Text></View>,
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
          EmailInputValid: false,
          PhoneNumberInputValid: false,
          PassWordInputValid: false,
          PassWordConfirmationInputValid: false,  
        });
       return;
     }
     if(Email == "")
     {
      this.setState({
        UserNameInputValid: false,
        EmailInputValid: true,
        PhoneNumberInputValid: false,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: false,  
      });
       return;
     }
     if(PhoneNumber == "")
     {
      this.setState({
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: true,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: false,  
      });
       return;
     }
     if(PassWord == "")
     { 
      this.setState({
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: false,
        PassWordInputValid: true,
        PassWordConfirmationInputValid: false,  
      });
       return;
     }
     if(PassWordConfirmation == "")
     {
      this.setState({
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: false,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: true,  
      });
       return;
     }
     if(PassWord !== PassWordConfirmation)
     {
      this.setState({
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: false,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: true,  
      });
       return;
     }


      this.setState({
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: false,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: false,  
      });


      
       var url = 'http://127.0.0.1:8000/user/api/signup/'; 

       var data = {username: this.state.UserName,
         PassWord:this.state.PassWord,
         PassWordConfirmation:this.state.PassWordConfirmation,
         email:this.state.email,
         phoneNumber:this.state.phoneNumber};

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
          <View style = {FormStyles.Container}>
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
              <Item error={this.state.EmailInputValid} style={FormStyles.stackedLabelItem} stackedLabel>
                <Label style = {FormStyles.label}>ایمیل</Label>
                <Input style={FormStyles.input} 
                onChangeText={(text) => {
                  Email = text;
                  this.setState({email: text});
                  this.setState({EmailInputValid: false})}}/>
              </Item>
              <Item error={this.state.PhoneNumberInputValid} style={FormStyles.stackedLabelItem} stackedLabel>
                <Label style = {FormStyles.label}>تلفن‌همراه</Label>
                <Input style={FormStyles.input} 
                onChangeText={(text) =>{
                  PhoneNumber = text; 
                  this.setState({phoneNumber: text});
                  this.setState({PhoneNumberInputValid: false})}}/>
              </Item>
              <Item error={this.state.PassWordInputValid} style={FormStyles.stackedLabelItem} stackedLabel>
                <Label style = {FormStyles.label}>کلمه‌عبور</Label>
                <Input style={FormStyles.input} secureTextEntry = {true} 
                onChangeText={(text) => {
                  PassWord = text;
                  this.setState({PassWord: text});
                  this.setState({PassWordInputValid: false})}}/>
              </Item>
              <Item error={this.state.PassWordConfirmationInputValid} style={FormStyles.stackedLabelItem} stackedLabel>
                <Label style = {FormStyles.label}>تایید کلمه‌عبور</Label>
                <Input style={FormStyles.input} secureTextEntry = {true} 
                onChangeText={(text) => {
                  PassWordConfirmation = text; 
                  this.setState({PassWordConfirmation: text});
                  this.setState({PassWordConfirmationInputValid: false})}}  />
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
            <Text style={{alignSelf: 'flex-end',marginRight: 20, fontSize: 20}}>حساب‌کاربری دارید؟</Text>
            <Text style = {{alignSelf: 'flex-end',marginRight: 20, color: 'blue', fontSize: 20}} onPress = {() => this.props.navigation.navigate('Login')} >وارد شوید</Text>
          </View>
        </Content>
      </Container>
    );
  }
}




export default SignUpScreen;
