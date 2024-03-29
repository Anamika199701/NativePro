import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import About from '../screen/About';
import Services from '../screen/Services';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screen/Profile';
import Login from '../screen/Login';
import Details from '../screen/Details';
import Form from '../screen/Form';
import OrderForm from '../screen/OrderForm';
import PaymentForm from '../screen/PaymentForm';
import TabNav from './TabNav';

const Stack = createStackNavigator();
const StackNav = () => {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={TabNav} options={{headerShown:false}}/> */}
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Services" component={Services}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Form" component={Form}/>
            <Stack.Screen name="OrderForm" component={OrderForm}/>
            <Stack.Screen name="PaymentForm" component={PaymentForm}/>
        </Stack.Navigator>
    )
}
export default StackNav;