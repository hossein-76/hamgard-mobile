import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';

class ArrivalScreen extends React.Component {

    render() {
      return (
        
        <Container>
        
        
          <View style = {styles.container}>
          <View>
          
          <Image source={require('../images/Arrival-logo.jpg')} />

          </View>
        <Button block rounded style = {styles.button}
            onPress=
            {
              () =>
              {
                this.props.navigation.navigate('Login')
              }
            }
            underlayColor='#99d9f4'
          >
          <Text style = {styles.buttonText}>ورود</Text>
          </Button>
          <Button block rounded style = {styles.button}
            onPress=
            {
              () =>
              {
                this.props.navigation.navigate('SignUp')
              }
            }
            underlayColor='#99d9f4'
          >
          <Text style = {styles.buttonText}>ثبت‌نام</Text>
          </Button>
        </View>
      </Container>
      
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: -200,
    padding: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#BC1D39',
    borderColor: '#48BBEC',
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

  export default ArrivalScreen;