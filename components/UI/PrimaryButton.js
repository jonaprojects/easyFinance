import CustomButton from "./CustomButton";
import lightTheme from "../../themes/lightTheme.js";
// TODO: update this component to support a context of light/dark theme and update accordingly

export default function PrimaryButton(props) {
  return (
    <CustomButton
      size={props.size}
      backgroundColor={lightTheme.primary}
      color="#000000"
      onPress={props.onPress}
    >
      {props.children}
    </CustomButton>
  );
}
PrimaryButton.defaultProps = {
  size: "medium",
};
