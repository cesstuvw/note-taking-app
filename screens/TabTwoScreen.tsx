import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Text, View } from "../components/Themed";
import { colors } from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import { SignInButton } from "../components/Button/TabTwoScreenButtons";
import { SignUpButton } from "../components/Button/TabTwoScreenButtons";

const { height, width } = Dimensions.get("window");

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>noted.</Text>
      <View style={styles.circle}>
        <View style={styles.ellipse}>
          <Image
            source={require("../assets/images/blink-joining.png")}
            style={styles.blink}
          />
        </View>
      </View>
      <View style={styles.button}>
        <SignInButton
          title="Sign in"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
        <SignUpButton
          title="Sign up"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: colors.backgroundWhite,
  },

  textLogo: {
    marginTop: 85,
    alignSelf: "center",
    fontFamily: "poppins-black",
    fontSize: 25,
    color: colors.darkBlue,
  },

  circle: {
    height: "45%",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "transparent",
  },

  ellipse: {
    width: 260,
    height: 260,
    borderRadius: 200,
    backgroundColor: colors.backgroundYellow,
  },

  blink: {
    alignSelf: "center",
    // width: 295,
    // height: 385,
    width: 308 + 5 + 2,
    height: 262 + 50 + 10,
    marginTop: 20,
  },

  button: {
    height: "20%",
    marginTop: 100,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
});
