import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Termcondition extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Termcondition</Text>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
