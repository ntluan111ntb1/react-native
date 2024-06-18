import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
function GuessLogItem({ guessNumber, roundNumber }) {
  return (
    <View style={styles.guessLogItemContainer}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guessNumber}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  guessLogItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.yellow,
    marginVertical: 8,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.black,
  },
});
