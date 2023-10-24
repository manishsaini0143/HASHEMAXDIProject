import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
// const [Change, setChange] = useState();

const Desktop = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#0D1134', }}>
            <Image style={{ marginTop: 150, height: 140, width: 300 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
            <Text style={{ fontSize: 25, color: '#FFFFFF', marginTop: 10, width: '60%', textAlign: 'center', fontFamily:'Baby-doll' }}>
                In Memory of blah blah
            </Text>
            <View style={{ flex: 1, width: '100%', position: 'relative', top: 10 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#1E293B', width: '80%', borderRadius: 30, alignSelf: 'center', marginTop: 20, height: 46 }}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', margin: 10, textAlign: 'center', fontSize: 20 }}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SingUp')} style={{ backgroundColor: '#1E293B', width: '80%', borderRadius: 30, alignSelf: 'center', marginTop: 30, height: 46 }}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', margin: 10, textAlign: 'center', fontSize: 20 }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Desktop;
