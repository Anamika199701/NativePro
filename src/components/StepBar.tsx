import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const StepBar = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: Colors.GRAYMID,
            //marginVertical: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            elevation: 1
        }}>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Icon name="square-o" size={20} color={Colors.BLACK} />
                <Text>
                    Personal Details
                </Text>
            </View>
            <View>
                <Icon name="long-arrow-right" size={20} color={Colors.BLACK} />
            </View>

            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Icon name="square-o" size={20} color={Colors.BLACK} />
                <Text>
                    Order Details
                </Text>
            </View>
            <View>
                <Icon name="long-arrow-right" size={20} color={Colors.BLACK} />
            </View>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Icon name="square-o" size={20} color={Colors.BLACK} />
                <Text>
                    Payment Details
                </Text>

            </View>
        </View>
    )
}

export default StepBar;