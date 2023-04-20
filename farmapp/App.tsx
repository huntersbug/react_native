import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Stack from "./Navigation/Stack";
import Home from "./Components/Home";

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
 
    </NavigationContainer>
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
