import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./src/screen/StartGameScreen";
import GameScreen from "./src/screen/GameScreen";
import GameOverScreen from "./src/screen/GameOverScreen";
import Colors from "./src/constants/colors";
export default function App() {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  function setEnteredNumberHandler(number) {
    setEnteredNumber(number);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onSetEnteredNumber={setEnteredNumberHandler} />;

  if (enteredNumber) {
    screen = (
      <GameScreen onGameOver={gameOverHandler} userNumber={enteredNumber} />
    );
  }

  if (isGameOver) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.red, Colors.yellow]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
