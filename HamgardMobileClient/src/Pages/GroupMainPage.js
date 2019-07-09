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

class GroupMainScreen extends React.Component {

    
    static navigationOptions = ({navigation}) => {
        return {
            headerRight:<View><TextFa style={HeaderStyles.TitleRight}>صفحه‌ی گروه</TextFa></View>,
            headerStyle: {
                backgroundColor: '#BC1D39',
            },
            headerTintColor: '#fff',
            headerTitleStyle:  {
                fontWeight: 'bold',
            },
        }
    }


    membersRenderItem = (List) => {
      return (
        <View style = {{margin : 5}}>
          <GroupMember name = {List.item}/>  
        </View>
      );
    };

    pollsRenderItem = (List) => {
      return (
        <View style = {{margin : 5}}>
          <PollListItem name = {List.item.question} voteCount = {List.item.vote_count} id = {List.item.id} onPress = {() => {
            this.props.navigation.navigate('Poll')
          }}/>  
        </View>
      );
    };

    render() {
      return (
        
        <View style = {styles.container}>
            <View style = {styles.mainDetailsContainer}>
                <TextFa style = {styles.title}>{this.props.group.name}</TextFa>
            </View>
            <View style = {styles.pollListContainer}>
              <View style = {{flexDirection : 'row', justifyContent: 'flex-end'}}>
                <TextFa style = {{fontSize : 20}}>نظر سنجی ها</TextFa>
                <Button style = {styles.button}  onPress = {() => {
                  this.props.navigation.navigate('PollCreation');
                }}>
                  <TextFa style = {{fontSize : 18, color: '#ffffff'}}>+</TextFa>
                </Button>
              </View>
              <FlatList
                style={styles.pollFlatList}
                data={this.props.group.polls}
                extraData={this.state}
                renderItem={this.pollsRenderItem}
                keyExtractor={this.extractKey}
              />
            </View>
            <View style = {styles.memberListContainer}>
              <View style = {{flexDirection : 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <TextFa style = {{fontSize : 20}}>تعداد : {this.props.group.members.length}</TextFa>
                <View style = {{flexDirection : 'row', padding:'0.5%', justifyContent:'space-between'}}>
                  <TextFa style = {{fontSize : 20}}>اعضا</TextFa>
                  <Button style = {styles.button}>
                    <TextFa style = {{fontSize : 18, color: '#ffffff'}}>+</TextFa>
                  </Button>
                </View>
              </View>
              <FlatList horizontal = {true}
                  style={styles.membersFlatList}
                  data={this.props.group.members}
                  extraData={this.state}
                  renderItem={this.membersRenderItem}
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
      group:  state.Group.loadedGroup,
    };
  };
  
  export default connect(MapStateToProps)(GroupMainScreen);