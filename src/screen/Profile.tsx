import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BottomNav from '../nav/BottomNav';
import Colors from '../assets/Colors';
import { UseDispatch, useDispatch } from 'react-redux';
import { userLogout } from '../redux/action';

const Profile = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userLogout(false));
    }
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 0.92,
                }}
            >
                <Text>profile Screen</Text>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => handleLogout()}
                        style={{
                            backgroundColor: Colors.GREENHARD,
                            width: '35%',
                            height: 35,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: Colors.WHITE
                        }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flex: 0.08,
                }}
            >
                <BottomNav />
            </View>
        </View>
    )
}
export default Profile;