import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { colors } from "../constants/Colors";
import { RootTabScreenProps } from "../types";

const { height, width } = Dimensions.get("window");

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  const [name, setName] = useState<string>("");

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
