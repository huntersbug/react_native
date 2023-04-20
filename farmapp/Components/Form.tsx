import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable
} from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckBox } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class Form extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isChecked: false };
  }
  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
  handleLinkclick = () => {
    this.props.navigation.navigate("Termcondition");
  };
  handeldisa = () => {
    console.log("Working ")
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.para}>
          Pleased Enter The Following details we will send you the Otp on your
          Mobile{" "}
        </Text>
        <Text style={styles.para}>First Name</Text>
        <TextInput style={styles.input} placeholder="Enter First Name " />
        <Text style={styles.para}>Surname</Text>
        <TextInput style={styles.input} placeholder="Enter Surname " />
        <Text style={styles.para}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+91 1234567890"
          keyboardType="phone-pad"
        />
        <TouchableWithoutFeedback onPress={this.handleCheck}>
          <View style={styles.checkboxContainer}>
            <View
              style={[
                styles.checkbox,
                this.state.isChecked && styles.checkboxback,
              ]}
            >
              {this.state.isChecked && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.label}>I agree to the </Text>
            <TouchableOpacity onPress={this.handleLinkclick}>
              <Text style={styles.link}>Terms and conditions</Text>
            </TouchableOpacity>
            <Text> of Company</Text>
          </View>
        </TouchableWithoutFeedback>
        <Pressable style={[styles.yourButtonStyle, !this.state.isChecked && { opacity: 0.5 }]} disabled={!this.state.isChecked} onPress={this.handeldisa} >
          <Text style={{ color: "white" ,opacity:1}}>Continue</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    marginTop: 40,


  },
  welcome: {
    fontSize: 25,
    fontWeight: "800",
  },
  checkboxback: {
    backgroundColor: "blue",
  },
  para: {
    color: "grey",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderColor: "grey",
    borderWidth: 2,
    width: "98%",
    borderRadius: 10,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  yourButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    height: 40,
    backgroundColor: "orange",
    marginTop: 30
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    fontSize: 16,
    color: "white",
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
  link: {
    color: "teal",
    textDecorationLine: "underline",
  },
});
