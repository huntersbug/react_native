import { Text, View, StyleSheet, FlatList, Image, Button } from "react-native";
import React, { Component } from "react";

export default class Men extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount(): void {
    this.getdata();
  }
  getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        let data = res.filter((e: any) => {
          if (e.category === "men's clothing") {
            return e;
          }
        });
       this.setState({ data: data });
      })
      .catch((e) => console.log(e));
  };
  renderItem = ({ item }: any) => (
    <View style={styles.cartitem}>
      <Image style={{ width: 150, height: 200 }} source={{ uri: item.image }} />
      <Text style={{ width: 250 }}>{item.title}</Text>
      <Text style={styles.price}>Rs:{item.price}</Text>
      <Button title="Buy now" />
    </View>
  );
  render() {
    return (
      <View style={styles.itemcontainer}>
 
        {this.state.data.length > 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            numColumns={1}
          />
        ) : (
          <Text>Loading...</Text>
        )}
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
