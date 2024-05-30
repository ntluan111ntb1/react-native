import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ children, childrenStyle }) {
  return <Text style={[styles.title, childrenStyle]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: Colors.floralwhite,
    fontFamily: "open-sans-bold",
  },
});
