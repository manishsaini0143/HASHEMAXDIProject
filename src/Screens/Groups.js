import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Switch } from 'react-native';

const Groups = ({navigation}) => {
  const [onoff0, setonoff0] = useState(true);
  const onoffSwitch0 = () => {
    setonoff0((previousState) => !previousState);
  };
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignSelf: 'center', margin: 10 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontFamily: 'JosefinSans-Bold', alignSelf: 'center' }}>Groups</Text>
        <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/plus.png')} />
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 40, borderRadius: 30, flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', opacity: 0.7, width: '88%', alignSelf: 'center' }}>
        <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
        <TextInput style={{ width: 270, height: 40, padding: 10, borderRadius: 20, color: '#FFFFFF' }} placeholder='' keyboardType='text' />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#64748B', alignSelf: 'center', width: '86%', backgroundColor: '#1E293B',margin:25,borderBottomRightRadius:10,borderBottomLeftRadius:10}}>

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
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2}}>bhala 0001</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Connection</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2 }}>bhala</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Mission</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2}}>45</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Friends</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2}}>30</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>Today’s Total</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2}}>200</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>All Time Total</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2}}>200</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBlockColor: '#64748B', alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'JosefinSans-Bold', width: '50%', textAlign: 'center' }}>All Connections</Text>
          <View style={{ backgroundColor: "#1E293B", borderRightWidth: 2, height: 40, borderColor: '#64748B' }}></View>
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-SemiBold', width: '50%', textAlign: 'center',top:2}}>30</Text>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row',alignItems:'center',alignSelf:'center',margin:5}}>
          <Image style={{height: 20, width: 20,margin:10}} resizeMode='contain' source={require('../Image/Exit1.png')} />
          <Text style={{ color: '#CC2929', fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>
            Exit group
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Groups;
