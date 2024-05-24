import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";

const HomeView = () => {
  const [goalInput, setGoalInput] = useState("");
  const [listGoal, setListGoal] = useState([]);

  function goalInputHandle(goalTextInput) {
    setGoalInput(goalTextInput);
  }
  function addGoalHandler() {
    setListGoal((currenGoals) => [
      ...currenGoals,
      { text: goalInput, id: Math.random() },
    ]);
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
      <Text style={styles.title}>List your goal:</Text>
      <FlatList
        data={listGoal}
        renderItem={(goal) => {
          return (
            
          );
        }}
        keyExtractor={(item, index) => {
          console.log(item.id);
          return item.id;
        }}
      />
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
  goal: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  // container
  appContainer: {
    flex: 1, // space of view parent
    backgroundColor: "#lavender",
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
    backgroundColor: "mediumslateblue",
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
  },
});

export default HomeView;
