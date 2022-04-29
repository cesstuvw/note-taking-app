import { StyleSheet, ActivityIndicator } from "react-native";
import { View } from "../Themed";
import { colors } from "../../constants/Colors";

export default function Loader() {
  return (
    <View style={styles.loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#005CEA" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    zIndex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundWhite,
  },
});
