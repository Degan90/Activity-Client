import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./Navigators/AppNavigator";
import HomeScreen from "./screens/HomeScreen";
import ActivityDetailScreen from "./screens/ActivityDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen from "./screens/Screen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
