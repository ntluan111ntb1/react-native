import { Alert, Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import PrimaryButton from "../components/primatyButton";
import Title from "../components/title";
import Colors from "../constants/colors";
import Card from "../components/card";
import InstructionText from "../components/instructionText";

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
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [number, setNumber] = useState(initialGuess);
  const [guessNumbers, setGuessNumber] = useState([]);

  useEffect(() => {
    if (number == props.userNumber) {
      props.onGameOver();
    }
  }, [number, props.userNumber, props.onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function generateNumberHandler(direction) {
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
    setGuessNumber((guessNumbers) => [newRndNumber, ...guessNumbers]);
  }

  return (
    <View style={styles.gameScreenContainer}>
      <View style={styles.titleComponent}>
        <Title>Opponent's Guess</Title>
      </View>
      <View style={styles.scoreComponent}>
        <Title childrenStyle={styles.score}>{number}</Title>
      </View>
      <Card>
        <InstructionText>Higher or lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={generateNumberHandler.bind(this, "lower")}>
              <AntDesign name="minuscircle" size={24} color={Colors.red} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={generateNumberHandler.bind(this, "higher")}>
              <AntDesign name="pluscircle" size={24} color={Colors.red} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {guessNumbers.map((guessNumber) => {
          <Title>{guessNumber}</Title>;
        })}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    marginTop: 100,
    marginHorizontal: 16,
  },
  titleComponent: {
    borderWidth: 4,
    borderColor: Colors.floralwhite,
    padding: 8,
    alignItems: "center",
    marginHorizontal: 16,
  },
  scoreComponent: {
    borderWidth: 4,
    borderColor: Colors.yellow,
    borderRadius: 8,
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
