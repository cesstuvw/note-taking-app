import { StyleSheet, StyleProp, ViewStyle, SafeAreaView } from "react-native";
import { View } from "../../components/Themed";
import { HeaderHeightContext } from "@react-navigation/elements";
import Loader from "../Loading/Loader";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../constants/Colors";

interface HeaderProps {
  children: any;
  style?: StyleProp<ViewStyle>;
  loading: boolean;
}

const ViewWithLoading = (props: HeaderProps) => (
  <View style={styles.container}>
    {props.children}
    {props.loading && <Loader />}
    <StatusBar style={"dark"} />
  </View>
);

// const ViewWithLoading = (props: HeaderProps) => (
//   <HeaderHeightContext.Consumer>
//     {(headerHeight) => (
//       <View style={styles.container}>
//         <SafeAreaView
//           style={[
//             styles.container,
//             {
//               flex: 5,
//               zIndex: 1,
//             },
//           ]}
//         >
//           {props.children}
//           {props.loading && <Loader />}
//         </SafeAreaView>
//       </View>
//     )}
//   </HeaderHeightContext.Consumer>
// );

export default ViewWithLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
});
