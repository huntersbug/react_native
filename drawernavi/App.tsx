import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavbar from "./Components/DrawerNavbar";
import MaterialTab from "./Components/MaterialTab";
import React from "react";

import Stack from "./Components/Stack";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <React.Fragment>
      <NavigationContainer>
        {/* <MaterialTab/>  */}
        {/* <DrawerNavbar /> */}

        <Stack />
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
