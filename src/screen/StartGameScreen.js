import { Text, View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/primatyButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Reset" />
        <PrimaryButton text="Confirm" />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "brown",
    elevation: 24,
    padding: 12,
    marginHorizontal: 16,
    //ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    shadowOpacity: 0.75,
  },
  textFieldContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: "yellow",
    color: "yellow",
    padding: 12,
    fontSize: 32,
  },
});
