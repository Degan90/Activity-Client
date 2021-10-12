
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./Navigators/AppNavigator";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );

}
