import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { AppLoading, Font } from 'expo';

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class EmailListItem extends React.Component
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
              
            <View style={styles.container}>
              <Text style={{marginLeft:'2%', marginTop:'2%'}}>
               {this.state.item.key}
              </Text>
              <Button style={styles.button} onPress={() => 
                    {
                        this.props.OnDeleteItem(this.state.item.key)
                    }
                }>
                <Text style={{fontSize:24}}>-</Text>
              </Button>
            </View>

              
          )
      }

     
}


const styles = StyleSheet.create({
    container:{
        padding:'5%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#aaaaaa',
        marginBottom:5, padding:'1.5%',
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

export {EmailListItem};