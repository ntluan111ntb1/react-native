function GoalItem() {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goal}>{goal.item.text}</Text>
    </View>
  );
}

export default GoalItem;
