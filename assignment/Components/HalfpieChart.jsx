import { Text, View, Dimensions } from "react-native";
import React, { Component } from "react";
import { VictoryPie } from "victory-native";

export default class HalfpieChart extends Component {
  graphicData = [
    { y: 20, x: "Nutrient 5000" },
    { y: 20, x: " 5000 p&D" },
    { y: 20, x: "5000 R&D" },
    { y: 20, x: "5000 Labor" },
    { y: 20, x: "5000 Machine" },
  ];
  graphicColor = ["red", "blue", "yellow", "green", "tomato"];
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <VictoryPie
        data={this.graphicData}
        radius={({ datum }) =>8 + datum.y *7}
        innerRadius={40}
        padAngle={4}
        endAngle={-90}
        startAngle={90}
        labelPosition={({ index }) => index
    ? "centroid"
    : "startAngle"
  }
  labelPlacement={({ index }) => index
    ? "parallel"
    : "vertical"
  }
        colorScale={this.graphicColor}
        style={{
          labels: {
            fill: "black",
            fontSize: 10,
            padding: 6,
          },
        }}
      />
    );
  }
}
