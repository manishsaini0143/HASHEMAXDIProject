import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['1D', '5D', '1M', '3M', '6M', 'YTD'],
  datasets: [
    {
      data: [15, 25, 8, 45, 55, 65, 35, 70, 80, 60, 60],//pink//
      color: (opacity = 1) => `rgba(210, 167, 132, ${opacity = 1})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#0D1134',
  backgroundGradientTo: '#0D1134',
  color: (opacity = 1) => `rgba(222, 444, 555, ${opacity})`,

  decimalPlaces: 0,
};
const dataList = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

const Doverning = ({ navigation }) => {
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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
          <Image resizeMode='contain' style={{ height: 20, width: 20, }} source={require('../Image/Backerro.jpg')} />
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
      <Text style={{ width: 200, fontSize: 24, color: '#FFFFFF', left: 30, fontFamily: 'JosefinSans-Bold', }}>My Doverning 2000</Text>
      <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'space-around' }}>
        <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5, bottom: 2 }}>
          <Image style={{ height: 20, width: 20, alignSelf: 'center', top: 2 }} source={require('../Image/arrow.png')} />
          <Text style={{ color: '#4CE364', fontSize: 17, fontFamily: 'JosefinSans-Bold', left: 10, alignSelf: 'center' }}>500(2.36%)Today</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 46, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'JosefinSans-Bold', bottom: 2 }}>Our Devening</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>line chart staet</Text> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => handleMonthPress('Jan')}>
          <Text
            style={{
              color: selectedMonth === 'Jan' ? 'blue' : '#FFFFFF',
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
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
              fontFamily: 'Poppins-Medium',
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
              fontFamily: 'Poppins-Medium',
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
              fontFamily: 'Poppins-Medium',
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
              fontFamily: 'Poppins-Medium',
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
              fontFamily: 'Poppins-Medium',
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
          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', width: 130, height: 28, alignItems: 'center', justifyContent: 'center', borderRadius: 5, right: 10 }}>
              <Image resizeMode='contain' style={{ height: 20, width: 20, right: 5 }} source={require('../Image/tared.png')} />
              <Text style={{ color: '#FFFFFF', left: 7, fontFamily: 'Poppins-SemiBold', fontSize: 12, top: 1 }}>Data Range</Text>
            </View>
            <View style={{ flexDirection: 'row', width: 200, height: 25, left: 12 }}>
              <TouchableOpacity onPress={() => handleOptionPress('!D')}>

                <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === '!D' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>1D</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('5D')}>

                <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === '5D' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>5D</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('1M')}>

                <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === '1M' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>1M</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('3M')}>

                <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === '3M' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>3M</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('6M')}>

                <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === '6M' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>6M</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('Y1D')}>

                <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === 'Y1D' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Y1D</Text>
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
      <View>
        <Image resizeMode='contain' style={{ height: 50, width: 50, position: 'absolute', zIndex: 1, bottom: 190, left: 195 }} source={require('../Image/trend.png')} />
        <Image resizeMode='contain' style={{ height: 40, width: 50, position: 'absolute', zIndex: 1, bottom: 160, left: 210 }} source={require('../Image/dot.png')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <ScrollView horizontal style={{ flexDirection: 'row', backgroundColor: '#1E293B', height: 157, borderRadius: 25, marginTop: 20 }}>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>15</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>16</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Fri</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 110, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.9 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}>Jan </Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF', padding: 8 }}>17</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Set</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>18</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Sun</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>19</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Mon</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>20</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Tus</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>21</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Wed</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>22</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Fri</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>23</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Set</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>24</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Sun</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>25</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Mon</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>26</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', fontWeight: 'bold', color: '#FFFFFF' }}>Tus</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>27</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Wed</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>28</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Fri</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>29</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Set</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784', opacity: 0.8 }}>
            <View style={{ backgroundColor: '#D2A784', fontSize: 16, fontFamily: 'JosefinSans-Bold', width: 69, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.8 }}>
              <Text style={{ fontSize: 16, fontFamily: 'JosefinSans-Bold', textAlign: 'center', color: '#FFFFFF', bottom: 3 }}></Text>
            </View>
            <Text style={{ fontSize: 22, fontFamily: 'Mulish-Bold', color: '#FFFFFF' }}>30</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Mulish-Regular', color: '#FFFFFF' }}>Sun</Text>
          </View>
        </ScrollView>

        <Text style={{ color: '#FFFFFF', fontSize: 25, fontFamily: 'JosefinSans-Bold', marginLeft: 30, marginTop: 20, width: 220 }}>My Current Gool</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 20 }}>
          <View style={{ backgroundColor: '#1E293B', width: 126, justifyContent: 'center', borderRadius: 10, height: 40, alignSelf: 'center', top: 3 }}>

            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'center', top: 2.5 }}>15/45 Days</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Addgoal')} style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', margin: 10, alignSelf: 'center' }}>Add Gool</Text>
            <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center', margin: 10,top:2,right:5 }} source={require('../Image/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', marginLeft: 10 }}>5 dollars a day </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', width: 320, marginLeft: 10 }}>I am dedicating in memory of my
            mother.</Text>
          <View style={{ backgroundColor: '#D2A784', height: 3, width: '95%', borderRadius: 10, alignSelf: 'center', marginTop: 20 }}></View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '87%', alignSelf: 'center', margin: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'JosefinSans-Bold', alignSelf: 'center' }}>Group Goals</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreateGrouplist')} style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', margin: 10, alignSelf: 'center', left: 10 }}>Create Group</Text>
            <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center', margin: 10,top:4 }} source={require('../Image/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderWidth: 2, borderColor: '#64748B', alignSelf: 'center', borderRadius: 10, width: '85%', backgroundColor: '#1E293B' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center', marginTop: 5 }}>
            <Image style={{ left: 20 }} source={require('../Image/menpro.png')} />
            <Switch
              style={{ alignSelf: 'center', right: 30 }}
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff0 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch0}
              value={onoff0}
            />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Group Name</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', }}>bhala 0001</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Connection</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center' }}>bhala</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Mission</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center' }}>45</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Friends</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center' }}>30</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Today’s Total</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center' }}>200</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Total Connections</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center' }}>30</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#1E293B', height: 450, borderRadius: 20, width: '100%', marginTop: 30 }}>

          <View style={{ justifyContent: 'space-between', alignSelf: 'center', margin: 15 }}>
            <Image resizeMode='contain' style={{ height: 42, width: 273, }} source={require('../Image/hareshada.png')} />
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

              <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', }}>Conversations</Text>
              <Image resizeMode='contain' style={{ height: 25, width: 25, marginLeft: 10, top: 7 }} source={require('../Image/Massage.jpg')} />
            </View>
          </View>
          <View style={{ backgroundColor: '#D2A784', height: 2, width: 380, borderRadius: 10, alignSelf: 'center', opacity: 0.5 }}></View>
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
              <Image resizeMode='contain' style={{ height: 28, width: 30, left: 10 }} source={require('../Image/send.jpg')} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "#FFFFFF", fontSize: 22, fontFamily: 'JosefinSans-Bold', textAlign: 'center', margin: 10 }}> My History</Text>
          <View style={{ backgroundColor: '#D2A784', height: 1, width: 250, borderRadius: 10, opacity: 0.7 }}></View>
        </View>
        <Text style={{ color: "#FFFFFF", fontSize: 25, fontFamily: 'JosefinSans-Bold', margin: 15 }}> Past-Goals</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', height: 50, borderRadius: 10, margin: 10, width: '90%', alignSelf: 'center', padding: 10 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Poppins-Bold', alignSelf: 'center' }}> bla bla</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Poppins-Bold', alignSelf: 'center' }}> 13/45 Days</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', height: 50, borderRadius: 10, width: '90%', alignSelf: 'center', padding: 10 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Poppins-Bold', alignSelf: 'center' }}> Dovining</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Poppins-Bold', alignSelf: 'center' }}> 12/45 Days</Text>
        </View>
        {/* <Image style={{ margin: 20, height: 150, width: 350 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} /> */}
      </ScrollView>
    </View>
  );
}

export default Doverning;
