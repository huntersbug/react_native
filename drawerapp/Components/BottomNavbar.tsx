import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Men from "./Men";
import Women from "./Women";
import Home from "./Home";
import Cart from "./Cart";

export default class BottomNavbar extends Component {
  Tab = createBottomTabNavigator();
  render() {
    return (

      <this.Tab.Navigator>
        <this.Tab.Screen name="men" component={Men} />
        <this.Tab.Screen name="home" component={Home} />
        <this.Tab.Screen name="women" component={Women} />

        <this.Tab.Screen name="cart" component={Cart} options={{ title: 'Cart' }} />
</this.Tab.Navigator>

    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
});
