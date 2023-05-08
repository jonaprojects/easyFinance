import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import lightTheme from "../themes/lightTheme";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CurrentTheme from "../contexts/ThemeContext";

export default function Navbar() {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme);

  const toggleTheme = () => {
    setThemeContext((currentTheme) => {
      if (currentTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.settingsContainer}>
        <Pressable onPress={toggleTheme}>
          <Feather name="sun" size={24} color={theme.navbar.icon} />
        </Pressable>
      </View>
      <Pressable style={styles.logoContainer}>
        <Image
          source={require("../assets/lifeboat.png")}
          style={{ width: 32, height: 32 }}
        />
        <Text style={styles.logoText}>כלכלה קלה</Text>
      </Pressable>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    navbarContainer: {
      paddingTop: 12,
      paddingBottom: 12,
      flexDirection: "row",
      backgroundColor: theme.navbar.background,
      marginTop: 25,
      paddingRight: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    logoContainer: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      right: 20,
    },
    settingsContainer: {
      left: 20,
    },
    logoText: {
      fontWeight: "bold",
      color: theme.navbar.text,
      fontSize: 18,
      marginRight: 5,
    },
  });
