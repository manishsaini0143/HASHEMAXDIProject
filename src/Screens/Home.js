import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Slider } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const data = {
  labels: ['1D', '5D', '1M', '3M', '6M', 'YTD'],
  datasets: [
    {
      data: [17, 8, 45, 35, 55, 30, 40, 25, 80, 58, 75],//blue
      color: (opacity = 1) => `rgba(74, 81, 226, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [40, 50, 30, 50, 70, 75, 77, 79, 77, 78, 80],//green
      color: (opacity = 1) => `rgba(34, 197, 94, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [15, 25, 8, 45, 55, 65, 35, 70, 70, 60, 60],//pink//
      color: (opacity = 1) => `rgba(210, 167, 132, ${opacity = 1})`,
      strokeWidth: 2,
    },
    {
      data: [15, 9, 15, 17, 18, 20, 25, 45, 55, 65, 70],//red
      color: (opacity = 1) => `rgba(239, 68, 68, ${opacity = 1})`,
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
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 10 }} >
          <Image resizeMode='cover' style={{ height: 100, width: 130, position: 'relative' }} source={require('../Image/Splash.png')} />
          <Text style={{ width: 150, fontSize: 19, fontWeight: 'bold', color: '#FFFFFF' }}>My Connections 2000</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '60%', height: 70, top: 20, justifyContent: 'center', left: 10 }}>
          <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/settings.png')} />
          <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/notification.jpg')} />
          <View style={{ backgroundColor: 'red', height: 13, width: 13, borderRadius: 20, zIndex: 1, position: 'absolute', top: 25, right: 110 }}></View>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 35, width: 35, top: 15, margin: 10 }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>

        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>

        <View style={{ flexDirection: 'row', width: 190, height: 40, margin: 10, padding: 5 }}>

          <Image style={{ height: 20, width: 20, top: 5 }} source={require('../Image/arrow.png')} />
          <Text style={{ color: '#4CE364', fontSize: 18, fontWeight: 'bold', left: 10, top: 3 }}>500(2.36%)today</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 40, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 20, margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Our Connections</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>My Connections </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', left: 60 }}>Add</Text>
          <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
            <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
          </View>
        </View>
        <ScrollView style={{ position: 'relative', bottom: 15, padding: 10 }}>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, marginLeft: 10 }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Davening (40)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Davening.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center' }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 40, alignSelf: 'center' }}>My Goals -15/45 Days</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, marginLeft: 10 }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Tzedkah (30)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center' }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 40, alignSelf: 'center' }}>My Goals -15/45 Days</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, marginLeft: 10 }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Respect (45)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center' }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 105, alignSelf: 'center' }}>Add Goals</Text>
              <Image resizeMode='contain' style={{ height: 20, width: 20, left: 110, alignSelf: 'center' }} source={require('../Image/Pulse1.jpg')} />
            </View>
          </View>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, marginLeft: 10 }}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Charity (20)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center' }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 40, alignSelf: 'center' }}>My Goals -15/45 Days</Text>
              <Text style={{ color: '#D2A784', fontSize: 20 }}>+</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>My Group</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', left: 90 }}>Create</Text>
          <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
            <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', color: '#D2A784' }}>Davening</Text>
          <View>
            <Image resizeMode='contain' style={{ height: 40, width: 40 }} source={require('../Image/button.jpg')} />
          </View>
        </View>
        <View style={{ backgroundColor: '#1E293B', margin: 20, borderRadius: 15, position: 'relative', bottom: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Bhala 1</Text>
            <Image resizeMode='contain' style={{ height: 35, width: 35 }} source={require('../Image/offbutton.jpg')} />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 310, alignSelf: 'center', borderRadius: 10 }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', margin: 10, width: 300 }}>Mission:45/ Friend:30/ Today:200 Complede 200/ Connection:200</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Bhala 1</Text>
            <Image resizeMode='contain' style={{ height: 35, width: 35 }} source={require('../Image/button.jpg')} />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 310, alignSelf: 'center', borderRadius: 10 }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', margin: 10, width: 300 }}>Mission:45/ Friend:30/ Today:200 Complede 200/ Connection:200</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Bhala 1</Text>
            <Image resizeMode='contain' style={{ height: 35, width: 35 }} source={require('../Image/button.jpg')} />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 310, alignSelf: 'center', borderRadius: 10 }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', margin: 10, width: 300 }}>Mission:45/ Friend:30/ Today:200 Complede 200/ Connection:200</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, position: 'relative', bottom: 20 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', color: 'green' }}>Respect</Text>
          <View>
            <Image resizeMode='contain' style={{ height: 40, width: 40 }} source={require('../Image/button.jpg')} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Connections </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Today</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>All Time</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Doverning')} style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
          <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Davening</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>28</Text>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Davening.png')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>40</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GroupDele')} style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
          <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Tzedkah</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>67</Text>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>35</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
          <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Respect</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>86</Text>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>75</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
          <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/button.jpg')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Charity</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>32</Text>
          <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>85</Text>
        </View>
        <Image style={{ margin: 20, height: 150, width: 350 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
      </ScrollView>
    </View>
  );
}

export default Home;
