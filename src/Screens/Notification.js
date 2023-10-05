import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Notification = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', margin: 20 }}>
                    <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Notification</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/settings.png')} />
                    <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/menphoto.png')} />
                </View>
            </View>

            <View style={{ backgroundColor: '#1E293B', borderRadius: 20, flexDirection: 'row', width: 380, alignSelf: 'center', margin: 10 }}>
                <View>

                    <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
                </View>
                <View style={{ width: 240, margin: 10 }}>

                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, }}>Dovid</Text>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, }}>Lorem Ipsum is simply dummy
                        text of the printing and
                    </Text>
                </View>
                <View style={{ backgroundColor: '#0F172A', borderTopRightRadius: 20, borderBottomRightRadius: 20, width: 80, right: 20 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, textAlign: 'center', alignSelf: 'center', lineHeight: 90 }}>Friend</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#1E293B', borderRadius: 20, flexDirection: 'row', width: 380, alignSelf: 'center', margin: 10 }}>
                <View>

                    <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
                </View>
                <View style={{ width: 240, margin: 10 }}>

                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, }}>Dovid</Text>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, }}>Lorem Ipsum is simply dummy
                        text of the printing and
                    </Text>
                </View>
                <View style={{ backgroundColor: '#0F172A', borderTopRightRadius: 20, borderBottomRightRadius: 20, width: 80, right: 20 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, textAlign: 'center', alignSelf: 'center', lineHeight: 90 }}>Accept</Text>
                </View>
            </View>

        </View>
    );
}

export default Notification;
