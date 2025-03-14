import { Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import backgroundImageConfig from "@/src/utilities/backgroundImg";
import { theme } from "@/src/theme/theme";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        #TODO: Add Toast for API connection failed
        <Text style={styles.baseText}> Hello world</Text>
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
