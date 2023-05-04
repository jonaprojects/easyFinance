import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Navbar from "../components/Navbar.js";
import Header from "../components/UI/Header.js";
import SubHeader from "../components/UI/SubHeader.js";
import PrimaryButton from "../components/UI/PrimaryButton.js";
import SecondaryButton from "../components/UI/SecondaryButton.js";
import Card from "../components/UI/Card/Card.js";
import CardContent from "../components/UI/Card/CardContent.js";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header>פופולרים</Header>
        <Card>
          <CardContent
            title="ריבית"
            text="ריבית היא משהו מאוד מעניין שכרגע אין לי הגדרה מדויקת אליו. אבל עדיין אני צריך שיהיה תוכן כאן לצרכים עיצוביים אז אין ברירה. "
          />
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.backgroundColor,
    textAlign: "right",
  },
  contentContainer: {
    marginRight: 30,
    marginLeft: 30,
  },
});
