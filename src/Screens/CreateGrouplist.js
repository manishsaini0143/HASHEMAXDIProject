import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
const CreateGrouplist = ({ navigation }) => {
    // const [showandhide, setshowandhide] = useState();
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', margin: 20 }}>

                <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}> Create Group
                </Text>
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }}>
                <Image resizeMode='contain' style={{ height: 60, width: 60, }} source={require('../Image/profile1.png')} />
            </View>
            <View style={{ margin: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Connections</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
                </View>
                <View style={{ backgroundColor: '#1E293B', height: 55, borderRadius: 20, padding: 10, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Group Name</Text>
                </View>
                <View style={{ backgroundColor: '#1E293B', height: 55, borderRadius: 20, padding: 10, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Mission  eg. 30 days I davend</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Goals Time  eg. Twice a day</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', backgroundColor: '#0F172A', borderLeftWidth: 2, borderLeftColor: '#FFFFFF', height: 50, width: 70, borderTopRightRadius: 20, borderBottomRightRadius: 20, left: 15, textAlign: 'center', lineHeight: 50 }}>Days</Text>
                </View>
                <View style={{ backgroundColor: '#1E293B', height: 150, borderRadius: 20, padding: 10, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Group Name</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Invite Friends</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity>
                <ScrollView style={{ backgroundColor: '#1E293B', padding: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, margin: 5 }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Dovid</Text>
                        </View>

                        <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/rong.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, margin: 5 }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Dovid</Text>
                        </View>
                        <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, margin: 5 }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Dovid</Text>
                        </View>
                        <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, margin: 5 }}>
                        <View style={{ flexDirection: 'row', }}>

                            <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Dovid</Text>
                        </View>

                        <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                    </View>
                </ScrollView>
            </View>
            <View style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 150, justifyContent: 'center', height: 50, borderRadius: 15 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 5, textAlign: 'center' }}>Create</Text>
            </View>
            <Image style={{ margin: 20, height: 150, width: 350 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
        </View>
    );
}
export default CreateGrouplist;
