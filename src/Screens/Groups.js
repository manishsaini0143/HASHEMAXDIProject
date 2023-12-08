import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Switch, FlatList } from 'react-native';

const Groups = ({ navigation }) => {
  const data = [
    {
      id: '1',
      image1: require('../Image/menpro.png'),
      name1: 'Group Name',
      name2: 'Connection',
      name3: 'Mission',
      name4: 'Friends',
      name5: 'Today’s Total ',
      name6: 'All Time Total ',
      // name7: 'All Connections ',
      number1: 'bhala 0001',
      number2: 'Bhala',
      number3: '75 Minutes',
      number4: '30',
      number5: '200',
      number6: '200',
      // number7: '30',
      image2: require('../Image/Exit1.png'),
      button: 'Exit Group'

    },
    {
      id: '1',
      image1: require('../Image/menpro.png'),
      name1: 'Group Name',
      name2: 'Connection',
      name3: 'Mission',
      name4: 'Friends',
      name5: 'Today’s Total ',
      name6: 'All Time Total ',
      // name7: 'All Connections ',
      number1: 'bhala 0001',
      number2: 'Bhala',
      number3: '80 Minutes',
      number4: '40',
      number5: '300',
      number6: '500',
      // number7: '60',
      image2: require('../Image/Exit1.png'),
      button: 'Exit Group'

    },
    {
      id: '1',
      image1: require('../Image/menpro.png'),
      name1: 'Group Name',
      name2: 'Connection',
      name3: 'Mission',
      name4: 'Friends',
      name5: 'Today’s Total ',
      name6: 'All Time Total ',
      // name7: 'All Connections ',
      number1: 'bhala 0001',
      number2: 'Bhala',
      number3: '85 Minutes',
      number4: '50',
      number5: '400',
      number6: '800',
      // number7: '70',
      image2: require('../Image/Exit1.png'),
      button: 'Exit Group'

    },
  ];
  const renderItem5 = ({ item }) => (
    <View style={{ borderWidth: 2, borderColor: '#64748B', alignSelf: 'center', width: '93%', backgroundColor: '#1E293B', margin: 10, borderRadius: 10 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center', marginTop: 5 }}>
        <Image style={{ left: 20, height: 51, width: 51 }} source={item.image1} />
        <Switch
          style={{ alignSelf: 'center', right: 30 }}
          trackColor={{ false: '#0F172A', true: '#D1A684' }}
          thumbColor={onoff0 ? '#FFFFFF' : '#FFFFFF'}
          onValueChange={onoffSwitch0}
          value={onoff0}
        />

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name1}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number1}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name2}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number2}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name3}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number3}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name4}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number4}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name5}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number5}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name6}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number6}</Text>
      </View>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center' }}>{item.name7}</Text>
        <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'DMSans-Bold', width: '50%', textAlign: 'center', }}>{item.number7}</Text>
      </View> */}
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', margin: 5 }}>
        <Image style={{ height: 20, width: 20, margin: 10 }} resizeMode='contain' source={item.image2} />
        <Text style={{ color: '#CC2929', fontSize: 16, fontFamily: 'DMSans-Bold', justifyContent: 'center' }}>
          {item.button}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const [onoff0, setonoff0] = useState(true);
  const onoffSwitch0 = () => {
    setonoff0((previousState) => !previousState);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View >
          <Image resizeMode='cover' style={{ height: 130, width: 150, }} source={require('../Image/Splash.png')} />
        </View>
        <View style={{ flexDirection: 'row', width: '80%', height: 70, top: 20, justifyContent: 'center', left: 5 }}>
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
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center',padding:5}}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold', alignSelf: 'center' }}>Groups</Text>
        <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../Image/addbutten.png')} />
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 40, borderRadius: 30, flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', opacity: 0.7, width: '93%', alignSelf: 'center' }}>
        <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
        <TextInput style={{ width: 270, height: 40, padding: 10, borderRadius: 20, color: '#FFFFFF' }} placeholder='' keyboardType='text' />
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 70 }}
        data={data}
        renderItem={renderItem5}
      />
      {/* <View style={{ borderWidth: 2, borderColor: '#64748B', alignSelf: 'center', width: '86%', backgroundColor: '#1E293B', margin: 25, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>

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
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>bhala 0001</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Connection</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>bhala</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Mission</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>45</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Friends</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>30</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Today’s Total</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>200</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>All Time Total</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>200</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>All Connections</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center', top: 2 }}>30</Text>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', margin: 5 }}>
          <Image style={{ height: 20, width: 20, margin: 10 }} resizeMode='contain' source={require('../Image/Exit1.png')} />
          <Text style={{ color: '#CC2929', fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>
            Exit group
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default Groups;
