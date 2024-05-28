import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/primatyButton";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [number, setNumber] = useState("");

  function confirmHandler() {
    const validNumber = parseInt(number);

    if (isNaN(validNumber) || validNumber <= 0 || validNumber > 99) {
      Alert.alert("Invalid Number", "Number has to a Number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
    } else {
      props.onSetEnteredNumber(number);
    }
  }

  function resetHandler() {
    setNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={setNumber}
          value={number}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetHandler} text="Reset" />
        <PrimaryButton onPress={confirmHandler} text="Confirm" />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.red,
    elevation: 24,
    padding: 12,
    marginHorizontal: 16,
    //ios
    shadowColor: Colors.black,
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
    borderColor: Colors.yellow,
    color: Colors.yellow,
    padding: 12,
    fontSize: 32,
  },
});
