import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function GoalItem(props) {
  return (
    <Pressable>
      <View style={styles.goalItemContainer}>
        <View style={styles.goalTextContainer}>
          <Text style={styles.goal}>{props.text}</Text>
        </View>
        <Pressable
          style={styles.btnContainer}
          onPress={props.onDeleteGoal.bind(this, props.id)}
          android_ripple={{ color: "black" }}
          style={({ pressed }) => pressed && styles.deletePress}
        >
          <Image
            style={styles.btnContainer}
            source={require("../../icons/delete.png")}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  goalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "mediumslateblue",
    padding: 12,
    borderRadius: 12,
    width: "85%",
  },
  goalItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  btnContainer: {
    height: 40,
    width: 40,
  },
  deletePress: {
    color: "black",
  },
});
