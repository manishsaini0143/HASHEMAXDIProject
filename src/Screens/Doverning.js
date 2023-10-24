import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
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

const Doverning = ({ navigation }) => {
  const [onoff0, setonoff0] = useState(true);
  const onoffSwitch0 = () => {
    setonoff0((previousState) => !previousState);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', margin: 15 }}>

        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 20 }}>My Davening
        </Text>
      </TouchableOpacity>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: 190, height: 40, margin: 10, padding: 5 }}>
            <Image style={{ height: 20, width: 20, top: 5 }} source={require('../Image/arrow.png')} />
            <Text style={{ color: '#4CE364', fontSize: 18, fontWeight: 'bold', left: 10, top: 3 }}>500(2.36%)today</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 40, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 20, margin: 10 }}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Our Connections</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>line chart staet</Text> */}
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
          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', width: 120, height: 25, alignItems: 'center', justifyContent: 'center' }}>
              <Image resizeMode='contain' style={{ height: 15, width: 20 }} source={require('../Image/tared.png')} />
              <Text style={{ color: '#BDBDBD', left: 10 }}>Data Range</Text>
            </View>
            <View style={{ flexDirection: 'row', width: 200, height: 25, left: 30 }}>

              <Text style={{ color: '#FFFFFF', backgroundColor: '#D2A784', textAlign: 'center', lineHeight: 25, width: 35, marginRight: 5, borderRadius: 5 }}>1D</Text>
              <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>5D</Text>
              <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>1M</Text>
              <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>3M</Text>
              <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>6M</Text>
              <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>Y1D</Text>
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
      <ScrollView>
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
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>20</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
        </ScrollView>

        <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', margin: 15 }}>My Current Gool</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', backgroundColor: '#1E293B', width: 140, textAlign: 'center', borderRadius: 10 }}>15/45 Days</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Addgoal')}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', left: 50 }}>Add Gool</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
            <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
          </View>
        </View>
        <View style={{ margin: 10, left: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold',marginLeft:10 }}>5 dollars a day </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: 300,marginLeft:10}}>I am dedicating in memory of my
            mother.</Text>
          <View style={{ backgroundColor: '#D2A784', height: 3, width: 350, borderRadius: 10, alignSelf: 'center', margin: 15 }}></View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20,bottom:20 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Group Goals</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreateGrouplist')}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', left: 60 }}>Create Group</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
            <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
          </View>
        </View>
        <View style={{ borderWidth: 2, borderColor: '#64748B', margin: 10, borderRadius: 10,bottom:20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>Group Name</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>bhala 0001</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>Connection</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>Bhala</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>Mission</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>45</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>Friends</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>30</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>  Today’s Total</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>200</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>All Time Total</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>200</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>All Connections</Text>
            <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>30</Text>
          </View>
          <View>
            <Switch
              style={{ alignSelf: 'center' }}
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff0 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch0}
              value={onoff0}
            />
          </View>
        </View>
        <View style={{ backgroundColor: '#1E293B', margin: 10, height: 350, padding: 10, borderRadius: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Hashemandi</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', left: 30 }}>Conversations</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 40 }} source={require('../Image/Massage.jpg')} />
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
              <Image resizeMode='contain' style={{ height: 30, width: 30, left: 10 }} source={require('../Image/send.jpg')} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "#FFFFFF", fontSize: 25, fontWeight: 'bold', textAlign: 'center', margin: 10 }}> My History</Text>
          <View style={{ backgroundColor: '#D2A784', height: 3, width: 250, borderRadius: 10 }}></View>
        </View>
        <Text style={{ color: "#FFFFFF", fontSize: 25, fontWeight: 'bold', margin: 15 }}> Past-Goals</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', height: 50, padding: 10, margin: 10, borderRadius: 10 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 'bold', }}> bla bla</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 'bold', }}> 12/45 Days</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', height: 50, padding: 10, margin: 10, borderRadius: 10 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 'bold', }}> Dovining</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 'bold', }}> 12/45 Days</Text>
        </View>
        <Image style={{ margin: 20, height: 150, width: 350 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
      </ScrollView>
    </View>
  );
}

export default Doverning;
