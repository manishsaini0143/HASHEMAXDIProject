import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
const CreateGrouplist = ({ navigation }) => {
    // const [showandhide, setshowandhide] = useState();
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginLeft: 10, fontFamily: 'JosefinSans-Bold' }}>Create Group</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/settings.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/notification.jpg')} />
                        <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', right: 6, top: 9 }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Image resizeMode='contain' style={{ height: 70, width: 70, }} source={require('../Image/profile1.png')} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

                <View style={{ margin: 10, padding: 10 }}>
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10,fontFamily:'Poppins-Medium',top:5}} keyboardType='Email-type' placeholder='Connections' placeholderTextColor='#FFFFFF' />
                        <Image resizeMode='cover' style={{ height: 20, width: 20, alignSelf: 'center', left: 60 }} source={require('../Image/arrowdown.jpg')} />
                    </View>
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10,fontFamily:'Poppins-Medium',top:5}} keyboardType='Email-type' placeholder='Group Name' placeholderTextColor='#FFFFFF' />
                    </View>
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10 ,fontFamily:'Poppins-Medium',top:5}} keyboardType='Email-type' placeholder='Mission ag. 30 days I davend' placeholderTextColor='#FFFFFF' />
                    </View>
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10,fontFamily:'Poppins-Medium',top:5}} keyboardType='Email-type' placeholder='Goals Time eg. Twice a day' placeholderTextColor='#FFFFFF' />
                        <Text style={{ color: '#FFFFFF', fontSize: 14, backgroundColor: '#0F172A', borderLeftWidth: 1, borderLeftColor: '#FFFFFF', height: 44, width: 60, borderTopRightRadius: 15, borderBottomRightRadius: 15, left: 45, textAlign: 'center', lineHeight: 45 }}>Days</Text>

                    </View>
                    {/* //Days// */}

                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Goals Time  eg. Twice a day</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', backgroundColor: '#0F172A', borderLeftWidth: 2, borderLeftColor: '#FFFFFF', height: 50, width: 70, borderTopRightRadius: 20, borderBottomRightRadius: 20, left: 15, textAlign: 'center', lineHeight: 50 }}>Days</Text>
                </View> */}
                    {/* <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 150, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                    <TextInput style={{ color: '#FFFFFF', width: '90%', height:150,fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10 ,backgroundColor:'red',bottom:40}} keyboardType='Email-type' placeholder='Group Description' placeholderTextColor='#FFFFFF' />
                </View> */}
                    <View style={{ width: '95%', flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', backgroundColor: '#1E293B', borderRadius: 20,alignSelf:'center',margin:13 }}>

                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 50, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#FFFFFF', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18,fontFamily:'Poppins-SemiBold', margin: 5 }}>Start  Date</Text>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar2.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#FFFFFF', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18,fontFamily:'Poppins-SemiBold', margin: 5 }}>End  Date</Text>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar2.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#1E293B', height: 150, borderRadius: 20, padding: 10, borderWidth: 2, borderColor: '#FFFFFF',width:'95%',alignSelf:'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, opacity: 0.5 }}>Group Description</Text>
                    </View>
                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Invite Friends</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity> */}
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 15, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16,opacity: 0.7, left: 10,fontFamily:'Poppins-Medium',top:5}} keyboardType='Email-type' placeholder='Invite Friends' placeholderTextColor='#FFFFFF' />
                        <Image resizeMode='cover' style={{ height: 20, width: 20, alignSelf: 'center', left: 60 }} source={require('../Image/arrowdown.jpg')} />
                    </View>
                    <ScrollView style={{ backgroundColor: '#1E293B', padding: 10, borderRadius: 15,width:'90%',alignSelf:'center',marginTop:10}}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily:'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/rong.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18,fontFamily:'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>
                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily:'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>
                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily:'Poppins-SemiBold', margin: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 130, justifyContent: 'center', height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#FFFFFF', marginTop: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', textAlign: 'center', }}>Create</Text>
                </View>
                <Image style={{ alignSelf: 'center', height: 80, width: 278, marginTop: 20 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
            </ScrollView>
        </View>
    );
}
export default CreateGrouplist;
