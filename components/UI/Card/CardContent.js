import CardText from "./CardText";
import CardTitle from "./CardTitle";

import { View, StyleSheet, Fragment } from "react-native";

export default function CardContent(props) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <CardTitle>{props.title}</CardTitle>
      </View>
      <View>
        <CardText>{props.text}</CardText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});
