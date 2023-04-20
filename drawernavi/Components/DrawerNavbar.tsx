import { Text, View } from "react-native";
import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Cart from "./Cart";
import Stack from "./Stack";

let Routeobj = [
  { name: "Home", component: Home },
  { name: "Women", component: Women },
  { name: "Men", component: Men },
  { name: "Cart", component: Cart },
  { name: "stack", component: Stack },
];
export default class DrawerNavbar extends Component {
  Drawer = createDrawerNavigator();
  render() {
    return (
      <this.Drawer.Navigator>
        {Routeobj.length > 0 &&
          Routeobj.map((ele) => (
            <>
              <this.Drawer.Screen name={ele.name} component={ele.component}/>
            </>
          ))}
      </this.Drawer.Navigator>
    );
  }
}
