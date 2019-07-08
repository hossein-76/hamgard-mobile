import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';
import { TextFa } from './TextFa'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import { EventActions} from '../Actions/EventActions'

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class EventCard extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isChosen: false,
            backgroundColor:'#BC1D39'
        };
      }
    


    render()
    {
        return(
            
            <TouchableOpacity style={{...styles.container, backgroundColor: this.state.backgroundColor}} onPress = {() => {
                if(!this.state.isChosen)
                {
                    EventActions.SelectEvent(this.state.id);
                    this.setState({isChosen: true});
                    this.setState({backgroundColor:'#EF5F7F'})
                }
                else
                {
                    this.setState({isChosen: false});
                    this.setState({backgroundColor:'#BC1D39'})
                }
               
               // this.props.onPress();
            }}>
                <Image style = {styles.Image}  source={require('../../assets/images/EventCard.png')} />
                <TextFa style={{fontSize:24, paddingRight:'1%', color:'#ffffff'}}>
                    {this.props.title}
                </TextFa>
                <TextFa style={{fontSize:16, paddingRight:'1%', color:'#ffffff'}}>
                    دسته بندی : {this.props.category} 
                </TextFa>
            </TouchableOpacity>

            
        )
    }

     
}


const styles = StyleSheet.create({
    container:{
        padding:'2%',
        
        flexDirection:'column',
        alignItems: 'flex-end',
        justifyContent:'flex-start',
        
        marginBottom:'1%',
        borderRadius:10
    },
    Image:{
        width: WindowSize.width * 0.425,
        height: WindowSize.height* 0.15
    },
    
  });

export {EventCard};