import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import { I18nManager } from "react-native";
import { Fragment } from "react";
import Navbar from "./components/Navbar";

I18nManager.forceRTL(true); //? RTL support (this will contain content in hebrew!)
I18nManager.allowRTL(true);

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Navbar />
        <Welcome />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
