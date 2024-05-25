import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const HomeView = () => {
  const [listGoal, setListGoal] = useState([]);

  function addGoalHandler(goalInput) {
    setListGoal((currenGoals) => [
      ...currenGoals,
      { text: goalInput, id: Math.random() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Your Goals</Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <Text style={styles.title}>List your goal:</Text>
      <FlatList
        data={listGoal}
        renderItem={(goal) => {
          return <GoalItem text={goal.item.text} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Items

  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 8,
  },

  // container
  appContainer: {
    flex: 1, // space of view parent
    backgroundColor: "#lavender",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});

export default HomeView;
