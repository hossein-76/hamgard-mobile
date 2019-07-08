import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, ScrollView,
FlatList, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { TextFa} from '../Components/TextFa';
import { EventCard } from '../Components/EventCard';
import { PollListItem} from '../Components/PollListItem';
import { connect } from "react-redux";
import HeaderStyles from '../Styles/Headers';

const tempData = [];


const extractKey = ({ key, text }) => key;

const WindowSize = {width: Dimensions.get('window').width, height: Dimensions.get('window').height}

class PollCreationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenEvents: []
    };
  }


    
    static navigationOptions = ({navigation}) => {
        return {
            headerRight:<View><TextFa style={HeaderStyles.TitleRight}>ایجاد نظرسنجی</TextFa></View>,
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
          <EventCard id = {List.item.id} title = {List.item.title} category = {List.item.category}/>
        </View>
      );
    };

    render() {
      return (
        <View style={{width: WindowSize.width, height: WindowSize.height}}>
          <View style = {styles.buttonContainer}>

          </View>
          <View style = {styles.container}>
              <FlatList numColumns = {2}
                  style={styles.flatList}
                  data={this.props.events}
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
    //alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '1%',
    backgroundColor: '#ffffff'
  },
    ChosenContainer:{

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
    flatList: {
      flex: 1,
      marginTop: "2%",
      padding: "2%",
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
  buttonContainer: {

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
      events:  state.Event.events,
    };
  };
  
  export default connect(MapStateToProps)(PollCreationScreen);