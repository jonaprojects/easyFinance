import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import lightTheme from "../../themes/lightTheme";

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
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View
            style={{
              transform: [{ rotateZ: arrowAngle }],
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-down"
              size={25}
              color={lightTheme.accordion.icon}
            />
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
          {children}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default AccordionListItem;

const styles = StyleSheet.create({
  bodyBackground: {
    backgroundColor: lightTheme.accordion.background,
    overflow: "hidden",
  },
  title: {
    color: lightTheme.accordion.color,
    marginRight: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: lightTheme.accordion.background,
  },
  bodyContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: lightTheme.accordion.background,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
