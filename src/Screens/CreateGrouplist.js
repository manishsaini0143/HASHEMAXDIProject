import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
const CreateGrouplist = ({ navigation }) => {
    //drop down//
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Connections');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemPress = (item) => {
        setSelectedValue(item);
        setShowDropdown(false);
    };

    const dropdownItems = ['Connections', 'Option 1', 'Option 2', 'Option 3'];
    //drop down//
    const [selected, setSelected] = useState('');
    const [CalendarOpen, setCalendarOpen] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 15 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', top: 4 }}>
                        <Image resizeMode='contain' style={{ height: 25, width: 25, justifyContent: 'center' }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginLeft: 10, fontFamily: 'DMSans-Bold', justifyContent: 'center', top: 2 }}>Create Group</Text>
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
            <View style={{ alignSelf: 'center', margin: 10 }}>
                <Image resizeMode='contain' style={{ height: 70, width: 70, }} source={require('../Image/groupdelpro.png')} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

                <View>
                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', margin: 10, opacity: 0.9 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium', left: 10, top: 2 }}>Connections</Text>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, right: 15, top: 2 }} source={require('../Image/arrowdown.jpg')} />
                    </TouchableOpacity> */}
                    {/* <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'Poppins-Medium', top: 5 }} keyboardType='Email-type' placeholder='Group Name' placeholderTextColor='#FFFFFF' />
                    </View> */}
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: '#1E293B',
                            borderRadius: 15,
                            height: 46,
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: '#FFFFFF',
                            width: '93%', alignSelf: 'center', margin: 10,
                            opacity: 0.9,
                        }}
                        onPress={toggleDropdown} // Handle press to toggle dropdown
                    >
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 16,
                                fontFamily: 'DMSans-Bold',
                                justifyContent: 'center',
                                left: 10,

                            }}
                        >
                            {selectedValue}
                        </Text>
                        <Image
                            resizeMode='contain'
                            style={{ height: 17, width: 17, right: 15, justifyContent: 'center' }}
                            source={require('../Image/arrowdown.jpg')}
                        />
                    </TouchableOpacity>

                    {showDropdown && (
                        <View style={{ backgroundColor: '#1E293B', margin: 10, borderRadius: 5 }}>
                            <FlatList
                                data={dropdownItems}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={{ padding: 10 }}
                                        onPress={() => handleDropdownItemPress(item)}
                                    >
                                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}
                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', opacity: 0.9,width:'93%',alignSelf:'center',margin:5}}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Group Name</Text>
                    </TouchableOpacity> */}
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '93%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.8, left: 10, fontFamily: 'DMSans-Bold', }} keyboardType='Email-type' placeholder='Group Name' placeholderTextColor='#FFFFFF' />
                    </View>
                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', opacity: 0.9, width: '93%', alignSelf: 'center', margin: 5 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Mission eg. 30 days I davend</Text>
                    </TouchableOpacity> */}
                    <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '93%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'DMSans-Bold', }} keyboardType='Email-type' placeholder='Mission eg. 30 days I davend' placeholderTextColor='#FFFFFF' />
                    </View>
                    {/* <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '95%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                        <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'Poppins-Medium', top: 5 }} keyboardType='Email-type' placeholder='Goals Time eg. Twice a day' placeholderTextColor='#FFFFFF' />
                        <View style={{ backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#FFFFFF', height: 44, width: 60, borderTopRightRadius: 15, borderBottomRightRadius: 15,justifyContent:'center',left:45}}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14,textAlign:'center',}}>Days</Text>
                        </View>

                    </View> */}
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', opacity: 0.8, width: '93%', alignSelf: 'center', margin: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 13, justifyContent: 'center' }}>Goals Time  eg. Twice a day</Text>
                        <View style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', backgroundColor: '#0F172A', borderLeftWidth: 1, borderLeftColor: '#FFFFFF', height: 43, width: 90, borderTopRightRadius: 20, borderBottomRightRadius: 20, textAlign: 'center', justifyContent: 'center' }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', textAlign: 'center' }}>Days</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '95%', flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', backgroundColor: '#1E293B', borderRadius: 20, alignSelf: 'center', height: 46, width: '93%', alignSelf: 'center', margin: 10 }}>

                        <TouchableOpacity onPress={() => {
                            setCalendarOpen(true)
                        }} style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 44, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#FFFFFF', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                            {
                                !selected ?

                                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', margin: 5, }}>Start  Date</Text> :
                                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Poppins-SemiBold', margin: 5, }}>{selected}</Text>
                            }
                            <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar2.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: '#1E293B', width: '50%', height: 44, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#FFFFFF', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', margin: 5, }}>End  Date</Text>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, margin: 10, left: 5 }} source={require('../Image/calendar2.jpg')} />
                        </TouchableOpacity>
                    </View>
                    {
                        CalendarOpen == true ?

                            <View style={{ width: 400, height: 500 }}>
                                <Calendar
                                    onDayPress={day => {
                                        setSelected(day.dateString);
                                        setCalendarOpen(false)
                                    }}
                                    markedDates={{
                                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                    }}
                                />
                            </View>
                            : null
                    }
                    <View style={{ backgroundColor: '#1E293B', height: 150, borderRadius: 15, margin: 7, borderWidth: 2, borderColor: '#FFFFFF', alignSelf: 'center', opacity: 0.7, width: '93%', alignSelf: 'center', margin: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, opacity: 0.9, margin: 15, fontFamily: 'DMSans-Bold' }}>Group Description</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', opacity: 0.8, width: '93%', alignSelf: 'center', margin: 5 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Invite Friends</Text>
                        <Image resizeMode='contain' style={{ height: 17, width: 17, right: 15, justifyContent: 'center' }} source={require('../Image/arrowdown.jpg')} />
                    </TouchableOpacity>
                    <ScrollView style={{ backgroundColor: '#1E293B', padding: 10, borderRadius: 15, alignSelf: 'center', marginTop: 10, width: '93%', alignSelf: 'center', margin: 5 }}>
                        {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15,}}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/parsnal.jpg')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', marginLeft: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/rong.jpg')} />
                        </TouchableOpacity> */}
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/menprofile.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', marginLeft: 5 }}>Dovid</Text>
                            </View>
                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/rong.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/menprofile.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', marginLeft: 5 }}>Dovid</Text>
                            </View>
                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/menprofile.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', marginLeft: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0F172A', borderRadius: 20, height: 50, alignItems: 'center', padding: 15, margin: 5 }}>
                            <View style={{ flexDirection: 'row', }}>

                                <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/menprofile.png')} />
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', marginLeft: 5 }}>Dovid</Text>
                            </View>

                            <Image resizeMode='cover' style={{ height: 20, width: 20 }} source={require('../Image/right.jpg')} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 130, justifyContent: 'center', height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#FFFFFF', marginTop: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', textAlign: 'center', }}>Create</Text>
                </TouchableOpacity>
                <Image style={{ alignSelf: 'center', height: 80, width: 278, marginTop: 20 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
            </ScrollView>
        </View>
    );
}
export default CreateGrouplist;
