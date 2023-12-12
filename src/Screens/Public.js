import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Switch, Modal, Button } from 'react-native';
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
    color: (opacity = 1) => `rgba(82, 205, 38, ${opacity})`,

    decimalPlaces: 0,
};
const dataList = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

const Public = ({ navigation }) => {
    const [selected, setSelected] = useState(2);

    const handlePress = (index) => {
        setSelected(index);
    };

    const buttonStyle = (index) => {
        const isSelected = selected === index;
        return {
            width: isSelected ? 70 : 70,
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
            fontFamily: 'DMSans-Bold',
            color: '#FFFFFF', marginTop: 3
        };
    };
    const dayLabelStyle = (index) => {
        const isSelected = selected === index;
        return {
            fontSize: isSelected ? 20 : 16, // Increase the font size when selected
            // fontFamily: 'Mulish-Regular',
            fontFamily: 'DMSans-Bold',
            color: '#FFFFFF', marginTop: 5
        };
    };

    const monthLabel = (index) => {
        return selected === index ? 'Jan' : '';
    };
    const [onoff0, setonoff0] = useState(true);
    const onoffSwitch0 = () => {
        setonoff0((previousState) => !previousState);
    };
    //month color chnage//
    const [selectedMonth, setSelectedMonth] = useState(null);

    const handleMonthPress = (month) => {
        setSelectedMonth(month);
    };
    //id backgroundcolor chnage//
    const [selectedOption, setSelectedOption] = useState('1D');

    const handleOptionPress = (option) => {
        setSelectedOption(option);
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
            <Text style={{ width: 200, fontSize: 24, color: '#FFFFFF', left: 30, fontFamily: 'DMSans-Bold', }}>Our Doverning 2000</Text>
            <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5, bottom: 2 }}>
                    <Image style={{ height: 15, width: 15, alignSelf: 'center', justifyContent: 'center' }} source={require('../Image/arrow.png')} />
                    <Text style={{ color: '#4CE364', fontSize: 14, fontFamily: 'DMSans-Bold', left: 10, alignSelf: 'center' }}>500(2.36%)Today</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 46, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'DMSans-Bold', justifyContent: 'center' }}>My Devening</Text>
                </TouchableOpacity>
            </View>
            {/* <Text>line chart staet</Text> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => handleMonthPress('Jan')}>
                    <Text
                        style={{
                            color: selectedMonth === 'Jan' ? 'blue' : '#FFFFFF',
                            fontSize: 14,
                            fontFamily: 'DMSans-Medium',
                        }}
                    >
                        Jan
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMonthPress('Feb')}>
                    <Text
                        style={{
                            color: selectedMonth === 'Feb' ? 'blue' : '#FFFFFF',
                            fontSize: 14,
                            fontFamily: 'DMSans-Medium',
                        }}
                    >
                        Feb
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMonthPress('Mar')}>
                    <Text
                        style={{
                            color: selectedMonth === 'Mar' ? 'blue' : '#FFFFFF',
                            fontSize: 14,
                            fontFamily: 'DMSans-Medium',
                        }}
                    >
                        Mar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMonthPress('Apr')}>
                    <Text
                        style={{
                            color: selectedMonth === 'Apr' ? 'blue' : '#FFFFFF',
                            fontSize: 14,
                            fontFamily: 'DMSans-Medium',
                        }}
                    >
                        Apr
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMonthPress('Jun')}>
                    <Text
                        style={{
                            color: selectedMonth === 'Jun' ? 'blue' : '#FFFFFF',
                            fontSize: 14,
                            fontFamily: 'DMSans-Medium',
                        }}
                    >
                        Jun
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMonthPress('Jul')}>
                    <Text
                        style={{
                            color: selectedMonth === 'Jul' ? 'blue' : '#FFFFFF',
                            fontSize: 14,
                            fontFamily: 'DMSans-Medium',
                        }}
                    >
                        Jul
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ position: 'absolute', zIndex: 100, left: 15, margin: 5 }}>
                    {dataList.map(i => {
                        return (
                            <Text style={{ margin: 1, color: '#BDBDBD' }}> {i}</Text>
                        )
                    })}
                    <View style={{ flexDirection: 'row', bottom: 15 }}>

                        <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', width: 130, height: 33, alignItems: 'center', justifyContent: 'center', borderRadius: 5, right: 10 }}>
                            <Image resizeMode='contain' style={{ height: 20, width: 20, right: 5 }} source={require('../Image/tared.png')} />
                            <Text style={{ color: '#FFFFFF', left: 7, fontFamily: 'DMSans-Bold', fontSize: 12, justifyContent: 'center' }}>Data Range</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: 200, }}>
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

                        </View>
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
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={{ padding: 15, backgroundColor: '#1E293B', borderRadius: 30, marginTop: 20 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', }}>Go to specific day for davening</Text>

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

                

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', alignSelf: 'center',margin:10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Connections </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Today</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>All Time</Text>
                    </View>
            
                <TouchableOpacity onPress={() => navigation.navigate('Doverning')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, borderWidth: 2, borderColor: '#D2A784', alignItems: 'center', width: '93%', alignSelf: 'center' }}>
                    {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View> */}
                    <View style={{ left: 10 }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>Davening</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

                        <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 20 }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>28</Text>
                        </View>
                        <Image resizeMode='contain' style={{ height: 30, width: 40, right: 10 }} source={require('../Image/Davening.png')} />
                        <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>40</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Image style={{ alignSelf: 'center', height: 80, width: 278, marginTop: 15 }} resizeMode='cover' source={require('../Image/Splash2.png')} />

            </ScrollView>
        </View>
    );
}

export default Public;
