import React from 'react';
import { FlatList, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';
import BottomNav from '../nav/BottomNav';

import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import StepBar from '../components/StepBar';

const Form = () => {
    const navigation = useNavigation();
    const data = [
        { id: 1, image: require('../assets/images/pestcontrol.jpg') },
        { id: 2, image: require('../assets/images/maid.jpg') },
        { id: 3, image: require('../assets/images/cloth.jpg') },
        { id: 4, image: require('../assets/images/recyc.jpg') }
    ]
    const onPress = () => {
        navigation.navigate('OrderForm')
    }
    return (

        <View
            style={{
                flex: 1,
            }}
        >
            {/* <View
                style={{
                    flex: 0.92,
                    zIndex: 1
                }}
            > */}
            <StepBar />
            <ScrollView>
                <View style={{
                    margin: 10
                }}>
                    <View>
                        <Text>Name :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter your name'
                        />
                    </View>
                    <View>
                        <Text>Email :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter your email'
                        />
                    </View>
                    <View>
                        <Text>Contact No :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter contact no.'
                        />
                    </View>
                    <View>
                        <Text>Flat No :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter Flat no.'
                        />
                    </View>
                    <View>
                        <Text>House No :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter House no.'
                        />
                    </View>
                    <View>
                        <Text>City</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter City'
                        />
                    </View>
                    <View>
                        <Text>State  :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter State'
                        />
                    </View>
                    <View>
                        <Text>Localization:</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter Localize'
                        />
                    </View>
                    <View>
                        <Text>Pin Code:</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter pincode'
                        />
                    </View>
                    <Button title={'Save & Continue'} onPress={onPress} />
                </View>

            </ScrollView>
            {/* </View> */}

            {/* <View
                style={{
                    flex: 0.08
                }}
            >
                <BottomNav />
            </View> */}
        </View >


    )

}

export default Form;