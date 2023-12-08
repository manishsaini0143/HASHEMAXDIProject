import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, BackHandler, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';

const Login = ({ navigation }) => {

    const [logEmail, setlogEmail] = useState();
    const [logPassword, setlogPassword] = useState();
    const [loader, setLoader] = useState(false)
    const loginapi = async () => {
        setLoader(true)
        if (!logEmail || !logPassword) {
            return true
        } else {
            let body = new FormData;
            body.append('email', logEmail)
            body.append('password', logPassword)
            await axios.post('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', body).then(res => {
                if (res.status == 200) {
                    AsyncStorage.setItem('userToken', res.data.token);
                    setLoader(false)
                    navigation.navigate('Home'),
                        console.log('hghg', res)
                }
            })
                .catch(err => { console.log('loginapi', err), setLoader(false) })
        }
    };
    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#0F172A', flex: 1 }}>
            {
                loader == true ?
                    <Loader />
                    : null}
            <View style={{ alignItems: 'center', padding: 15, marginTop: 20 }}>
                <Image style={{ width: 305, height: 318 }} source={require('../Image/Login.png')} />
                {/* <Image resizeMode='cover' style={{ width: 305, height: 316 }} source={require('../Image/Login.svg')} /> */}
                <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'DMSans-Bold' }}>Log in</Text>
            </View>
            <ScrollView>
                <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center' }} >
                    <Image resizeMode='contain' style={{ width: 25, height: 25, alignSelf: 'center', margin: 10 }} source={require('../Image/email.jpg')} />
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.8, fontFamily: 'DMSans-Bold', justifyContent: 'center' }} onChangeText={(txt) => { setlogEmail(txt) }} keyboardType='Email-type' placeholder='Email address' placeholderTextColor='#FFFFFF' />
                </View>
                {
                    logEmail == '' ?
                        <Text style={{ color: 'red', alignSelf: 'center' }}>
                            Enter your email address
                        </Text>
                        : logEmail && !logEmail.includes('@') ? <Text style={{ color: 'red', marginLeft: 10 }}>
                            Enter a valid email address(@)
                        </Text> : logEmail && !logEmail.includes('.') ? <Text style={{ color: 'red', marginLeft: 10 }}>
                            Enter a valid email Character (.)
                        </Text> : logEmail && !logEmail.includes('com') ? <Text style={{ color: 'red', marginLeft: 10 }}>
                            Enter a valid email  Character (com)
                        </Text> : null
                }
                <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center' }} >
                    <Image resizeMode='contain' style={{ width: 25, height: 25, alignSelf: 'center', margin: 10 }} source={require('../Image/lock.png')} />
                    <TextInput maxLength={8} style={{ color: '#FFFFFF', width: '70%', fontSize: 16, opacity: 0.8, fontFamily: 'DMSans-Bold', justifyContent: 'center' }} onChangeText={(txt) => { setlogPassword(txt) }} keyboardType='Password-type' placeholder='Password'
                        placeholderTextColor='#FFFFFF' secureTextEntry={true} />
                </View>
                {
                    logPassword == '' &&
                    <Text style={{ color: 'red', alignSelf: 'center' }}>
                        Please Enter Password
                    </Text>
                }

                <TouchableOpacity onPress={() => navigation.navigate('Forgetpasword')} ><Text style={{ color: '#FFFFFF', fontSize: 14, alignSelf: 'flex-end', right: 40, opacity: 0.8, fontFamily: 'DMSans-Medium' }}>Forgot your Password ?</Text></TouchableOpacity>

                <TouchableOpacity disabled={!logEmail || !logPassword} onPress={() => {
                    loginapi()
                }} style={{ backgroundColor: '#1E293B', width: '90%', height: 46, justifyContent: 'center', alignSelf: 'center', borderRadius: 15, top: 30 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFFFFF', fontFamily: 'DMSans-Bold', justifyContent: 'center' }}>
                        Log in
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', opacity: 0.7, fontFamily: 'DMSans-Medium' }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SingUp')} >
                        <Text style={{ fontFamily: 'DMSans-Medium', color: '#CF3939', fontSize: 14, marginLeft: 5, opacity: 0.8, fontFamily: 'DMSans-Medium' }}>
                            create
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Login;
