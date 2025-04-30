import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import i18n from "@/src/utilities/i18n";
import { theme } from "@/src/theme/theme";

export default function Login() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={theme.typography.sizing.lg}>{i18n.t("login_in")}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  safeArea: theme.safeArea as Object,
  background: { ...theme.appBackgroundImage, alignItems: "end" } as Object,
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
