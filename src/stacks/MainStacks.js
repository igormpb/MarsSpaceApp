import React from "react"

import { createStackNavigator } from "@react-navigation/stack"
import Preload from "../screens/Preload";
import SignIn from "../screens/SingIn";
import SingUp from "../screens/SingUp";
import Home from "../screens/Home";



const Stack = createStackNavigator();
export default function MainStack(){
    return(
        <Stack.Navigator
        initialRouteName="SingUp"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Preload" component={Preload}/>
            <Stack.Screen name="SingIn" component={SignIn}/>
            <Stack.Screen name="SingUp" component={SingUp}/>
            <Stack.Screen name="Home" component={Home}/>


        </Stack.Navigator>
    );
}