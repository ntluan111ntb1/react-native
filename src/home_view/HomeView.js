import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const HomeView = () => {
  const [listGoal, setListGoal] = useState([]);
  const [isGoalInputVisible, setGoalInputVisible] = useState(false);

  function addGoalHandler(goalInput) {
    setListGoal((currenGoals) => [
      ...currenGoals,
      { text: goalInput, id: Math.random() },
    ]);
    cancelGoalInputHandler();
  }

  function deleteGoalHandler(id) {
    setListGoal((currenListGoal) => {
      return currenListGoal.filter((goal) => goal.id !== id);
    });
  }

  function visibleGoalInputHandler() {
    setGoalInputVisible(true);
  }

  function cancelGoalInputHandler() {
    setGoalInputVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add goal" onPress={visibleGoalInputHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isGoalInputVisible}
        onCancel={cancelGoalInputHandler}
      />
      <FlatList
        data={listGoal}
        renderItem={(goal) => {
          return (
            <GoalItem
              text={goal.item.text}
              onDeleteGoal={deleteGoalHandler}
              id={goal.item.id}
            />
          );
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
