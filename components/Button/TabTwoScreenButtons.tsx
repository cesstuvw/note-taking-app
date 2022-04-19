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

const SignInButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.signIn}>
    <Text style={styles.signInText}>{props.title}</Text>
  </TouchableOpacity>
);

const SignUpButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.signUp}>
    <Text style={styles.signUpText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  signIn: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    width: 215,
    height: 50,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: colors.darkBlue,
  },

  signInText: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: colors.backgroundWhite,
    textAlign: "center",
    alignSelf: "center",
  },

  signUp: {
    justifyContent: "center",
    alignItems: "center",
    width: 215,
    height: 50,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: colors.darkBlue,
    borderRadius: 25,
  },

  signUpText: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: colors.darkBlue,
    textAlign: "center",
    alignSelf: "center",
  },
});

export { SignInButton };
export { SignUpButton };
