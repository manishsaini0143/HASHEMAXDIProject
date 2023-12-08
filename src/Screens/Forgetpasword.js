import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const Forgetpasword = () => {
    return (
        <View style={{ backgroundColor: '#0F172A', flex: 1 }}>

            <View style={{ alignItems: 'center', padding: 15, marginTop: 20 }}>
                <Image style={{ width: 305, height: 318 }} source={require('../Image/Login.png')} />
                {/* <Image resizeMode='cover' style={{ width: 305, height: 316 }} source={require('../Image/Login.svg')} /> */}
                <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'DMSans-Bold' }}>Forgot Password </Text>
            </View>
            <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center' }} >
                <Image resizeMode='contain' style={{ width: 25, height: 25, alignSelf: 'center', margin: 10 }} source={require('../Image/email.jpg')} />
                <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, opacity: 0.8, fontFamily: 'DMSans-Bold', justifyContent: 'center' }} keyboardType='Password-type' placeholder='Email Address'
                    placeholderTextColor='#FFFFFF' secureTextEntry={true} />
            </View>
            <TouchableOpacity style={{ backgroundColor: '#1E293B', width: '90%', height: 46, justifyContent: 'center', alignSelf: 'center', borderRadius: 15, top: 30 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFFFFF', fontFamily: 'DMSans-Bold', justifyContent: 'center' }}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Forgetpasword;
