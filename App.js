import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./src/screen/StartGameScreen";
import GameScreen from "./src/screen/GameScreen";
export default function App() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function setEnteredNumberHandler(number) {
    setEnteredNumber(number);
  }

  let screen = <StartGameScreen onSetEnteredNumber={setEnteredNumberHandler} />;

  if (enteredNumber) {
    screen = <GameScreen text={enteredNumber} />;
  }
  return (
    <LinearGradient
      colors={["brown", "darkgoldenrod"]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
