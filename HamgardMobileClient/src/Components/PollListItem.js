import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';
import { TextFa } from './TextFa'
import { connect} from 'react-redux'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import { getPoll } from '../Actions'

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class PollListItemComponent extends React.Component
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
                this.props.getPoll(this.props.group.id,  this.props.id);
                this.props.onPress();
            }}>
                
                <TextFa style={{fontSize:24, paddingRight:'1%', color:'#ffffff'}}>
                    {this.props.name}
                </TextFa>
                <TextFa style={{fontSize:16, paddingRight:'1%', color:'#ffffff'}}>
                    تعداد رای : {this.props.voteCount} 
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

  const MapStateToProps = (state, ownProps) => {
    return {
      poll:  state.Poll.loadedPoll,
      votedEvent: state.Poll.votedEvent,
      group: state.Group.loadedGroup
    };
  };
  
  const PollListItem = connect(MapStateToProps, {getPoll})(PollListItemComponent);


export {PollListItem};