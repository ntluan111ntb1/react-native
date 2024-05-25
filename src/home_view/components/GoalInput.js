import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [goalInput, setGoalInput] = useState("");

  function goalInputHandle(goalTextInput) {
    setGoalInput(goalTextInput);
  }

  function addGoalHandler() {
    props.onAddGoal(goalInput);
    setGoalInput("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Input your content"
        onChangeText={goalInputHandle}
        value={goalInput}
      />
      <Button
        color={"green"}
        title="Add Goal"
        onPress={addGoalHandler}
      ></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
});
