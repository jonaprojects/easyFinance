import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import lightTheme from "../themes/lightTheme";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

//        <Feather name="sun" size={24} color="black" />
export default function Navbar() {
  //  <Entypo name="lifebuoy" size={24} color="black" />
  //         <FontAwesome name="moon-o" size={24} color="black" />

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.settingsContainer}>
        <MaterialIcons name="settings" size={24} color="black" />
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

const styles = StyleSheet.create({
  navbarContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: "row",
    backgroundColor: lightTheme.navbar.background,
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
    color: "#000000",
    fontSize: 18,
    marginRight: 5,
  },
});
