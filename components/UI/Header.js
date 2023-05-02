import lightTheme from "../../themes/lightTheme";
import { Text, View, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <Text
      style={{
        fontSize: 40,
        color: lightTheme.h1,
        fontWeight: "bold",
        lineHeight: 48,
      }}
    >
      {props.children}
    </Text>
  );
}
