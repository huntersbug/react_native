import React from "react";
import { View, Text } from "react-native";
import Appcontext from "./Appcontext";

class ContextProvider extends React.Component {
  static MyContextProvider = Appcontext.Provider;
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.getdata();
  }
  getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
      
        this.setState({ data: res });
      })
      .catch((e) => console.log(e));
  };
  handelcart=(e)=>{

  }


  render() {
    return (
      <Appcontext.Provider value={[this.state,this.handelcart]}>
        {this.props.children}
      </Appcontext.Provider>
    );
  }
}

export default ContextProvider;
