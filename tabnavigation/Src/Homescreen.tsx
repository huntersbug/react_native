import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
  Alert,
  Image,
} from "react-native";

import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Homescreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  let arr = [
    { title: "Send Money", price: "$ 80" },
    { title: "Pay items", price: "$ 780" },
    { title: "Top Up", price: "$ 180" },
    { title: "Request Money", price: "$ 280" },
  ];
  const handelPress = (title: string) => {
    setModalVisible(true);
  };
  const handelclose = () => {
    setModalVisible(false);
  };
  const renderItem = ({ item }: { item: { title: string; price: string } }) => {
    return (
      <View style={styles.cart}>
        <TouchableWithoutFeedback
          onPress={() => handelPress(item.title)}
          style={{ backgroundColor: "transparent", borderRadius: 0 }}
        >
          <View>
            <View style={styles.symbol}>
              <AntDesign name="creditcard" size={24} color="black" />
            </View>
            <Text style={{ color: "#9B9B9B" }}>{item.title}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 5 }}>
              {item.price}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.walletcontainer}>
          <Text style={{ color: "#BCCAC9", fontSize: 16 }}>Your Wallet</Text>
          <View style={styles.flexbox}>
            <Text style={{ color: "#BCCAC9", fontSize: 20 }}>$ 1,750</Text>
            <View style={styles.btn}>
              <Text style={{ color: "#BCCAC9", fontSize: 12 }}>15%</Text>
            </View>
          </View>
        </View>

        {/* the wallet container ends here */}

        <View style={styles.finacial}>
          <View style={styles.good}>
            <View style={styles.circle}>
              <View style={styles.circle1}>
                <Text style={{ color: "#BCCAC9", fontSize: 20 }}>80</Text>
              </View>
            </View>
            <View style={styles.circletext}>
              <Text style={{ color: "#646464", fontWeight: "bold" }}>
                Good Financial
              </Text>
              <Text style={{ color: "#A8A8A8", fontSize: 13 }}>
                Your financial condition is good
              </Text>
            </View>
          </View>
          {/*  */}

          <View
            style={{
              borderBottomWidth: 0.4,
              borderBottomColor: "grey",
              width: "95%",
              marginHorizontal: "2.5%",
              marginTop: 30,
            }}
          />

          <View style={styles.statics}>
            <Text style={styles.textstatics}>Veiw Statics {">"}</Text>
          </View>
          {/*  */}
        </View>

        {/* new start from here */}
      </View>
      {/* modal start here*/}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={handelclose}>
            <View style={styles.modalView}>
              <View style={styles.circletick}>
                <AntDesign name="book" size={24} color="orange" />
                <View style={styles.circular}>
                  <AntDesign name="check" size={18} color="white" />
                </View>
              </View>
              <View style={styles.lella}>
                <Text style={{ color: "#A8A8A8" }}>Sent Sucessfully to </Text>
                <Text style={{ color: "#1F1F1F", fontWeight: "bold" }}>
                  Lella Crawford
                </Text>
              </View>
              <Text
                style={{ color: "#3A6766", fontWeight: "bold", fontSize: 24 }}
              >
                $100.0
              </Text>
              <View style={styles.profilediv}>
                <View style={styles.jhon}>

                  <Image
                    resizeMode='contain'
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{
                      uri: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
                    }}
                  />
                  <View>
                    <Text>Jhon Crawfood</Text>
                    <Text style={{ color: "#E5E5E5" }}>jhon@gmail.com</Text>
                  </View>
                </View>

              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: "#B1B1B1", }}>Transaction Done on
                  <Text style={{ color: "black", }}>  12 Jan 2018</Text>

                </Text>
                <Text style={{ color: "#B1B1B1" }} >Your Reference No is 0224826</Text>

              </View>
              <TouchableWithoutFeedback >

                <View style={{ marginTop: 50, width: 250, padding: 10, justifyContent: "center", alignItems: "center", borderRadius: 20, backgroundColor: "#E67F58" }}>
                  <Text style={{ color: "white" }}>Continue</Text>


                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
      {/* modal end here */}
      <View style={styles.details}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Detail Informations
        </Text>
      </View>

      <View style={styles.grid}>
        <FlatList renderItem={renderItem} data={arr} numColumns={2}></FlatList>
      </View>
    </View>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    height: 230,

    backgroundColor: "#406C6B",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  walletcontainer: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  flexbox: {
    marginTop: 10,
    flexDirection: "row",

    width: 130,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F18058",
  },
  finacial: {
    position: "absolute",
    top: 150,
    left: 10,
    right: 10,
    backgroundColor: "#F5F6F8",
    height: 160,
    borderRadius: 10,
    elevation: 3,
  },
  good: {
    width: "70%",

    marginTop: 10,
    marginLeft: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    borderWidth: 1,
    borderRadius: 21,
    height: 42,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  circletext: {},
  circle1: {
    borderRadius: 18,
    height: 36,
    width: 36,
    backgroundColor: "#406C6B",
    justifyContent: "center",
    alignItems: "center",
  },
  statics: {
    color: "#90A8A7",
    marginTop: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  textstatics: {
    color: "#406C6B",
    fontSize: 16,
  },
  details: {
    height: 20,
    marginTop: 100,
    marginLeft: 10,
  },
  grid: {
    height: "100%",
    width: "100%",
  },
  cart: {
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    width: "40%",
    marginHorizontal: "5%",
    marginTop: 10,
    elevation: 3,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  symbol: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.2,
    backgroundColor: "#DEE4E4",
    alignItems: "center",
    justifyContent: "center",
  },

  //modal from here
  circletick: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 0.1,
    backgroundColor: "#FBE4DC",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    height: "100%",
    backgroundColor: "#3F6B6A",
    borderRadius: 10,
  },
  modalView: {
    marginTop: 120,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 35,
    height: 500,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  circular: {
    width:20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    top: 60,
    right:4,
    backgroundColor: "#406A6A",
  },
  lella: {
    width: 300,
    marginTop: 20,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profilediv: {
    width: 280,
    borderWidth: 0.2,
    height: 100,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    marginBottom: 10,
  },
  jhon: {

    height: 100,

    marginHorizontal: "15%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  jhonimage: {
    borderWidth: 1,
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 25,


  },
});
