import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/primatyButton";
import Colors from "../constants/colors";
import Title from "../components/title";
import Card from "../components/card";
import InstructionText from "../components/instructionText";

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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>Guess My Number</Title>
      </View>
      <Card>
        <View style={styles.textFieldContainer}>
          <InstructionText>Enter your number</InstructionText>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={setNumber}
            value={number}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>
              <Text>Reset</Text>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>
              <Text>Confirm</Text>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 100,
  },
  titleContainer: {
    borderWidth: 4,
    borderColor: Colors.floralwhite,
    padding: 12,
  },
  textFieldContainer: {
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: Colors.yellow,
    color: Colors.yellow,
    padding: 8,
    fontSize: 32,
  },
});
