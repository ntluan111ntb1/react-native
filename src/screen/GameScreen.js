import { Button, Text, View } from "react-native";
import PrimaryButton from "../components/primatyButton";

function GameScreen(props) {
  return (
    <View>
      <Text>{props.text}</Text>
      <PrimaryButton text="sdsdsd"></PrimaryButton>
    </View>
  );
}

export default GameScreen;
