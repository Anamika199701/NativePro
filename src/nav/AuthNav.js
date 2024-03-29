import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import About from '../screen/About';
import Services from '../screen/Services';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screen/Profile';
import Login from '../screen/Login';
import Otp from '../screen/Otp';

const Stack = createStackNavigator();
const AuthNav = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
				headerShown: false,
			}}/>
            <Stack.Screen name="Otp" component={Otp} options={{
				headerShown: false,
			}}/>
        </Stack.Navigator>
    )
}
export default AuthNav;