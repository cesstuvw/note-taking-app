import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonProps {
  title: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const AddNoteButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.add}>
    <MaterialIcons name="add-box" size={35} color="#005CEA" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  add: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 5,
  },
});
