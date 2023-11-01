import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Switch,Share } from 'react-native';
import Slider from 'react-native-slider';
import { LineChart } from 'react-native-chart-kit';
const data = {
    labels: ['1D', '5D', '1M', '3M', '6M', 'YTD'],
    datasets: [
        {
            data: [15, 25, 8, 45, 65, 35, 70, 65],
            color: (opacity = 1) => `rgba(210, 167, 132, ${opacity = 1})`,
            strokeWidth: 2,
        },
    ],
};
const chartConfig = {
    backgroundGradientFrom: '#0D1134',
    backgroundGradientTo: '#0D1134',
    color: (opacity = 1) => `rgba(222, 444, 555, ${opacity})`,

    decimalPlaces: 0, // Number of decimal places for Y-axis labels
};
const dataList = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

const GroupDele = ({ navigation }) => {
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ top: 10, left: 10 }}>
                    <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/Backerro.jpg')} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/settings.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/notification.jpg')} />
                        <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', right: 6, top: 9 }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, margin: 5 }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image resizeMode='contain' style={{ height: 80, width: 80, }} source={require('../Image/profile1.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 24, fontFamily: 'JosefinSans-Bold', left: 20, bottom: 5 }}>ABC GROUP</Text>
                </View>
                {/* //onPress={openShareDialog} // */}
                <TouchableOpacity   onPress={handleShare} style={{ alignSelf: 'center', borderRadius: 10, width: 40, backgroundColor: '#1E293B', height: 40 }}>
                    <Image resizeMode='contain' style={{ height: 30, width: 30, justifyContent: 'center', alignSelf: 'center', top: 5 }} source={require('../Image/share.jpg')} />
                </TouchableOpacity>
            </View>
            {/* <View style={{ alignItems: 'center', backgroundColor: '#1E293B', margin: 10, padding: 10, borderRadius: 10 }}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Group Connections - 500</Text>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Connection -ABC  </Text>
                <View style={{ flexDirection: 'row', width: 190, height: 40 }}>
                    <Image style={{ height: 20, width: 20, }} source={require('../Image/arrow.png')} />
                    <Text style={{ color: '#4CE364', fontSize: 18, fontWeight: 'bold', }}>500(2.36%)today</Text>
                </View>
            </View> */}
            <Text style={{ width: 220, fontSize: 24, color: '#FFFFFF', left: 30, fontFamily: 'JosefinSans-Bold', marginTop: 20 }}>Total Connections 500</Text>
            <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5 }}>
                    <Image style={{ height: 20, width: 20, alignSelf: 'center',top:2}} source={require('../Image/arrow.png')} />
                    <Text style={{ color: '#4CE364', fontSize: 17, fontFamily:'JosefinSans-Bold', left: 10, alignSelf: 'center' }}>500(2.36%)Today</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 46, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'JosefinSans-Bold', }}>Connection ABC</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                <View style={{ backgroundColor: '#D2A784', height: 3, width: 350, borderRadius: 10, alignSelf: 'center', opacity: 0.7, marginTop: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <TouchableOpacity>

                        <Text style={{ color: '#BDBDBD', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Jan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Text style={{ color: '#BDBDBD', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Feb</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#BDBDBD', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Mar</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#BDBDBD', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Apr</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#BDBDBD', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Jun</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Text style={{ color: '#BDBDBD', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Jul</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ position: 'absolute', zIndex: 100, left: 10, margin: 5 }}>
                        {dataList.map(i => {
                            return (
                                <Text style={{ margin: 1, color: '#BDBDBD' }}> {i}</Text>)
                        })}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', width: 110, height: 25, alignItems: 'center', justifyContent: 'center' }}>
                                <Image resizeMode='contain' style={{ height: 15, width: 20 }} source={require('../Image/tared.png')} />
                                <Text style={{ color: '#BDBDBD', left: 5, fontSize: 12, fontFamily: 'Poppins-SemiBold', }}>Data Range</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: 200, height: 25, left: 30 }}>
                                <TouchableOpacity>

                                    <Text style={{ color: '#FFFFFF', backgroundColor: '#D2A784', textAlign: 'center', lineHeight: 25, width: 35, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>1D</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>5D</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>1M</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>3M</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>6M</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Y1D</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <LineChart
                        data={data}
                        withDots={false}
                        width={450}
                        height={250}
                        withHorizontalLabels={false}
                        chartConfig={chartConfig}
                        withVerticalLabels={false}
                        withHorizontalLines={false}

                    />
                </View>
                <View style={{ padding: 15, backgroundColor: '#1E293B', borderRadius: 30, marginTop: 20 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', }}>Go to specific day for group</Text>
                        <Switch
                            trackColor={{ false: '#0F172A', true: '#D1A684' }}
                            thumbColor={onoffo1 ? '#FFFFFF' : '#FFFFFF'}
                            onValueChange={onoffSwitcho1}
                            value={onoffo1}
                        />
                    </View>
                    <ScrollView horizontal style={{ flexDirection: 'row', backgroundColor: '#1E293B', height: 150, borderRadius: 25, }}>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>15</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>16</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Fri</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>17</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Set</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5, borderBottomWidth: 2, borderBottomColor: '#D2A784' }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>18</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Sun</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>19</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Mon</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>20</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Tus</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>21</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Wed</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>22</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Fri</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>23</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Set</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>24</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Sun</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>25</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Mon</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>26</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', fontWeight: 'bold', color: '#FFFFFF' }}>Tus</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>27</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Wed</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>28</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Fri</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>29</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Set</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 10, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 67, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
                            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>30</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Sun</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#1E293B', borderRadius: 10, width: '90%', alignSelf: 'center', margin: 20, padding: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-Bold', fontSize: 16 }}>Connections - 15/45</Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-Bold', fontSize: 16 }}>Mission - 75 Minutes</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Bold' }}>Time Frame - 30 Days</Text>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#1E293B', borderRadius: 10, width: '90%', alignSelf: 'center', padding: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'JosefinSans-Bold', fontSize: 22, }}>Description</Text>
                    <View style={{ backgroundColor: '#D2A784', height: 3, width: '80%', borderRadius: 10, opacity: 0.7, marginTop: 5 }}></View>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'JosefinSans-Bold', fontSize: 16, marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur </Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', }}>adipiscingelit</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignSelf: 'center', margin: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', }}>50 Participants</Text>
                    <Image resizeMode='contain' style={{ height: 25, width: 20, alignSelf: 'center' }} source={require('../Image/search.jpg')} />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', margin: 10 }}>Add Participants</Text>
                    <Image resizeMode='contain' style={{ height: 40, width: 40, alignSelf: 'center', margin: 10 }} source={require('../Image/plus.png')} />
                </View>
                <View style={{ backgroundColor: '#1E293B', width: '90%',alignSelf:'center',borderRadius:10,padding:10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', margin: 10 }}>35 completed out of 50</Text>
                    <Slider
                        style={{ height: 20,width:'95%' }}
                        trackStyle={{ backgroundColor: '#0F172A' }}
                        thumbTintColor={'red'}
                        thumbStyle={{ backgroundColor: '#D2A784' }}
                        minimumValue={1}
                        maximumValue={6}
                        step={1}
                        minimumTrackTintColor="#D2A784"
                    />
                </View>
                <View style={{ backgroundColor: '#1E293B', height: 410, borderRadius: 20, width: '100%', marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'JosefinSans-Bold' }}>Chat</Text>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, left: 10 }} source={require('../Image/Massage.jpg')} />
                    </View>
                    <View style={{ backgroundColor: '#D2A784', height: 3, width: 380, borderRadius: 10, alignSelf: 'center', opacity: 0.7 }}></View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ margin: 10, height: 70, left: 10 }}>
                            <Image resizeMode='cover' style={{ height: 60, width: 60, }} source={require('../Image/profiled.jpg')} />
                        </View>
                        <View style={{ margin: 20 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontFamily: 'JosefinSans-Bold' }}>Com<Text style={{ color: '#64748B' }}> 1h ago</Text></Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Poppins-Medium', width: 250, }}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#0F172A', height: 3, width: 330, borderRadius: 10, alignSelf: 'center', margin: 10 }}></View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ margin: 10, height: 70, left: 10 }}>
                            <Image resizeMode='cover' style={{ height: 60, width: 60, }} source={require('../Image/profiled.jpg')} />
                        </View>
                        <View style={{ margin: 20 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontFamily: 'JosefinSans-Bold' }}>Com<Text style={{ color: '#64748B' }}> 1h ago</Text></Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Poppins-Medium', width: 250, }}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#0F172A', height: 50, borderRadius: 10, margin: 10, flexDirection: 'row', borderWidth: 2, borderColor: '#FFFFFF', width: 350, alignSelf: 'center' }}>
                        <TextInput style={{ color: '#FFFFFF', left: 20, fontSize: 12, fontFamily: 'Roboto-Bold', width: 220, opacity: 0.5 }} placeholder='Type' placeholderTextColor='#FFFFFF' keyboardType='text' />
                        <View style={{ backgroundColor: '#1E293B', justifyContent: 'center', position: 'relative', left: 75, height: 45, width: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderLeftWidth: 2, borderColor: '#FFFFFF' }}>
                            <Image resizeMode='contain' style={{ height: 28, width: 30, left: 10 }} source={require('../Image/Dots1.jpg')} />
                        </View>
                    </View>
                </View>
                <Text style={{ color: "#FFFFFF", fontSize: 25, fontFamily: 'JosefinSans-Bold', margin: 15 }}> Participants</Text>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '90%', alignSelf: 'center', padding: 5, margin: 10 }}>
                        <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, alignSelf: 'center', marginLeft: 15 }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'Poppins-SemiBold', left: 10, }}>Dovid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '90%', alignSelf: 'center', padding: 5, margin: 10 }}>
                        <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, alignSelf: 'center', marginLeft: 15 }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'Poppins-SemiBold', left: 10, }}>Yaakov</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '90%', alignSelf: 'center', padding: 5, margin: 10 }}>
                        <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, alignSelf: 'center', marginLeft: 15 }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'Poppins-SemiBold', left: 10, }}>Raj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, width: '90%', alignSelf: 'center', padding: 5, margin: 10 }}>
                        <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, alignSelf: 'center', marginLeft: 15 }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'Poppins-SemiBold', left: 10, }}>Dovid</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 15 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', }}>More</Text>
                    <Image style={{ height: 10, width: 18, marginLeft: 5 }} resizeMode='contain' source={require('../Image/arrowdown.jpg')} />
                </TouchableOpacity>
                <Image style={{ alignSelf: 'center', height: 80, width: 278 }} resizeMode='cover' source={require('../Image/Splash1.jpg')} />
                <TouchableOpacity style={{ backgroundColor: '#1E293B', width: '90%', borderRadius: 30, justifyContent: 'center', alignSelf: 'center', marginTop: 20, height: 46, flexDirection: 'row' }}>
                    <Image style={{ alignSelf: 'center', height: 20, width: 20 }} resizeMode='contain' source={require('../Image/Exit1.png')} />
                    <Text style={{ textAlign: 'center', color: '#CC2929', margin: 10, textAlign: 'center', fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>
                        Exit group
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

export default GroupDele;
