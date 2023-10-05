import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <Image resizeMode='contain' style={{ height: 30, width: 30 }} source={require('../Image/Backerro.jpg')} />
                    <View >

                        <Image resizeMode='contain' style={{ height: 35, width: 35 }} source={require('../Image/notification.jpg')} />
                        <View style={{ backgroundColor: 'red', height: 13, width: 13, borderRadius: 20, zIndex: 1, position: 'relative', bottom: 35, left: 20 }}></View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ height: 60, width: 60 }} source={require('../Image/Myprofile.jpg')} />
                <View style={{ height: 50, width: 50, alignItems: 'center', position: 'relative', bottom: 40, borderRadius: 30, }}>
                    <Image resizeMode='contain' style={{ height: 20, width: 20, }} source={require('../Image/Edit.jpg')} />
                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold', bottom: 35 }}>Upload Pic</Text>
            </View>
            <View>

                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, left: 20 }} keyboardType='name' placeholder='Deva' placeholderTextColor='#FFFFFF' />
                </View>

                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, left: 20 }} keyboardType='Email-type' placeholder='Dave@gamil.com' placeholderTextColor='#FFFFFF' />
                </View>

                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput maxLength={10} style={{ color: '#FFFFFF', width: '70%', fontSize: 20, left: 20 }} keyboardType='Number-type' placeholder='8740891056' placeholderTextColor='#FFFFFF' />
                </View>

                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, left: 20 }} keyboardType='Password' placeholder='******************' placeholderTextColor='#FFFFFF' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 150, justifyContent: 'center', height: 50, borderRadius: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 5, textAlign: 'center' }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#0F172A', width: 150, justifyContent: 'center', height: 50, borderRadius: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 5, textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default profile;
