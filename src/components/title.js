import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "500",
    color: Colors.floralwhite,
  },
});
