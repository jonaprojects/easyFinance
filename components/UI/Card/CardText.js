import { Text, StyleSheet } from "react-native";
import lightTheme from "../../../themes/lightTheme";
import darkTheme from "../../../themes/darkTheme";
import { useContext } from "react";
import CurrentTheme from "../../../contexts/ThemeContext";

export default function CardText(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme);

  return (
    <Text style={styles.cardText}>
      {props.children}
      <Text style={styles.cardLink}> קרא עוד...</Text>
    </Text>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    cardText: {
      fontSize: 14,
      color: theme.card.text,
      fontWeight: "bold",
    },
    cardLink: {
      fontSize: 14,
      color: theme.card.link,
      fontWeight: "bold",
    },
  });
