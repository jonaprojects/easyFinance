import { Text, StyleSheet } from "react-native";
import lightTheme from "../../../themes/lightTheme";

export default function CardTitle(props) {
  return <Text style={styles.cardTitle}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 24,
    color: lightTheme.card.title,
    fontWeight: "bold",
  },
});
