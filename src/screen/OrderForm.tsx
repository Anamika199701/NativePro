import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';
import BottomNav from '../nav/BottomNav';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import Button from '../components/Button';
import StepBar from '../components/StepBar';

const OrderForm = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
            }}
        >



        </View>

    )

}

export default OrderForm;
