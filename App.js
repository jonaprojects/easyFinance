import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Welcome from "./screens/Welcome";
import { I18nManager } from "react-native";
import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./screens/Home.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FAQ from "./screens/FAQ";
import CurrentTheme from "./contexts/ThemeContext";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

const Tab = createBottomTabNavigator();

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  return (
    <CurrentTheme.Provider value={[currentTheme, setCurrentTheme]}>
      <NavigationContainer>
        <Fragment>
          <StatusBar style="auto" />
          <SafeAreaView style={styles.container}>
            <Navbar />
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                activeTintColor: "gray",
                inactiveTintColor: "black",
                tabBarStyle: {
                  paddingHorizontal: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  backgroundColor: "#F2F2F2",
                },
                tabBarAnimationEnabled: true, // enable animation
              }}
            >
              <Tab.Screen
                name="בית"
                component={Home}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require("./assets/home.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="שאלות נפוצות"
                component={FAQ}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require("./assets/faq.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="לומדות"
                component={Welcome}
                options={{
                  tabBarIcon: () => (
                    <Image
                      source={require("./assets/learn.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </Fragment>
      </NavigationContainer>
    </CurrentTheme.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
