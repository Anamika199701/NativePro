import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Card from '../components/Card';
import BottomNav from '../nav/BottomNav';

const Services = () => {
    const data = {
        title: "Clean Clothes Cleaners",
        rating: 4.5,
        serviceDays: 2 - 3,
        types: "All",
        distance: 700
    }
    const data1 = {
        title: "Drycleaners Services",
        rating: 3.6,
        serviceDays: 4 - 5,
        types: "Winter-Summer",
        distance: 550
    }
    const data2 = {
        title: "Clothes Hygne Services",
        rating: 4,
        serviceDays: 1 - 2,
        types: "Party Dresses",
        distance: 900
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
                <ScrollView
                    style={{
                        // flex: 1,
                        // justifyContent: 'center',
                        // alignItems: 'center',
                    }}
                >
                    <Card data={data} />
                    <Card data={data2} />
                    <Card data={data1} />
                    <Card data={data2} />
                    <Card data={data2} />
                    <Card data={data1} />
                    <Card data={data2} />
                    <Card data={data1} />
                    <Card data={data} />
                    <Card data={data2} />
                    <Card data={data1} />
                    <Card data={data2} />
                    {/* <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '700',
                        color: Colors.BLACK,
                    }}
                >
                    {seconds.toLocaleTimeString()}
                </Text> */}
                    {/* <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        marginVertical: 10,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: isActive ? Colors.REDLOW : Colors.GREENLIGHT ,
                            height: 40,
                            width: 100,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 10,
                            elevation: 15,
                        }}
                        onPress={() => timerStart()}
                    >
                        {isActive ? (
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '700',
                                    color: Colors.BLACK,
                                }}
                            >
                                Stop
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '700',
                                    color: Colors.BLACK,
                                }}
                            >
                                Start
                            </Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: Colors.YELLOWLIGHT,
                            height: 40,
                            width: 100,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 15,
                        }}
                        onPress={() => timerReset()}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '700',
                                color: Colors.BLACK,
                            }}
                        >
                            Reset
                        </Text>
                    </TouchableOpacity>
                </View> */}
                </ScrollView>
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

export default Services;