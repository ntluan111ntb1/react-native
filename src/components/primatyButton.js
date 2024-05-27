import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  function pressHandler() {
    console.log("Pressed");
  }

  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "floralwhite" }}
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
    borderWidth: 2,
    borderColor: "maroon",
    borderRadius: 12,
    marginTop: 12,
    backgroundColor: "burlywood",
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
