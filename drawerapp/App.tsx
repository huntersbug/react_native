import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavbar from "./Components/BottomNavbar";
export default function App() {
  let tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Button title="cart" color={"#841584"} />
      <NavigationContainer>
        <BottomNavbar />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 50,
  },
  button: { width: "50%" },
});
