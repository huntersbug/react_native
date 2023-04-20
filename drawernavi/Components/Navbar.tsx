import { View, Text,StyleSheet,Platform } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text>Men</Text>
      <Text>Women</Text>
      <Text>Cart</Text>
      <Text>Home</Text>
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flexDirection:"row",
        height:50,
        borderColor:"red",
        borderStyle:"solid",
        borderWidth:1,
        marginTop:Platform.OS==="android"?25:0,
        alignItems:"center",
        justifyContent:"space-evenly"


    }
})