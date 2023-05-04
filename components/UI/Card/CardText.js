import { Text, StyleSheet } from "react-native";
import lightTheme from "../../../themes/lightTheme";

export default function CardText(props) {
  return <Text style={styles.cardText}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 16,
    color: lightTheme.card.text,
  },
  cardLink: {
    fontSize: 16,
    color: lightTheme.card.link,
  },
});
