import React, { useEffect, useState } from 'react';
import { Appearance, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNav from '../nav/BottomNav';
import Colors from '../assets/Colors';
import Card from '../components/Card';
const Home = ({ navigation }) => {
	const [ isActive, setIsActive ] = useState(false);
	const [ timer, setTimer ] = useState(0);
	const colorScheme = Appearance.getColorScheme();
	console.log(colorScheme);
	const [ seconds, setSeconds ] = useState(new Date());
	const data = [
		{ name: 'Clothes on Rent', images: require('../assets/images/cloth.jpg') },
		{ name: 'Tailor', images: require('../assets/images/tailr.jpg') },
		{ name: 'Boutique', images: require('../assets/images/cloth.jpg') },
		{ name: 'Dryclean', images: require('../assets/images/cloth.jpg') },
		{ name: 'Technician', images: require('../assets/images/mechanics.jpeg') },
		{ name: 'Plumber', images: require('../assets/images/plumber.jpeg') },
		{ name: 'Painter', images: require('../assets/images/painter.jpeg') },
		{ name: 'Lawyer', images: require('../assets/images/lawyer.jpeg') },
		{ name: 'Teacher', images: require('../assets/images/teacher.jpg') },
	];
	const data2 = {
		title: 'Clothes Hygne Services',
		rating: 4,
		serviceDays: 1 - 2,
		types: 'Party Dresses',
		distance: 900,
	};
	const timerStart = () => {
		setIsActive(!isActive);
	};
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setTimer((prevSec) => prevSec + 1);
				setSeconds(new Date());
			}, 1000);
		} else if (!isActive && timer !== 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	});

	const timerReset = () => {
		setTimer(0);
		setIsActive(false);
		setSeconds(new Date());
	};
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 0.92,
				}}
			>
				<View
					style={{
						 flex: 1
					}}
				>
					<View
						style={{
							backgroundColor: colorScheme == 'dark' ? Colors.GREENHARD : Colors.YELLOWLIGHT,
							margin: 10,
							height: 120,
							borderRadius: 10,
							padding: 15,
						}}
					>
						<Text
							style={{
								color: Colors.BLACK,
								fontSize: 20,
								fontWeight: '800',
							}}
						>
							Hello, User!
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '600',
							}}
						>
							Welcome Back to Services...
						</Text>

						<View
							style={{
								marginVertical: 10,
							}}
						>
							<Text
								style={{
									fontSize: 14,
									fontWeight: '500',
								}}
							>
								You've given orders : Track Here
							</Text>
						</View>
					</View>
					<View
						style={{
							margin: 10,
						}}
					>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '700',
								color: Colors.BLACK,
							}}
						>
							{' '}
							Looking for other services
						</Text>
					</View>
					<View>
						<FlatList
							data={data}
							keyExtractor={(data) => data.name}
							horizontal
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => {
								return (
									<View
										style={{
											alignItems: 'center',
											justifyContent: 'center',
											margin: 10,
											//backgroundColor:Colors.GREEN,
											padding: 5,
											borderRadius: 60,
										}}
									>
										<Image
											source={item.images}
											style={{
												borderRadius: 80,
												width: 80,
												height: 80,
											}}
										/>
										<Text
											style={{
												fontSize: 12,
												fontWeight: '600',
												color: Colors.BLACK,
											}}
										>
											{item.name}
										</Text>
									</View>
								);
							}}
						/>
					</View>
					<ScrollView style={{
						//flex:1
					}}>
						{/* <Card data={data2} /> */}
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<TouchableOpacity onPress={() => navigation.navigate('Details')}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						<View
							style={{
								backgroundColor: Colors.GRAYLOW,
								margin: 10,
								padding: 10,
								borderRadius: 10,
								elevation: 5,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginBottom: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '700',
									}}
								>
									DryClean Services Users
								</Text>
								<Icon name="phone" size={20} color={Colors.REDHARD} />
							</View>

							<Text>50% OFF</Text>
						</View>
						
					</ScrollView>

					{/* <Text
						style={{
							fontSize: 30,
							fontWeight: '700',
							color: Colors.BLACK,
						}}
					>
						{seconds.toLocaleTimeString()}
					</Text> */}
					{/* <View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-around',
							marginVertical: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: isActive ? Colors.REDLOW : Colors.GREENLIGHT ,
								height: 40,
								width: 100,
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
								marginHorizontal: 10,
								elevation: 15,
							}}
							onPress={() => timerStart()}
						>
							{isActive ? (
								<Text
									style={{
										fontSize: 18,
										fontWeight: '700',
										color: Colors.BLACK,
									}}
								>
									Stop
								</Text>
							) : (
								<Text
									style={{
										fontSize: 18,
										fontWeight: '700',
										color: Colors.BLACK,
									}}
								>
									Start
								</Text>
							)}
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								backgroundColor: Colors.YELLOWLIGHT,
								height: 40,
								width: 100,
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
								elevation: 15,
							}}
							onPress={() => timerReset()}
						>
							<Text
								style={{
									fontSize: 18,
									fontWeight: '700',
									color: Colors.BLACK,
								}}
							>
								Reset
							</Text>
						</TouchableOpacity>
					</View> */}
				</View>
			</View>
			<View
				style={{
					flex: 0.08,
				}}
			>
				<BottomNav />
			</View>
		</View>
	);
};

export default Home;
