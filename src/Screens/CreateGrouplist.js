import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
const CreateGrouplist = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 15 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', top: 4 }}>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', marginLeft: 10, fontFamily: 'JosefinSans-Bold' }}>Create Group</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity>

                            <Image resizeMode='contain' style={{ height: 25, width: 25, margin: 5, top: 5 }} source={require('../Image/settings.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ top: 5 }} onPress={() => navigation.navigate('Notification')}>
                            <Image resizeMode='contain' style={{ height: 27, width: 27, margin: 5 }} source={require('../Image/notification.jpg')} />
                            <View style={{ backgroundColor: 'red', height: 8, width: 8, borderRadius: 20, zIndex: 1, position: 'absolute', top: 8, right: 8 }}></View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ top: 5 }} onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 45, width: 45, }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Image resizeMode='contain' style={{ height: 70, width: 70, }} source={require('../Image/profile1.png')} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

                <View style={{ margin: 10, padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', margin: 10, opacity: 0.9 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium', left: 10, top: 2 }}>Connections</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, right: 15, top: 2 }} source={require('../Image/arrowdown.jpg')} />
                    </TouchableOpacity>
                    {/* <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'Poppins-Medium', top: 5 }} keyboardType='Email-type' placeholder='Group Name' placeholderTextColor='#FFFFFF' />
                    </View> */}
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', margin: 10, opacity: 0.9 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium', left: 10, top: 2 }}>Group Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', margin: 10, opacity: 0.9 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium', left: 10, top: 2 }}>Mission eg. 30 days I davend</Text>
                    </TouchableOpacity>
                    {/* <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'Poppins-Medium', top: 5 }} keyboardType='Email-type' placeholder='Goals Time eg. Twice a day' placeholderTextColor='#FFFFFF' />
                        <View style={{ backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#FFFFFF', height: 44, width: 60, borderTopRightRadius: 15, borderBottomRightRadius: 15,justifyContent:'center',left:45}}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14,textAlign:'center',}}>Days</Text>
                        </View>

                    </View> */}
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', margin: 10, width: '95%', opacity: 0.8 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 13, top: 2 }}>Goals Time  eg. Twice a day</Text>
                        <View style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', backgroundColor: '#0F172A', borderLeftWidth: 1, borderLeftColor: '#FFFFFF', height: 43, width: 90, borderTopRightRadius: 20, borderBottomRightRadius: 20, textAlign: 'center', }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', textAlign: 'center', top: 10 }}>Days</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '95%', flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', backgroundColor: '#1E293B', borderRadius: 20, alignSelf: 'center', margin: 10, height: 46 }}>

                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 44, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#FFFFFF', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5, top: 2.5 }}>Start  Date</Text>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar2.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 44, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#FFFFFF', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5, top: 2.5 }}>End  Date</Text>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar2.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#1E293B', height: 150, borderRadius: 15, margin: 7, borderWidth: 2, borderColor: '#FFFFFF', width: '95%', alignSelf: 'center', opacity: 0.7 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, opacity: 0.9, margin: 15 }}>Group Description</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', margin: 12, opacity: 0.8 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium', left: 10, top: 2 }}>Invite Friends</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, right: 15, top: 2 }} source={require('../Image/arrowdown.jpg')} />
                    </TouchableOpacity>
                    <ScrollView style={{ backgroundColor: '#1E293B', padding: 10, borderRadius: 15, width: '90%', alignSelf: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/rong.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>
                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>
                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 130, justifyContent: 'center', height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#FFFFFF', marginTop: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', textAlign: 'center', top: 2.5 }}>Create</Text>
                </View>
                <Image style={{ alignSelf: 'center', height: 80, width: 278, marginTop: 20 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
            </ScrollView>
        </View>
    );
}
export default CreateGrouplist;
