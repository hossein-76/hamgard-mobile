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

  closeDrawer = () => {
      this._drawer._root.close();
  }
  openDrawer = () => {
      alert('open');
      this._drawer._root.open();
  }

  

  static navigationOptions = ({navigation}) => {
    return {
      headerRight:<View>
                    <HeaderTitle>صفحه اصلی</HeaderTitle>
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

    const userToken = await AsyncStorage.getItem(STORAGE_KEY);

    fetch(url, 
      {
        method: 'POST',
        headers:{
          'token': 'token ' + userToken,
        }
      }).then(res => res.json())
      .then((responseData) => JWTController.OnValueChange(STORAGE_KEY, responseData.token))
      .then(response => {console.log('Success:', JSON.stringify(response));success = true} )
      .catch(error => console.error('Error:', error));

      if(success)
      {
        JWTController.DeleteToken();
        this.props.navigation.navigate('Authentication');
      }
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
        <Content>
          
        </Content>
        {/* <Content style = {{height : '100%', width: '100%', flexDirection : 'column' ,backgroundColor :'#013400'}} > */}
          <View style = {{height: '100%',width: '100%',justifyContent:'flex-end',flexDirection : 'column' }}>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            renderNavigationView={() => navigationView}>
            <View style = {{height: '100%',width: '100%',justifyContent:'flex-end',flexDirection : 'column' }}>
              <Button block rounded style = {Styles.button}
                  onPress=
                  {
                    () =>
                    {
                      this.props.navigation.goBack();
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