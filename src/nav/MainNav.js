import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screen/Home';
import About from '../screen/About';
import { Text, View } from 'react-native';
import TabNav from './TabNav';

const MainNav = () => {
    return(
       <TabNav/> 
    )
}

export default MainNav;