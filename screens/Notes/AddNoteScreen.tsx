import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import {
  AddNoteButton,
  BackButton,
} from "../../components/Button/AddNoteScreenButton";
import { colors } from "../../constants/Colors";
import { getData, removeData, storeData } from "../../database/StoreData";
import { StatusBar } from "expo-status-bar";
import moment from "moment";

export default function AddNoteScreen() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigation = useNavigation();

  const GETDATE = new Date().toLocaleDateString();

  const addNote = async () => {
    const notes = await getData("notes");
    // await removeData("notes");

    const data = {
      title: title,
      description: description,
      date: GETDATE,
    };

    if (notes) {
      const json = JSON.parse(notes);

      if (json) {
        const jsonValue = JSON.stringify([...json, data]);
        await storeData("notes", jsonValue);
      }
    } else {
      const jsonValue = JSON.stringify([data]);
      await storeData("notes", jsonValue);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton
            title=""
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.textLogo}>
            {moment().format("MMMM DD, YYYY")}
          </Text>
        </View>
        <Text style={styles.greetingsText}>What's up?</Text>
        <View style={{ marginVertical: 5 }}></View>

        <View style={[styles.formContainer]}>
          <TextInput
            mode="flat"
            style={styles.textTitle}
            placeholder="Title"
            placeholderTextColor="#AFAFB0"
            theme={{
              roundness: 9,
              fonts: { regular: { fontFamily: "poppins-bold" } },
            }}
            value={title}
            onChangeText={setTitle}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            selectionColor="#005CEA"
            autoComplete={false}
          />
          <View style={{ marginVertical: 5 }}></View>
          <TextInput
            mode="flat"
            multiline={true}
            numberOfLines={5}
            style={styles.textDesc}
            placeholder="Description"
            placeholderTextColor="#AFAFB0"
            theme={{
              roundness: 9,
              fonts: { regular: { fontFamily: "poppins-mono" } },
            }}
            value={description}
            onChangeText={setDescription}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            selectionColor="#005CEA"
            textAlignVertical="top"
            autoComplete={false}
          />
          <AddNoteButton title="" onPress={addNote} />
          <View style={{ marginVertical: 25 }}></View>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },

  header: {
    width: "85%",
    height: 30,
    marginTop: 50,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },

  textLogo: {
    alignSelf: "flex-end",
    fontFamily: "poppins-black",
    fontSize: 15,
    color: colors.darkGrey,
    marginRight: 6,
  },

  greetingsText: {
    marginTop: 25,
    marginLeft: 33,
    fontFamily: "poppins-black",
    fontSize: 25,
    textAlign: "left",
    color: colors.darkBlue,
    // marginBottom: 15,
  },

  formContainer: {
    paddingLeft: 35,
    paddingRight: 35,
  },

  textTitle: {
    height: 50,
    fontSize: 19,
    borderColor: colors.borderInput,
    borderRadius: 9,
    borderWidth: 1,
    backgroundColor: "transparent",
    textAlign: "left",
  },

  textDesc: {
    minHeight: 360,
    fontSize: 19,
    borderColor: colors.borderInput,
    borderRadius: 9,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
});
