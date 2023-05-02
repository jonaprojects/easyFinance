import CustomButton from "./CustomButton";
import lightTheme from "../../themes/lightTheme.js";
// TODO: update this component to support a context of light/dark theme and update accordingly

export default function SecondaryButton(props) {
  return (
    <CustomButton
      size={props.size}
      backgroundColor={lightTheme.secondary}
      color={lightTheme.text}
      onPress={props.onPress}
    >{props.children}</CustomButton>
  );
}
SecondaryButton.defaultProps = {
  size: "medium",
};
