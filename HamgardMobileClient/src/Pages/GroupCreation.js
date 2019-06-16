import React from 'react';
import {Dimensions, TimePickerAndroid, TextInput,TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import {DatePicker, Container, Header, Content, Button, Textarea, Form, Item, Input, Label  } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons';
import HeaderStyles from '../Styles/Headers';
import {TextFa} from '../Components/TextFa';
import {Alert} from '../Components/Texts';
import {Field} from '../Components/Form';
import { Constants } from 'expo-camera';

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class GroupCreationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Step:2,
          StartHour: 'hh',
          StartMinute: 'mm',
          EndHour: null,
          EndMinute: null,
        };
      }


    

    static navigationOptions = ({navigation}) => {
        return {
          header:null
        }
    }

    async OnStartTimePickerClick()
    {
      var StartTime = await this.PickATime();
      if(StartTime.hour < 10)
      {
        StartTime.hour = 0 + '' + StartTime.hour;
      }
      if(StartTime.minute < 10)
      {
        StartTime.minute = 0 + '' + StartTime.minute;
      }
      this.setState({StartHour: StartTime.hour});
      this.setState({StartMinute: StartTime.minute});
    }
    
    async PickATime()
    {
      try {
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: 14,
          minute: 0,
          is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
         
          return {hour, minute}
        }
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
      }
    }

    HandleChoosePhoto = () => {
      const Options = {};
      ImagePicker.launchImageLibrary(Options, response => {
        console.log("response", response);
      });
    }

    render() {
      if(this.state.Step == 1)
      {
        return (
            
            <Container>
                    <View style = {styles.container}>
                            <View style = {styles.stepOneContainer}>
                                <Item regular style={{padding:'1%', borderRadius:10 ,backgroundColor:'#dddddd', borderWidth:0, marginTop:'3%', marginRight:'25%', marginLeft:'-12%'}}>
                                    <Input style={{fontSize:24}} placeholder='نام گروه'/>
                                </Item>
                                <Item regular style={{ padding:10, borderRadius:10 ,backgroundColor:'#dddddd', borderWidth:0, marginTop:'15%', height:400, width:425, alignItems:'flex-start'}}>
                                   <Textarea style={{width:405, height:380, fontSize:24}} placeholder="توضیحات" />
                                </Item>
                                {/* <Button style={styles.button} onPress={this.HandleChoosePhoto}>

                                </Button> */}
                            </View>
                    </View>
            </Container>
        
        );
      }
      if(this.state.Step == 2)
      {
        return (
            
            <Container>
                    <View style = {styles.container}>
                            <View style = {styles.stepTwoContainer}>
                              <View style = {{flexDirection:'row'}}>
                                <Button style={styles.TimePicker} onPress=
                                  {
                                    async () =>
                                    {
                                      this.OnStartTimePickerClick()
;

                                    }
                                  } ><TextFa>{this.state.StartHour + ':' + this.state.StartMinute}</TextFa></Button>
                                <DatePicker
                                  defaultDate={new Date(2018, 4, 4)}
                                  minimumDate={new Date(2018, 1, 1)}
                                  maximumDate={new Date(2018, 12, 31)}
                                  locale={"en"}
                                  timeZoneOffsetInMinutes={undefined}
                                  modalTransparent={false}
                                  animationType={"fade"}
                                  androidMode={"default"}
                                  placeHolderText="Select date"
                                  textStyle={{ color: "green" }}
                                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                                  onDateChange={this.setDate}
                                  disabled={false}
                                  />
                                  <TextFa> تاربخ شروع: </TextFa>
                              </View>
                            </View>
                    </View>
            </Container>
        
        );
      }
    
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10%',
    backgroundColor: '#BC1D39',
  },
  stepOneContainer:{
    flex:1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: WindowSize.width * 0.8,
    marginTop: '0%',
    borderRadius:20,
    marginBottom: '49%',
    marginRight:'20%',
    paddingTop:'10%',
    padding: '5%',
  },
  stepTwoContainer:{
    flex:1,
    backgroundColor:'#ffffff',
    width: WindowSize.width * 0.8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '20%',
    borderRadius:20,
    marginBottom: '49%',
    marginRight:'20%',
    paddingTop:'10%',
    padding: '5%',
  },
  TimePicker: {
    backgroundColor: '#dddddd',
    borderColor: '#48BBEC',
    width: WindowSize.width * 0.2,
    borderRadius:10,
    marginBottom: 10,
    alignItems:'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#BC1D39',
    borderColor: '#48BBEC',
    width:100,
    height: 60,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
});

  export default GroupCreationScreen;