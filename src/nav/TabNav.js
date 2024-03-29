import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screen/Home';
import About from '../screen/About';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Services from '../screen/Services';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();
const TabNav = () => {
	return (
		<Tab.Navigator
			options={{
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={StackNav}
				tabBarOptions={{
					activeTintColor: 'red',
					inactiveTintColor: 'black',
				}}
				options={{
					//title: 'Meal Detail',
					tabBarLabel: ({ focused, color }) => <Text style={{ color: focused ? 'red' : 'aqua' }}>Home</Text>,
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<Icon name="home" size={30} color={focused ? 'red' : 'black'} />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Services"
				component={Services}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<Icon name="user" size={30} color="#000" />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="search"
				component={About}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<Icon name="search" size={30} color="#000" />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Orders"
				component={About}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<Icon name="shopping-cart" size={30} color="#000" />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={About}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View>
								<Icon name="user" size={30} color="#000" />
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNav;
