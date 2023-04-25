import { Text, View,StyleSheet ,FlatList,Image,Button} from 'react-native'
import React, { Component } from 'react'
import Appcontext from '../Context/Appcontext';

export default class Home extends Component {
    static contextType = Appcontext;
    renderItem = ({ item }: any) => (
    
      <View style={styles.cartitem}>
        <Image style={{ width: 150, height: 200 }} source={{ uri: item.image }} />
        <Text style={{ width: 250 }}>{item.title}</Text>
        <Text style={styles.price}>Rs:{item.price}</Text>
        <View style={styles.buttoncart}>
        <Button title="Buy now" color={"orange"}/>
        <Button title="Add to Cart" />

      </View>
      </View>
    )
  render() {
    const [data, cartfunction]:any = this.context;
  // console.log(data)
    return (
      <View style={styles.itemcontainer}>
  
      {data.data.length > 0 ? (
        <FlatList
          data={data.data}
          renderItem={this.renderItem}
          numColumns={1}
        
        />
      ) : (
        <Text>Loading</Text>
      )}
    </View>
    )
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
  buttoncart: {
    width: "100%",
padding:20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
