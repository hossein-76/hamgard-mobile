import React from 'react';
import {Dimensions, TimePickerAndroid, TextInput,TouchableHighlight,
Modal,  StyleSheet, View, Text } from 'react-native';
import {  DatePicker, Container, Header, Content, Button, Textarea, Form, Item, Input, Label  } from 'native-base';
import ImagePicker from 'react-native-image-picker';
//import Modal from 'react-native-modal';
import StepIndicator from 'react-native-step-indicator';
import PersianDatePicker from 'react-native-persian-date-picker';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import JWTController from '../Controllers/AuthenticationController';
import FormStyles from '../Styles/Form';
import ButtonStyles from '../Styles/Buttons';
import HeaderStyles from '../Styles/Headers';
import {TextFa} from '../Components/TextFa';
import {Alert} from '../Components/Texts';
import {Field} from '../Components/Form';
import { Constants } from 'expo-camera';
import {DatePickerModal} from '../Components/DatePickerModal'

var DateTemp = null;

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

const StepIndicatorStyles = {
  stepIndicatorSize: 60,
  currentStepIndicatorSize:70,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  currentStepStrokeWidth:5,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

class GroupCreationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Step:2,
          modalVisible: false,
          StartHour: 'hh',
          StartMinute: 'mm',
          StartDate:null,
          EndHour: 'hh',
          EndMinute: 'mm',
          EndDate: null
        };
      }


    

    static navigationOptions = ({navigation}) => {
        return {
          header:null
        }
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
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

    async OnEndTimePickerClick()
    {
      var EndTime = await this.PickATime();
      if(EndTime.hour < 10)
      {
        EndTime.hour = 0 + '' + EndTime.hour;
      }
      if(EndTime.minute < 10)
      {
        EndTime.minute = 0 + '' + EndTime.minute;
      }
      this.setState({EndHour: EndTime.hour});
      this.setState({EndMinute: EndTime.minute});
    }

    async OnEndDatePickerClick()
    {
      this.setModalVisible(true);
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
                                      this.OnStartTimePickerClick();
                                    }
                                  } ><TextFa>{this.state.StartHour + ':' + this.state.StartMinute}</TextFa></Button>
                                  {/* <PersianCalendarPicker
                                    onDateChange={this.onDateChange}
                                  /> */}
                                  <TextFa style={{marginTop:'2%'}}> زمان شروع: </TextFa>
                              </View>
                              <View style = {{flexDirection:'row'}}>
                                <Button style={styles.TimePicker} onPress=
                                  {
                                    async () =>
                                    {
                                      this.OnEndTimePickerClick();
                                    }
                                  } ><TextFa>{this.state.EndHour + ':' + this.state.EndMinute}</TextFa></Button>
                                   <Button style={styles.TimePicker} onPress=
                                  {
                                    async () =>
                                    {
                                      this.OnEndDatePickerClick();
                                    }
                                  } ><TextFa>{this.state.EndDate}</TextFa></Button>
                                  
                                  
                                  <TextFa style={{marginTop:'2%'}}> زمان پایان: </TextFa>
                              </View>
                            </View>
                            <View style={{flex:1, height:WindowSize.height * 0.3}}>
                                    <StepIndicator style={styles.stepIndicator}
                                        customStyles={StepIndicatorStyles}
                                        currentPosition={this.state.Step - 1}
                                        stepCount={3}
                                        direction={'vertical'}
                                    />
                                  </View>
                          </View>
                          <DatePickerModal visible={this.state.modalVisible}/>
            </Container>
        
        );
      }
    
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    //alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '10%',
    backgroundColor: '#BC1D39',
  },
  stepIndicator: {
    height:WindowSize.height * 0.2,
  } ,
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
    flex:11,
    backgroundColor:'#ffffff',
    width: WindowSize.width * 0.8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '30%',
    borderRadius:20,
    marginBottom: '49%',
    marginRight:'5%',
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