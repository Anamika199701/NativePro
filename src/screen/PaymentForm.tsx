import React from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';
import BottomNav from '../nav/BottomNav';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import StepBar from '../components/StepBar';


const PaymentForm = () => {
    const data = [
        { id: 1, image: require('../assets/images/pestcontrol.jpg') },
        { id: 2, image: require('../assets/images/maid.jpg') },
        { id: 3, image: require('../assets/images/cloth.jpg') },
        { id: 4, image: require('../assets/images/recyc.jpg') }
    ]
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <StepBar />
            <ScrollView>
                <View style={{
                    margin: 10
                }}>
                    <View>
                        <Text>No. of Cloths :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter No. of Cloths'
                        />
                    </View>
                    <View>
                        <Text>Cloth Types :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter Cloth Types'
                        />
                    </View>
                    <View>
                        <Text>Delivery Time :</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: Colors.GRAYHARD,
                                borderRadius: 10,
                                height: 50,
                                paddingHorizontal: 10

                            }}
                            placeholder='Enter Delivery Time'
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
                    <Button title='Submit' />

                </View>

            </ScrollView>

        </View>

    )

}

export default PaymentForm;