import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { GetStartedButton } from "../components/Button/EnterNameScreenButton";
import { colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Notes } from "../models/Notes";

export default function EnterNameScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState<string>("");

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
      <View style={{ marginVertical: 45 }}></View>
      <TextInput
        mode="flat"
        style={styles.textName}
        placeholder="Nickname"
        placeholderTextColor="#AFAFB0"
        theme={{
          roundness: 45,
          fonts: { regular: { fontFamily: "poppins-bold" } },
        }}
        value={name}
        onChangeText={setName}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        selectionColor="#005CEA"
        autoComplete={false}
        textAlign={"center"}
        textAlignVertical={"center"}
      />
      <GetStartedButton
        title=""
        onPress={() =>
          navigation.navigate("Notes", {
            screen: "Home",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 315,
    height: 322,
    marginTop: 20,
  },

  textName: {
    width: 215,
    height: 45,
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "poppins-bold",
    fontSize: 20,
    color: colors.darkBlue,
    marginTop: 2,
    marginBottom: 12,
    paddingTop: 4,
    borderWidth: 4,
    borderColor: colors.darkBlue,
    borderRadius: 45,
    backgroundColor: "transparent",
  },
});
