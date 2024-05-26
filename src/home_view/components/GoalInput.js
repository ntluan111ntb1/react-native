import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
    <Modal transparent={true} visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Input your content"
          onChangeText={goalInputHandle}
          value={goalInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button color={"green"} title="Add Goal" onPress={addGoalHandler} />
        <Button color={"blue"} title="Cancel" onPress={props.onCancel} />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "black",
    fontSize: 18,
    width: "100%",
    padding: 12,
  },
  inputContainer: {
    backgroundColor: "lightsteelblue",
    borderRadius: 12,
    margin: 12,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
