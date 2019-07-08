import React from 'react';
import {Dimensions, TimePickerAndroid, TextInput,TouchableHighlight,
Modal,  StyleSheet, FlatList, View, Text } from 'react-native';
import {CheckBox,  DatePicker, Container, Header, Content, Button, Textarea, Form, Item, Input, Label  } from 'native-base';
import ImagePicker from 'react-native-image-picker';
//import Modal from 'react-native-modal';
import StepIndicator from 'react-native-step-indicator';
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
import {EmailListItem} from '../Components/EmailListItem'

var TempEmails = []

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

const extractKey = ({key, text}) => key




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
          Step:1,
          DateToChoose: null,
          modalVisible: false,
          name:null,
          GroupDescription:null,
          StartHour: 'hh',
          StartMinute: 'mm',
          StartDate:null,
          EndHour: 'hh',
          EndMinute: 'mm',
          EndDate: null,
          emails:[ ],
          EnteredEmail:'',
          type:'public'

        };
      }

      onSubmit()
      {
        var url = 'http://172.18.218.231:8000/user/api/creategroup/';
        var Success = false;
        var data = {name:this.state.name, type:this.state.type, emails:this.state.emails}

        const userToken = JWTController.GetUserToken();

        fetch(url, 
          {
            method: 'POST', 
            body: JSON.stringify(data),
            headers:{
              'token': 'token ' + userToken
            }
          }).then(res => res.json())
          .then(response => {console.log('Success:', JSON.stringify(response)); Success = true})
          .catch(error => console.log('Error:', error));

          if(Success)
          {
            this.props.navigation.navigate('Main')
          }
        }
      
       

      CloseModal=() => {
        this.setState({modalVisible: false})
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

    async OnPickADate(date)
    {
      if(this.state.DateToChoose == 'Start')
      {
        this.setState({StartDate: date})
      }
      else if(this.state.DateToChoose == 'End')
      {
        this.setState({EndDate: date})
      }
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

    ExtractEmails = async () => {
      var Emails = []
      for(let i = 0; i < TempEmails.length ; i++)
      {
        Emails.push(TempEmails[i].key)
      }
      await this.setState({emails: Emails})
      return Emails;
    }

    arrayRemove = async (arr, value) => {
    return arr.filter((ele) => {
      return ele.key != value;
    })
   }

    renderItem = (List) =>
    {
      return (
        <EmailListItem item = {List.item} OnDeleteItem={async (key) =>
          {
            
            TempEmails = await this.arrayRemove(TempEmails, key)
            await this.ExtractEmails();
          
          }
        }/>
      )
    }


    StepHolder()
    {
      if(this.state.Step == 1)
      {
        return(
          <View style = {styles.stepOneContainer}>
           <TextFa style={{marginTop: '-8%' ,alignSelf:'flex-end', fontSize:18}}>عنوان و توضیحات کلی</TextFa>
            <Item regular style={{padding:'1%', borderRadius:10 ,backgroundColor:'#dddddd', borderWidth:0, marginTop:'3%', }}>
                <Input onChangeText={(text) => this.setState({name: text})} style={{fontSize:24}} placeholder='نام گروه'/>
            </Item>
            <View style={{padding:'2%', flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end'}}>
             <TextFa>گروه خصوصی است</TextFa>
              <CheckBox color={'#BC1D39'} checked={this.state.type == 'private' ? true : false} onPress={() => {
                if(this.state.type == 'public')
                {
                  this.setState({type: 'private'})
                }
                if(this.state.type == 'private')
                {
                  this.setState({type: 'public'})
                }
              }} />
              
            </View>
            <Item regular style={{ padding:10, borderRadius:10 ,backgroundColor:'#dddddd', borderWidth:0, marginTop:'5%', height:WindowSize.height *0.28, width:WindowSize.width *0.63, alignItems:'flex-start'}}>
                <Textarea onChangeText={(text) => this.setState({GroupDescription: text})} style={{width:WindowSize.width *0.6, height:380, fontSize:24}} placeholder="توضیحات" />
            </Item>
            <View style = {{flexDirection:'row', justifyContent:'space-around', alignSelf:'stretch',marginTop:'5%'}}>
              <Button style={{...styles.button, backgroundColor:'#aaaaaa'}} onPress=
                    {
                      () =>
                      {
                        this.setState({GroupName: null});
                        this.setState({GroupDescription: null});
                        this.props.navigation.goBack();
                      }
                    } ><TextFa>بازگشت</TextFa></Button>
                    <Button style={styles.button} onPress=
                  {
                    () =>
                    {
                      if(this.state.name == null)
                      {
                        alert('enter group name')  
                      }
                      else{
                        this.setState({Step: 2})
                      }
                     
                    }
                  } ><TextFa style={{color:'#ffffff'}}>مرحله بعد</TextFa></Button>
            </View>
        </View>
        )
      }
      if(this.state.Step == 2)
      {
        return(
          <View style = {styles.stepTwoContainer}>
          <TextFa style={{marginTop: '-10%', marginBottom:'2%' ,alignSelf:'flex-end', fontSize:18}}>زمان رویداد</TextFa>
            <View style = {{flexDirection:'row'}}>
              <Button style={styles.TimePicker} onPress=
                {
                  async () =>
                  {
                    this.OnStartTimePickerClick();
                  }
                } ><TextFa>{this.state.StartHour + ':' + this.state.StartMinute}</TextFa></Button>
                  <Button style={styles.TimePicker} onPress=
                  {
                    async () =>
                    {
                      this.setState({DateToChoose:'Start'})
                      this.setModalVisible(true);
                    }
                  } ><TextFa>{this.state.StartDate == null ? 'YYYY-MM-DD' : this.state.StartDate.format('YYYY-MM-DD')}</TextFa></Button>
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
                      this.setState({DateToChoose:'End'})
                      this.setModalVisible(true);
                    }
                  } ><TextFa>{this.state.EndDate == null ? 'YYYY-MM-DD' : this.state.EndDate.format('YYYY-MM-DD')}</TextFa></Button>
                
                
                <TextFa style={{marginTop:'2%'}}> زمان پایان: </TextFa>
            </View>

            <View style = {styles.buttonContainer}>
              
                  <Button style={{...styles.button, backgroundColor:'#aaaaaa'}} onPress=
                  {
                    () =>
                    {
                      this.setState({StartDate: null});
                      this.setState({EndDate: null});
                      this.setState({StartTime : null});
                      this.setState({EndTime: null});
                      this.setState({Step: 1})
                    }
                  } ><TextFa>مرحله قبل</TextFa></Button>
                  <Button style={styles.button} onPress=
                {
                  () =>
                  {
                    if(this.state.StartDate == null || this.state.EndDate == null 
                    ||this.state.StartHour =='hh' || this.state.StartMinute == 'mm' || this.state.EndHour =='hh'
                    ||this.state.EndMinute == 'mm')
                    {
                      alert('please fill all fields')
                    }
                    else{
                      this.setState({Step: 3})
                    }
                  }
                } ><TextFa style={{color:'#ffffff'}}>مرحله بعد</TextFa></Button>
                
            </View>
          </View>
        );
      }
      if(this.state.Step == 3)
      {
        return(
          <View style = {styles.stepThreeContainer}>
              <TextFa style={{alignSelf:'flex-end', fontSize:18}}>اضافه کردن اعضا</TextFa>
              <View styles={{display:'flex', flexDirection:'row',marginTop:'5%'}}>
                 
                <Item regular style={{padding:'1%' , borderRadius:10 ,backgroundColor:'#dddddd', borderWidth:0, marginTop:'3%', }}>
                  <Button style={{...styles.button, height : WindowSize.height*0.05, width : WindowSize.height*0.05}} onPress={async() => {
                    
                    TempEmails.push({key: this.state.EnteredEmail});
                    this.ExtractEmails();
                    this.setState({EnteredEmail: ''})
                  }} >
                    <TextFa style={{color:'#ffffff', fontSize:30}}>+</TextFa>
                  </Button>
                  <Input value={this.state.EnteredEmail} onChangeText={(text) => this.setState({EnteredEmail: text})} style={{fontSize:24}} placeholder='ایمیل دوستان خود را وارد کنید'/>
                  
                </Item>
                
              </View>
              <FlatList style={styles.flatList} 
                data={TempEmails}
                extraData={this.state}
                renderItem={this.renderItem}
                keyExtractor={this.extractKey}
              />
            <View style = {{flexDirection:'row', justifyContent:'space-around', alignSelf:'stretch',marginTop:'5%'}}>
              <Button style={{...styles.button, backgroundColor:'#aaaaaa'}} onPress=
                    {
                      () =>
                      {
                        this.setState({emails:[]});
                        this.setState({Step:2});
                      }
                    } ><TextFa>مرحله قبل</TextFa></Button>
                    <Button style={styles.button} onPress=
                  {
                    () =>
                    {
                      this.onSubmit();
                    }
                  } ><TextFa style={{color:'#ffffff'}}>ایجاد گروه</TextFa></Button>
            </View>
        </View>
        )
      }
    }






    render() {
        return (
            
            <Container>
                    <View style = {styles.container}>
                          
                     
                            {this.StepHolder()}
                            <View style={{flex:1, height:WindowSize.height * 0.3}}>
                                    <StepIndicator style={styles.stepIndicator}
                                        customStyles={StepIndicatorStyles}
                                        currentPosition={this.state.Step - 1}
                                        stepCount={3}
                                        direction={'vertical'}
                                    />
                                  </View>
                          </View>
                          <DatePickerModal visible={this.state.modalVisible} 
                            OnCancelClick = {this.CloseModal}
                            GetDate=
                            {
                              async (date) =>
                              {
                                await this.OnPickADate(date);
                                this.CloseModal()
                              }
                            }
                          />
            </Container>
        
        );
    
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
    flex:11,
    backgroundColor:'#ffffff',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: WindowSize.width * 0.8,
    marginTop: '10%',
    borderRadius:20,
    marginBottom: '49%',
    marginRight:'5%',
    paddingTop:'10%',
    padding: '5%',
  },
  stepTwoContainer:{
    flex:11,
    backgroundColor:'#ffffff',
    width: WindowSize.width * 0.8,
    height: WindowSize.height * 0.25,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '30%',
    borderRadius:20,
    marginRight:'5%',
    paddingTop:'10%',
    padding: '5%',
  },
  stepThreeContainer:{
    flex:11,
    backgroundColor:'#ffffff',
    width: WindowSize.width * 0.8,
    height: WindowSize.height * 0.55,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '50%',
    marginBottom:'-55%',
    borderRadius:20,
    marginRight:'5%',
    paddingTop:'5%',
    padding: '5%',
  },
  flatList:{
    backgroundColor:'#cccccc',
    marginTop:'2%',
    padding:'2%',
    borderRadius:10
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
    width:WindowSize.width * 0.3,
    borderRadius:10,
    height: WindowSize.height * 0.05,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignSelf:'stretch',
    marginTop:'5%'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
});

  export default GroupCreationScreen;