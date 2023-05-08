import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";
import CurrentTheme from "../../contexts/ThemeContext";
import { Text, StyleSheet } from "react-native";
import { useContext } from "react";

export default function SecondaryText(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme);
  return <Text style={styles.secondaryText}>{props.children}</Text>;
}

const getStyles = (theme) =>
  StyleSheet.create({
    secondaryText: {
      color: theme.secondaryText,
      fontWeight: "bold",
    },
  });
