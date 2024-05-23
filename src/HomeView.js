import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const HomeView = () => {
  const [goalInput, setGoalInput] = useState("");
  const [listGoal, setListGoal] = useState([]);

  function goalInputHandle(goalTextInput) {
    setGoalInput(goalTextInput);
  }
  function addGoalHandler() {
    setListGoal((currenGoals) => [...currenGoals, goalInput]);
  }
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Your Goals</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Input your content"
          onChangeText={goalInputHandle}
        />
        <Button
          color={"green"}
          title="Add Goal"
          onPress={addGoalHandler}
        ></Button>
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.title}>List content:</Text>
        {listGoal.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Items
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
    width: "70%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 8,
  },

  // container
  appContainer: {
    flex: 1, // space of view parent
    backgroundColor: "cornflowerblue",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  goalContainer: {
    flex: 1,
  },
});

export default HomeView;
