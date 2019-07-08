import React from 'react';
import {Dimensions, TextInput, StyleSheet,TouchableHighlight, ScrollView,
FlatList, View, Text, Image } from 'react-native';
import { Container, Header, Content, Button  } from 'native-base';
import { TextFa} from '../Components/TextFa';
import { GroupMember} from '../Components/GroupMember';
import { PollListItem} from '../Components/PollListItem';
import { connect } from "react-redux";
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

    CreatorCheck()
    {

    }

    CreateGroupMemberList()
    {

    }

    membersRenderItem = (List) => {
      return (
        <View style = {{margin : 5}}>
          <GroupMember name = {List.item.name}/>  
        </View>
      );
    };

    pollsRenderItem = (List) => {
      return (
        <View style = {{margin : 5}}>
          <PollListItem name = {List.item.name}/>  
        </View>
      );
    };

    render() {
      return (
        
        <View style = {styles.container}>
           
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
      group:  state.Group.loadedGroup,
    };
  };
  
  export default connect(MapStateToProps)(PollScreen);