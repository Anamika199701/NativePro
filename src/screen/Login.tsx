import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { userLogin } from '../redux/action';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/storetool/UserSlice';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(userLogin(true));
        // const data = [{
        //     isActive: true
        // }]
        // dispatch(addUser(data))
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.WHITE,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{

            }}>

                <View style={{
                    //flex: 1,
                    alignItems: 'center',
                    justifyContent: 'centers',
                    //marginTop: 10,

                }}>
                    <Image source={require('../assets/images/login.jpg')} style={{
                        height: 230,
                        width: '90%',
                        borderRadius: 30,
                        marginBottom: 20
                    }} />
                    <Text style={{
                        color: Colors.BLACK,
                        marginVertical: 20,
                        fontSize: 20,
                        fontWeight: '600'
                    }}>Login in just one step...</Text>
                    <TextInput
                        placeholder='Enter Mob No.'
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.GRAYHARD,
                            borderRadius: 10,
                            width: '80%',
                            padding: 10,
                            marginTop: 30
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                        //onPress={() => navigation.navigate('Otp')}
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
                        }}>Login</Text>
                    </TouchableOpacity>
                    <Text>OR</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 30

                    }}>
                        <Icon.Button
                            name="facebook"
                            backgroundColor="#3b5998"
                        >
                            Login with Facebook
                        </Icon.Button>
                        <View style={{
                            width: 10
                        }}></View>
                        <Icon.Button
                            name="google"
                            backgroundColor={Colors.REDMID}
                        >
                            Login with Google
                        </Icon.Button>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Login;