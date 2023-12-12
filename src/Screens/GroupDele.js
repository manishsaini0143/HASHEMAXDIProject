import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Switch, Share, Modal, Button } from 'react-native';
import Slider from 'react-native-slider';
import { LineChart } from 'react-native-chart-kit';
const data = {
    labels: ['1D', '5D', '1M', '3M', '6M', 'YTD'],
    datasets: [
        {
            data: [25, 15, 60, 50, 75, 40, 65, 30, 77, 50, 80],//green//
            color: (opacity = 1) => `rgba(105, 170, 79, ${opacity = 1})`,
            strokeWidth: 2,
        },
    ],
};
const chartConfig = {
    backgroundGradientFrom: '#0D1134',
    backgroundGradientTo: '#0D1134',
    color: (opacity = 1) => `rgba(105, 170, 79, ${opacity})`,

    decimalPlaces: 0, // Number of decimal places for Y-axis labels
};
const dataList = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

const GroupDele = ({ navigation }) => {
    //Modsal//
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleTextInputChange = (text) => {
        setInputText(text);
    };

    //Modal//
    //days//
    const [selected, setSelected] = useState(2);

    const handlePress = (index) => {
        setSelected(index);
    };

    const buttonStyle = (index) => {
        const isSelected = selected === index;
        return {
            width: isSelected ? 75 : 75,
            height: isSelected ? 110 : 90,
            backgroundColor: '#0F172A',
            borderRadius: 10,
            alignItems: 'center',
            alignSelf: 'center',
            margin: 15,
            borderWidth: 2,
            borderColor: isSelected ? '#D2A784' : '#0F172A',
            opacity: isSelected ? 1 : 0.8,
        };
    };

    const textStyle = (index) => {
        const isSelected = selected === index;
        return {
            fontSize: isSelected ? 26 : 22,
            fontFamily: 'Mulish-Bold',
            color: '#FFFFFF', marginTop: 3
        };
    };

    const dayLabelStyle = (index) => {
        const isSelected = selected === index;
        return {
            fontSize: isSelected ? 20 : 16, // Increase the font size when selected
            fontFamily: 'Mulish-Regular',
            color: '#FFFFFF', marginTop: 5
        };
    };

    const monthLabel = (index) => {
        return selected === index ? 'Jan' : '';
    };
    //days//

    //month color change //
    const [selectedMonth, setSelectedMonth] = useState(null);

    const handleMonthPress = (month) => {
        setSelectedMonth(month);
    };
    //id backgroundcolor change//
    const [selectedOption, setSelectedOption] = useState('1D');

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };
    const [onoffo1, setonoffo1] = useState(true);
    const onoffSwitcho1 = () => {
        setonoffo1((previousState) => !previousState);
    };
    // const openShareDialog = () => {
    //     Share.share({
    //         message: 'Check out my profile!',
    //         // You can specify more share options like title and URL here
    //     });
    // };
    const handleShare = async () => {
        try {
            await Share.share({
                message: 'Check out this awesome content!',
                url: 'https://example.com',
                title: 'Share Content',
            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                    <Image resizeMode='contain' style={{ height: 25, width: 25, }} source={require('../Image/Backerro.jpg')} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity>

                            <Image resizeMode='contain' style={{ height: 25, width: 25, margin: 10 }} source={require('../Image/settings.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                            <Image resizeMode='contain' style={{ height: 27, width: 27, margin: 10 }} source={require('../Image/notification.jpg')} />
                            <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', top: 10, right: 12 }}></View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 50, width: 50, }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image resizeMode='contain' style={{ height: 80, width: 80, }} source={require('../Image/groupdelpro.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', left: 20, bottom: 5 }}>ABC GROUP</Text>
                </View>
                {/* //onPress={openShareDialog} // */}
                <TouchableOpacity onPress={handleShare} style={{ alignSelf: 'center', borderRadius: 10, width: 40, backgroundColor: '#1E293B', height: 40 }}>
                    <Image resizeMode='contain' style={{ height: 30, width: 30, justifyContent: 'center', alignSelf: 'center', top: 5 }} source={require('../Image/share.jpg')} />
                </TouchableOpacity>
            </View>
            <Text style={{ width: 180, fontSize: 18, color: '#FFFFFF', left: 30, fontFamily: 'DMSans-Bold', marginTop: 20 }}>Total Connections 500</Text>
            <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5, bottom: 3 }}>
                    <Image style={{ height: 15, width: 15, alignSelf: 'center', justifyContent: 'center' }} source={require('../Image/arrow.png')} />
                    <Text style={{ color: '#4CE364', fontSize: 15, fontFamily: 'DMSans-Bold', left: 10, alignSelf: 'center' }}>500(2.36%)Today</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 46, alignItems: 'center', width: '45%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'DMSans-Bold', alignSelf: 'center', justifyContent: 'center' }}>Connection ABC</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                <View style={{ backgroundColor: '#D2A784', height: 2, width: '93%', borderRadius: 10, alignSelf: 'center', opacity: 0.7, margin: 15 }}></View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => handleMonthPress('Jan')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Jan' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                fontFamily: 'DMSans-Medium',
                                width: 40,
                                marginLeft: 15
                            }}
                        >
                            Jan
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Feb')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Feb' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium'
                            }}
                        >
                            Feb
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Mar')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Mar' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium'
                            }}
                        >
                            Mar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Apr')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Apr' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium'
                            }}
                        >
                            Apr
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Jun')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Jun' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Jun
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Jul')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Jul' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Jul
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Aug')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Aug' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Aug
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Sep')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Sep' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Sep
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Oct')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Oct' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Oct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Nom')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Nom' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Nom
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMonthPress('Dec')}>
                        <Text
                            style={{
                                color: selectedMonth === 'Dec' ? '#D2A784' : '#FFFFFF',
                                fontSize: 14,
                                width: 40,
                                fontFamily: 'DMSans-Medium',
                            }}
                        >
                            Dec
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <View >
                    <View style={{ position: 'absolute', zIndex: 100, left: 15, margin: 5 }}>
                        {dataList.map(i => {
                            return (
                                <Text style={{ margin: 1, color: '#BDBDBD' }}> {i}</Text>
                            )
                        })}
                        <View style={{ flexDirection: 'row', bottom: 15 }}>

                            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', width: 130, height: 33, alignItems: 'center', justifyContent: 'center', borderRadius: 5, right: 15 }}>
                                <Image resizeMode='contain' style={{ height: 20, width: 20, right: 5 }} source={require('../Image/tared.png')} />
                                <Text style={{ color: '#FFFFFF', left: 7, fontFamily: 'DMSans-Bold', fontSize: 12, justifyContent: 'center' }}>Data Range</Text>
                            </TouchableOpacity>
                            <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} contentContainerStyle={{paddingRight:140}} >
                                <View style={{ flexDirection: 'row' }}>

                                    <TouchableOpacity style={{ backgroundColor: selectedOption === '1D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('1D')}>
                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>1D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === '5D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('5D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>5D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === '1M' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('1M')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>1M</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === '3M' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('3M')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>3M</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === '6M' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('6M')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>6M</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y1D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y1D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y1D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y2D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y2D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y2D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y3D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y3D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y3D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y4D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y4D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y4D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y5D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y5D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y5D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y6D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y6D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y6D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y7D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y7D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y7D</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ backgroundColor: selectedOption === 'Y8D' ? '#D2A784' : '#1E293B', width: 38, borderRadius: 5, height: 30, justifyContent: 'center', marginLeft: 2, marginRight: 2 }} onPress={() => handleOptionPress('Y8D')}>

                                        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, textAlign: 'center', }}>Y8D</Text>
                                    </TouchableOpacity>
                                </View>

                            </ScrollView>
                        </View>

                    </View>
                    <LineChart
                        // horizontal
                        data={data}
                        withDots={false}
                        width={450}
                        height={250}
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        chartConfig={chartConfig}
                        withHorizontalLines={false}
                    />
                </View>
                <View>
                    <Image resizeMode='contain' style={{ height: 50, width: 50, position: 'absolute', zIndex: 1, bottom: 185, left: 235 }} source={require('../Image/trend.png')} />
                    <Image resizeMode='contain' style={{ height: 40, width: 50, position: 'absolute', zIndex: 1, bottom: 160, left: 250 }} source={require('../Image/Dotes.png')} />
                </View>
                <View style={{ padding: 15, backgroundColor: '#1E293B', borderRadius: 30, marginTop: 20 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', }}>Go to specific day for group</Text>
                        <Switch
                            trackColor={{ false: '#0F172A', true: '#D1A684' }}
                            thumbColor={onoffo1 ? '#FFFFFF' : '#FFFFFF'}
                            onValueChange={onoffSwitcho1}
                            value={onoffo1}
                        />
                    </View>
                    <ScrollView
                        horizontal
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#1E293B',
                            height: 135,
                            borderRadius: 25,
                            marginTop: 20,
                        }}
                    >
                        {[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(
                            (day, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={buttonStyle(index)}
                                    onPress={() => handlePress(index)}
                                >
                                    <View
                                        style={{
                                            backgroundColor: '#D2A784',
                                            fontSize: 16,
                                            fontFamily: 'JosefinSans-Bold',
                                            width: 74,
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                            textAlign: 'center',
                                            color: '#FFFFFF',
                                            opacity: 0.9,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontFamily: 'JosefinSans-Bold',
                                                textAlign: 'center',
                                                color: '#FFFFFF',
                                                bottom: 3,
                                            }}
                                        >
                                            {monthLabel(index)}
                                        </Text>
                                    </View>
                                    <Text style={textStyle(index)}>{day}</Text>
                                    <Text style={dayLabelStyle(index)}>
                                        {day % 2 === 0 ? 'Fri' : 'Mon'}
                                    </Text>
                                </TouchableOpacity>
                            )
                        )}
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', margin: 20, padding: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 16 }}>Goals - 15/45</Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 16 }}>Mission - 75 Minutes</Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 16, }}>Time Frame - 30 Days</Text>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', padding: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 18, }}>Description</Text>
                    <View style={{ backgroundColor: '#D2A784', height: 1, width: '75%', borderRadius: 10, opacity: 0.7, marginTop: 5 }}></View>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 14, marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur </Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', }}>adipiscingelit</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', padding: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>50 Participants</Text>
                    <Image resizeMode='contain' style={{ height: 25, width: 20, alignSelf: 'center' }} source={require('../Image/search.jpg')} />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', margin: 10, left: 3 }}>Add Participants</Text>
                    <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center', margin: 10, justifyContent: 'center' }} source={require('../Image/addbutten.png')} />
                </View>
                <View style={{ backgroundColor: '#1E293B', width: '93%', alignSelf: 'center', borderRadius: 10, padding: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', margin: 10 }}>35 completed out of 50</Text>
                    <Slider
                        style={{ height: 20, width: '95%', marginLeft: 7 }}
                        trackStyle={{ backgroundColor: '#0F172A' }}
                        thumbTintColor={'red'}
                        thumbStyle={{ backgroundColor: '#D2A784' }}
                        minimumValue={0}
                        maximumValue={4}
                        step={0}
                        minimumTrackTintColor="#D2A784"
                    />
                </View>
                <View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', alignSelf: 'center', margin: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Connections </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Today</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>All Time</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Doverning')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, borderWidth: 2, borderColor: '#D2A784', alignItems: 'center', width: '93%', alignSelf: 'center' }}>
                    {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View> */}
                    <View style={{ left: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>Davening</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

                        <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 35 }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>28</Text>
                        </View>
                        <Image resizeMode='contain' style={{ height: 30, width: 40, right: 17 }} source={require('../Image/Davening.png')} />
                        <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>40</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#1E293B', height: 380, borderRadius: 20, width: '100%', marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold' }}>Chat</Text>
                        <Image resizeMode='contain' style={{ height: 25, width: 25, left: 10, }} source={require('../Image/Massage.jpg')} />
                    </View>
                    <View style={{ backgroundColor: '#D2A784', height: 2, width: 380, borderRadius: 10, alignSelf: 'center', opacity: 0.7 }}></View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ margin: 10, height: 70, left: 10 }}>
                            <Image resizeMode='cover' style={{ height: 60, width: 60, }} source={require('../Image/profiled1.png')} />
                        </View>
                        <View style={{ margin: 20 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 18, fontFamily: 'DMSans-Bold' }}>Com<Text style={{ color: '#64748B' }}> 1h ago</Text></Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'DMSans-Bold', width: 230, }}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#0F172A', height: 3, width: 330, borderRadius: 10, alignSelf: 'center', margin: 10 }}></View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ margin: 10, height: 70, left: 10 }}>
                            <Image resizeMode='cover' style={{ height: 60, width: 60, }} source={require('../Image/profiled1.png')} />
                        </View>
                        <View style={{ margin: 20 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 18, fontFamily: 'DMSans-Bold' }}>Com<Text style={{ color: '#64748B' }}> 1h ago</Text></Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'DMSans-Bold', width: 230, }}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#0F172A', height: 50, borderRadius: 10, margin: 10, flexDirection: 'row', borderWidth: 2, borderColor: '#FFFFFF', width: 350, alignSelf: 'center' }}>
                        <TextInput style={{ color: '#FFFFFF', left: 20, fontSize: 12, fontFamily: 'DMSans-Bold', width: 220, opacity: 0.5 }} placeholder='Type' placeholderTextColor='#FFFFFF' keyboardType='text' onChangeText={handleTextInputChange} />
                        <TouchableOpacity onPress={openModal} style={{ backgroundColor: '#1E293B', justifyContent: 'center', position: 'relative', left: 75, height: 45, width: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderLeftWidth: 2, borderColor: '#FFFFFF' }}>
                            <Image resizeMode='contain' style={{ height: 28, width: 30, left: 10 }} source={require('../Image/Dots1.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <Modal
                        visible={isModalVisible}
                        animationType="slide"
                        transparent={true}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300 }}>
                                <Text> {inputText}</Text>
                                <Button title="Close Modal" onPress={closeModal} />
                            </View>
                        </View>
                    </Modal>
                </View>
                <Text style={{ color: "#FFFFFF", fontSize: 18, fontFamily: 'DMSans-Bold', margin: 15 }}> Participants</Text>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Dovid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontSize: 18, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Yaakov</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontSize: 18, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Raj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontSize: 18, fontFamily: 'DMSans-Bold', left: 10, justifyContent: 'center' }}>Dovid</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>More</Text>
                    <Image style={{ height: 15, width: 20, marginLeft: 5, justifyContent: 'center' }} resizeMode='contain' source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity>
                <Image style={{ alignSelf: 'center', height: 80, width: 278 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
                <TouchableOpacity style={{ backgroundColor: '#1E293B', width: '93%', borderRadius: 30, justifyContent: 'center', alignSelf: 'center', height: 46, flexDirection: 'row', margin: 15,alignItems:'center'}}>
                    <Image style={{ height: 20, width: 20 }} resizeMode='contain' source={require('../Image/Exit1.png')} />
                    <Text style={{ textAlign: 'center', color: '#CC2929', fontSize: 16, fontFamily: 'DMSans-Bold',left:10 }}>
                        Exit group
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

export default GroupDele;
