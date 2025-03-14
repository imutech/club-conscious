import { theme } from "@/src/theme/theme";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import backgroundImageConfig from "@/src/utilities/backgroundImg";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={backgroundImageConfig}
        style={styles.background}
      ></ImageBackground>
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
