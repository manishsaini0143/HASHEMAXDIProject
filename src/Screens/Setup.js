import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';

const Setup = ({ navigation }) => {
  const [onoffo12, setonoffo12] = useState(true);
  const [onoffoo1, setonoffoo1] = useState(false);
  const [onoff005, setonoff005] = useState(false);
  const [onoffoo2, setonoffoo2] = useState(true);
  const [onoffoo3, setonoffoo3] = useState(false);
  const [onoffoo32, setonoffoo32] = useState(true);
  const onoffSwitcho123 = () => {
    setonoffo12((previousState) => !previousState);
  };
  const onoffSwitcho001 = () => {
    setonoffoo1((previousState) => !previousState);
  };
  const onoffSwitcho201 = () => {
    setonoffoo2((previousState) => !previousState);
  };
  const onoff00123 = () => {

    setonoff005((previousState) => !previousState)
  };
  const onoffSwitcho101 = () => {
    setonoffoo3((previousState) => !previousState);
  };
  const onoffSwitcho1011 = () => {
    setonoffoo32((previousState) => !previousState);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 15 }}>
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', }}>
            <Image resizeMode='contain' style={{ height: 25, width: 25, }} source={require('../Image/Backerro.jpg')} />
          </TouchableOpacity>
          <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginLeft: 10, fontFamily: 'DMSans-Bold' }}>My Connection</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity style={{ top: 5 }}>

              <Image resizeMode='contain' style={{ height: 25, width: 25, margin: 5 }} source={require('../Image/settings.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ top: 5 }} onPress={() => navigation.navigate('Notification')}>
              <Image resizeMode='contain' style={{ height: 27, width: 27, margin: 5 }} source={require('../Image/notification.jpg')} />
              <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', top: 8, right: 8 }}></View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ top: 5 }} onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 45, width: 45, }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', alignSelf: 'center', margin: 30 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginLeft: 10, fontFamily: 'DMSans-Bold' }}>Notifications</Text>
        <Switch
          trackColor={{ false: '#0F172A', true: '#D1A684' }}
          thumbColor={onoffoo32 ? '#FFFFFF' : '#FFFFFF'}
          onValueChange={onoffSwitcho1011}
          value={onoffoo32}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 15, height: 55, alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF', width: '93%', alignSelf: 'center', padding: 10, opacity: 0.9 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', fontFamily: 'DMSans-Bold' }}>Connection Setup</Text>
        <Image resizeMode='contain' style={{ height: 15, width: 15 }} source={require('../Image/arrowdown.jpg')} />
      </TouchableOpacity>
      <View style={{ backgroundColor: '#141C2A', width: '93%', alignSelf: 'center', margin: 15, borderRadius: 15 }}>

        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, justifyContent: 'space-between', width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View> */}
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Davening</Text>
          </View>
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffo12 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho123}
            value={onoffo12}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, justifyContent: 'space-between', width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View> */}
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10 }}>Tzedkah</Text>
          </View>
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffoo1 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho001}
            value={onoffoo1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, justifyContent: 'space-between', width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View> */}
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Respect</Text>
          </View>
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoff005 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoff00123}
            value={onoff005}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, justifyContent: 'space-between', width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View> */}
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Charity</Text>
          </View>
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffoo2 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho201}
            value={onoffoo2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, justifyContent: 'space-between', width: '93%', alignSelf: 'center', padding: 10, margin: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View> */}
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', left: 10, }}>Lorem</Text>
          </View>
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffoo3 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho101}
            value={onoffoo3}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Setup;
