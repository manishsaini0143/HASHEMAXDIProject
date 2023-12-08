import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Switch, Alert, BackHandler } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
// let labels = ['1D', '5D', '1M', '3M', '6M', 'YTD']
const data = {
  datasets: [
    // {
    //   data: [17, 8, 45, 35, 55, 30, 40, 25, 80, 58, 75],//blue//
    //   color: (opacity = 1) => `rgba(74, 81, 226, ${opacity = 1})`,
    //   strokeWidth: 2,
    // },
    {
      data: [25, 15, 60, 50, 75, 40, 65, 30, 77, 50, 80],//green//
      color: (opacity = 1) => `rgba(105, 170, 79, ${opacity = 1})`,
      strokeWidth: 2,
    },
    // {
    //   data: [15, 25, 8, 45, 55, 65, 35, 70, 70, 60, 60],//pink//
    //   color: (opacity = 1) => `rgba(210, 167, 132, ${opacity = 1})`,
    //   strokeWidth: 2,
    // },
    // {
    //   data: [15, 9, 15, 17, 18, 20, 25, 45, 55, 65, 70],//red//
    //   color: (opacity = 1) => `rgba(239, 68, 68, ${opacity = 1})`,
    //   strokeWidth: 2,
    // },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#0D1134',
  backgroundGradientTo: '#0D1134',
  color: (opacity = 1) => `rgba(105, 170, 79, ${opacity})`,

  decimalPlaces: 0,
};
const dataList = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]
const Home = ({ navigation }) => {
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
      fontFamily: 'DMSans-Bold',
      color: '#FFFFFF', marginTop: 3
    };
  };

  const dayLabelStyle = (index) => {
    const isSelected = selected === index;
    return {
      fontSize: isSelected ? 20 : 16,
      fontFamily: 'DMSans-Bold',
      color: '#FFFFFF', marginTop: 5
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
  const [borderwidtht, setborderwidtht] = useState('Davening');
  const [borderwidtht1, setborderwidtht1] = useState('Davening1');
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>

      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View >
          <Image resizeMode='cover' style={{ height: 136, width: 180, }} source={require('../Image/Splash.png')} />
        </View>
        <View style={{ flexDirection: 'row', width: '60%', height: 70, top: 20, justifyContent: 'center', left: 10 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity >

              <Image resizeMode='contain' style={{ height: 25, width: 25, top: 15, margin: 5 }} source={require('../Image/settings.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Image resizeMode='contain' style={{ height: 27, width: 27, top: 15, margin: 5 }} source={require('../Image/notification.jpg')} />
              <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', top: 23, right: 7 }}></View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 50, width: 50, top: 15, margin: 7 }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View >
          <Image resizeMode='cover' style={{ height: 130, width: 150, }} source={require('../Image/Splash.png')} />
        </View>
        <View style={{ flexDirection: 'row', width: '80%', height: 70, top: 20, justifyContent: 'center', left: 5 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>

              <Image resizeMode='contain' style={{ height: 25, width: 25, top: 15, margin: 5 }} source={require('../Image/settings.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Image resizeMode='contain' style={{ height: 27, width: 27, top: 15, margin: 5 }} source={require('../Image/notification.jpg')} />
              <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', top: 23, right: 7 }}></View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 50, width: 50, top: 15, margin: 7 }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ width: 150, fontSize: 18, color: '#FFFFFF', left: 30, fontFamily: 'DMSans-Bold', marginTop: 20 }}>My Connections 2000</Text>
      <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'space-around' }}>
        <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5, bottom: 2 }}>
          <Image style={{ height: 15, width: 15, alignSelf: 'center', justifyContent: 'center' }} source={require('../Image/arrow.png')} />
          <Text style={{ color: '#4CE364', fontSize: 14, fontFamily: 'DMSans-Bold', left: 10, alignSelf: 'center' }}>500(2.36%)Today</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 46, alignItems: 'center', width: '45%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'DMSans-Medium', justifyContent: 'center' }}>Our Connections</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
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
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ paddingRight: 140 }} >
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
                    width: 75,
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
                      fontFamily: 'DMSans-Bold',
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignSelf: 'center', padding: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'DMSans-Bold', alignSelf: 'center' }}>My Connection</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Doverning')} style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', margin: 10, alignSelf: 'center' }}>Add</Text>
            {/* <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center', margin: 10 }} source={require('../Image/Add Button.svg')} /> */}
            <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center', }} source={require('../Image/addbutten.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ position: 'relative', bottom: 15, }}>
          <TouchableOpacity onPress={() => setborderwidtht('Davening')} style={{ backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', borderWidth: borderwidtht === 'Davening' ? 2 : 0, borderColor: '#D2A784', padding: 5, margin: 5 }}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'DMSans-Bold', alignSelf: 'center', left: 10 }}>Davening</Text>
              <Image resizeMode='contain' style={{ height: 25, width: 40, right: 5 }} source={require('../Image/Davening.png')} />
              <View>

                <View style={{ backgroundColor: '#1E293B', right: 10, height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                  <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>40</Text>
                </View>
              </View>

            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', borderRadius: 10, alignSelf: 'center', opacity: 0.5, margin: 5 }}></View>
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>

                <Switch
                  trackColor={{ false: '#0F172A', true: '#D1A684' }}
                  thumbColor={onoff ? '#FFFFFF' : '#FFFFFF'}
                  onValueChange={onoffSwitch}
                  value={onoff}
                />
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', right: 13 }}>My Goal - 15/45 Days</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setborderwidtht('Tzedkah')} style={{ backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', borderWidth: borderwidtht === 'Tzedkah' ? 2 : 0, borderColor: '#D2A784', padding: 5, margin: 5 }}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'DMSans-Bold', alignSelf: 'center', left: 10 }}>Tzedkah</Text>
              <Image resizeMode='contain' style={{ height: 25, width: 40, right: 5 }} source={require('../Image/Davening.png')} />
              <View>

                <View style={{ backgroundColor: '#1E293B', right: 10, height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                  <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>30</Text>
                </View>
              </View>

            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', borderRadius: 10, alignSelf: 'center', opacity: 0.5, margin: 5 }}></View>
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>

                <Switch
                  trackColor={{ false: '#0F172A', true: '#D1A684' }}
                  thumbColor={onoff1 ? '#FFFFFF' : '#FFFFFF'}
                  onValueChange={onoffSwitch1}
                  value={onoff1}
                />
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', right: 13 }}>My Goal - 15/45 Days</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setborderwidtht('Respect')} style={{ backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', borderWidth: borderwidtht === 'Respect' ? 2 : 0, borderColor: '#D2A784', padding: 5, margin: 5 }}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'DMSans-Bold', alignSelf: 'center', left: 10 }}>Respect</Text>
              <Image resizeMode='contain' style={{ height: 25, width: 40, right: 5 }} source={require('../Image/Davening.png')} />
              <View>

                <View style={{ backgroundColor: '#1E293B', right: 10, height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                  <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>45</Text>
                </View>
              </View>

            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', borderRadius: 10, alignSelf: 'center', opacity: 0.5, margin: 5 }}></View>

            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <Switch
                  trackColor={{ false: '#0F172A', true: '#D1A684' }}
                  thumbColor={onoff2 ? '#FFFFFF' : '#FFFFFF'}
                  onValueChange={onoffSwitch2}
                  value={onoff2}
                />
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', right: 10 }}>

                <Text style={{
                  color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', margin: 5
                }}>Add Goals</Text>
                <Image resizeMode='contain' style={{ height: 15, width: 15, justifyContent: 'center', alignSelf: 'center', }} source={require('../Image/puls1.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setborderwidtht('Chanity')} style={{ backgroundColor: '#1E293B', borderRadius: 10, width: '93%', alignSelf: 'center', borderWidth: borderwidtht === 'Chanity' ? 2 : 0, borderColor: '#D2A784', padding: 5, margin: 5 }}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>

              <Text style={{ color: '#FFFFFF', fontSize: 17, fontFamily: 'DMSans-Bold', alignSelf: 'center', left: 10 }}>Chanity</Text>
              <Image resizeMode='contain' style={{ height: 25, width: 40, right: 5 }} source={require('../Image/Davening.png')} />
              <View>

                <View style={{ backgroundColor: '#1E293B', right: 10, height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                  <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>20</Text>
                </View>
              </View>

            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', borderRadius: 10, alignSelf: 'center', opacity: 0.5, margin: 5 }}></View>
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>

                <Switch
                  trackColor={{ false: '#0F172A', true: '#D1A684' }}
                  thumbColor={onoff3 ? '#FFFFFF' : '#FFFFFF'}
                  onValueChange={onoffSwitch3}
                  value={onoff3}
                />
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/Massage.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>

                  <Image resizeMode='contain' style={{ height: 27, width: 30 }} source={require('../Image/frends.png')} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', right: 10 }}>My Goal - 15/45 Days</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '89%', alignSelf: 'center', margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', alignSelf: 'center' }}>My Groups</Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', margin: 10, alignSelf: 'center', }}>Create</Text>
            <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center', justifyContent: 'center' }} source={require('../Image/addbutten.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '89%', alignSelf: 'center', }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', color: '#D2A784' }}>Davening</Text>
          <View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff4 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch4}
              value={onoff4}
            />
          </View>
        </View>
        <View style={{ backgroundColor: '#1E293B', alignSelf: 'center', borderRadius: 15, position: 'relative', bottom: 10, width: '93%', margin: 25 }}>
          <View style={{ margin: 10, width: '95%', alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', marginTop: 5, }}>
              <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Bhala 1</Text>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff5 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch5}
                value={onoff5}
              />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', alignSelf: 'center', borderRadius: 10, opacity: 0.7, margin: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', width: '90%', marginLeft: 15 }}>Mission:<Text style={{ fontSize: 17 }}> 45</Text> <Text style={{ color: '#D1A684' }}>/</Text> Friend:<Text style={{ fontSize: 17 }}> 30</Text><Text style={{ color: '#D1A684', fontFamily: 'DMSans-Bold' }}> /</Text> Today:<Text style={{ fontSize: 17 }}> 200</Text></Text>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', left: 15 }}>Total Connection:<Text style={{ fontSize: 16 }}> 200</Text></Text>
            </View>
          </View>
          <View style={{ margin: 10, width: '95%', alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', marginTop: 5, }}>
              <Text style={{ color: '#FFFFFF', fontSize: 19, fontFamily: 'DMSans-Bold' }}>Bhala 1.1</Text>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff7 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch7}
                value={onoff7}
              />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', alignSelf: 'center', borderRadius: 10, opacity: 0.7, margin: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', width: '90%', marginLeft: 15 }}>Mission:<Text style={{ fontSize: 17 }}> 45</Text> <Text style={{ color: '#D1A684' }}>/</Text> Friend:<Text style={{ fontSize: 17 }}> 30</Text><Text style={{ color: '#D1A684', fontFamily: 'DMSans-Bold' }}> /</Text> Today:<Text style={{ fontSize: 17 }}> 200</Text></Text>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', left: 15 }}>Total Connection:<Text style={{ fontSize: 16 }}> 200</Text></Text>
            </View>
          </View>
          <View style={{ margin: 10, width: '95%', alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', marginTop: 10, }}>
              <Text style={{ color: '#FFFFFF', fontSize: 19, fontFamily: 'DMSans-Bold' }}>Bhala 1.2</Text>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff8 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch8}
                value={onoff8}
              />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 1, width: '93%', alignSelf: 'center', borderRadius: 10, opacity: 0.7, margin: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', width: '90%', marginLeft: 15 }}>Mission:<Text style={{ fontSize: 17 }}> 45</Text> <Text style={{ color: '#D1A684' }}>/</Text> Friend:<Text style={{ fontSize: 17 }}> 30</Text><Text style={{ color: '#D1A684', fontFamily: 'DMSans-Bold' }}> /</Text> Today:<Text style={{ fontSize: 17 }}> 200</Text></Text>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'DMSans-Bold', left: 15 }}>Total Connection:<Text style={{ fontSize: 16 }}> 200</Text></Text>
            </View>
          </View>
        </View>
        <View >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', alignSelf: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Connections </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Today</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>All Time</Text>
          </View>
          <TouchableOpacity onPress={() => setborderwidtht1('Davening1')} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, borderColor: '#D2A784', alignItems: 'center', width: '93%', alignSelf: 'center', borderWidth: borderwidtht1 == 'Davening1' ? 2 : 0, borderColor: '#D2A784' }}>
            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View> */}
            <View style={{ left: 10 }}>

              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>Davening</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 45 }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>28</Text>
              </View>
              <Image resizeMode='contain' style={{ height: 30, width: 40, right: 23 }} source={require('../Image/Davening.png')} />
              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>40</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('GroupDele'), setborderwidtht1('Tzedkah1') }} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: '93%', alignSelf: 'center', borderWidth: borderwidtht1 == 'Tzedkah1' ? 2 : 0, borderColor: '#D2A784' }}>
            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View> */}
            <View style={{ left: 10 }}>

              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>Tzedkah</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

              <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 25 }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>67</Text>
              </View>
              <Image resizeMode='contain' style={{ height: 30, width: 40, right: 13 }} source={require('../Image/Davening.png')} />
              <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>35</Text>
              </View>
            </View> */}
            <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 45 }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>67</Text>
              </View>
              <Image resizeMode='contain' style={{ height: 30, width: 40, right: 23 }} source={require('../Image/Davening.png')} />
              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>35</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Tzedkah</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>67</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>35</Text>
          </TouchableOpacity> */}

          <TouchableOpacity onPress={() => { navigation.navigate('Public'), setborderwidtht1('Respect1') }} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: '93%', alignSelf: 'center', borderWidth: borderwidtht1 == 'Respect1' ? 2 : 0, borderColor: '#D2A784' }}>
            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View> */}
            <View style={{ left: 10 }}>

              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>Respect</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 45 }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>86</Text>
              </View>
              <Image resizeMode='contain' style={{ height: 30, width: 40, right: 23 }} source={require('../Image/Davening.png')} />
              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>75</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Respect</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>86</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>75</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => { setborderwidtht1('Charity1') }} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: '93%', alignSelf: 'center', borderWidth: borderwidtht1 == 'Charity1' ? 2 : 0, borderColor: '#D2A784', }}>
            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, right: 5 }}></View> */}
            <View style={{ left: 10 }}>

              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', }}>Charity</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', right: 8 }}>

              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', right: 45 }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>32</Text>
              </View>
              <Image resizeMode='contain' style={{ height: 30, width: 40, right: 23 }} source={require('../Image/Davening.png')} />
              <View style={{ backgroundColor: '#1E293B', height: 25, width: 45, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784' }}>

                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>85</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10, alignItems: 'center', width: 341, alignSelf: 'center' }}>
            <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, right: 5 }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', right: 25, top: 2 }}>Charity</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', left: 10, top: 2.5 }}>32</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold', top: 2.5 }}>85</Text>
          </TouchableOpacity> */}
        </View>
        <Image style={{ height: 80, width: 278, alignSelf: 'center', margin: 10 }} source={require('../Image/Splash1.jpg')} />
      </ScrollView>
    </View>
  );
}

export default Home;
