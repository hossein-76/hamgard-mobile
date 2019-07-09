import React from 'react';
import {TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Button, Form, Item, Input, Label  } from 'native-base';

import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons';
import HeaderStyles from '../Styles/Headers';
import { TextFa} from '../Components/TextFa';
import {Field} from '../Components/Form';

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
      headerRight:<View><TextFa  style={HeaderStyles.TitleRight}>ثبت‌نام</TextFa></View>,
      headerStyle: {
        backgroundColor: '#BC1D39',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
    }
  }

 async  OnSubmit()
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


    var url = 'http://192.168.43.209:8000/user/api/v1/customer_login/';
    var data = {username: this.state.UserName, password:this.state.PassWord, remember_me:false};
    let success = false;
   
   
    await fetch(url, 
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
    .then((responseData) => {JWTController.OnValueChange(STORAGE_KEY, responseData.token)})
    if(success)
    {
      this.props.navigation.navigate("MainSession");
    }
  }


  ModifyStates(text, fieldLabel)
  {
    if(fieldLabel == 'UserName')
    {
      UserName = text;
      this.setState({UserName: text})
      this.setState({UserNameInputValid: false})
    }
    if(fieldLabel == 'PassWord')
    {
      PassWord = text;
      this.setState({PassWord: text});
      this.setState({PassWordInputValid: false})
    }
    
  }


  render() 
  {
    return (

      <Container> 
        <Content style = {{...FormStyles.Container, marginTop:'30%'}}>
          <View >
            <Form style = {FormStyles.inputContainer}>
            <Field error={this.state.UserNameInputValid}
              labelText={'نام‌ کاربری'} alertMessage={'نام‌کاربری خود را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'UserName')}/>


              <Field secureTextEntry = {true}  error={this.state.PassWordInputValid}
              labelText={'کلمه‌عبور'} alertMessage={'کلمه عبور را وارد کنید'}
              onChange={(text) => this.ModifyStates(text, 'PassWord')}/>

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
                <TextFa style = {ButtonStyles.buttonText}>ورود</TextFa>
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
          <View>
            {/* <Text style={{alignSelf: 'flex-end',marginRight: 20, fontSize: 20}}>حساب‌کاربری ندارید‍!؟</Text>
            <Text style = {{alignSelf: 'flex-end',marginRight: 20, color: 'blue', fontSize: 20}} onPress = {() => this.props.navigation.navigate('ُSignUp')} >ثبت‌نام کنید</Text> */}
          </View>
        </Content>
      </Container>
     
    );
  }
}


export default LoginScreen;