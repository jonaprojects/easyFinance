import { Text, View, StyleSheet } from "react-native";
import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";
import CurrentTheme from "../../contexts/ThemeContext";
import { useContext } from "react";

export default function SubHeader(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontSize: 24,
        color: theme.secondaryText,
        fontWeight: "bold",
      }}
    >
      {props.children}
    </Text>
  );
}
