import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'

interface CardProps {
    title: string;
    serviceDays: number;
    types: string;
    distance: any;
    ratings: number;
    name?: String;
    age?: number;
    data: any;
}

const Card = ({ name, age, data }: CardProps) => {
    return (
        <></>
    )
}

export default Card;