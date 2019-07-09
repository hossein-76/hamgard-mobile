import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, ScrollView,
FlatList, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { TextFa} from '../Components/TextFa';
import { GroupMember} from '../Components/GroupMember';
import { PollListItem} from '../Components/PollListItem';
import { connect } from "react-redux";
import { EventCard} from '../Components/EventCard'
import HeaderStyles from '../Styles/Headers';

const tempData = [];


const extractKey = ({ key, text }) => key;

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class PollScreen extends React.Component {

    
    static navigationOptions = ({navigation}) => {
        return {
            headerRight:<View><TextFa style={HeaderStyles.TitleRight}>صفحه‌ی نظرسنجی</TextFa></View>,
            headerStyle: {
                backgroundColor: '#BC1D39',
            },
            headerTintColor: '#fff',
            headerTitleStyle:  {
                fontWeight: 'bold',
            },
        }
    }

  

    renderItem = (List) => {
      return (
        <View style = {{margin : 5, alignItems:'flex-start'}}>
          <EventCard onPoll = {true} id = {List.item.id} title = {List.item.title} category = {List.item.category}/>
        </View>
      );
    };

    render() {
      return (
        <View
        style={{
          width: WindowSize.width,
          height: WindowSize.height,
          alignItems: "stretch"
        }}
      >
        <View style={styles.topContainer}>
          <View style = {{flexDirection:'column',width : '80%'}}>
           
          </View>
          <Button style={styles.button} onPress = {() => {
                  
                }}>  
            <TextFa style={{ color: "#ffffff", fontSize: 20 }}>
              تایید
            </TextFa>
          </Button>
        </View>
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            style={styles.flatList}
            data={this.props.poll.events}
            extraData={this.state}
            renderItem={this.renderItem}
            keyExtractor={this.extractKey}
          />
        </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '1%',
    backgroundColor: '#ffffff'
  },
    mainDetailsContainer: {
        flex:1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '5%',
        backgroundColor: '#ffffff',
  },
     pollListContainer: {
        flex:3,
        alignItems: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '5%',
        backgroundColor: '#ffffff',
  },
    pollFlatList: {
      flex: 1,
      backgroundColor: "#cccccc",
      marginTop: "2%",
      padding: "2%",
      borderRadius: 10
  },
      membersFlatList: {
        flex: 1,
        backgroundColor: "#cccccc",
        marginTop: "2%",
        //padding: "2%",
        borderRadius: 10
    },
      memberListContainer: {
        flex:2,
        alignItems: 'flex-start',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '5%',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 40,
  },
  button: {
    backgroundColor: '#BC1D39',
    borderColor: '#48BBEC',
    height: WindowSize.width * 0.05,
    width: WindowSize.width * 0.05,
    marginBottom: 10,
    borderRadius:5,
    margin: '1%',
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

const MapStateToProps = (state, ownProps) => {
    return {
      poll:  state.Poll.loadedPoll,
    };
  };
  
  export default connect(MapStateToProps)(PollScreen);