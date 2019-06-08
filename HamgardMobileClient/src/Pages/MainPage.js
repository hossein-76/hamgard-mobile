import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button, Drawer } from 'native-base';
import ButtonStyles from '../Styles/Buttons';
import HeaderStyles from '../Styles/Headers';
import {TextFa} from '../Components/TextFa';
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
      headerRight:<View><TextFa  style={HeaderStyles.TitleRight}>صفحه اصلی</TextFa></View>,
      headerStyle: {
        backgroundColor: '#BC1D39',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
     },
    }
  }


  render() 
  {
    return (

      <Container style = {{height : '100%', width: '100%' ,flexDirection : 'column' }} > 
        {/* <Content style = {{height : '100%', width: '100%', flexDirection : 'column' ,backgroundColor :'#013400'}} > */}
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});


export default MainScreen;