import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { colors } from "../../constants/Colors";
import { AddNoteButton } from "../../components/Button/NoteScreenButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Fragment, useCallback, useEffect, useState } from "react";
import { getData, storeData } from "../../database/StoreData";
import { Notes } from "../../models/Notes";
import { ListItem } from "react-native-elements";
import ViewWithLoading from "../../components/Loading/ViewWithLoading";
import moment from "moment";

const { height, width } = Dimensions.get("window");

export default function NotesScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [notesList, setNotesList] = useState<Array<Notes> | null>(null);

  const retrieveData = async () => {
    setLoading(true);
    const notes = await getData("notes");

    if (notes) {
      const json = JSON.parse(notes);
      setNotesList(json);
    }
    setLoading(false);
  };

  const updateNotes = async () => {
    const jsonValue = JSON.stringify(notesList);
    await storeData("notes", jsonValue);
    retrieveData();
  };

  const deleteNote = (index: number) => {
    if (notesList) {
      Alert.alert("Delete", "Are you sure you want to delete this note?", [
        {
          text: " Yes",
          style: "destructive",
          onPress: () => {
            notesList.splice(index, 1);
            updateNotes();
          },
        },
        {
          text: "Cancel",
          style: "default",
          onPress: () => {},
        },
      ]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      retrieveData();
    }, [])
  );

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <ViewWithLoading loading={loading}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.textLogo}>notes.</Text>
            <AddNoteButton
              title=""
              onPress={() => {
                navigation.navigate("Notes", {
                  screen: "AddNote",
                });
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}></View>
          <View style={styles.greetingsBg}>
            <Text style={styles.greetingsText}>Hello!</Text>
          </View>
          <View style={{ marginVertical: 10 }}></View>
          {notesList && notesList.length > 0 ? (
            <Fragment>
              {notesList.map((notes: Notes, index: number) => (
                <ListItem
                  containerStyle={styles.bgcolor}
                  key={index}
                  bottomDivider
                  onLongPress={() => {
                    deleteNote(index);
                  }}
                  onPress={() => {
                    navigation.navigate("Notes", {
                      screen: "ViewNote",
                      params: { notes: notes, index: index },
                    });
                  }}
                >
                  <Text
                    style={[
                      styles.day,
                      {
                        transform: [{ rotate: "-90deg" }],
                      },
                    ]}
                  >
                    {moment(notes.date).format("DD")}
                  </Text>
                  <ListItem.Content numberOfLines={1} style={styles.content}>
                    <Text style={styles.date}>
                      {moment(notes.date).format("MMMMM YYYY")}
                    </Text>

                    <ListItem.Title
                      numberOfLines={1}
                      style={[styles.title, { width: 125 }]}
                    >
                      {notes.title}
                    </ListItem.Title>
                    <ListItem.Subtitle
                      numberOfLines={1}
                      style={[styles.content, { width: 155 }]}
                    >
                      {notes.description}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron
                    iconStyle={{
                      color: "#005CEA",
                      fontSize: 30,
                      marginRight: 35,
                    }}
                  />
                </ListItem>
              ))}
            </Fragment>
          ) : (
            <View style={styles.containerAdd}>
              <Text style={styles.addNote}>Add notes</Text>
            </View>
          )}
          <View style={{ marginVertical: 10 }}></View>
        </ScrollView>
      </View>
    </ViewWithLoading>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundWhite,
  },

  header: {
    width: "80%",
    height: 30,
    // marginTop: 50,
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: colors.backgroundYellow,
  },

  textLogo: {
    fontFamily: "poppins-black",
    fontSize: 15,
    color: colors.darkBlue,
  },

  greetingsBg: {
    backgroundColor: colors.backgroundYellow,
    width: 175,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
  },

  greetingsText: {
    fontFamily: "poppins-black",
    fontSize: 35,
    textAlign: "center",
    color: colors.darkBlue,
  },

  containerAdd: {
    justifyContent: "center",
    width: width,
    height: height - 300,
    alignItems: "center",
    alignSelf: "center",
    zIndex: -1,
    // position: "absolute",
    // backgroundColor: colors.darkBlue,
  },

  addNote: {
    // width: width,
    // height: height,
    // justifyContent: "center",
    // alignSelf: "center",
    textAlign: "center",
    // zIndex: -1,
    fontFamily: "poppins-light",
    color: colors.darkGrey,
    fontSize: 13,
  },

  content: {
    fontFamily: "poppins-mono",
  },

  day: {
    fontFamily: "poppins-bold",
    // fontSize: 65,
    fontSize: 65,
    marginLeft: 25,
    color: colors.darkGrey,
    opacity: 0.3,
  },

  date: {
    fontFamily: "poppins-light",
    color: colors.darkGrey,
    // alignSelf: "flex-end",
    // position: "absolute",
    // paddingRight: 35,
    fontSize: 10,
    paddingBottom: 5,
  },

  title: {
    fontFamily: "poppins-bold",
    fontSize: 20,
    // color: colors.darkBlue,
  },

  color: {
    backgroundColor: colors.backgroundYellow,
  },
});
