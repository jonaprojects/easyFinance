import lightTheme from "../../themes/lightTheme";
import { Text, StyleSheet } from "react-native";

export default function SecondaryText(props) {
  return <Text style={styles.secondaryText}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  secondaryText: {
    color: lightTheme.secondaryText,
    fontWeight: "bold",
  },
});
