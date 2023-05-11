import CustomButton from "./CustomButton";
import lightTheme from "../../themes/lightTheme.js";
import darkTheme from "../../themes/darkTheme";
import CurrentTheme from "../../contexts/ThemeContext";
import React, { useContext } from "react";

export default function PrimaryButton(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  return (
    <CustomButton
      size={props.size}
      backgroundColor={theme.primaryButton.background}
      color={theme.primaryButton.text}
      onPress={props.onPress}
      ripple={theme.ripple ?? lightTheme.primaryButton.ripple}
    >
      {props.children}
    </CustomButton>
  );
}
PrimaryButton.defaultProps = {
  size: "medium",
};
