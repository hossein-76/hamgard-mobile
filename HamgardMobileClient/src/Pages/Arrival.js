import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { TextFa} from '../Components/TextFa';

class ArrivalScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
          header:null
        }
    }

    render() {
      return (
        
        <Container>
        
          <Header/>
          <View style = {styles.container}>
            <View>
            
              <Image  source={require('../../assets/images/Arrival-logo.jpg')} />

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
            <TextFa  style={styles.buttonText}>ورود</TextFa>
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
          <TextFa  style={styles.buttonText}>ثبت‌نام</TextFa>
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
    marginTop: -150,
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
    height: 60,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
});

  export default ArrivalScreen;