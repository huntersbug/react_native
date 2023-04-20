import { Text, View ,Button,FlatList,StyleSheet,Image} from "react-native";
import React, { Component } from "react";
interface S{
  data:[]
}
export default class CountryInfo extends Component<any,S> {
  constructor(props: any) {
    super(props);
    this.state=({data:[]})
  }
  getcountry = () => {
  
    return fetch(
      `https://restcountries.com/v3.1/name/${this.props.route.params.text}`
    )
      .then((res) => res.json())
      .then((res) => {
     
        this.setState({data:res})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount(): void {
    this.getcountry();
  }
  handeltempt=(e:any)=>{

this.props.navigation.navigate("Temp",{text:e})
  }
  renderItem = ({ item }: any) => (
    <View style={styles.cartitem}>
      <Image style={{ width: 150, height: 100 }} source={{ uri: item.flags.png }} />
      <Text style={{ width: 250 }}>Country:{item.name.common}</Text>
      <Text style={styles.price}>Capital:{item.capital[0]}</Text>
      <Button title="Get Tempt" onPress={()=>this.handeltempt(item.capital[0])} />
    </View>
  );
  render() {
    return (
      <View>
        <Text>CountryInfo:</Text>
        <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            numColumns={1}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cartitem: {
    alignItems: "center",
    width: 300,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 20,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
