import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput,
  Button,
} from "react-native";
import React, { Component } from "react";
interface S {
  text: string;
}
export default class Country extends Component<any, S> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }
  handleSubmit = () => {
    this.props.navigation.navigate("Countryinfo", { text: this.state.text });
  };
  textchange = (e: any) => {
    this.setState({ text: e });
  };
  render() {
    return (
      <View style={Styles.container}>
        <Text>Country App</Text>
        <TextInput
          style={Styles.input}
          placeholder="Enter country "
          onChangeText={this.textchange}
        />
        <Button title="Submit" onPress={this.handleSubmit} color="green" />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : "",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 250,
    borderRadius: 1,
    paddingLeft: 20,
    marginBottom: 20,
  },
});
