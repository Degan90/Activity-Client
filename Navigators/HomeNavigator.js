import React from "react";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import EditScreen from "../screens/EditScreen";


const Stack = createNativeStackNavigator();

function HomeNavigator(props) {
    return (
       <Stack.Navigator>
           <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
           <Stack.Screen options={{ headerShown: false }} name="ActivityDetailScreen" component={ActivityDetailScreen} />
           <Stack.Screen options={{ headerShown: false }} name="EditScreen" component={EditScreen} />
       </Stack.Navigator>
    );
}

export default HomeNavigator;