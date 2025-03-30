import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { theme } from "@/src/theme/theme";

type props = {
  bgColor: string;
  onPress: () => void;
  label: string;
  style?: object;
  children?: React.ReactNode;
  pinnedBottom?: boolean;
};

function PrimaryButton(props: props) {
  const { bgColor, onPress, label, style, children, pinnedBottom } = props;
  return (
    <Pressable
      style={[
        styles.button,
        pinnedBottom && styles.pinnedBottom,
        { backgroundColor: bgColor, ...style },
      ]}
      onPress={onPress}
    >
      {children && children}
      <Text style={{ ...styles.text }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    ...theme.typography.baseText,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  pinnedBottom: {
    position: "absolute",
    bottom: 0,
    marginBottom: theme.spacing.md,
  },
});
export default PrimaryButton;
