import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
interface S {
  text: string;
}
export default class Lang extends Component<any, S> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }
  language = ["English", "Gujrathi", "Hindi"];
  handelselect = (item: any) => {
    this.setState({ text: item });
  };
  handelnavigate = () => {
    this.props.navigation.navigate("form");
  };
  renderGridItem = ({ item }: any) => {
    return (
      <View
        style={[
          styles.item,
          this.state.text === item ? styles.selected : undefined,
        ]}
      >
        <TouchableOpacity onPress={() => this.handelselect(item)}>
          <View
            style={[this.state.text === item ? styles.circleselected : null]}
          ></View>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.languagetext}>Choose Language</Text>
          <FlatList
            data={this.language}
            renderItem={this.renderGridItem}
            numColumns={2}
            horizontal={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Pressable onPress={this.handelnavigate} style={styles.yourButtonStyle}>
          <Text style={{ color: "white" }}>Submit</Text>
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  
    borderStyle: "solid",
  },

  innerContainer: {
    width: "90%",
    height: "70%",
  },
  yourButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    height: 40,
    backgroundColor: "orange",
  },
  item: {
    flex: 0.5,
    aspectRatio: 1,
    backgroundColor: "white",
    elevation: 5,
    margin: 5,
    marginTop: 30,
    borderRadius: 15,
  },
  selected: {
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text: {
    color: "black",
    fontSize: 16,
    padding: 30,
    fontStyle: "italic",
  },
  languagetext: {
    textAlign: "center",
  },

  circleselected: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "red",
    width: 20,
    height: 20,
    margin: 10,
    borderRadius: 50,
  },
});
