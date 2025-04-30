import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from "react-native";
import i18n from "@/src/utilities/i18n";
import { theme } from "@/src/theme/theme";
import backgroundImageConfig from "@/src/utilities/backgroundImg";

export default function Login() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [formErrors, setFormErrors] = React.useState<IFormErrors>({
    usernameValid: true,
    passwordValid: true,
    credentialsValid: {
      message: "Invalid Credentials",
      isValidCredentials: true,
    },
  });
  interface IFormErrors {
    usernameValid: boolean;
    passwordValid: boolean;
    credentialsValid: {
      message: "Invalid Credentials" | "Server Error";
      isValidCredentials: boolean;
    };
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        <View style={styles.container}>
          <Text
            style={{ ...theme.typography.headings.h1, margin: 20 } as Object}
          >
            {i18n.t("login_in")}
          </Text>
          <View style={theme.form.field as Object}>
            <Text style={theme.form.labelInput}>{i18n.t("username")}</Text>
            <TextInput
              style={theme.form.input as Object}
              onChangeText={(text) => {
                if (text === "")
                  setFormErrors({
                    ...formErrors,
                    usernameValid: false,
                    credentialsValid: {
                      ...formErrors.credentialsValid,
                      isValidCredentials: true,
                    },
                  });
                else
                  setFormErrors({
                    ...formErrors,
                    usernameValid: true,
                    credentialsValid: {
                      ...formErrors.credentialsValid,
                      isValidCredentials: true,
                    },
                  });
                onChangeUsername(text);
              }}
              value={username}
            />
            {!formErrors.usernameValid && (
              <Text style={theme.form.errorText as Object}>{"Required"}</Text>
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  safeArea: theme.safeArea as Object,
  background: { ...theme.appBackgroundImage, alignItems: "end" } as Object,
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
