import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import lightTheme from "../themes/lightTheme";
import { Feather } from "@expo/vector-icons";
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
          {themeContext === "dark" ? (
            <Feather name="sun" size={24} color={theme.navbar.icon} />
          ) : (
            <Image
              source={require("../assets/darkTheme.png")}
              style={{ width: 24, height: 24 }}
            />
          )}
        </Pressable>
      </View>
      <Pressable style={styles.logoContainer}>
        <Text style={styles.logoText}>כלכלה קלה</Text>
        <Image
          source={require("../assets/lifeboat.png")}
          style={{ width: 32, height: 32 }}
        />
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
