import { Text, View } from "react-native";
import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Components/Home";
import Women from "../Components/Women";
import Men from "../Components/Men";
import Cart from "../Components/Cart";



let Routeobj = [
  { name: "Home", component: Home},
  { name: "Women", component: Women },
  { name: "Men", component: Men },
  { name: "Cart", component: Cart },


];
export default class Drawer extends Component {
  Drawer = createDrawerNavigator();
  render() {
    return (
      <this.Drawer.Navigator>
        {Routeobj.length > 0 &&
          Routeobj.map((ele) => (
            <React.Fragment key={ele.name}>
              <this.Drawer.Screen name={ele.name} component={ele.component}/>
            </React.Fragment>
          ))}
      </this.Drawer.Navigator>
    );
  }
}
