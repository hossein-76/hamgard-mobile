import React from "react";
import {
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  View,
  Text,
  Image,
  DrawerLayoutAndroid,
  FlatList,
  ScrollView
} from "react-native";
import { Container, Header, Content, Button, Drawer } from "native-base";
import JWTController from "../Controllers/AuthenticationController";
import ButtonStyles from "../Styles/Buttons";
import HeaderStyles from "../Styles/Headers";
import { TextFa } from "../Components/TextFa";
import {GetGroups} from "../Actions"
import { HeaderTitle } from "../Components/HeaderTitle";
import styles from "../Styles/Headers";
import { GroupListItem } from "../Components/GroupListItem";
import { connect } from "react-redux";

var STORAGE_KEY = 'id_token';

const extractKey = ({ key, text }) => key;

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      PassWord: "",
      UserNameInputValid: false,
      PassWordInputValid: false
    };
  }

  componentDidMount() 
  {
    this.props.GetGroups()
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View flexDirection={"row"}>
          <TextFa style={HeaderStyles.TitleRight}>صفحه اصلی</TextFa>
          <Button
            block
            style={{ backgroundColor: "#BC1D39", width: 50 }}
            onPress={() => {
              // this.openDrawer();
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/images/Drawer(2).png")}
            />
          </Button>
        </View>
      ),

      headerStyle: {
        backgroundColor: "#BC1D39"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  //not completed
  async logOut() {
    let success = false;
    var url = "http://192.168.43.209:8000/user/api/v1/customer_logout/";
    let userToken = await AsyncStorage.getItem(STORAGE_KEY);
    
  await fetch(url, {
      method: "POST",
      headers: {
        authorization: userToken
      }
    })
      .then(res => {res.json();
                 console.log("Success:", JSON.stringify(res.status));
                 if(JSON.stringify(res.status) == 200)
                 {
                    success = true;
                 }
              })
      .catch(error => console.log("Error:", error));
    if (success) {
      JWTController.DeleteToken()
      this.props.navigation.navigate("Authentication");
    }
  }

  openDrawer() {
    this.refs["DRAWER"].openDrawer();
  }

  renderItem = List => {
    return (
      <GroupListItem
        name={List.item.name}
        creator={List.item.admin_username}
        onPress={() => {this.props.navigation.navigate('Group')}}
      />
    );
  };

  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Button
          block
          style={Styles.drawerButton}
          onPress={() => {
            this.logOut();
          }}
          underlayColor="#99d9f4"
        >
          <TextFa style={ButtonStyles.drawerButtonText}>خروج</TextFa>
        </Button>
      </View>
    );
    return (
      <View>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "flex-end",
            flexDirection: "column"
          }}
        >
          <DrawerLayoutAndroid
            ref={"DRAWER"}
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            renderNavigationView={() => navigationView}
          >
            <View
              style={{
                flex:1,
                height: "100%",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "stretch"
              }}
            >
              <View style = {{flex: 9}}>
                <ScrollView style={{
                  flex:9,
                  width: "100%",
                  padding: "1%",
                }}>
                  <FlatList
                    style={styles.flatList}
                    data={this.props.groups}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    keyExtractor={this.extractKey}
                  />
                </ScrollView>
              </View>
              <View
                style={{
                  flex:1,
                  width: "100%",
                  justifyContent: "flex-end",
                  flexDirection: "column"
                }}
              >
                <Button
                  block
                  rounded
                  style={Styles.button}
                  onPress={() => {
                    this.props.navigation.navigate("GroupCreation");
                  }}
                  underlayColor="#99d9f4"
                >
                  <TextFa style={ButtonStyles.buttonText}>ایجاد گروه</TextFa>
                </Button>
              </View>
            </View>
          </DrawerLayoutAndroid>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  button: {
    backgroundColor: "#BC1D39",
    borderColor: "#48BBEC",
    height: 60,
    marginRight: "10%",
    marginLeft: "10%",
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  flatList: {
    flex: 1,
    backgroundColor: "#cccccc",
    height: '100%',
    marginTop: "2%",
    padding: "2%",
    borderRadius: 10
  },
  drawerButton: {
    backgroundColor: "#ffffff",
    borderColor: "#48BBEC",
    height: 60,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  drawerButtonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    alignSelf: "center"
  }
});

const MapStateToProps = (state, ownProps) => {
  return {
    groups: state.Group.groups
  };
};

export default connect(MapStateToProps, {GetGroups})(MainScreen);
