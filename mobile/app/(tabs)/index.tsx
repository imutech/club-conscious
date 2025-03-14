import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import backgroundImageConfig from "@/src/utilities/backgroundImg";
import { theme } from "@/src/theme/theme";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        #TODO: Add Toast for API connection failed
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: theme.appBackgroundImage as any,
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
