import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextInputComponent = ({
  title,
  onChange,
  value,
  isPassword,
  onFocus,
  onBlur,
  isFocused,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={!isFocused ? styles.textInput : styles.textInputFocused}
        secureTextEntry={isPassword}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};
export default TextInputComponent;
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    height: 45,
    backgroundColor: "#EDEFF0",
    borderRadius: 10,
    padding: 10,
  },
  textInputFocused: {
    width: "100%",
    height: 45,
    backgroundColor: "#ffff",
    borderRadius: 10,
    padding: 10,
    borderColor: "#FA9DCF",
    borderWidth: 1,
    shadowColor: "#F8AFD6",
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
  },
  text: {
    color: "black",
    fontWeight: "800",
    textTransform: "capitalize",
    fontSize: 16,
    paddingBottom: 8,
  },
});
