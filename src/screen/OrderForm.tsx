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
    const data = [
        { label: 'Winter Cloths', value: '1' },
        { label: 'Summer Cloths', value: '2' },
        { label: 'Party Wear', value: '3' },
        { label: 'Mens Suits', value: '4' },
        { label: 'Curtains', value: '5' },
        { label: 'Bedsheet', value: '6' },
        { label: 'Comforter', value: '7' },
        { label: 'Appliances Cover', value: '8' },
        { label: 'Others', value: '9' },
    ];
    const data2 = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [total, setTotal] = useState(0);
    const [formInputs, setFormInputs] = useState([
        { key: "", userId: "", userIdError: "", startAmount: "", startAmountError: "", endAmount: "", endAmountError: "" },
        { key: "", ClothType: "", userIdError: "", startAmount: "", startAmountError: "", endAmount: "", endAmountError: "" },
    ]);
    const onPress = () => {
        // console.log(formInputs);
        // return;
        navigation.navigate('PaymentForm')
    }


    //Set userId Input Values
    const inputHandleUserId = (text, key) => {
        const _formNumberInputs = [...formInputs];
        _formNumberInputs[key].key = key;
        _formNumberInputs[key].userId = text;
        setFormInputs(_formNumberInputs);
        let num = 0;
        formInputs.forEach((item) => {
            num = num + item.userId;
        });
        setTotal(num)
    }
    const inputHandleUserDropdown = (text, key) => {
        console.log(text.value);
        const _formNumberInputs = [...formInputs];
        _formNumberInputs[key].key = key;
        _formNumberInputs[key].ClothType = text.value;
        setFormInputs(_formNumberInputs);
        // setIsFocus(false);
    }

    const removeItems = (text, key) => {
        const _formNumberInputs = formInputs.filter((item) => (item.key != text.key) && (item.userId != key.userId) && (item.ClothType != key.ClothType));
        setFormInputs(_formNumberInputs);
        console.log(_formNumberInputs);
        console.log(text);
        console.log(key);

    }

    const handleMoreLines = () => {
        const _inputs = [...formInputs];
        _inputs.push({ key: "", userId: "", userIdError: "", startAmount: "", startAmountError: "", endAmount: "", endAmountError: "" });
        setFormInputs(_inputs);
    }

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Cloth Types
                </Text>
            );
        }
        return null;
    };
    return (
        <View
            style={{
                flex: 1,
            }}
        >

            <StepBar />
            <ScrollView>
                <View style={{
                    margin: 10
                }}>
                    <View>
                        {formInputs.map((input, key) => (
                            <>
                                <View key="{(key+1)}" style={styles.submitFormRow}>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Dropdown
                                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            data={data}
                                            search
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!isFocus ? 'Select item' : '...'}
                                            searchPlaceholder="Search..."
                                            value={input.ClothType}
                                            onFocus={() => setIsFocus(true)}
                                            onBlur={() => setIsFocus(false)}
                                            onChange={item => inputHandleUserDropdown(item, key)}
                                        />
                                        <View style={[styles.submitFormCol, { alignItems: 'flex-start', flexDirection: 'row' }]}>
                                            <TextInput value={input.userId} onChangeText={(text) => inputHandleUserId(text, key)}
                                                // onEndEditing={(e) => handleValidUserId(e.nativeEvent.text, key)}
                                                //  keyboardType="numeric"
                                                textAlign="center"
                                                returnKeyType="next"
                                                style={[styles.formNumberInputStyle, { fontSize: 22, borderColor: (input.userIdError != "") ? '#e74c3c' : '#dfdfdf' }]} />

                                            {(input.userIdError != "") ? (
                                                <View style={styles.errorTextViewStyle}>
                                                    <Text style={styles.errorTextStyle}>{input.userIdError}</Text>
                                                </View>
                                            ) : null}
                                        </View>
                                        <TouchableOpacity onPress={() => removeItems(input, key)}>
                                            <Icon name={'trash-o'} size={25} color={Colors.REDMID} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>

                        ))}
                    </View>
                    <View style={{
                        backgroundColor: Colors.WHITE,
                        height: 100,
                        justifyContent: 'flex-end',
                        paddingHorizontal: 10,
                        borderRadius: 15
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'space-between',
                            borderBottomWidth: 1,
                            // paddingVertical: 10,
                            borderBottomColor: Colors.GRAYMID,
                            flex: 1,
                            /// paddin

                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: Colors.BLACK,
                                width: '65%'
                            }}> No. of Clothes:</Text>
                            <Text
                                style={{
                                    width: '25%',
                                    color: Colors.BLACK,
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignSelf: 'center',
                                    textAlign: 'center'
                                }}
                            >{total}</Text>


                        </View>

                        <Button title={'More'} onPress={handleMoreLines} bgColor={Colors.GRAYLOW} color={Colors.BLACK} borderWidth={1} borderColor={Colors.GREENHARD} />
                    </View>


                    <View style={{
                        backgroundColor: Colors.WHITE,
                        height: 150,
                        justifyContent: 'flex-end',
                        paddingHorizontal: 10,
                        borderRadius: 15,
                        marginTop: 50,
                    }}>
                        <View style={{
                            // flexDirection: 'row',
                            //alignItems: 'center',
                            //  justifyContent: 'space-between',
                            borderBottomWidth: 1,
                            // paddingVertical: 10,
                            borderBottomColor: Colors.GRAYMID,


                        }}>
                            <Text>Delivery Time :</Text>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: Colors.GRAYHARD,
                                    borderRadius: 10,
                                    height: 50,
                                    paddingHorizontal: 10

                                }}
                                placeholder='Enter Delivery Time'
                            />
                        </View>
                        <Button title={'Save & Continue'} onPress={onPress} />
                    </View>


                </View>
                <View>

                </View>

            </ScrollView>

        </View>

    )

}

export default OrderForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '60%'

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollView: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e7ebf1',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    submitFormWrapper: {
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    submitFormRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        marginBottom: 10,
    },
    submitFormCol: {
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 2,
        paddingRight: 2,
    },
    formNumberInputStyle: {
        width: '100%',
        maxWidth: 105,
        height: 42,
        backgroundColor: "#ffffff",
        borderRadius: 4,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#cccccc',
    },
    errorTextViewStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorTextStyle: {
        fontFamily: 'Roboto-Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#ff0000',
        textAlign: 'center',
        backgroundColor: "#ffffff",
        paddingLeft: 2,
        paddingRight: 2,
        alignSelf: 'center',
    },
    submitFormButtons: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 8,
        paddingRight: 8,
    },
    buttonAddMoreStyle: {
        width: '100%',
        height: 48,
        backgroundColor: '#e74c3c',
        borderWidth: 1,
        borderColor: '#e74c3c',
    },
    buttonAddMoreTitleStyle: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: 12,
        color: '#ffffff',
        textAlign: 'center',
    },
    formSubmitButton: {
        width: '100%',
        height: 48,
        backgroundColor: '#098e09',
        borderWidth: 1,
        borderColor: '#098e09',
    },
    formSubmitButtonText: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});