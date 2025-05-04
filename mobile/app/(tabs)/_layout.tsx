import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useI18nStore } from "@/src/store/i18nStore";
import i18n from "@/src/utilities/i18n";

export default function TabLayout() {
  useI18nStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ffd33d",
          headerStyle: {
            backgroundColor: "#25292e",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: i18n.t("home"),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: i18n.t("settings"),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "settings-outline" : "settings-sharp"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
