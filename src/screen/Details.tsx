import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Colors from '../assets/Colors';
import BottomNav from '../nav/BottomNav';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const Details = () => {
    const navigation = useNavigation();
    const [mainUrl, setMainUrl] = useState(require('../assets/images/pestcontrol.jpg'));
    const data = [
        { id: 1, image: require('../assets/images/pestcontrol.jpg') },
        { id: 2, image: require('../assets/images/maid.jpg') },
        { id: 3, image: require('../assets/images/cloth.jpg') },
        { id: 4, image: require('../assets/images/recyc.jpg') }
    ];

    const onPress = () => {
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
                <ScrollView>
                    <View style={{
                        margin: 10
                    }}>
                        <Image
                            source={mainUrl}
                            style={{
                                width: '100%',
                                height: 250,
                            }}
                        />
                        <FlatList
                            data={data}
                            keyExtractor={(data) => data.id}
                            horizontal
                            style={{
                                marginVertical: 10,
                                paddingHorizontal: 10
                            }}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        marginHorizontal: 2
                                    }}>
                                        <TouchableOpacity onPress={() => setMainUrl(item.image)}>
                                            <Image
                                                source={item.image}
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '800',
                            color: Colors.BLACK
                        }}>About DryCleaners :-</Text>
                        <View>
                            <Text style={{
                                textAlign: 'justify'
                            }}>
                                Drycleaners is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Text>Customers : 20</Text>
                            <Text>Delivery : Free</Text>
                            <Text>Distance : 700 meter</Text>
                            <Text>Timing : 24*7</Text>
                            <Text>Click to see Charges Breakups</Text>
                        </View>
                        <View>
                            <Text>
                                Ratings: 4.5
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Review and Comments
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 10
                        }}>
                            <Button title={'Order'} onPress={onPress} />
                            <Button title={'Inquiry'} onPress={onPress} bgColor={Colors.YELLOWLIGHT} color={Colors.BLACK} />

                        </View>
                    </View>

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

export default Details;