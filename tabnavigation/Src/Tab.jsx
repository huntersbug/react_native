import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Homescreen from "./Homescreen";
import SettingsScreen from "./SettingsScreen";
import Chat from "./Chat";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 40,

          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons name="home" size={20} color="green" />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 15 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons name="settings" size={20} color="green" />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 15 }}
              >
                Setting
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Entypo name="chat" size={20} color="green" />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 15 }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <AntDesign name="profile" size={20} color="green" />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 15 }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
  },
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 5,
});
