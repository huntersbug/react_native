import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Women from "./Women";
import Men from "./Men";
import Cart from "./Cart";
import Home from "./Home";
import CountryInfo from "./CountryInfo";
import Country from "./Country";
import Temp from "./Temp";


export default function Stack() {
    const Stack = createStackNavigator();
    let obj = [
        { name: "Country", component: Country },
        { name: "Women", component: Women },
        { name: "Men", component: Men },
        { name: "Home", component: Home },
        { name: "Cart", component: Cart },
        { name: "Countryinfo", component: CountryInfo },
        { name: "Temp", component: Temp },
    ];
    return (
<>
        <Stack.Navigator>
            {obj.map((ele,index) => (
                <React.Fragment key={ele.name}>
                    <Stack.Screen name={ele.name} component={ele.component} />
                </React.Fragment>
            ))}
        </Stack.Navigator>
    
        </>
    );
}
