import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
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
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ padding: 10 }} >
                    <TouchableOpacity onPress={() => navigation.goBack()}>

                        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 20, left: 15 }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '60%', height: 70, justifyContent: 'center', left: 10 }}>
                    <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/settings.png')} />
                    <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/notification.jpg')} />
                    <View style={{ backgroundColor: 'red', height: 13, width: 13, borderRadius: 20, zIndex: 1, position: 'absolute', top: 25, right: 110 }}></View>
                    <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/menphoto.png')} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ height: 50, width: 50, }} source={require('../Image/profile1.png')} />
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>ABC GROUP</Text>
                <Image resizeMode='contain' style={{ height: 25, width: 25, }} source={require('../Image/share.jpg')} />
            </View>
            <View style={{ alignItems: 'center', backgroundColor: '#1E293B', margin: 10, padding: 10, borderRadius: 10 }}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Group Connections - 500</Text>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Connection -ABC  </Text>
                <View style={{ flexDirection: 'row', width: 190, height: 40 }}>

                    <Image style={{ height: 20, width: 20, }} source={require('../Image/arrow.png')} />
                    <Text style={{ color: '#4CE364', fontSize: 18, fontWeight: 'bold', }}>500(2.36%)today</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#D2A784', height: 3, width: 350, borderRadius: 10, alignSelf: 'center', top: 10 }}></View>
            <ScrollView style={{ position: 'relative', top: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Jan</Text>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Feb</Text>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Mar</Text>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Apr</Text>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Jun</Text>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Jul</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ position: 'absolute', zIndex: 100, left: 15, margin: 5 }}>
                        {dataList.map(i => {
                            return (
                                <Text style={{ margin: 1, color: '#BDBDBD' }}> {i}</Text>
                            )
                        })}
                        <Text style={{ color: '#BDBDBD' }}>Data Range</Text>
                    </View>
                    <LineChart
                        data={data}
                        withDots={false}
                        width={450}
                        height={250}
                        withHorizontalLabels={false}
                        chartConfig={chartConfig}
                    />
                </View>
                <View style={{ padding: 15, backgroundColor: '#1E293B', borderRadius: 15, margin: 5 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', justifyContent: 'space-between' }}>

                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Go to specific day for group</Text>
                        <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} />
                    </View>
                    <ScrollView horizontal style={{ flexDirection: 'row', backgroundColor: '#1E293B' }}>

                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>15</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>16</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>17</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>18</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>19</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                        <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90 }}>
                            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}></Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#1E293B', margin: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Connections - 15/45</Text>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Mission - 75 Minutes</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Time Frame - 30 Days</Text>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#1E293B', margin: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, margin: 5 }}>Description</Text>
                    <View style={{ backgroundColor: '#D2A784', height: 3, width: 300, borderRadius: 10, }}></View>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, margin: 10 }}>Lorem ipsum dolor sit amet, consectetur </Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>adipiscingelit</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>50 Participants</Text>
                    <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', right: 10 }}>Add Participants</Text>
                    <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
                        <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#1E293B', margin: 10, height: 350, padding: 10, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold' }}>Chat</Text>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, left: 10 }} source={require('../Image/Massage.jpg')} />
                    </View>
                    <View style={{ backgroundColor: '#D2A784', height: 3, width: 350, borderRadius: 10, alignSelf: 'center' }}></View>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <Image resizeMode='contain' style={{ height: 60, width: 60, margin: 5 }} source={require('../Image/profiled.jpg')} />
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 'bold', top: 5 }}> Com 1h ago</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 'bold', width: 250, top: 10 }}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#0F172A', height: 3, width: 330, borderRadius: 10, top: 10, alignSelf: 'center' }}></View>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <Image resizeMode='contain' style={{ height: 60, width: 60, margin: 5 }} source={require('../Image/profiled.jpg')} />
                        <View>
                            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 'bold', top: 5 }}> Com 1h ago</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 'bold', width: 250, top: 10 }}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#0F172A', height: 50, borderRadius: 10, margin: 10, flexDirection: 'row', borderWidth: 2, borderColor: '#FFFFFF', width: 300, left: 15 }}>
                        <TextInput style={{ color: '#FFFFFFF', left: 20, fontSize: 18, fontWeight: 'bold', width: 120 }} placeholder='Type' placeholderTextColor='#FFFFFF' keyboardType='text' />
                        <View style={{ backgroundColor: '#1E293B', justifyContent: 'center', position: 'relative', left: 125, height: 45, width: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderLeftWidth: 2, borderColor: '#FFFFFF' }}>

                            <Image resizeMode='contain' style={{ height: 30, width: 30, left: 10 }} source={require('../Image/dots.jpg')} />
                        </View>
                    </View>
                </View>
                <View>

                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, }}>
                        <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Dovid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, }}>
                        <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Yaakov</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, }}>
                        <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Raj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, }}>
                        <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, }}></View>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Dovid</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>More</Text>
                    <Image style={{ height: 25, width: 25, left: 20 }} resizeMode='contain' source={require('../Image/arrowdown.jpg')} />
                </View>
                <Image style={{ alignSelf: 'center', height: 130, width: 350 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
                <TouchableOpacity style={{ backgroundColor: '#1E293B', width: '90%', borderRadius: 30, justifyContent: 'center', alignSelf: 'center', marginTop: 10, height: 46, flexDirection: 'row' }}>
                    <Image style={{ alignSelf: 'center', height: 20, width: 20 }} resizeMode='contain' source={require('../Image/Exit.jpg')} />
                    <Text style={{ textAlign: 'center', color: '#CC2929', margin: 10, textAlign: 'center', fontSize: 20 }}>
                        Exit group
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

export default GroupDele;
