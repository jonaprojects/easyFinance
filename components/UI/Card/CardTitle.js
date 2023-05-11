import { Text, StyleSheet } from "react-native";
import lightTheme from "../../../themes/lightTheme";
import darkTheme from "../../../themes/darkTheme";
import { useContext } from "react";
import CurrentTheme from "../../../contexts/ThemeContext";

export default function CardTitle(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme);
  return <Text style={styles.cardTitle}>{props.children}</Text>;
}

const getStyles = (theme) =>
  StyleSheet.create({
    cardTitle: {
      fontSize: 21,
      color: theme.card.title,
      fontWeight: "bold",
    },
  });
