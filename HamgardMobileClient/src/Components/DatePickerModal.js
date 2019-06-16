import React from 'react';
import {Dimensions, TimePickerAndroid, TextInput,TouchableHighlight,
Modal,  StyleSheet, View, Text } from 'react-native';
import {  DatePicker, Container, Header, Content, Button, Textarea, Form, Item, Input, Label  } from 'native-base';
import {TextFa} from '../Components/TextFa';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}


class DatePickerModal extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          
          SelectedDate: null,
        };
      }

      onDateChange(date) {
        alert(this.state.SelectedDate)
      }
    
    GetDate()
    {
        return this.state.SelectedDate;
    }

    Close()
    {
        this.props.visible = false;
    }

      render()
      {
          return(
            <Modal                 
                animationType="fade"
                transparent={true}
                coverScreen={false}
                hasBackdrop={true}
                visible={this.props.visible}
                onRequestClose={() => {
                }}>
                <View style={{borderRadius:10 ,marginTop:'40%' ,alignSelf: 'center',padding:'5%',backgroundColor:'white',width:WindowSize.width * 0.95 , height:WindowSize.height*0.5}}>
                    <PersianCalendarPicker
                        onDateChange={async (date) =>
                            {
                                await this.setState({ SelectedDate: date });
                                alert(this.state.SelectedDate)
                            }
                         
                        }
                        /> 
                    <View style={{marginTop:'5%' ,flexDirection:'row', justifyContent:'flex-end', paddingRight: '2%'}}>
                    <Button transparent style={{marginRight:'5%', borderColor:0}} onPress={() => {
                            this.Close();
                        }}>
                        <TextFa style={{color: '#5555ff'}}>cancel</TextFa>  
                    </Button>
                    <Button transparent style={{ borderColor:0}} onPress={() => {
                        this.props.visible = false;
                        }}>
                        <TextFa style={{color: '#5555ff'}}>ok</TextFa>  
                    </Button>
                    </View>
                </View>
            </Modal>
              
              
          )
      }

     
}

const styles = StyleSheet.create({
    TextFa: {
        fontFamily: 'test'
    },
    
  });

export {DatePickerModal};