import { theme } from "@/src/theme/theme";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  ViewStyle,
} from "react-native";
import backgroundImageConfig from "@/src/utilities/backgroundImg";
import PrimaryButton from "@/src/components/PrimaryButton";
import i18n from "@/src/utilities/i18n";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useI18nStore } from "@/src/store/i18nStore";

export default function SettingsScreen() {
  // Get locale and setter from the Zustand store
  const currentLocale = useI18nStore((state) => state.locale);
  const setLocale = useI18nStore((state) => state.setLocale);

  // Local state for the picker selection, initialized from the store
  const [selectedLanguage, setSelectedLanguage] = useState(currentLocale);
  const [languages, setLanguages] = useState([
    { label: i18n.t("english"), value: "en" },
    { label: i18n.t("french"), value: "fr" },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        <View style={styles.container}>
          <View style={theme.row as ViewStyle}>
            <Text style={styles.baseText}>{i18n.t("language")}</Text>
            <Picker
              style={theme.picker}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => {
                setSelectedLanguage(itemValue); // Update local picker state
                setLocale(String(itemValue)); // Update global locale via Zustand
              }}
            >
              {languages.map((language) => (
                <Picker.Item
                  key={language.value}
                  label={language.label}
                  value={language.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: theme.container as Object,
  background: theme.appBackgroundImage as Object,
  safeArea: theme.safeArea as Object,
  baseText: {
    ...theme.typography.baseText,
    ...theme.typography.headings.h2,
    alignSelf: "center",
  } as Object,
});
