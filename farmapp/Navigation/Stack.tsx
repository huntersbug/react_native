import { Text, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Lang from "../Components/Lang";
import Form from "../Components/Form";
import Home from "../Components/Home";
import Termcondition from "../Components/Termcondition";
let obj = [
  { name: "home", component: Home, Headers: false },
  { name: "lang", component: Lang, Headers: false },
  { name: "form", component: Form, Headers: false },
  { name: "Termcondition", component: Termcondition, Headers: true },

];
// Termcondition
export default class Stack extends Component {
  Stack = createStackNavigator();
  render() {
    return (

      <this.Stack.Navigator>
        {obj.map((ele, index) => (
          <React.Fragment key={ele.name}>
            <this.Stack.Screen name={ele.name} component={ele.component} options={{ headerShown: ele.Headers }} />
          </React.Fragment>
        ))}
      </this.Stack.Navigator>

    );
  }
}
