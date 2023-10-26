import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';


const Desktop = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134', }}>
            <Image style={{ marginTop: 150, height: 180,width:'100%' }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
            <Text style={{ fontSize: 32, color: '#FFFFFF', marginTop: 25, width: '80%', textAlign: 'center', fontFamily: 'JosefinSans-Bold',alignSelf:'center'}}>
                In Memory of blah blah
            </Text>
            <View style={{width: '100%', top: 100 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#1E293B', width: '90%', borderRadius: 15, alignSelf: 'center', marginTop: 18, height: 44,borderWidth:1,borderColor:'#000000' ,justifyContent:'center'}}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16,fontWeight:'bold'}}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SingUp')} style={{ backgroundColor: '#1E293B', width: '90%', borderRadius: 15, alignSelf: 'center', marginTop: 20, height: 44,borderWidth:1,borderColor:'#FFFFFF',justifyContent:'center' }}>
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 16,fontWeight:'bold'}}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Desktop;
