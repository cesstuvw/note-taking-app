import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonProps {
  title: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const WelcomeButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.welcome}>
    <MaterialCommunityIcons name="arrow-right" size={55} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  welcome: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: colors.darkBlue,
    position: "absolute",
    bottom: 35,
    right: 25,
    marginRight: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { WelcomeButton };
