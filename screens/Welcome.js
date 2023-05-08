import React, { useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar.js";
import Header from "../components/UI/Header.js";
import SubHeader from "../components/UI/SubHeader.js";
import PrimaryButton from "../components/UI/PrimaryButton.js";
import SecondaryButton from "../components/UI/SecondaryButton.js";

import lightTheme from "../themes/lightTheme.js";
import darkTheme from "../themes/darkTheme.js";
import CurrentTheme from "../contexts/ThemeContext.js";

export default function Welcome() {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  var imagePath =
    themeContext === "light"
      ? require("../assets/illustrations/moneyClean.png")
      : require("../assets/illustrations/moneyCleanDark.png");
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header>אבודים בשיחה עם הנציג בבנק?</Header>
        <View style={styles.subheaderContainer}>
          <SubHeader>הגיע הזמן לקחת את העניינים בידיים</SubHeader>
        </View>
        <Image source={imagePath} style={styles.image}></Image>
        <View style={styles.buttons}>
          <View style={styles.primaryButtonContainer}>
            <PrimaryButton
              size="medium"
              onPress={() => {
                console.log("hello world");
              }}
            >
              המשך
            </PrimaryButton>
          </View>

          <SecondaryButton>למד עוד </SecondaryButton>
        </View>
      </View>
    </View>
  );
}
const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "right",
    },
    contentContainer: {
      marginLeft: 35,
      marginRight: 35,
    },
    image: {
      width: 270,
      height: 170,
    },
    subheaderContainer: {
      marginTop: 20,
    },
    buttons: {
      marginTop: 50,
      flexDirection: "row",
    },
    primaryButtonContainer: {
      marginRight: 10,
      marginLeft: 20,
    },
  });
