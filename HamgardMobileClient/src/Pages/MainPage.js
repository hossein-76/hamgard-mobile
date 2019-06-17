import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image, DrawerLayoutAndroid } from 'react-native';
import { Container, Header, Content, Button, Drawer } from 'native-base';
import JWTController from '../Controllers/AuthenticationController';
import ButtonStyles from '../Styles/Buttons';
import HeaderStyles from '../Styles/Headers';
import {TextFa} from '../Components/TextFa';
import {HeaderTitle} from '../Components/HeaderTitle';
import styles from '../Styles/Headers';

class MainScreen extends React.Component 
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
      headerRight:<View flexDirection={'row'}>
                    
                    <TextFa style = {HeaderStyles.TitleRight}>صفحه اصلی</TextFa>
                    <Button block style={{backgroundColor: '#BC1D39',width:50}} onPress=
                    {
                      () =>
                      {
                        // this.openDrawer();
                      }
                    }>
                    <Image style={{width:50, height:50}} source={require('../../assets/images/Drawer(2).png')}/>
                    </Button>
                  </View>,
      
      headerStyle: {
        backgroundColor: '#BC1D39',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
     },
    }
  }

  //not completed
  async logOut()
  {
    var success = false;
    var url = 'http://172.18.218.231:8000/user/api/logout/'; 
    const userToken = JWTController.GetUserToken();

    fetch(url, 
      {
        method: 'POST',
        headers:{
          'token': 'token ' + userToken,
        }
      }).then(res => res.json())
      .then((responseData) => JWTController.DeleteToken())
      .then(response => {console.log('Success:', JSON.stringify(response));success = true} )
      .catch(error => console.log('Error:', error));

      if(success)
      {
        JWTController.DeleteToken();
        this.props.navigation.navigate('Authentication');
      }
  }

   
   openDrawer()
   {
      this.refs['DRAWER'].openDrawer()
   }


  render() 
  {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Button block style = {Styles.drawerButton}
                  onPress=
                  {
                    () =>
                    {
                      this.logOut();
                    }
                  }
                  underlayColor='#99d9f4'
                >
                <TextFa style = {ButtonStyles.drawerButtonText}>خروج</TextFa>
              </Button>
      </View>
    );
    return (
      

      <Container style = {{height : '100%', width: '100%' ,flexDirection : 'column' }} > 
        {/* <Content style = {{height : '100%', width: '100%', flexDirection : 'column' ,backgroundColor :'#013400'}} > */}
          <View style = {{height: '100%',width: '100%',justifyContent:'flex-end',flexDirection : 'column' }}>
          <DrawerLayoutAndroid
            ref={'DRAWER'}
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            renderNavigationView={() => navigationView}>
            <View style = {{height: '100%',width: '100%',justifyContent:'flex-end',flexDirection : 'column' }}>
              <Button block rounded style = {Styles.button}
                  onPress=
                  {
                    () =>
                    {
                      this.props.navigation.navigate('GroupCreation');
                    }
                  }
                  underlayColor='#99d9f4'
                >
                <TextFa style = {ButtonStyles.buttonText}>ایجاد گروه</TextFa>
              </Button>
            </View>
          </DrawerLayoutAndroid>
          
           
          </View>
          
        {/* </Content> */}
      </Container>
     
    );
  }

}


const Styles = StyleSheet.create({
   container: { 
     height: '100%',
  
   },
   button: {
    backgroundColor: '#BC1D39',
    borderColor: '#48BBEC',
    height: 60,
    marginRight : '10%',
    marginLeft : '10%',
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
   },
   drawerButton: {
    backgroundColor: '#ffffff',
    borderColor: '#48BBEC',
    height: 60,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
   },
   drawerButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
   },
  buttonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  },
});


export default MainScreen;