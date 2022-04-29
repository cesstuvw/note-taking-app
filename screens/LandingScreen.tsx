import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "../components/Themed";
import { colors } from "../constants/Colors";
import { WelcomeButton } from "../components/Button/LandingScreenButton";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function LandingScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/images/ellipse-welcome.png")}
      style={styles.container}
    >
      <View style={styles.welcome}>
        <Text style={styles.textLogo}>noted.</Text>
        <Image
          source={require("../assets/images/blink-welcome.png")}
          style={styles.blink}
        />
        <Text style={styles.textWelcome}>welcome!</Text>
      </View>

      <Text style={styles.textDialog}>
        Start noting{"\n"}with{" "}
        <Text style={[styles.textDialog, { fontFamily: "poppins-bold" }]}>
          noted.
        </Text>
      </Text>
      <WelcomeButton
        title=""
        onPress={() => navigation.navigate("EnterName")}
      />
      {/* <StatusBar hidden={false} style="dark" /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundWhite,
  },

  welcome: {
    height: "92%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -75,
    paddingBottom: 0,
  },

  textLogo: {
    alignSelf: "flex-end",
    fontFamily: "poppins-black",
    fontSize: 15,
    color: colors.darkBlue,
  },

  blink: {
    alignSelf: "center",
    // width: 295,
    // height: 385,
    width: 309,
    height: 365,
    marginTop: 15,
  },

  textWelcome: {
    alignSelf: "flex-start",
    marginTop: 20,
    fontFamily: "poppins-black",
    fontSize: 29,
    color: colors.darkBlue,
  },

  textDialog: {
    fontFamily: "poppins-extralight",
    fontSize: 22,
    color: colors.darkBlue,
    lineHeight: 25,
    alignSelf: "flex-start",
    paddingLeft: 45,
  },

  welcomeButton: {
    position: "absolute",
    marginTop: 255,
  },
});
