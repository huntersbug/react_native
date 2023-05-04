import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Navbar() {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: "black" }}>
            <Text
              style={{
                color: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Flipkart
            </Text>
          </View>
        </TouchableOpacity>
        <Pressable style={{ width: "45%" }}>
          <Text>Flipkart</Text>
        </Pressable>
      </View>
    </View>
  );
}
