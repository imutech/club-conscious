import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
import backgroundImageConfig from "@/src/utilities/backgroundImg";
import { theme } from "@/src/theme/theme";
import i18n from "@/src/utilities/i18n";
import React from "react";
import PrimaryButton from "@/src/components/PrimaryButton";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useI18nStore } from "@/src/store/i18nStore";
import LocationClubSelector from "@/src/modules/home/LocationClubSelector";

export default function Index() {
  useI18nStore();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        <View style={styles.container}>
          <PrimaryButton
            bgColor={"#CB2790"}
            label={i18n.t("login")}
            onPress={() => {
              router.push("/login");
            }}
            style={{ alignSelf: "flex-start", marginLeft: 20 }}
          >
            <Ionicons
              name="diamond-outline"
              size={20}
              color="black"
              style={{ paddingRight: 10 }}
            />
          </PrimaryButton>
          <LocationClubSelector />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: theme.container as Object,
  background: { ...theme.appBackgroundImage, alignItems: "end" } as Object,
  safeArea: theme.safeArea as Object,
  baseText: {
    ...theme.typography.baseText,
    ...theme.typography.sizing.lg,
    alignSelf: "center",
  } as Object,
});
