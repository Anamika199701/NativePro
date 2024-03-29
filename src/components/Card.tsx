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
        <View style={{
            backgroundColor: Colors.GREENLIGHT,
            marginHorizontal: 10,
            marginVertical: 5,
            padding: 10,
            borderRadius: 10,
            elevation: 5
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <View style={{
                    borderBottomWidth: 1,
                    borderBlockColor: Colors.GRAYLOW,
                    paddingVertical: 5
                }}>
                    <Text style={{
                        color: Colors.BLACK,
                        fontSize: 18,
                        fontWeight: '600'
                    }}>{data.title}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <Icon name="star" size={20} color={Colors.REDHARD} />
                    <Text>{data.rating}</Text>
                    <Icon name="heart-o" size={20} color={Colors.REDHARD} />
                </View>



            </View>
            <View style={{
                paddingVertical: 5
            }}>
                <Text style={{
                    fontSize: 15,
                    fontWeight: "500"
                }}>Service Days : {data.serviceDays} days</Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: "500"
                }}>Clothes Types : {data.types}</Text>
                <Text style={{
                    fontSize: 13,
                    fontWeight: "500"
                }}>Nearby : {data.distance} meter</Text>
            </View>
            <View>

            </View>

        </View>
    )
}

export default Card;