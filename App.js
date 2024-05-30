import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import StartGameScreen from "./src/screen/StartGameScreen";
import GameScreen from "./src/screen/GameScreen";
import GameOverScreen from "./src/screen/GameOverScreen";
import Colors from "./src/constants/colors";
import AppLoading from "expo-app-loading";
export default function App() {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [guessNumber, setGuessNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function setEnteredNumberHandler(number) {
    setEnteredNumber(number);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  function newGameHandle() {
    setEnteredNumber(null);
    setGuessNumber(null);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen onSetEnteredNumber={setEnteredNumberHandler} />;

  if (enteredNumber) {
    screen = (
      <GameScreen
        onGameOver={gameOverHandler}
        userNumber={enteredNumber}
        guessNumber={guessNumber}
      />
    );
  }

  if (isGameOver) {
    screen = (
      <GameOverScreen
        userNumber={enteredNumber}
        onStartNewGame={newGameHandle}
      />
    );
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
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
