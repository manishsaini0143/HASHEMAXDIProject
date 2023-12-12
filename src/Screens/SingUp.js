
import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
const SingUp = ({ navigation }) => {
  const [fullname, setfullname] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const [loader, setLoader] = useState(false)
  const singhapi = async () => {
    setLoader(true)
    if (!fullname || !Email || !Password) {
      return true
      setLoader(false)
    }
    let body = new FormData;
    body.append('full_name', fullname)
    body.append('email', Email)
    body.append('phone', Phone)
    body.append('password', Password)

    await axios.post('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', body).then(res => {
      if (res.status == 200) {
        navigation.navigate('Home'),
          console.log('fdg', res)
      }
      AsyncStorage.setItem('userToken', res.data.token);
      setLoader(false)
    })
      .catch(err => { console.log('singh', err), setLoader(false) })
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      {
        loader == true ?
          <Loader />

          : null}
      <View style={{ backgroundColor: '#0F172A', flex: 1 }}>
        <View style={{ alignItems: 'center', padding: 15 }}>
          <Image style={{ width: 316, height: 316 }} source={require('../Image/Singup.png')} />
          <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'DMSans-Bold' }}>Sign up</Text>
        </View>
        <ScrollView>

          <View style={{ margin: 10, borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', alignSelf: 'center' }} >
            <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10, top: 3 }} source={require('../Image/nameusre.png')} />
            <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, opacity: 0.7, fontFamily: 'DMSans-Medium', justifyContent: 'center' }} onChangeText={(txt) => { setfullname(txt) }} keyboardType='Name-type' placeholder='Name' placeholderTextColor='#FFFFFF' />
          </View>
          <View>
            {
              fullname == '' &&
              <Text style={{ color: 'red', marginLeft: 10 }}>
                Enter your full name
              </Text>
            }
          </View>
          <View style={{ margin: 10, borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', alignSelf: 'center' }} >
            <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10, alignSelf: 'center' }} source={require('../Image/email.png')} />
            <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, opacity: 0.7, fontFamily: 'DMSans-Medium', justifyContent: 'center' }} onChangeText={(txt) => { setEmail(txt) }} keyboardType='Email-type' placeholder='Email address' placeholderTextColor='#FFFFFF' />
          </View>
          {
            Email == '' ?
              <Text style={{ color: 'red', marginLeft: 10 }}>
                Enter your email address.
              </Text>
              : Email && !Email.includes('@') ? <Text style={{ color: 'red', marginLeft: 10 }}>
                Enter a valid email address.
              </Text> : Email && !Email.includes('.') ? <Text style={{ color: 'red', marginLeft: 10 }}>
                Enter a valid email Character (.)
              </Text> : Email && !Email.includes('com') ? <Text style={{ color: 'red', marginLeft: 10 }}>
                Enter a valid email  Character (com)
              </Text> : null
          }
          <View style={{ margin: 10, borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', alignSelf: 'center' }} >
            <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10, top: 3 }} source={require('../Image/phonecall.png')} />
            <TextInput maxLength={10} style={{ color: '#FFFFFF', width: '75%', fontSize: 16, opacity: 0.7, fontFamily: 'DMSans-Medium', justifyContent: 'center' }} onChangeText={(txt) => { setPhone(txt) }} keyboardType='number-pad' placeholder='Phone number  (optianal)' placeholderTextColor='#FFFFFF' />
          </View>
          <View style={{ margin: 10, borderRadius: 15, backgroundColor: '#1E293B', width: '90%', flexDirection: 'row', alignSelf: 'center' }} >
            <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10, top: 2 }} source={require('../Image/lock.png')} />
            <TextInput secureTextEntry={true} maxLength={8} style={{ color: '#FFFFFF', width: '70%', fontSize: 16, opacity: 0.7, fontFamily: 'DMSans-Medium', justifyContent: 'center' }} onChangeText={(txt) => { setPassword(txt) }} keyboardType='Password-type' placeholder='Password' placeholderTextColor='#FFFFFF' />
          </View>
          {/* <TouchableOpacity ><Text style={{ color: '#FFFFFF', fontSize: 14, alignSelf: 'flex-end', right: 35, opacity: 0.8, fontFamily: 'DMSans-Medium' }}>Already have an account? Login</Text></TouchableOpacity> */}

          {
            Password == '' &&
            <Text style={{ color: 'red', marginLeft: 10 }}>
              Please Enter Password
            </Text>
          }
          <TouchableOpacity onPress={() => {
            if (!fullname || !Email || !Password) {
              setfullname(''),
                setEmail(''),
                setPassword('')
            } else {
              singhapi()
            }
          }} style={{ backgroundColor: '#1E293B', width: '90%', borderRadius: 15, alignSelf: 'center', marginTop: 20, height: 46, marginTop: 25 }}>
            <Text style={{ textAlign: 'center', color: '#FFFFFF', margin: 10, textAlign: 'center', fontSize: 16, fontFamily: 'DMSans-Bold', }}>
              Sign up
            </Text>
          </TouchableOpacity>
          {/* <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 5 }}>

            <Text style={{ fontSize: 14, color: '#FFFFFF', opacity: 0.7, fontFamily: 'DMSans-Medium' }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
              <Text style={{ fontFamily: 'DMSans-Medium', color: '#CF3939', fontSize: 14, opacity: 0.8, fontFamily: 'DMSans-Medium', marginLeft: 5 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF', opacity: 0.7, fontFamily: 'DMSans-Medium' }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
              <Text style={{ fontFamily: 'DMSans-Medium', color: '#CF3939', fontSize: 14, marginLeft: 5, opacity: 0.8, fontFamily: 'DMSans-Medium' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    </KeyboardAvoidingView>
  );
}

export default SingUp;
