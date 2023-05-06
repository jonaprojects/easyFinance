import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "./Card";

const AccordionListItem = ({ title, children, openAtStart }) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(
    new Animated.Value(openAtStart ? 1 : 0)
  ).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });
  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });
  useEffect(() => {
    setOpen(openAtStart);
  }, [openAtStart]);

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="white" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
        <View
          style={styles.bodyContainer}
          onLayout={(event) =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }
        >
          <Card color="#1A212C">{children}</Card>
        </View>
      </Animated.View>
    </>
  );
};
export default AccordionListItem;

const styles = StyleSheet.create({
  bodyBackground: {
    backgroundColor: "#1B2129",
    overflow: "hidden",
    borderRadius: 14,
  },
  title: {
    color: "#FFF",
    marginRight: 8,
    fontSize: 18,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "#151B23",
  },
  bodyContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#1B2129",
    width: "100%",
  },
});