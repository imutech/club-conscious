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

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImageConfig} style={styles.background}>
        <View style={styles.container}>
          <View style={theme.row as ViewStyle}>
            <Text style={styles.baseText}>{i18n.t("language")}</Text>
          </View>
          <PrimaryButton
            bgColor={theme.colors.primary}
            pinnedBottom
            onPress={() => {
              // Handle button press here
              console.log("Settings button pressed!");
            }}
            label={`${i18n.t("save")}`}
            style={{ marginTop: 20 }}
          />
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
