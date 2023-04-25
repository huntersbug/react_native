import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContextProvider from "./Context/ContextProvider";
import Home from "./Components/Home";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./Context/Drawer";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ContextProvider>
          <Drawer />
        </ContextProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
