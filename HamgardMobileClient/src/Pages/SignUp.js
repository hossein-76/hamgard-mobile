import React from 'react';
import {TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Button, Form, Item, Input, Label  } from 'native-base';
import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons'
import HeaderStyles from '../Styles/Headers'
import {TextFa} from '../Components/TextFa';
import {Alert} from '../Components/Texts';
import {Field} from '../Components/Form'


var STORAGE_KEY = 'id_token';
const btnStyle = { margin: 15 }

var FirstName = "";
var LastName = "";
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
      FirstNameInputValid: false,
      LastNameInputValid: false,
      UserNameInputValid: false,
      EmailInputValid: false,
      PhoneNumberInputValid: false,
      PassWordInputValid: false,
      PassWordConfirmationInputValid: false,  
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight:<View><TextFa style = {HeaderStyles.TitleRight}>ثبت‌نام</TextFa></View>,
      headerStyle: {
        backgroundColor: '#BC1D39',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
    }
  }

 async OnSubmit()
  {
    if(FirstName == "")
    {
        this.setState({
         FirstNameInputValid: true,
         LastNameInputValid: false,
         UserNameInputValid: false,
         EmailInputValid: false,
         PhoneNumberInputValid: false,
         PassWordInputValid: false,
         PassWordConfirmationInputValid: false,  
       });
      return;
    }
    if(LastName == "")
    {
        this.setState({
         FirstNameInputValid: false,
         LastNameInputValid: true,
         UserNameInputValid: false,
         EmailInputValid: false,
         PhoneNumberInputValid: false,
         PassWordInputValid: false,
         PassWordConfirmationInputValid: false,  
       });
      return;
    }
     if(UserName == "")
     {
         this.setState({
          FirstNameInputValid: false,
          LastNameInputValid: false,
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
        FirstNameInputValid: false,
        LastNameInputValid: false,
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
        FirstNameInputValid: false,
        LastNameInputValid: false,
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
        FirstNameInputValid: false,
        LastNameInputValid: false,
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
        FirstNameInputValid: false,
        LastNameInputValid: false,
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
        FirstNameInputValid: false,
        LastNameInputValid: false,
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: false,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: true,  
      });
       return;
     }
      this.setState({
        FirstNameInputValid: false,
        LastNameInputValid: false,
        UserNameInputValid: false,
        EmailInputValid: false,
        PhoneNumberInputValid: false,
        PassWordInputValid: false,
        PassWordConfirmationInputValid: false,  
      });
      
       var url = 'http://192.168.43.209:8000/user/api/v1/customer_signup/'; 

       var data = {
         first_name: this.state.FirstName,
         last_name: this.state.LastName,
         username: this.state.UserName,
         password:this.state.PassWord,
         email:this.state.Email,
         phone_number:this.state.phoneNumber};
        let success = false;
        
       await  fetch(url, 
          {
              method: 'POST', 
              body: JSON.stringify(data),
              headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => {
              if(JSON.stringify(res.status) == 200)
              {
                 success = true;
              }
              return res.json()})
            .then(responseData => JWTController.OnValueChange(STORAGE_KEY, responseData.token))

            if(success)
            {
              this.props.navigation.navigate("MainSession");
            }
            
            
      
  }
  

  ModifyStates(text, fieldLabel)
  {
    if(fieldLabel == 'FirstName')
    {
      FirstName = text;
      this.setState({FirstName: text})
      this.setState({FirstNameInputValid: false})
    }
    if(fieldLabel == 'LastName')
    {
      LastName = text;
      this.setState({LastName: text})
      this.setState({LastNameInputValid: false})
    }
    if(fieldLabel == 'UserName')
    {
      UserName = text;
      this.setState({UserName: text})
      this.setState({UserNameInputValid: false})
    }
    if(fieldLabel == 'Email')
    {
      Email = text;
      this.setState({Email: text});
      this.setState({EmailInputValid: false})
    }
    if(fieldLabel == 'PhoneNumber')
    {
      PhoneNumber = text; 
      this.setState({phoneNumber: text});
      this.setState({PhoneNumberInputValid: false})
    }
    if(fieldLabel == 'PassWord')
    {
      PassWord = text;
      this.setState({PassWord: text});
      this.setState({PassWordInputValid: false})
    }
    if(fieldLabel == 'PassWordComfirmation')
    {
      PassWordConfirmation = text; 
      this.setState({PassWordConfirmation: text});
      this.setState({PassWordConfirmationInputValid: false})
    }
  }


  render() 
  {
    return (

      <Container> 
        <Content style = {FormStyles.Container}>
          <View>
            <Form style = {FormStyles.inputContainer}>
            <Field error={this.state.FirstNameInputValid}
              labelText={'نام‌'} alertMessage={'نام‌ خود را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'FirstName')}/>

                <Field error={this.state.LastNameInputValid}
              labelText={'نام‌ خانوادگی'} alertMessage={'نام‌ خانوادگی خود را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'LastName')}/>

             <Field error={this.state.UserNameInputValid}
              labelText={'نام‌ کاربری'} alertMessage={'نام‌کاربری خود را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'UserName')}/>

              <Field error={this.state.EmailInputValid}
              labelText={'ایمیل'} alertMessage={'ایمیل خود را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'Email')}/>

              <Field error={this.state.PhoneNumberInputValid}
              labelText={'تلفن‌همراه'} alertMessage={'شماره تلفن خود را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'PhoneNumber')}/>

              <Field secureTextEntry = {true}  error={this.state.PassWordInputValid}
              labelText={'کلمه‌عبور'} alertMessage={'کلمه عبور را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'PassWord')}/>

              <Field secureTextEntry = {true}  error={this.state.PassWordConfirmationInputValid}
              labelText={'تایید کلمه‌عبور'} alertMessage={'کلمه‌عبور رااشتباه وارد کرده‌اید'}
              onChange={(text) => this.ModifyStates(text, 'PassWordComfirmation')}/>
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
                <TextFa style = {ButtonStyles.buttonText}>ثبت‌نام</TextFa>
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
              <TextFa style = {ButtonStyles.buttonText}>بازگشت</TextFa>
            </Button>
            </View>
          </View>
          <View style={{marginBottom:'20%'}}>
            <Text style={{alignSelf: 'flex-end',marginRight: 20, fontSize: 20}}>حساب‌کاربری دارید؟</Text>
            <Text style = {{alignSelf: 'flex-end',marginRight: 20, color: 'blue', fontSize: 20}} onPress = {() => this.props.navigation.navigate('Login')} >وارد شوید</Text>
          </View>
        </Content>
      </Container>
    );
  }
}




export default SignUpScreen;
