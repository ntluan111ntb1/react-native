import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton(props) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: Colors.floralwhite }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.btnPressedIos]
            : styles.btnInnerContainer
        }
      >
        <View>
          <Text>{props.text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 12,
    marginTop: 12,
    backgroundColor: Colors.yellow,
    overflow: "hidden",
  },
  btnInnerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  btnPressedIos: {
    opacity: 0.25,
  },
});
