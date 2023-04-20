import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Men from './Men';
import Women from './Women';


export default class DrawerNavbar extends Component {
  Drawer = createDrawerNavigator();
  render() {
    return (
        <this.Drawer.Navigator>
            <this.Drawer.Screen name="Home" component={Home} />
            <this.Drawer.Screen name="Men" component={Men} />
        <this.Drawer.Screen name="Women" component={Women} />
      </this.Drawer.Navigator>
    )
  }
}