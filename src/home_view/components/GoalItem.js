import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goal}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  goalContainer: {
    backgroundColor: "mediumslateblue",
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
  },
});
