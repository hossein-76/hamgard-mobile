import React from 'react';
import {TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Button, Form, Item, Input, Label   } from 'native-base';
import {TextFa} from './TextFa';
import FormStyles from '../Styles/Form';
import {Alert} from '../Components/Texts';


class Field extends React.Component
{
    constructor(props) {
        super(props);
      };

      

      render()
      {
          return(
            <View>
                <Item stackedLabel error={this.props.error} style={styles.stackedLabelItem}>
                    <Label style = {FormStyles.label}><TextFa>{this.props.labelText}</TextFa></Label>
                    <Input style={FormStyles.input} secureTextEntry = {this.props.secureTextEntry} 
                        onChangeText={(text) =>
                            {
                                this.props.onChange(text)
                            }
                        }/>
                </Item>
                <Alert appear={this.props.error}>{this.props.alertMessage}</Alert>
            </View>
          )
      }     
}

export {Field};


const styles = StyleSheet.create({
    stackedLabelItem:
      {
        flex:1,
        marginBottom:10,
        
      },
      warningStackedLabelItem:
      { 
        flex:1,
        marginBottom:10,
        borderColor:'#FD5523'
      },
      label: {
        fontSize: 20,
        alignSelf: 'flex-end',
        marginRight: 20
      },
      input: 
      {
        fontSize: 24,
        marginLeft: 10
      },
    
  });



