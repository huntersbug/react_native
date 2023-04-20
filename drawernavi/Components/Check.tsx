import { View, Text } from "react-native";
import React from "react";

export default function Check(props: any) {
  React.useEffect(() => {

  }, [props.route.params.propdata]);
  return (
    <View>
      <Text>Check</Text>
    </View>
  );
}
