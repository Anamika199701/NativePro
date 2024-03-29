import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screen/Home';
import About from '../screen/About';
import { Text, View } from 'react-native';
import TabNav from './TabNav';
import MainNav from './MainNav';
import StackNav from './StackNav';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return(
        <Drawer.Navigator >
            {/* <Drawer.Screen name="Main" component={TabNav} 
            options={{
                headerShown:false
               // drawerItemStyle: { display: "none" }
              }}
              /> */}
            <Drawer.Screen name="Main" component={StackNav} 
            options={{
                headerShown:false
               // drawerItemStyle: { display: "none" }
              }}
              />
            {/* <Drawer.Screen name="Home" component={Home}/>*/}
            <Drawer.Screen name="About" component={About} /> 
        </Drawer.Navigator>
    )
}

export default DrawerNav;