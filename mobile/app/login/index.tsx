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
import PrimaryButton from "@/src/components/PrimaryButton";

// Modular input component
function FormInput({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
}) {
  return (
    <View style={theme.form.field as object}>
      <Text style={theme.form.labelInput}>{label}</Text>
      <TextInput
        style={theme.form.input as object}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {!!error && <Text style={theme.form.errorText as object}>{error}</Text>}
    </View>
  );
}

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
            style={{ ...theme.typography.headings.h1, margin: 20 } as object}
          >
            {i18n.t("login_in")}
          </Text>
          <FormInput
            label={i18n.t("username")}
            value={username}
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
            error={!formErrors.usernameValid ? "Required" : undefined}
          />
          <FormInput
            label={i18n.t("password")}
            value={password}
            onChangeText={(text) => {
              if (text === "")
                setFormErrors({
                  ...formErrors,
                  passwordValid: false,
                  credentialsValid: {
                    ...formErrors.credentialsValid,
                    isValidCredentials: true,
                  },
                });
              else
                setFormErrors({
                  ...formErrors,
                  passwordValid: true,
                  credentialsValid: {
                    ...formErrors.credentialsValid,
                    isValidCredentials: true,
                  },
                });
              onChangePassword(text);
            }}
            error={!formErrors.passwordValid ? "Required" : undefined}
            secureTextEntry
          />
          <View
            style={
              { flexDirection: "column", gap: 20, marginTop: 20 } as object
            }
          >
            <PrimaryButton
              bgColor={"#CB2790"}
              label={i18n.t("login")}
              onPress={() => {}}
              style={{ alignSelf: "flex-start", marginLeft: 20, width: 150 }}
            ></PrimaryButton>
            <PrimaryButton
              bgColor={"#CB2790"}
              label={i18n.t("register")}
              onPress={() => {}}
              style={{ alignSelf: "flex-start", marginLeft: 20, width: 150 }}
            ></PrimaryButton>
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
  safeArea: theme.safeArea as object,
  background: { ...theme.appBackgroundImage, alignItems: "end" } as object,
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
