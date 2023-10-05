
import React  ,{ useState } from 'react';
import axios from 'axios';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => { 

    const [logEmail, setlogEmail] = useState();
    const [logPassword, setlogPassword] = useState();
    const loginapi = async () => {
      let body = new FormData;
      body.append('email',logEmail )
      body.append('password', logPassword)
  
      await axios.post('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', body).then(res => {
        if (res.status == 200) {
             AsyncStorage.setItem('userToken', res.data.token);
          navigation.navigate('Home'),
           console.log('hghg', res) }
      })
        .catch(err => { console.log('loginapi', err) })
    };

    return (
        <View style={{ backgroundColor: '#0F172A', flex: 1 }}>
            <View style={{ alignItems: 'center', padding: 15 }}>
                <Image style={{ width: 305, height: 316 }} source={require('../Image/Login.png')} />
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 36 }}>Log in</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#1E293B', width: '85%', flexDirection: 'row' }} >
                    <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10 }} source={require('../Image/email.jpg')} />
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, }} onChangeText={(txt) => { setlogEmail(txt) }} keyboardType='Email-type' placeholder='Email address' placeholderTextColor='#FFFFFF' />
                </View>
                <View style={{ margin: 10, borderRadius: 10, backgroundColor: '#1E293B', width: '85%', flexDirection: 'row' }} >
                    <Image resizeMode='contain' style={{ width: 25, height: 25, margin: 10 }} source={require('../Image/lock.png')} />
                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 20, }}  onChangeText={(txt)=>{setlogPassword(txt)}} keyboardType='Password-type' placeholder='Password' placeholderTextColor='#FFFFFF' />
                </View>
            </View>
            <TouchableOpacity><Text style={{ color: '#FFFFFF', fontSize: 18, position: 'relative', left: 180, margin: 10 }}>Forgot your Password ?</Text></TouchableOpacity>
            <TouchableOpacity  disabled={!logEmail || !logPassword}  onPress={() => { loginapi() }} style={{backgroundColor:'#1E293B',width:'80%',height:50,justifyContent:'center',alignSelf:'center',borderRadius:10}}>
                <Text style={{textAlign:'center',fontSize:25 ,color: '#FFFFFF',fontWeight:'bold'}}>
                    Log in
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>
                    Don't have on account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SingUp')}  >
                    <Text style={{ fontWeight: 'bold', color: '#CF3939', fontSize: 20, left: 5 }}>
                        create
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;
