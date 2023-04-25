import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import Farm from './Farm';
import Calender from './Calender';
import { FontAwesome } from '@expo/vector-icons';
import Chat from './Chat';
import Plus from './Plus';
export default class Tab extends Component {
    Tab = createBottomTabNavigator();
    render() {
        return (
            <NavigationContainer>
                <this.Tab.Navigator>
                    <this.Tab.Screen name="Home" component={Home} options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="home" size={size} color={color} />
                        ),
                    }} />
                        <this.Tab.Screen name="Calender" component={Calender} options={{
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome name="calendar" size={size} color={color} />
                            ),
                        }} />
                         <this.Tab.Screen name="plus" component={Plus} options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="plus" size={size} color={color} />
                            
                        ),
                        tabBarLabel: ''
                    }} />
                    <this.Tab.Screen name="Farm" component={Farm} options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="book" size={size} color={color} />
                        ),
                    }} />
                    <this.Tab.Screen name="Chat" component={Chat} options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="comment" size={size} color={color} />
                        ),
                    }} />
                </this.Tab.Navigator>
            </NavigationContainer>
        )
    }
}





