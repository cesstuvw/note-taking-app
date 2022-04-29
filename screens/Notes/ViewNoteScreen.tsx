import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
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
import moment from "moment";

type IRoute = {
  params: NotesStackParamList["EditNote"];
};

export default function ViewNoteScreen() {
  const route = useRoute<RouteProp<IRoute, "params">>();
  const notes = route.params.notes;
  const index = route.params.index;

  const [title, setTitle] = useState<string>(notes.title);
  const [description, setDescription] = useState<string>(notes.description);

  const [date, setDate] = useState<string>("");
  const navigation = useNavigation();

  useEffect(() => {
    var date = moment().format("MMMM DD, YYYY");

    setDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton
            title=""
            onPress={() =>
              navigation.navigate("Notes", {
                screen: "Home",
              })
            }
          />
          <Text style={styles.textDate}>{date}</Text>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => {
              navigation.navigate("Notes", {
                screen: "EditNote",
                params: { notes: notes, index: index },
              });
            }}
          >
            <Text style={styles.textLogo}>edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 5 }}></View>

        <View style={[styles.formContainer]}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textDesc}>{description}</Text>
          {/* <View style={{ marginVertical: 25 }}></View> */}
        </View>
        {/* <StatusBar style="dark" /> */}
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
    width: 50,
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
    marginLeft: 57,
    fontFamily: "poppins-black",
    fontSize: 25,
    textAlign: "left",
    color: colors.darkBlue,
    // marginBottom: 15,
  },

  formContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },

  textTitle: {
    marginTop: 10,
    fontFamily: "poppins-bold",
    fontSize: 30,
    color: colors.darkBlue,
    borderColor: colors.borderInput,
    borderRadius: 9,
    // borderWidth: 1,
    backgroundColor: "transparent",
    textAlign: "left",
  },

  textDesc: {
    marginTop: -5,
    minHeight: 360,
    fontFamily: "poppins-mono",
    fontSize: 20,
    borderColor: colors.borderInput,
    borderRadius: 9,
    // borderWidth: 1,
    backgroundColor: "transparent",
  },

  textDate: {
    color: colors.darkGrey,
    position: "absolute",
    alignSelf: "center",
  },
});
