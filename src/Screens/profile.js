
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const profile = ({ navigation }) => {
    const [onchange, setonchange] = useState();
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                        <Image resizeMode='contain' style={{ height: 25, width: 25,}} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                <View style={{ flexDirection: 'row', height: 70, justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity>

                            <Image resizeMode='contain' style={{ height: 25, width: 25, margin: 5 }} source={require('../Image/settings.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                            <Image resizeMode='contain' style={{ height: 27, width: 27, margin: 5 }} source={require('../Image/notification.jpg')} />
                            <View style={{ backgroundColor: 'red', height: 8, width: 8, borderRadius: 20, zIndex: 1, position: 'absolute', top: 8, right: 9 }}></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ height: 76, width: 76 }} source={require('../Image/profilepicture.png')} />
                <View style={{ height: 45, width: 45, alignItems: 'center', position: 'relative', bottom: 45, borderRadius: 30, }}>
                    <Image resizeMode='contain' style={{ height: 20, width: 20, }} source={require('../Image/Edit.jpg')} />
                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', bottom: 35 }}>Upload Pic</Text>
            </View>
            <View style={{width:'90%',alignSelf:'center'}}>
                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, left: 20,fontFamily: 'DMSans-Bold', }} keyboardType='name' placeholder='Deva' placeholderTextColor='#FFFFFF' />
                </View>
                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, left: 20, fontFamily: 'DMSans-Bold',}} keyboardType='Email-type' placeholder='Dave@gamil.com' placeholderTextColor='#FFFFFF' />
                </View>
                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput maxLength={10} style={{ color: '#FFFFFF', width: '70%', fontSize: 16, left: 20, fontFamily: 'DMSans-Bold'}} keyboardType='Number-type' placeholder='8740891056' placeholderTextColor='#FFFFFF' />
                </View>
                <View style={{ margin: 10, borderRadius: 20, backgroundColor: '#1E293B' }} >
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, left: 20,fontFamily: 'DMSans-Bold' }} keyboardType='Password' placeholder='******************' placeholderTextColor='#FFFFFF' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around',alignSelf:'center',marginTop:40}}>
                <TouchableOpacity onPress={() => { setonchange(true) }} style={{ alignSelf: 'center', backgroundColor: onchange == true ? '#1E293B' : '#0F172A', width: '40%', justifyContent: 'center', height: 50, borderRadius: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', margin: 5, textAlign: 'center' }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setonchange(false) }} style={{ alignSelf: 'center', backgroundColor: onchange == false ? '#1E293B' : '#0F172A', width: '40%', justifyContent: 'center', height: 50, borderRadius: 15, borderWidth: 1, borderColor: '#FFFFFF' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', margin: 5, textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default profile;
