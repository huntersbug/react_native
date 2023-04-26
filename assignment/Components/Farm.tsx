import {
  Text,
  View,
  StyleSheet,
  Image,
  ProgressBarAndroid,
  ActivityIndicator,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { Component } from "react";
import HalfpieChart from "./HalfpieChart";

export default class Farm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.semicontainer}>
          <Text style={{ textAlign: "center" }}>Total Expenses</Text>

          <HalfpieChart />
        </View>

        <View style={styles.middel}>
          <ScrollView
            horizontal
            style={{ width: "100%" }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cart}>
              <Text style={{ marginLeft: 2, color: "grey" }}>
                Post Management
              </Text>
              <View>
                <View style={styles.second}>
                  <View>
                    <Text>24</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      Kg/per Acre
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={{ width: 70, height: 50 }}
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO01wT1FFpEyTTbjkv27h-2ikj_Y-1HDcBxMklcjqh&s",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.cart}>
              <Text style={{ marginLeft: 2, color: "grey" }}>Management</Text>
              <View>
                <View style={styles.second}>
                  <View>
                    <Text>15</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      Kg/per Acre
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={{ width: 70, height: 50 }}
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO01wT1FFpEyTTbjkv27h-2ikj_Y-1HDcBxMklcjqh&s",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.cart}>
              <Text style={{ marginLeft: 2, color: "grey" }}>
                Pest Management
              </Text>
              <View>
                <View style={styles.second}>
                  <View>
                    <Text>24</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      Times spray
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={{ width: 70, height: 50 }}
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO01wT1FFpEyTTbjkv27h-2ikj_Y-1HDcBxMklcjqh&s",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.progress}>
          <View style={styles.progresstext}>
            <Text style={{ fontWeight: "700", fontSize: 17 }}>
              Crop Progress
            </Text>
            <Text style={{ color: "skyblue", fontSize: 15 }}>
              15 Days after Showing
            </Text>
          </View>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.3}
            style={{ transform: [{ scaleX: 1 }, { scaleY: 4 }] }}
          />
        </View>
        <View style={styles.button}>
          <Text>18 Total Activities</Text>
         
       
          <Button title="veiw all" color={"orange"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  semicontainer: {
    height: 200,

    alignItems: "center",

    width: "85%",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
  },
  piechart: {
    borderWidth: 1,

    width: "100%",
    height: 100,
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
  },
  middel: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  cart: {
    marginTop: 30,
    width: "30%",
    height: 100,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 5,
  },
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  progress: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,

    height: 80,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    shadowColor: "#000",

    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  progresstext: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 3,
  },
  button:{
flexDirection:"row",
justifyContent:"space-between",
marginLeft:10,
marginRight:10,
marginTop:20
  },

  button1: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
