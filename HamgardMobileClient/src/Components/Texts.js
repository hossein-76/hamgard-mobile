import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import {TextFa} from './TextFa';
import { DEFAULT } from 'expo/build/Calendar';


class Alert extends React.Component
{
    constructor(props) {
        super(props);
      };

      

      render()
      {
          return(
              <TextFa style={this.props.appear ? (styles.appear):(styles.disappear) } >
                 {this.props.children}
              </TextFa>
          )
      }

      
}

const styles = StyleSheet.create({
    appear: {
        color: '#BC1D39',
        marginBottom:10
        
    },
    disappear: {
        color: '#ffffff',
        marginBottom:10
    },
    
  });

export {Alert};