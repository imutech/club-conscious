import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
type AccordionProps = {
  title: string;
  children: React.ReactNode;
  headerStyle?: object;
  contentStyle?: object;
  headerTheme?: "badge" | undefined;
};

const GenericAccordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, children, headerStyle, contentStyle, headerTheme } = props;
  const setHeaderTheme = () => {
    if (headerTheme === "badge") {
      return styles.badgeHeader;
    }
    return { ...styles.header, ...headerStyle };
  };

  const setHeaderText = () => {
    if (headerTheme === "badge") {
      return styles.badgeHeaderText;
    }
    return {};
  };
  
  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={setHeaderTheme()} onPress={handlePress}>
        <Text style={setHeaderText()}>{title}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={{ ...styles.content, ...contentStyle }}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  header: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    width: "80%",
  },
  content: {
    backgroundColor: "#fff",
    padding: 15,
    width: "80%",
  },
  badgeHeader: {
    backgroundColor: "#CB2790",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: "80%",
  },
  badgeHeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GenericAccordion;
