import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';
import { TextFa } from './TextFa'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class GroupListItem extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        };
      }
    


    render()
    {
        return(
            
            <TouchableOpacity style={styles.container} onPress = {() => {
                this.props.onPress();
            }}>
                
                <TextFa style={{fontSize:24, paddingRight:'1%', color:'#ffffff'}}>
                    {this.props.name}
                </TextFa>
                <TextFa style={{fontSize:16, paddingRight:'1%', color:'#ffffff'}}>
                    سازنده گروه : {this.props.creator} 
                </TextFa>
            </TouchableOpacity>

            
        )
    }

     
}


const styles = StyleSheet.create({
    container:{
        padding:'2%',
        width:'100%',
        
        flexDirection:'column',
        alignItems: 'flex-end',
        justifyContent:'flex-start',
        backgroundColor:'#BC1D39',
        marginBottom:'1%',
        borderRadius:10
    },
    button: {
        backgroundColor: '#b2ece1',
        borderColor: '#48BBEC',
        width:WindowSize.width * 0.05,
        borderRadius:10,
        height: WindowSize.width * 0.05,
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
    
  });

export {GroupListItem};