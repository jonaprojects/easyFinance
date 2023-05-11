import CardText from "./CardText";
import CardTitle from "./CardTitle";

import { View, StyleSheet, Fragment, Text } from "react-native";
import lightTheme from "../../../themes/lightTheme";
import darkTheme from "../../../themes/darkTheme";
import CurrentTheme from "../../../contexts/ThemeContext";
import { useContext } from "react";

export default function CardContent(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <CardTitle>{props.title}</CardTitle>
      </View>
      <View style={{}}>
        <CardText>{props.text}</CardText>
      </View>
    </View>
  );
}
const getStyles = (theme) =>
  StyleSheet.create({
    titleContainer: {
      marginTop: 10,
      marginBottom: 10,
    },
    contentContainer: {
      paddingBottom: 5,
      paddingRight: 2, 
      paddingLeft: 2,
      
    }
  });
