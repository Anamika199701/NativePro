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


        </View >


    )

}

export default Form;