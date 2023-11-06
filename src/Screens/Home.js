import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Switch, Alert, BackHandler } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
// let labels = ['1D', '5D', '1M', '3M', '6M', 'YTD']
const data = {
  datasets: [
    {
      data: [17, 8, 45, 35, 55, 30, 40, 25, 80, 58, 75],//blue//
      color: (opacity = 1) => `rgba(74, 81, 226, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [40, 50, 30, 49, 64, 70, 73, 75, 77, 80, 80],//green//
      color: (opacity = 1) => `rgba(34, 197, 94, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [15, 25, 8, 45, 55, 65, 35, 70, 70, 60, 60],//pink//
      color: (opacity = 1) => `rgba(210, 167, 132, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [15, 9, 15, 17, 18, 20, 25, 45, 55, 65, 70],//red//
      color: (opacity = 1) => `rgba(239, 68, 68, ${opacity = 1})`,
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
const Home = ({ navigation }) => {
  //days//
  const [selected, setSelected] = useState(null);

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
      alignSelf:'center',
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
      color: '#FFFFFF',marginTop:3
    };
  };

  const dayLabelStyle = (index) => {
    const isSelected = selected === index;
    return {
      fontSize: isSelected ? 20 : 16, // Increase the font size when selected
      fontFamily: 'Mulish-Regular',
      color: '#FFFFFF',marginTop:5
    };
  };

  const monthLabel = (index) => {
    return selected === index ? 'Jan' : '';
  };

  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthPress = (month) => {
    setSelectedMonth(month);
  };
  const [selectedOption, setSelectedOption] = useState('1D');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const [onoff, setonoff] = useState(true);
  const [onoff1, setonoff1] = useState(true);
  const [onoff2, setonoff2] = useState(true);
  const [onoff3, setonoff3] = useState(true);
  const [onoff4, setonoff4] = useState(true);
  const [onoff5, setonoff5] = useState(false);
  const [onoff6, setonoff6] = useState(true);
  const [onoff7, setonoff7] = useState(true);
  const [onoff8, setonoff8] = useState(true);
  const [onoff9, setonoff9] = useState(true);
  const [onoff10, setonoff10] = useState(true);
  const [onoff11, setonoff11] = useState(true);
  const [onoff12, setonoff12] = useState(true);
  const onoffSwitch = () => {
    setonoff((previousState) => !previousState);
  };
  const onoffSwitch1 = () => {
    setonoff1((previousState) => !previousState);
  };
  const onoffSwitch2 = () => {
    setonoff2((previousState) => !previousState);
  };
  const onoffSwitch3 = () => {
    setonoff3((previousState) => !previousState);
  };
  const onoffSwitch4 = () => {
    setonoff4((previousState) => !previousState);
  };
  const onoffSwitch5 = () => {
    setonoff5((previousState) => !previousState);
  };
  const onoffSwitch6 = () => {
    setonoff6((previousState) => !previousState);
  };
  const onoffSwitch7 = () => {
    setonoff7((previousState) => !previousState);
  };
  const onoffSwitch8 = () => {
    setonoff8((previousState) => !previousState);
  };
  const onoffSwitch9 = () => {
    setonoff9((previousState) => !previousState);
  };
  const onoffSwitch10 = () => {
    setonoff10((previousState) => !previousState);
  };
  const onoffSwitch11 = () => {
    setonoff11((previousState) => !previousState);
  };
  const onoffSwitch12 = () => {
    setonoff12((previousState) => !previousState);
  };
  useEffect(() => {
    const handleBackButton = () => {
      // Add your desired behavior here

      // Show an alert to confirm the exit action
      Alert.alert(
        'Exit App',
        'Do you want to exit the app?',
        [
          { text: 'Cancel', onPress: () => { }, style: 'cancel' },
          { text: 'OK', onPress: () => BackHandler.exitApp() },
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      backHandler.remove(); // Clean up the event listener when the component unmounts
    };
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View >
          <Image resizeMode='cover' style={{ height: 136, width: 180, }} source={require('../Image/Splash.png')} />
        </View>
        <View style={{ flexDirection: 'row', width: '60%', height: 70, top: 20, justifyContent: 'center', left: 10 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity>

              <Image resizeMode='contain' style={{ height: 25, width: 25, top: 15, margin: 5 }} source={require('../Image/settings.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Image resizeMode='contain' style={{ height: 27, width: 27, top: 15, margin: 5 }} source={require('../Image/notification.jpg')} />
              <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', top: 23, right: 7 }}></View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 50, width: 50, top: 15, margin: 10 }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ width: 200, fontSize: 24, color: '#FFFFFF', left: 30, fontFamily: 'JosefinSans-Bold', marginTop: 20 }}>My Connections 2000</Text>
      <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'space-around' }}>
        <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5, bottom: 2 }}>
          <Image style={{ height: 20, width: 20, alignSelf: 'center', top: 2 }} source={require('../Image/arrow.png')} />
          <Text style={{ color: '#4CE364', fontSize: 17, fontFamily: 'JosefinSans-Bold', left: 10, alignSelf: 'center' }}>500(2.36%)Today</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 46, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'JosefinSans-Bold', bottom: 2 }}>Our Connections</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
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
                <TouchableOpacity onPress={() => handleOptionPress('1D')}>

                  <Text style={{ color: '#FFFFFF', backgroundColor: selectedOption === '1D' ? '#D2A784' : '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginRight: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>1D</Text>
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
          <Image resizeMode='contain' style={{ height: 60, width: 60, position: 'absolute', zIndex: 1, bottom: 190, left: 190 }} source={require('../Image/trend.png')} />
          <Image resizeMode='contain' style={{ height: 40, width: 50, position: 'absolute', zIndex: 1, bottom: 160, left: 210 }} source={require('../Image/dot.png')} />
        </View>
        <ScrollView
        horizontal
        style={{
          flexDirection: 'row',
          backgroundColor: '#1E293B',
          height: 145,
          borderRadius: 25,
          marginTop: 15,
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
                {day % 2 === 0 ? 'Sun' : 'Set'}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 345, alignSelf: 'center', margin: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'JosefinSans-SemiBold', alignSelf: 'center' }}>My Connection</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', margin: 10, alignSelf: 'center' }}>Add</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 40, alignSelf: 'center', margin: 10 }} source={require('../Image/plus.png')} />
          </View>
        </View>
        <ScrollView style={{ position: 'relative', bottom: 15, padding: 10 }}>
          <TouchableOpacity style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 350, alignSelf: 'center', margin: 10, borderWidth: 2, borderColor: '#D2A784' }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, marginLeft: 10, alignSelf: 'center' }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'Poppins-SemiBold', marginLeft: 10, alignSelf: 'center' }}>Davening  (40)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Davening.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: 305, borderRadius: 10, alignSelf: 'center', opacity: 0.5 }}></View>
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch}
                value={onoff}
              />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', left: 45, alignSelf: 'center' }}>My Goal - 15/45 Days</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 350, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, marginLeft: 10, alignSelf: 'center' }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'Poppins-SemiBold', marginLeft: 10, alignSelf: 'center' }}>Tzedkah  (30)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: 305, borderRadius: 10, alignSelf: 'center', opacity: 0.5 }}></View>
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff1 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch1}
                value={onoff1} />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', left: 45, alignSelf: 'center' }}>My Goal - 15/45 Days</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 350, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, marginLeft: 10, alignSelf: 'center' }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'Poppins-SemiBold', marginLeft: 10, alignSelf: 'center' }}>Respect   (45)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: 305, borderRadius: 10, alignSelf: 'center', opacity: 0.5 }}></View>
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff2 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch2}
                value={onoff2}
              />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', left: 100, alignSelf: 'center' }}>Add Goals</Text>

              <Image resizeMode='contain' style={{ height: 16, width: 17, left: 110, alignSelf: 'center', top: 3 }} source={require('../Image/puls1.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 350, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, marginLeft: 10, alignSelf: 'center' }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'Poppins-SemiBold', marginLeft: 10, alignSelf: 'center' }}>Charity   (20)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: 305, borderRadius: 10, alignSelf: 'center', opacity: 0.5 }}></View>
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff3 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch3}
                value={onoff3}
              />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'JosefinSans-Bold', left: 45, alignSelf: 'center' }}>My Goal - 15/45 Days</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 340, alignSelf: 'center', margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'JosefinSans-Bold', alignSelf: 'center' }}>My Groups</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', margin: 10, alignSelf: 'center', left: 5 }}>Create</Text>
            <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center', margin: 10,top:3 }} source={require('../Image/plus.png')} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '79%', alignSelf: 'center', }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'JosefinSans-Bold', color: '#D2A784' }}>Davening</Text>
          <View>
            <Switch
              style={{ top: 10 }}
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff4 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch4}
              value={onoff4}
            />
          </View>
        </View>
        <View style={{ backgroundColor: '#1E293B', alignSelf: 'center', borderRadius: 15, position: 'relative', bottom: 10, width: '90%', margin: 25 }}>
          <View style={{ margin: 10, width: '95%', alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: 5, }}>
              <Text style={{ color: '#FFFFFF', fontSize: 19, fontFamily: 'Poppins-Bold' }}>Bhala 1</Text>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff5 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch5}
                value={onoff5}
              />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '90%', alignSelf: 'center', borderRadius: 10, opacity: 0.7, margin: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '90%', marginLeft: 20 }}>Mission:45 <Text style={{ color: '#D1A684' }}>/</Text> Friend:30 <Text style={{ color: '#D1A684' }}>/</Text> Today: 200</Text>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', left: 20 }}>Total Connection: 200</Text>
            </View>
          </View>
          <View style={{ margin: 10, width: '95%', alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: 5, }}>
              <Text style={{ color: '#FFFFFF', fontSize: 19, fontFamily: 'Poppins-Bold' }}>Bhala 1.1</Text>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff7 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch7}
                value={onoff7}
              />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '90%', alignSelf: 'center', borderRadius: 10, opacity: 0.7, margin: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '90%', marginLeft: 20 }}>Mission:45 <Text style={{ color: '#D1A684' }}>/</Text> Friend:30 <Text style={{ color: '#D1A684' }}>/</Text> Today: 200</Text>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', left: 20 }}>Total Connection: 200</Text>
            </View>
          </View>
          <View style={{ margin: 10, width: '95%', alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: 10, }}>
              <Text style={{ color: '#FFFFFF', fontSize: 19, fontFamily: 'Poppins-Bold' }}>Bhala 1.2</Text>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff8 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch8}
                value={onoff8}
              />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '90%', alignSelf: 'center', borderRadius: 10, opacity: 0.7, margin: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '90%', marginLeft: 20 }}>Mission:45 <Text style={{ color: '#D1A684' }}>/</Text> Friend:30 <Text style={{ color: '#D1A684' }}>/</Text> Today: 200</Text>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', left: 20 }}>Total Connection: 200</Text>
            </View>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 330, alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold' }}>Connections </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold' }}>Today</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold' }}>All Time</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Doverning')} style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, borderWidth: 2, borderColor: '#D2A784', alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Davening</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>28</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Davening.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>40</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GroupDele')} style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Tzedkah</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>67</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>35</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Respect</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>86</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>75</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Charity</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>32</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>85</Text>
          </TouchableOpacity>
        </View>
        <Image style={{ height: 110, width: 278, alignSelf: 'center' }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
      </ScrollView>
    </View>
  );
}

export default Home;
