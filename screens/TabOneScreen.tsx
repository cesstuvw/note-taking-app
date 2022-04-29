import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { Text, View } from "../components/Themed";
import { colors } from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import { RootStackParamList } from "../types";
import { WelcomeButton } from "../components/Button/LandingScreenButton";

const { height, width } = Dimensions.get("window");

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundWhite,
  },
});
