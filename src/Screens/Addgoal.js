import React from 'react';
import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native';

const Addgoal = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', marginLeft: 10, fontFamily: 'JosefinSans-Bold' }}>Add Personal Goals</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 25, width: 25, margin: 10, top: 10 }} source={require('../Image/settings.png')} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/notification.jpg')} />
                        <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', right: 6, top: 9 }}></View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10 }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ margin: 10, padding: 10 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Setup')} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium' }}>Connections</Text>
                    <Image resizeMode='contain' style={{ height: 15, width: 15 }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium',opacity:0.5}}>Mission eg. 5 dollars a day</Text>
                </TouchableOpacity>
                {/* //Text input// */}
                {/* <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'Poppins-Medium', top: 5 }} keyboardType='Email-type' placeholder='Connections' placeholderTextColor='#FFFFFF' />
                    <TouchableOpacity  style={{alignSelf: 'center', }} >
                    <Image resizeMode='cover' style={{ height: 20, width: 20, alignSelf: 'center', left: 60 }} source={require('../Image/arrowdown.jpg')} />
                    </TouchableOpacity>
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16,  fontFamily: 'Poppins-Medium' }}>On behalf of</Text>
                    <Image resizeMode='contain' style={{ height: 15, width: 15 }} source={require('../Image/arrowdown.jpg')} />
                </View>
                <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium',opacity:0.5}}>Mother</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16,  fontFamily: 'Poppins-Medium',opacity:0.5 }}>Total Time</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-Medium', backgroundColor: '#0F172A', borderLeftWidth: 2, borderLeftColor: '#FFFFFF', height: 50, width: 120, borderTopRightRadius: 20, borderBottomRightRadius: 20, left: 15, textAlign: 'center', lineHeight: 50 }}>Days</Text>

                </View>
                <View style={{ width: '100', flexDirection: 'row', borderWidth: 2, borderColor: '#FFFFFF', backgroundColor: '#1E293B', borderRadius: 20 }}>

                    <View style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 55, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#FFFFFF', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16,fontFamily: 'Poppins-Medium',top:3}}>Start  Date</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 5, left: 5 }} source={require('../Image/calendar2.jpg')} />
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 55, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#FFFFFF', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16,fontFamily: 'Poppins-Medium',top:3 }}>End  Date</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 5, left: 5 }} source={require('../Image/calendar2.jpg')} />
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 150, justifyContent: 'center', height: 40, borderRadius: 15,marginTop:20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily:'Poppins-SemiBold', textAlign: 'center'}}>Add Gool</Text>
            </View>

            <Image style={{ alignSelf: 'center', height: 80, width: 290, marginTop: 40 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
        </View>
    );
}

export default Addgoal;
