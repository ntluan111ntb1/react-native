import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ childrenStyle, children, onPress }) {
  return (
    <View style={[styles.btnOuterContainer, childrenStyle]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.floralwhite }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.btnPressedIos]
            : styles.btnInnerContainer
        }
      >
        <View>{children}</View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 24,
    marginTop: 12,
    marginHorizontal: 12,
    backgroundColor: Colors.yellow,
    overflow: "hidden",
  },
  btnInnerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  btnPressedIos: {
    opacity: 0.25,
  },
  content: {
    fontSize: 22,
    fontWeight: "700",
  },
});
