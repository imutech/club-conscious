import { Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import backgroundImageConfig from "@/src/utilities/backgroundImg";
import { theme } from "@/src/theme/theme";
import i18n from "@/src/utilities/i18n";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        <Text style={styles.baseText}>{i18n.t("hello")}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: theme.appBackgroundImage as Object,
  safeArea: theme.safeArea as Object,
  baseText: {
    ...theme.typography.baseText,
    ...theme.typography.sizing.lg,
    alignSelf: "center",
  } as Object,
});
