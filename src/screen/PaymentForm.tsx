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


        </View>

    )

}

export default PaymentForm;