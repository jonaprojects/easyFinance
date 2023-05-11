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
      android_ripple={{
        color: theme.card.rippleColor,
      }}
      style={{
        backgroundColor: props.backgroundColor ?? theme.card.background,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 25,
        elevation: theme.card.shadowElevation, // required for Android shadow
        padding: 15,
        borderRadius: 15,
        borderWidth: theme.card.borderWidth ?? 0,
        borderColor: theme.card.borderColor ?? "#000000",
        shadowColor: theme.card.shadowColor,
      }}
    >
      {props.children}
    </Pressable>
  );
}
