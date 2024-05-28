import { Alert, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/primatyButton";
import Title from "../components/title";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    props.userNumber
  );
  const [number, setNumber] = useState(initialGuess);

  function generateNumberHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && number < props.userNumber) ||
      (direction === "higher" && number > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = number;
    } else {
      minBoundary = number + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      number
    );
    setNumber(newRndNumber);
  }

  return (
    <View>
      <View style={styles.titleComponent}>
        <Title>Opponent's Guess</Title>
      </View>
      <View style={styles.scoreComponent}>
        <Text style={styles.score}>{number}</Text>
      </View>
      <PrimaryButton
        text="+"
        onPress={generateNumberHandler.bind(this, "higher")}
      ></PrimaryButton>
      <PrimaryButton
        text="-"
        onPress={generateNumberHandler.bind(this, "lower")}
      ></PrimaryButton>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  titleComponent: {
    borderWidth: 4,
    borderColor: Colors.floralwhite,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 16,
  },
  scoreComponent: {
    borderWidth: 4,
    borderColor: Colors.floralwhite,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 24,
  },
  score: {
    fontSize: 60,
    fontWeight: "800",
    color: Colors.yellow,
  },
});
