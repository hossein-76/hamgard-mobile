import React from 'react';
import {TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import {TextFa} from './TextFa';
import { DEFAULT } from 'expo/build/Calendar';


class HeaderTitle extends React.Component
{
    constructor(props) {
        super(props);
      }


      render()
      {
          return(
              <TextFa style={{...this.props.style, ...styles.HeaderTitle}} >
                 {this.props.children}
              </TextFa>
          )
      }

      
}

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#ffffff'
    },
    
  });

export {HeaderTitle};