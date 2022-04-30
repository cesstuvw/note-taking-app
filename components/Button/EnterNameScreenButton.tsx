import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/Colors";

interface ButtonProps {
  title: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const GetStartedButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.getStarted}>
    <Text style={styles.getStartedText}>Get Started{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  getStarted: {
    justifyContent: "center",
    alignItems: "center",
    width: 215,
    height: 57,
    alignSelf: "center",
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
  },

  getStartedText: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: colors.backgroundWhite,
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 4,
  },
});
