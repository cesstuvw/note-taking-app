import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotesStackParamList } from "../types";
import NotesScreen from "../screens/Notes/NotesScreen";
import AddNoteScreen from "../screens/Notes/AddNoteScreen";
import EditNoteScreen from "../screens/Notes/EditNoteScreen";
import ViewNoteScreen from "../screens/Notes/ViewNoteScreen";
import { View } from "react-native";

const Stack = createNativeStackNavigator<NotesStackParamList>();

export default function NotesNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NotesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddNote"
          component={AddNoteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewNote"
          component={ViewNoteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditNote"
          component={EditNoteScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}
