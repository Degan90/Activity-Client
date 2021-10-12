import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"

import HomeNavigator from './HomeNavigator';
import FormInputScreen from '../screens/FormInputScreen';


const Tab = createBottomTabNavigator();
function AppNavigator(props) {
    return (
    <Tab.Navigator >
        <Tab.Screen  name="Home" component={HomeNavigator}  options={{
         tabBarIcon:({color}) => <MaterialCommunityIcons name="home" size={30} color={color}/>}} />
        <Tab.Screen name="Add" component={FormInputScreen} options={{
         tabBarIcon:({color}) => <MaterialCommunityIcons name="plus-circle" size={30} color={color}/>}} />
    </Tab.Navigator>
    );
}

export default AppNavigator;