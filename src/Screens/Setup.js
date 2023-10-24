import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';

const Setup = ({ navigation }) => {
  const [onoffo12, setonoffo12] = useState(true);
  const [onoffoo1, setonoffoo1] = useState(false);
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
  const onoffSwitcho101 = () => {
    setonoffoo3((previousState) => !previousState);
  };
  const onoffSwitcho1011 = () => {
    setonoffoo32((previousState) => !previousState);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', margin: 20 }}>
        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>My Connection</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ flexDirection: 'row', margin: 10, padding: 10, justifyContent: 'space-between' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
        {/* <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} /> */}
        <Switch
          trackColor={{ false: '#0F172A', true: '#D1A684' }}
          thumbColor={onoffoo32 ? '#FFFFFF' : '#FFFFFF'}
          onValueChange={onoffSwitcho1011}
          value={onoffoo32}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15, margin: 20 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Connection Setup</Text>
        <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
      </TouchableOpacity>
      <View style={{ backgroundColor: '#141C2A', padding: 10, borderRadius: 20, margin: 10 }}>

        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Davening</Text>
          </View>
          {/* <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} /> */}
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffo12 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho123}
            value={onoffo12}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Tzedkah</Text>
          </View>
          {/* <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/offbutton.jpg')} /> */}
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffoo1 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho001}
            value={onoffoo1}
          />
        </TouchableOpacity>
        <View style={{ height: 80 }}></View>

        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Charity</Text>
          </View>
          {/* <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} /> */}
          <Switch
            trackColor={{ false: '#0F172A', true: '#D1A684' }}
            thumbColor={onoffoo2 ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={onoffSwitcho201}
            value={onoffoo2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Lorem</Text>
          </View>
          {/* <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/offbutton.jpg')} /> */}
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
