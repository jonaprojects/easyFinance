import { Pressable, StyleSheet, Text } from "react-native";
import lightTheme from "../../../themes/lightTheme";
import darkTheme from "../../../themes/darkTheme";
import CurrentTheme from "../../../contexts/ThemeContext";
import { useContext } from "react";
export default function Card(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;

  return (
    <Pressable
      style={{
        backgroundColor: props.backgroundColor ?? theme.card.background,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3, // required for Android shadow
        padding: 15,
        borderRadius: 25,
      }}
    >
      {props.children}
    </Pressable>
  );
}
