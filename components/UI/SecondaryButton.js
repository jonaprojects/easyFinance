import CustomButton from "./CustomButton";
import lightTheme from "../../themes/lightTheme.js";
import darkTheme from "../../themes/darkTheme";
import CurrentTheme from "../../contexts/ThemeContext";
import React, { useContext } from "react";

export default function SecondaryButton(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;

  return (
    <CustomButton
      size={props.size}
      backgroundColor={theme.secondaryButton.background}
      color={theme.secondaryButton.text}
      onPress={props.onPress}
    >
      {props.children}
    </CustomButton>
  );
}
SecondaryButton.defaultProps = {
  size: "medium",
};
