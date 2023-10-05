import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Addgoal = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', margin: 10 }}>

                <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Add Personal Goals
                </Text>
            </TouchableOpacity>

            <View style={{ alignSelf: 'center' }}>
                <Image resizeMode='contain' style={{ height: 60, width: 60, }} source={require('../Image/profile1.png')} />
            </View>
            <View style={{ margin: 10, padding: 10 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Setup')} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Connections</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity>
                <View style={{ backgroundColor: '#1E293B', height: 55, borderRadius: 20, padding: 10, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Mission eg. 5 dollars a day</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>On behalf of</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
                </View>
                <View style={{ backgroundColor: '#1E293B', height: 55, borderRadius: 20, padding: 10, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Mother</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Total Time</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', backgroundColor: '#0F172A', borderLeftWidth: 2, borderLeftColor: '#FFFFFF', height: 50, width: 70, borderTopRightRadius: 20, borderBottomRightRadius: 20, left: 15, textAlign: 'center', lineHeight: 50 }}>Days</Text>

                </View>
                <View style={{ width: '100', flexDirection: 'row', borderWidth: 2, borderColor: '#FFFFFF', backgroundColor: '#1E293B', borderRadius: 20 }}>

                    <View style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 55, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#FFFFFF', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 5 }}>Start  Date</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar.jpg')} />
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 55, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#FFFFFF', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 5 }}>End  Date</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar.jpg')} />
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 150, justifyContent: 'center', height: 50, borderRadius: 15 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 5, textAlign: 'center' }}>Add Gool</Text>
            </View>

            <Image style={{  height: 150, width: 300,alignSelf:'center',margin:10 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
        </View>
    );
}

export default Addgoal;
