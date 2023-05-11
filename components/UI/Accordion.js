import React, { useState, useRef, useEffect, useContext } from "react";
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
import darkTheme from "../../themes/darkTheme";
import CurrentTheme from "../../contexts/ThemeContext";
import { IconButton } from "react-native-paper";

const AccordionListItem = ({ title, children, openAtStart, icon }) => {
  //? handling the theme context (light or dark mode)
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme, icon);

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
          <View style={styles.iconAndText}>
            {icon && (
              <IconButton
                icon={icon}
                compact={true}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 8,
                }}
              />
            )}
            <Text style={styles.title}>{title}</Text>
          </View>

          <Animated.View
            style={{
              transform: [{ rotateZ: arrowAngle }],
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-down"
              size={25}
              color={theme.accordion.icon}
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

const getStyles = (theme, icon) =>
  StyleSheet.create({
    bodyBackground: {
      backgroundColor: theme.accordion.background,
      overflow: "hidden",
    },
    iconAndText: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    title: {
      color: theme.accordion.title,
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
      paddingLeft: icon ? 5 : 15,
      paddingRight: 15,
      backgroundColor: theme.accordion.background,
    },
    bodyContainer: {
      position: "absolute",
      bottom: 0,
      backgroundColor: theme.accordion.background,
      width: "100%",
      paddingLeft: 10,
      paddingRight: 10,
    },
  });
