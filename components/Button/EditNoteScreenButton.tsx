import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps {
  title: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const BackButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.back}>
    <Ionicons name="arrow-back-circle-sharp" size={35} color="#005CEA" />
  </TouchableOpacity>
);

export const UpdateNoteButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.update}>
    <Text style={styles.updateText}>Update Note</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  back: {
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 5,
  },
  update: {
    alignSelf: "flex-end",
    marginTop: 25,
    width: 135,
    height: 45,
    backgroundColor: colors.backgroundYellow,
    justifyContent: "center",
    borderRadius: 25,
  },

  updateText: {
    textAlign: "center",
    fontFamily: "poppins-bold",
    color: colors.darkBlue,
    fontSize: 16,
  },
});
