import { Text, View } from "react-native";
import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Women from "./Women";
import Men from "./Men";
import Home from "./Home";
import Cart from "./Cart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default class MaterialTab extends Component {
  Tab = createMaterialBottomTabNavigator();
  Routeobj = [
    { name: "Home", component: Home, symbol: "home" },
    { name: "Women", component: Women, symbol: "gender-female" },
    { name: "Men", component: Men, symbol: "gender-male" },
    { name: "Cart", component: Cart, symbol: "cart" },
  ];
  render() {
    return (
      <this.Tab.Navigator>
        {this.Routeobj.length > 0 &&
          this.Routeobj.map((ele) => (
            <React.Fragment key={ele.name}>
              <this.Tab.Screen
                name={ele.name}
                component={ele.component}
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name={ele.symbol}
                      color={color}
                      size={25}
                    />
                  ),
                }}
              />
            </React.Fragment>
          ))}
      </this.Tab.Navigator>
    );
  }
}
