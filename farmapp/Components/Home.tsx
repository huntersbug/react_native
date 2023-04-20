import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Home extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      showImage: true,
    };
  }
  timer: any = null
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showImage: false });
      this.props.navigation.navigate('lang')
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {

    return (
      <SafeAreaView style={styles.container}>
        {this.state.showImage && (
          <Image
            source={require('../assets/farmimage.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop:10
  },
  image: {
    width: '100%',
    height: '100%',

  },
});
