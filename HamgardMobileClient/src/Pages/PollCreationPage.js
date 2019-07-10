import React from "react";
import {
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  FlatList,
  View,
  Text,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Textarea,
  Form,
  Item,
  Input
} from "native-base";
import { TextFa } from "../Components/TextFa";
import { EventCard } from "../Components/EventCard";
import { PollListItem } from "../Components/PollListItem";
import { connect } from "react-redux";
import { CreatePoll, SelectEvent } from "../Actions";
import HeaderStyles from "../Styles/Headers";

const tempData = [];

const extractKey = ({ key, text }) => key;

const WindowSize = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

class PollCreationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollTitle: "",
      timePlan: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View>
          <TextFa style={HeaderStyles.TitleRight}>ایجاد نظرسنجی</TextFa>
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

  renderItem = List => {
    return (
      <View style={{ margin: 5, alignItems: "flex-start" }}>
        <EventCard
          onPoll={false}
          id={List.item.id}
          title={List.item.title}
          category={List.item.category}
          type={List.item.type}
        />
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
          <View style={{ flexDirection: "column", width: "80%" }}>
            <Item
              regular
              style={{
                padding: "1%",
                marginTop: "1%",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: "#dddddd",
                width: "100%"
              }}
            >
              <Input
                onChangeText={text => this.setState({ pollTitle: text })}
                style={{ fontSize: 24 }}
                placeholder="عنوان نظرسنجی"
              />
            </Item>
            <Item
              regular
              style={{
                padding: "1%",
                marginTop: "1%",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: "#dddddd",
                width: "100%",
                borderWidth: 5
              }}
            >
              <Input
                onChangeText={text => this.setState({ timePlan: text })}
                style={{ fontSize: 24 }}
                placeholder="تاریخ و ساعت"
              />
            </Item>
          </View>
          <Button
            style={styles.button}
            onPress={() => {
              this.props.CreatePoll(
                {question: this.state.pollTitle,
                time_plan: this.state.timePlan,
                events: this.props.SelectedEvents,
                places: this.props.SelectedPlaces,
                group_id: this.props.group.id}
              );
              this.props.navigation.goBack();
            }}
          >
            <TextFa style={{ color: "#ffffff", fontSize: 20 }}>تایید</TextFa>
          </Button>
        </View>
        <View style={styles.container}>
          <FlatList
            numColumns={2}
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
    flex: 1,
    //alignItems: 'stretch',
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "1%",
    backgroundColor: "#ffffff"
  },
  topContainer: {
    margin: "2%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center"
  },
  mainDetailsContainer: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "5%",
    backgroundColor: "#ffffff"
  },
  pollListContainer: {
    flex: 3,
    alignItems: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "5%",
    backgroundColor: "#ffffff"
  },
  flatList: {
    flex: 1,
    marginTop: "2%",
    padding: "2%",
    borderRadius: 10
  },
  memberListContainer: {
    flex: 2,
    alignItems: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "5%",
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 40
  },
  buttonContainer: {},
  button: {
    backgroundColor: "#BC1D39",
    borderColor: "#48BBEC",
    height: "50%",
    width: "15%",
    marginBottom: 10,
    borderRadius: 5,
    margin: "2%",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    color: "white",
    alignSelf: "center"
  }
});

const MapStateToProps = (state, ownProps) => {
  return {
    events: state.Event.events,
    SelectedEvents: state.Event.selectedEvents,
    SelectedPlaces: state.Event.selectedPlaces,
    group: state.Group.loadedGroup
  };
};

export default connect(
  MapStateToProps,
  { CreatePoll }
)(PollCreationScreen);
