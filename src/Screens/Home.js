import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
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
      data: [40, 50, 30, 50, 70, 75, 77, 79, 77, 78, 80],//green//
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
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row',justifyContent:'space-between' ,marginTop:10}}>
        <View >
          <Image resizeMode='cover' style={{ height: 136, width: 180,}} source={require('../Image/Splash.png')} />
        </View>
        <View style={{ flexDirection: 'row', width: '60%', height: 70, top: 20, justifyContent: 'center',left:10}}>
          <TouchableOpacity>
            
          <Image resizeMode='contain' style={{ height: 30, width: 30, top: 15, margin: 10 }} source={require('../Image/settings.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image resizeMode='contain' style={{ height: 30, width: 30, top: 15, margin: 10 }} source={require('../Image/notification.jpg')} />
          <View style={{ backgroundColor: 'red', height: 13, width: 13, borderRadius: 20, zIndex: 1, position: 'absolute', top: 25, right: 11 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 30, width: 30, top: 15, margin: 10 }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ width: 180, fontSize: 24, fontWeight: 'bold', color: '#FFFFFF',left:30,fontFamily: 'Josefin-Sans',marginTop:20}}>My Connections 2000</Text>
      <View style={{ flexDirection: 'row',bottom:10,justifyContent:'space-around'}}>
        <View style={{ flexDirection: 'row', width: 163, height: 46, margin: 10, padding: 5}}>
          <Image style={{ height: 20, width: 20, top: 5 }} source={require('../Image/arrow.png')} />
          <Text style={{ color: '#4CE364', fontSize: 17, fontWeight: 'bold', left: 10, top: 3 }}>500(2.36%)today</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#1E293B', height: 40, alignItems: 'center', width: '40%', justifyContent: 'center', borderRadius: 10, margin: 10 }}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 17 ,fontFamily: 'Josefin-Sans'}}>Our Connections</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity>

            <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Jan</Text>
          </TouchableOpacity>
          <TouchableOpacity>

            <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Feb</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Mar</Text>

          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Apr</Text>

          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Jun</Text>

          </TouchableOpacity>
          <TouchableOpacity>

            <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: 'bold', }}>Jul</Text>
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

              <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', width: 120, height: 25, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMode='contain' style={{ height: 15, width: 20 }} source={require('../Image/tared.png')} />
                <Text style={{ color: '#BDBDBD', left: 10 }}>Data Range</Text>
              </View>
              <View style={{ flexDirection: 'row', width: 200, height: 25, left: 30 }}>
                <TouchableOpacity>

                  <Text style={{ color: '#FFFFFF', backgroundColor: '#D2A784', textAlign: 'center', lineHeight: 25, width: 35, marginRight: 5, borderRadius: 5 }}>1D</Text>
                </TouchableOpacity>
                <TouchableOpacity>

                  <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>5D</Text>
                </TouchableOpacity>
                <TouchableOpacity>

                  <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity>

                  <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity>

                  <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>6M</Text>
                </TouchableOpacity>
                <TouchableOpacity>

                  <Text style={{ color: '#FFFFFF', backgroundColor: '#1E293B', textAlign: 'center', lineHeight: 25, width: 35, marginLeft: 2, marginRight: 5, borderRadius: 5 }}>Y1D</Text>
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
        <ScrollView horizontal style={{ flexDirection: 'row', backgroundColor: '#1E293B', height: 157, borderRadius: 25,marginTop:20 }}>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>15</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>16</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Fri</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF' }}>jan </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>17</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Set</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5, borderBottomWidth: 2, borderBottomColor: '#D2A784' }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>18</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>19</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>20</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>21</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>22</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>23</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>24</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>25</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>26</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>27</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>28</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>29</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
          <View style={{ width: 70, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', margin: 18, height: 90, alignSelf: 'center', borderWidth: 2, borderColor: '#D2A784' }}>
            <Text style={{ backgroundColor: '#D2A784', fontSize: 20, fontWeight: 'bold', width: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10, textAlign: 'center', color: '#FFFFFF', opacity: 0.5 }}> </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>30</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Thu</Text>
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>My Gools</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold',left:100}}>Add</Text>
          <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
            <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
          </View>
        </View>
        <ScrollView style={{ position: 'relative', bottom: 15, padding: 10 }}>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 ,borderWidth:2,borderColor:'#D2A784'}}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, marginLeft: 10,alignSelf:'center'}}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', marginLeft: 10,alignSelf:'center' }}>Davening (40)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Davening.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center',opacity:0.5  }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch}
                value={onoff}
              />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 40, alignSelf: 'center' }}>My Goals -15/45 Days</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, marginLeft: 10 ,alignSelf:'center'}}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', marginLeft: 10,alignSelf:'center' }}>Tzedkah (30)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center',opacity:0.5  }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff1 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch1}
                value={onoff1} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 40, alignSelf: 'center' }}>My Goals -15/45 Days</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, marginLeft: 10 ,alignSelf:'center'}}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', marginLeft: 10,alignSelf:'center'}}>Respect (45)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center',opacity:0.5  }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff2 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch2}
                value={onoff2}
              />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 105, alignSelf: 'center' }}>Add Goals</Text>
              <Image resizeMode='contain' style={{ height: 20, width: 20, left: 110, alignSelf: 'center' }} source={require('../Image/Pulse1.jpg')} />
            </View>
          </View>
          <View style={{ backgroundColor: '#1E293B', borderRadius: 10, width: 370, alignSelf: 'center', margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, marginLeft: 10 ,alignSelf:'center'}}></View>
              <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', marginLeft: 10,alignSelf:'center'}}>Charity (20)</Text>
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 350, borderRadius: 10, alignSelf: 'center',opacity:0.5 }}></View>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <Switch
                trackColor={{ false: '#0F172A', true: '#D1A684' }}
                thumbColor={onoff3 ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={onoffSwitch3}
                value={onoff3}
              />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Massage.jpg')} />
              <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/friends.jpg')} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', left: 40, alignSelf: 'center' }}>My Goals -15/45 Days</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, padding: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>My Group</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', left: 90 }}>Create</Text>
          <View style={{ backgroundColor: '#D2A784', height: 35, width: 35, borderRadius: 30, bottom: 5 }}>
            <Image resizeMode='contain' style={{ height: 15, width: 15, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, padding: 10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', color: '#D2A784' }}>Davening</Text>
          <View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff4 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch4}
              value={onoff4}
            />
          </View>
        </View>
        <View style={{ backgroundColor: '#1E293B', margin: 20, borderRadius: 15, position: 'relative', bottom: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Bhala 1</Text>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff5 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch5}
              value={onoff5}
            />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 310, alignSelf: 'center', borderRadius: 10 }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10, width: 300, textAlign: 'center' }}>Mission:45<Text style={{ color: '#D1A684' }}>/</Text> Friend:30<Text style={{ color: '#D1A684' }}>/</Text> Today:200 Complede 200<Text style={{ color: '#D1A684', }}>/</Text>Connection:200</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Bhala 1.1</Text>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff6 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch6}
              value={onoff6}
            />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 310, alignSelf: 'center', borderRadius: 10 }}></View>

          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10, width: 300, textAlign: 'center' }}>Mission:45
            <Text style={{ color: '#D1A684' }}>/</Text>

            Friend:30
            <Text style={{ color: '#D1A684' }}>/</Text>
            Today:200 Complede 200
            <Text style={{ color: '#D1A684' }}>/</Text>
            Connection:200</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Bhala 1.2</Text>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff7 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch7}
              value={onoff7}
            />
          </View>
          <View style={{ backgroundColor: '#FFFFFF', height: 3, width: 310, alignSelf: 'center', borderRadius: 10 }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', margin: 10, width: 300, textAlign: 'center' }}>Mission:45<Text style={{ color: '#D1A684' }}>/</Text>Friend:30<Text style={{ color: '#D1A684' }}>/</Text> Today:200 Complede 200<Text style={{ color: '#D1A684' }}>/</Text> Connection:200</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, padding: 10, bottom: 25 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', color: '#4CE364' }}>Respect</Text>
          <View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff8 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch8}
              value={onoff8}
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Connections </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>Today</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', }}>All Time</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Doverning')} style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10,borderWidth:2,borderColor:'#D2A784' }}>
            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff9 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch9}
              value={onoff9}
            />

            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Davening</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>28</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Davening.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>40</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GroupDele')} style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
            <View style={{ backgroundColor: '#4CE364', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff10 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch10}
              value={onoff10}
            />

            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Tzedkah</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>67</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Tzedkah.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>35</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
            <View style={{ backgroundColor: '#86363F', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff11 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch11}
              value={onoff11}
            />

            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Respect</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>86</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Charity.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>75</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, backgroundColor: '#1E293B', padding: 5, borderRadius: 10 }}>
            <View style={{ backgroundColor: '#4A51E2', height: 25, width: 5, borderRadius: 10, top: 5 }}></View>
            <Switch
              trackColor={{ false: '#0F172A', true: '#D1A684' }}
              thumbColor={onoff12 ? '#FFFFFF' : '#FFFFFF'}
              onValueChange={onoffSwitch12}
              value={onoff12}
            />

            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>Charity</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>32</Text>
            <Image resizeMode='contain' style={{ height: 40, width: 50 }} source={require('../Image/Respect.png')} />
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', top: 5 }}>85</Text>
          </View>
        </View>
        <Image style={{ margin: 20, height: 150, width: 350 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
      </ScrollView>
    </View>
  );
}

export default Home;
