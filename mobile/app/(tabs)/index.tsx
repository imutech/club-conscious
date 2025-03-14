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
      <ImageBackground source={backgroundImageConfig} style={}>
        #TODO: Add Toast for API connection failed
        {/* <Toast
        visible={useGlobalStore.getState().apiConnectionFailed}
        position={Toast.positions.CENTER}
      >
        We're experiencing technical difficulties. Please try again later.
      </Toast> */}
        <View style={styles.container}>
          <Text style={styles.text}>Home screen</Text>
          Go to About screen
          <Link href="/(tabs)/settings" style={styles.button}></Link>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: theme.appBackgroundImage,
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
