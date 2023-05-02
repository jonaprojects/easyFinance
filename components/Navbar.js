import React from "react";
import { View, StyleSheet, Text } from "react-native";
import lightTheme from "../themes/lightTheme";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

export default function Navbar() {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>כלכלה קלה</Text>
        <Entypo name="lifebuoy" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    backgroundColor: lightTheme.navbar.background,
    marginTop: 25,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 18,
    marginRight: 5,
  },
});
