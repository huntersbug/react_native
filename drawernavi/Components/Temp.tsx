import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'

export default class Temp extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = { temp: "", image: "", condition: "", precip: "" }
    }
    componentDidMount(): void {
        this.gettempt()
    }
    gettempt = () => {
        let key = "8bb0585f21db205bdc920a3699818c00"
        fetch(
            `http://api.weatherstack.com/current?access_key=${key}&query=${this.props.route.params.text}`
        )

            .then((res) => {
                return res.json();
            })
            .then((res) => {
           
                if (res.success === false) return
                this.setState({
                    temp: res.current.temperature,
                    image: res.current.weather_icons[0],
                    condition: res.current.weather_descriptions[0],
                    precip: res.current.precip,
                });

            })
            .catch((err) => console.log(err));

    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.temp===""?<Text>Loading</Text>:
                <>
                <Image style={{ width: 150, height: 100 }} source={{ uri: this.state.image }} />

                <Text>Temperature:{this.state.temp} </Text>
                <Text>Wheather Description:{this.state.condition}</Text>
                <Text>Precip:{this.state.precip}</Text>
                </>
        }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})