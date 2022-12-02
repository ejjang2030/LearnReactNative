/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Box from "./components/Box";
import Counter from "./components/Counter";
import DateHead from "./components/DateHead";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";

const App = () => {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: "padding", android: undefined })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
  },
  avoid: {
    flex: 1,
  },
});

export default App;
