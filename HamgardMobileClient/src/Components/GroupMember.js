import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';
import { TextFa } from './TextFa'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class GroupMember extends React.Component
{
    constructor(props) {
        super(props);
      }
    


    render()
    {
        return(
            
            <View style={styles.container}>
                
                <Image style = {styles.avatar}  source={require('../../assets/images/Avatar.png')} />
                <TextFa style={{fontSize:16, paddingRight:'1%'}}>
                    {this.props.name} 
                </TextFa>
            </View>

            
        )
    }

     
}


const styles = StyleSheet.create({
    container:{
        //padding:'2%',
       // margin:'2%',
       // width:'100%',
        flexDirection:'column',
        alignItems:'center',
        //backgroundColor:'#BC1D39',
        //marginBottom:'1%',
        //borderRadius:10
    },
    avatar:{
        width: WindowSize.width * 0.2,
        height: WindowSize.width * 0.2,
        borderRadius:100
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

export {GroupMember};