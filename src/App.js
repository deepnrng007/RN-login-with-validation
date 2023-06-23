import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { buttonStyles, styles } from "./styles";
import TextInputComponent from "./components/TextInput";
import {
  hasLowerCase,
  hasNumber,
  hasSpeialCase,
  hasUpperCase,
  isFieldEmpty,
  isValidEmail,
  lengthCheck,
} from "./utils";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const validationList = [
  { check: false, label: "8 or more characters" },
  { check: false, label: "1 Letter" },
  { check: false, label: "1 Number" },
  { check: false, label: "1 special character i.e. $,%,@" },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isNameFocused, setNameFocus] = useState(false);
  const [isUserNameFocused, setUserNameFocus] = useState(false);
  const [isEmailFocused, setEmailFocus] = useState(false);
  const [isPasswordFocused, setPasswordFocus] = useState(false);

  const onTextChange = (text) => {
    setPassword(text);
    checkValidationList(text);
  };
  const validate = () => {
    return validationList.every((item) => item.check === true);
  };

  const checkValidationList = (text) => {
    if (lengthCheck(text, 8)) validationList[0].check = true;
    else validationList[0].check = false;
    if (hasLowerCase(text)) validationList[1].check = true;
    else validationList[1].check = false;
    if (hasUpperCase(text)) validationList[2].check = true;
    else validationList[2].check = false;
    if (hasSpeialCase(text)) validationList[3].check = true;
    else validationList[3].check = false;
  };

  const checkValidation = () => {
    return true;
    return (
      !isFieldEmpty(name) &&
      !isFieldEmpty(username) &&
      !isFieldEmpty(email) &&
      !isFieldEmpty(password) &&
      isValidEmail(email) &&
      validate()
    );
  };
  const checkFieldsAndSubmit = () => {
    if (isFieldEmpty(name)) {
      alert("Please enter your name");
      return;
    }
    if (isFieldEmpty(username)) {
      alert("Please enter username");
      return;
    }

    if (isFieldEmpty(email)) {
      alert("Please enter email");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (isFieldEmpty(password)) {
      alert("Please enter password");
      return;
    }

    if (!validate()) {
      alert("Please check your password");
      return;
    }

    Alert.alert("User created");
  };

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Sign Up to Dribble</Text>

        <View style={styles.socialContainer}>
          <Pressable onPress={() => {}} style={buttonStyles.button}>
            <Text style={buttonStyles.text}>Sign up with Google</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={buttonStyles.button2}>
            <Text style={buttonStyles.textGrey}>Twitter</Text>
          </Pressable>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "#606163" }}>
              OR
            </Text>
          </View>
          <View style={styles.line} />
        </View>

        <TextInputComponent
          title={"Name"}
          onChange={(value) => setName(value)}
          value={name}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
          isFocused={isNameFocused}
        />
        <TextInputComponent
          title={"Username"}
          onChange={(value) => setUserName(value)}
          value={username}
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
          isFocused={isUserNameFocused}
        />
        <TextInputComponent
          title={"Email"}
          onChange={(value) => setEmail(value)}
          value={email}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          isFocused={isEmailFocused}
        />
        <TextInputComponent
          title={"Password"}
          onChange={onTextChange}
          value={password}
          isPassword={true}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          isFocused={isPasswordFocused}
        />

        <View style={styles.socialContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="#F72E99"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {
              console.log(isChecked);
            }}
          />
          <Text style={styles.subTitle}>
            Creating an account means you’re okay with our Terms of Service,
            Privacy Policy, and our default Notification Settings.
          </Text>
        </View>

        <Pressable
          onPress={checkFieldsAndSubmit}
          style={buttonStyles.buttonPink}
          disabled={!checkValidation()}
        >
          <Text style={buttonStyles.text}>Create Account</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
