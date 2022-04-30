/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Notes } from "./models/Notes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  // Root: NativeStackScreenProps<RootStackParamList> | undefined;
  // Join: undefined;
  // Notes: undefined;
  // AddNotes: undefined;
  // Modal: undefined;
  // NotFound: undefined;
  Landing: undefined;
  EnterName: undefined;
  Notes: undefined;
};

export type NotesStackParamList = {
  Home: undefined;
  AddNote: undefined;
  ViewNote: undefined;
  EditNote: {
    notes: Notes;
    index: number;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
