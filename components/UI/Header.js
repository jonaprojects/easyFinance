import { Text, View, StyleSheet } from "react-native";
import CurrentTheme from "../../contexts/ThemeContext";
import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";
import { useContext } from "react";

/**
 *
 * @param {children} children
 * @returns a header
 */
export default function Header(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontSize: 40,
        color: theme.h1,
        fontWeight: "bold",
        lineHeight: 48,
      }}
    >
      {props.children}
    </Text>
  );
}
