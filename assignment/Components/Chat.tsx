import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = () => {
  return <View style={styles.gridcontainer}></View>;
};

const styles = StyleSheet.create({
  gridcontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: "30%",
    height: 100,
    backgroundColor: "#ccc",
    margin: "2%",
  },
});

export default Chat;
