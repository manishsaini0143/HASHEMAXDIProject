import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Addgoal = ({ navigation }) => {
    //drop down//
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('On behalf of');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemPress = (item) => {
        setSelectedValue(item);
        setShowDropdown(false);
    };

    const dropdownItems = ['On behalf of', 'stap 1', 'stap 2', 'stap 3'];
    //drop down//

    const [selected, setSelected] = useState('');
    const [CalendarOpen, setCalendarOpen] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                        <Image resizeMode='contain' style={{ height: 23, width: 23, }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginLeft: 10, fontFamily: 'DMSans-Bold', }}>Add Personal Goals</Text>
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
            <View>

                {/* <TouchableOpacity onPress={() => navigation.navigate('Setup')} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium' }}>Connections</Text>
                    <Image resizeMode='contain' style={{ height: 15, width: 15 }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.navigate('Setup')} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', opacity: 0.9, width: '93%', alignSelf: 'center', margin: 5 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Connections</Text>
                    <Image resizeMode='contain' style={{ height: 17, width: 17, right: 15, }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity>
                {/* <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium',opacity:0.5}}>Mission eg. 5 dollars a day</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', opacity: 0.9, width: '93%', alignSelf: 'center', margin: 5 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Mission eg. 5 dollars a day</Text>
                </TouchableOpacity> */}
                {/* //Text input// */}
                <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '93%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'DMSans-Bold' }} keyboardType='Email-type' placeholder='Mission eg. 5 dollars a day' placeholderTextColor='#FFFFFF' />
                </View>
                {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', margin: 10, opacity: 0.9 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Medium', left: 10, top: 2 }}>On behalf of</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 20, right: 15, top: 2 }} source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity> */}
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

                        opacity: 0.9, width: '93%', alignSelf: 'center', margin: 5
                    }}
                    onPress={toggleDropdown} // Handle press to toggle dropdown
                >
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontFamily: 'DMSans-Bold',
                            left: 10,

                        }}
                    >
                        {selectedValue}
                    </Text>
                    <Image
                        resizeMode='contain'
                        style={{ height: 17, width: 17, right: 15, }}
                        source={require('../Image/arrowdown.jpg')}
                    />
                </TouchableOpacity>

                {showDropdown && (
                    <View style={{ backgroundColor: '#1E293B', borderRadius: 5, width: '93%', alignSelf: 'center', margin: 5 }}>
                        <FlatList
                            data={dropdownItems}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{ padding: 10 }}
                                    onPress={() => handleDropdownItemPress(item)}
                                >
                                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', borderRadius: 20, alignSelf: 'center' }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )}
                {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', opacity: 0.9, width: '93%', alignSelf: 'center', margin: 5 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Mother</Text>
                </TouchableOpacity> */}
                <View style={{ borderRadius: 15, backgroundColor: '#1E293B', width: '93%', flexDirection: 'row', margin: 10, height: 46, alignSelf: 'center', borderWidth: 1, borderColor: '#FFFFFF', }} >

                    <TextInput style={{ color: '#FFFFFF', width: '70%', fontSize: 16, alignSelf: 'center', opacity: 0.7, left: 10, fontFamily: 'DMSans-Bold', }} keyboardType='Email-type' placeholder='Mother' placeholderTextColor='#FFFFFF' />
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 46, alignItems: 'center', borderWidth: 2, borderColor: '#FFFFFF', opacity: 0.8, width: '93%', alignSelf: 'center', margin: 5 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 13, }}>Total Time</Text>
                    <View style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', backgroundColor: '#0F172A', borderLeftWidth: 2, borderLeftColor: '#FFFFFF', height: 43, width: 100, borderTopRightRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', textAlign: 'center', }}>Days</Text>
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

            </View>
            <View style={{ alignSelf: 'center', backgroundColor: '#1E293B', width: 150, justifyContent: 'center', height: 45, borderRadius: 10, marginTop: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', textAlign: 'center', }}>Add Gool</Text>

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
            <Image style={{ alignSelf: 'center', height: 80, width: 290, marginTop: 40 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
        </View>
    );
}

export default Addgoal;
