import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";
import { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../constants/Colors";
import { getData, removeData, storeData } from "../../database/StoreData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { NotesStackParamList } from "../../types";
import {
  UpdateNoteButton,
  BackButton,
} from "../../components/Button/EditNoteScreenButton";

type IRoute = {
  params: NotesStackParamList["EditNote"];
};

export default function EditNoteScreen() {
  const route = useRoute<RouteProp<IRoute, "params">>();
  const notes = route.params.notes;
  const index = route.params.index;

  const [title, setTitle] = useState<string>(notes.title);
  const [description, setDescription] = useState<string>(notes.description);

  const navigation = useNavigation();

  const updateNote = async () => {
    const notes = await getData("notes");

    const GETDATE = new Date().toLocaleDateString();

    const data = {
      title: title,
      description: description,
      date: GETDATE,
    };

    if (notes) {
      const json = JSON.parse(notes);

      if (json) {
        json[index] = { ...data };
        const jsonValue = JSON.stringify([...json]);
        await storeData("notes", jsonValue);
      }
    }
    navigation.navigate("Home");
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
          {/* <Text style={styles.textLogo}>color</Text> */}
          <TouchableOpacity style={styles.edit} onPress={updateNote}>
            <Text style={styles.textLogo}>update</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.greetingsText}>What's up? (Again)</Text>
        <View style={{ marginVertical: 5 }}></View>

        <View style={[styles.formContainer]}>
          <TextInput
            textAlignVertical={"center"}
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

  edit: {
    width: 75,
    alignSelf: "flex-end",
  },

  textLogo: {
    alignSelf: "flex-end",
    fontFamily: "poppins-black",
    fontSize: 15,
    color: colors.darkBlue,
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
    color: colors.darkBlue,
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
