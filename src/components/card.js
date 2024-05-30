import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: Colors.red,
    elevation: 24,
    padding: 12,
    marginTop: 16,
    borderRadius: 8,
    //ios
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    shadowOpacity: 0.75,
  },
});
