import lightTheme from "../../themes/lightTheme";
import { Text, View, StyleSheet } from "react-native";

export default function SubHeader(props) {
  return (
    <Text
      style={{
        fontSize: 24,
        color: lightTheme.secondaryText,
        fontWeight: "bold",
      }}
    >
      {props.children}
    </Text>
  );
}
