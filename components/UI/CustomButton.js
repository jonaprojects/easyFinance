import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

/**
 *
 * @param {string} size
 * @returns returns actual units from the string that represents the size of the button
 */
function sizeToUnits(size) {
  switch (
    size //TODO: fix and adjust these later
  ) {
    case "large":
      return {
        width: 120,
        height: 40,
        fontSize: 24,
      };
    case "medium":
      return {
        width: 120,
        height: 40,
        fontSize: 18,
      };
    case "small":
      return {
        width: 120,
        height: 40,
        fontSize: 16,
      };
    default:
      {
        console.log("default!!");
      }
      return {
        width: 120,
        height: 40,
        fontSize: 18,
      };
  }
}

/**
 * A custom button component
 * @param {props} backgroundColor, size, color, onPress, text borderColor, borderWidth, bold
 */
export default function CustomButton(props) {
  const units = sizeToUnits(props.size);
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: units.width,
        height: units.height,
        backgroundColor: props.backgroundColor,
        borderWidth: props.borderWidth ?? 0,
        borderColor: props.borderColor ?? "#fff",
      }}
      android_ripple={{ color: props.ripple }}
    >
      <Text
        style={{
          color: props.color ?? "#000",
          fontSize: units.fontSize,
          fontWeight: props.bold ?? "bold",
        }}
      >
        {props.children}
      </Text>
    </Pressable>
  );
}

CustomButton.defaultProps = {
  borderWidth: 0,
  borderColor: "#fff",
  size: "medium",
};
