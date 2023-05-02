import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar.js";
import Header from "../components/UI/Header.js";
import SubHeader from "../components/UI/SubHeader.js";
import PrimaryButton from "../components/UI/PrimaryButton.js";
import SecondaryButton from "../components/UI/SecondaryButton.js";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header>אבודים בשיחה עם הנציג בבנק?</Header>
        <View style={styles.subheaderContainer}>
          <SubHeader>הגיע הזמן לקחת את העניינים בידיים</SubHeader>
        </View>
        <Image
          source={require("../assets/illustrations/moneyClean.png")}
          style={styles.image}
        ></Image>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.backgroundColor,
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
    marginLeft: 20
  },
});
