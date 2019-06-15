import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';


class TextFa extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          FontLoaded: false,
        };
      }
    
      async componentDidMount() {
        await Font.loadAsync({
          'test': require('../../assets/Fonts/IRANSans-Medium-web.ttf'),
        });
        this.setState({FontLoaded: true})
      }


      render()
      {
          return(
            this.state.FontLoaded ? (
              <Text style={{...this.props.style, ...styles.TextFa}}>
               {this.props.children}
              </Text>) : null
              
              
          )
      }

     
}

const styles = StyleSheet.create({
    TextFa: {
        fontFamily: 'test'
    },
    
  });

export {TextFa};