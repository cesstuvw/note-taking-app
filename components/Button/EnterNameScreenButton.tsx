import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/Colors";
import { RootTabScreenProps } from "../../types";

interface ButtonProps {
  title: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

// const SignInButton = (props: ButtonProps) => (
//   <TouchableOpacity onPress={props.onPress} style={styles.signIn}>
//     <Text style={styles.signInText}>{props.title}</Text>
//   </TouchableOpacity>
// );

export const GetStartedButton = (props: ButtonProps) => (
  <TouchableOpacity onPress={props.onPress} style={styles.getStarted}>
    <Text style={styles.getStartedText}>Get Started{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // signIn: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginBottom: 12,
  //   width: 215,
  //   height: 50,
  //   alignSelf: "center",
  //   borderRadius: 25,
  //   backgroundColor: colors.darkBlue,
  // },

  // signInText: {
  //   fontFamily: "poppins-bold",
  //   fontSize: 18,
  //   color: colors.backgroundWhite,
  //   textAlign: "center",
  //   alignSelf: "center",
  // },

  getStarted: {
    justifyContent: "center",
    alignItems: "center",
    width: 215,
    height: 50,
    alignSelf: "center",
    // borderWidth: 4,
    backgroundColor: colors.darkBlue,
    borderRadius: 25,
  },

  getStartedText: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: colors.backgroundWhite,
    textAlign: "center",
    alignSelf: "center",
  },
});

// export { SignInButton };
// export { GetStartedButton };
