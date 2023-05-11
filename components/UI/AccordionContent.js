import { View, Pressable, StyleSheet, Text, Image } from "react-native";
import AccordionListItem from "./Accordion";
import { Divider } from "react-native-paper";
import SecondaryText from "./SecondaryText";
import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";
import CurrentTheme from "../../contexts/ThemeContext";
import { useContext } from "react";

export default function AccordionContent(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  return (
    <AccordionListItem
      title={props.title}
      openAtStart={props.openAtStart}
      icon={props.icon}
    >
      <Divider />
      <View style={styles.contentContainer}>
        <Text
          style={{
            color: theme.accordion.text,
            fontWeight: "bold",
          }}
        >
          {props.text}
        </Text>
      </View>
      <Divider />
    </AccordionListItem>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

AccordionContent.defaultProps = {
  icon: null,
};
