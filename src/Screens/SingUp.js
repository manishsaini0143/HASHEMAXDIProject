
import React , { useState } from 'react';
import axios from 'axios';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SingUp = ({ navigation }) => {
  const [fullname, setfullname] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const singhapi= async () => {
    let body = new FormData;
    body.append('full_name', fullname)
    body.append('email',Email )
    body.append('phone', Phone)
    body.append('password', Password)

    await axios.post('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', body).then(res => {
      if (res.status == 200) {
        navigation.navigate('Home'),
         console.log('fdg', res) }
         AsyncStorage.setItem('userToken', res.data.token);
    })
      .catch(err => { console.log('singh', err) })
  };

  return (
    <View style={{ backgroundColor: '#0F172A', flex: 1 }}>
      <View style={{ alignItems: 'center', padding: 15 }}>
        <Image style={{ width: 250, height: 250 }} source={require('../Image/Singup.jpg')} />
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30 }}>Sign in</Text>
      </View>
      <View style={{ alignItems: 'center' }}>

        <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#1E293B', width: '85%', flexDirection: 'row' }} >
          <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10, }} source={require('../Image/user.jpg')} />
          <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, }} onChangeText={(txt) => { setfullname(txt) }} keyboardType='Name-type' placeholder='Name' placeholderTextColor='#FFFFFF' />
        </View>
        <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#1E293B', width: '85%', flexDirection: 'row' }} >
          <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10 }} source={require('../Image/email.jpg')} />
          <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, }} onChangeText={(txt) => { setEmail(txt) }} keyboardType='Email-type' placeholder='Email address' placeholderTextColor='#FFFFFF' />
        </View>
        <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#1E293B', width: '85%', flexDirection: 'row' }} >
          <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10 }} source={require('../Image/phonecall.jpg')} />
          <TextInput maxLength={10} style={{ color: '#FFFFFF', width: '70%', fontSize: 20, }}  onChangeText={(txt) => { setPhone(txt) }} keyboardType='Number-type' placeholder='Phone number (optianal)' placeholderTextColor='#FFFFFF' />
        </View>
        <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#1E293B', width: '85%', flexDirection: 'row' }} >
          <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10 }} source={require('../Image/lock.png')} />
          <TextInput maxLength={8} style={{ color: '#FFFFFF', width: '70%', fontSize: 20, }}  onChangeText={(txt) => { setPassword(txt) }} keyboardType='Password-type' placeholder='Password' placeholderTextColor='#FFFFFF' />
        </View>
      </View>

      <TouchableOpacity onPress={() => { singhapi() }} style={{ backgroundColor: '#1E293B', width: '70%', borderRadius: 30, alignSelf: 'center', marginTop: 20, height: 46 }}>
        <Text style={{ textAlign: 'center', color: '#FFFFFF', margin: 10, textAlign: 'center', fontSize: 20 }}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SingUp;
