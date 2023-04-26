import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Calender extends Component {
  render() {
    return (
      <View style={Style.container}>
        <Text>Calender</Text>
      </View>
    )
  }
}

const Style=StyleSheet.create({
  container:{}
})