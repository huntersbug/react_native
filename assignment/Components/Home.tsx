import { Text, View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.headingcontainer}>
          <Text style={Style.heading}>Hi Gulam</Text>
          <Text style={Style.headingsecond}>6 Tasks are Pending</Text>
        </View>
        <View style={Style.cart}>
          <Text
            style={{
              color: "#EBEBFA",
              marginLeft: 8,
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Mobile App Design
          </Text>
          <Text style={{ color: "#888FE5", marginLeft: 8 }}>
            Mike and Anita
          </Text>
          <View style={Style.profilecart}>
            <Image
              style={{ width: 40, height: 40 }}
              borderRadius={20}
              source={{
                uri: "https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg",
              }}
            />
            <Text style={{ color: "#888FE5" }}>New</Text>
          </View>
        </View>
        <View style={Style.review}>
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 20 }}>
            Monthly Review
          </Text>
          <View style={Style.calender}>
            <Image
              style={{ width: 40, height: 40 }}
              borderRadius={20}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/open-line-1-0/200/online-appointment-512.png",
              }}
            />
          </View>
        </View>
        {/* grid start */}

        <View style={Style.gridcontainer}>
          <View style={[Style.item, { height: 100 }]}>
            <Text style={{color:"#FDFBFF",fontSize:25,fontWeight:"bold"}}>22</Text>
            <Text style={{color:"#838DE2",fontSize:12,}}>Done</Text>
          </View>
          <View style={Style.item}>
          <Text style={{color:"#FDFBFF",fontSize:25,fontWeight:"bold"}}>22</Text>
            <Text style={{color:"#838DE2",fontSize:12,}}>Outgoing</Text>

          </View>
          <View style={Style.item}>
          <Text style={{color:"#FDFBFF",fontSize:25,fontWeight:"bold"}}>22</Text>
            <Text style={{color:"#838DE2",fontSize:12,}}>InProgress</Text>
          </View>
          <View style={[Style.item, { height: 100 }]}>
          <Text style={{color:"#FDFBFF",fontSize:25,fontWeight:"bold"}}>22</Text>
            <Text style={{color:"#838DE2",fontSize:12,}}>Waiting</Text>

          </View>
        </View>
        {/* grid end */}
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#4531B2",
  },
  heading: {
    color: "#FFFEFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  headingsecond: { color: "#A6AEEC" },
  headingcontainer: {
    marginTop: 50,
    marginLeft: 12,
  },
  cart: {
    width: "96%",

    marginLeft: "auto",
    marginRight: "auto",
    height: 120,
    borderRadius: 15,
    marginVertical: 20,
    backgroundColor: "#5350D6",
  },
  profilecart: {
    padding: 12,
    height: 50,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  review: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  calender: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#50D0EE",
    alignItems: "center",
  },
  //
  gridcontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    alignItems: "center",
  },
  item: {
    width: "44%",
    height: 80,
    backgroundColor: "#5350D6",
    margin: "2%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
