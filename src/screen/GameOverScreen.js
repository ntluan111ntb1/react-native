import { Text, Image, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/title";
import PrimaryButton from "../components/primatyButton";

function GameOverScreen({ guessRound, userNumber, onStartNewGame }) {
  return (
    <View style={styles.gameOverContainer}>
      <Title childrenStyle={styles.text}>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>
        Your phone needed <Text style={styles.highlightText}>{guessRound}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton
        childrenStyle={styles.buttonContainer}
        onPress={onStartNewGame}
      >
        <Text style={styles.button}>Start New Game</Text>
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    borderWidth: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderColor: Colors.floralwhite,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: Colors.red,
    overflow: "hidden",
    marginVertical: 24,
  },
  image: { width: 300, height: 300 },
  sumaryText: {
    fontSize: 24,
    alignItems: "center",
    fontFamily: "open-sans",
    textAlign: "center",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    backgroundColor: Colors.red,
  },
  button: {
    fontFamily: "open-sans-bold",
    color: Colors.floralwhite,
    fontSize: 18,
  },
});
