import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';

const Otp = () => {
    return(
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.WHITE,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{

            }}>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'centers',
                }}>
                   
                    <Text style={{
                        color: Colors.BLACK,
                        marginVertical: 10,
                        fontSize: 20,
                        fontWeight: '600'
                    }}>Enter OTP Sended on +91-70******85</Text>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}>
                    <TextInput
                        placeholder=''
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.GRAYHARD,
                            borderRadius: 10,
                            width: '15%',
                            padding: 10,
                            marginTop: 30,
                            marginHorizontal:10
                        }}
                    />
                    <TextInput
                        placeholder=''
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.GRAYHARD,
                            borderRadius: 10,
                            width: '15%',
                            padding: 10,
                            marginTop: 30,
                            marginHorizontal:10
                        }}
                    />
                    <TextInput
                        placeholder=''
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.GRAYHARD,
                            borderRadius: 10,
                            width: '15%',
                            padding: 10,
                            marginTop: 30,
                            marginHorizontal:10
                        }}
                    />
                    <TextInput
                        placeholder=''
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.GRAYHARD,
                            borderRadius: 10,
                            width: '15%',
                            padding: 10,
                            marginTop: 30,
                            marginHorizontal:10
                        }}
                    />
                   
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Otp')}
                        style={{
                            backgroundColor: Colors.GREENHARD,
                            width: '40%',
                            height: 40,
                            borderRadius: 10,
                            marginVertical: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: Colors.WHITE,
                            fontWeight: '500'
                        }}>Verify OTP</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Otp;