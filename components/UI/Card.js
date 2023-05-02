import { Pressable, StyleSheet, Text } from "react-native";

export default function Card(props) {
  return (
    <Pressable
      style={{
        backgroundColor: props.backgroundColor ?? "#ffffff",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // required for Android shadow
        padding: 10,
        borderRadius: 11,
      }}
    >
      {props.children}
    </Pressable>
  );
}
