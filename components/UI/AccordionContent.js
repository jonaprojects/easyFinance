import { View, Pressable, StyleSheet } from "react-native";
import AccordionListItem from "./Accordion";
import { Divider } from "react-native-paper";
import SecondaryText from "./SecondaryText";
export default function AccordionContent(props) {
  return (
    <AccordionListItem title={props.title} openAtStart={props.openAtStart}>
      <Divider />
      <View style={styles.contentContainer}>
        <SecondaryText>{props.text}</SecondaryText>
      </View>
      <Divider />
    </AccordionListItem>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
  },
});
