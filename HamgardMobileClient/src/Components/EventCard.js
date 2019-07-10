import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';
import { TextFa } from './TextFa'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import  { vote, unVote, SelectEvent, UnselectEvent } from '../Actions';



const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class EventCardComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isChosen: false,
            backgroundColor:'#BC1D39',
            onPoll: this.props.onPoll,
            type: this.props.type
        };
      }
    
    

    render()
    {
        return(
            
            <TouchableOpacity style={{...styles.container, backgroundColor: this.state.backgroundColor}} onPress = {() => {
                if(!this.state.onPoll)
                {
                    if(!this.state.isChosen)
                    {
                        this.props.SelectEvent({id: this.props.id, type: this.props.type});
                        this.setState({isChosen: true});
                        this.setState({backgroundColor:'#EF5F7F'})
                    }
                    else
                    {
                        this.props.UnselectEvent({id: this.props.id, type: this.props.type});
                        this.setState({isChosen: false});
                        this.setState({backgroundColor:'#BC1D39'})
                    }
                }
                else
                {
                    if(!this.state.isChosen && this.props.votedEvent == null)
                    {
                        this.props.vote({id: this.state.id})
                        this.setState({isChosen: true});
                        this.setState({backgroundColor:'#EF5F7F'})
                    }
                    else if(this.state.isChosen)
                    {
                        this.props.unVote()
                        this.setState({isChosen: false});
                        this.setState({backgroundColor:'#BC1D39'})
                    }
                    
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

  const MapStateToProps = (state, ownProps) => {
    return {
      poll:  state.Poll.loadedPoll,
      votedEvent: state.Poll.votedEvent
    };
  };
  
  const EventCard = connect(MapStateToProps, {vote, unVote, SelectEvent, UnselectEvent})(EventCardComponent);

  export {EventCard};