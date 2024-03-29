import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				backgroundColor: Colors.GREENMID,
				height: '100%',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					flex: 1,
				}}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate('Home')}
					style={{
						borderRightRadius: 1,
						borderRightColor: Colors.GRAYLOW,
						width: '25%',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<Icon name="home" size={25} color={Colors.GRAYLOW} />
						<Text
							style={{
								color: Colors.WHITE,
								fontWeight: '500',
							}}
						>
							Home
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Services')}
					style={{
						borderRightRadius: 1,
						borderRightColor: Colors.GRAYLOW,
						width: '25%',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<Icon name="th-large" size={25} color={Colors.GRAYLOW} />
						<Text
							style={{
								color: Colors.WHITE,
								fontWeight: '500',
							}}
						>
							Services
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderRightRadius: 1,
						borderRightColor: Colors.GRAYLOW,
						width: '25%',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<Icon name="shopping-cart" size={25} color={Colors.GRAYLOW} />
						<Text
							style={{
								color: Colors.WHITE,
								fontWeight: '500',
							}}
						>
							Orders
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Profile')}
					style={{
						borderRightRadius: 1,
						borderRightColor: Colors.GRAYLOW,
						width: '25%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<Icon name="sliders" size={25} color={Colors.GRAYLOW} />
						<Text
							style={{
								color: Colors.WHITE,
								fontWeight: '500',
							}}
						>
							More
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BottomNav;
