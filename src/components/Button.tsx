import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';

interface ButtonProps {
    title: string,
    onPress?: any,
    bgColor?: any,
    color?: any,
    borderWidth?: any,
    borderColor?: any
}

const Button = (
    {
        title,
        onPress,
        bgColor,
        color,
        borderColor,
        borderWidth
    }: ButtonProps
) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                backgroundColor: bgColor ? bgColor : Colors.GREENHARD,
                height: 40,
                marginVertical: 10,
                paddingHorizontal: 50,
                borderWidth: borderWidth ? borderWidth : 0,
                borderColor: borderColor ? borderColor : bgColor,
                //width: 250,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: 'center'
            }}>
            <Text style={{
                fontSize: 16,
                fontWeight: '700',
                color: color ? color : Colors.GRAYLOW
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;