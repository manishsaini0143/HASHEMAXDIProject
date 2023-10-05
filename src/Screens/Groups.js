import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

const Groups = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold' }}>Groups</Text>
        <View style={{ backgroundColor: '#D2A784', height: 40, width: 40, borderRadius: 30 }}>

          <Image resizeMode='contain' style={{ height: 20, width: 20, position: 'absolute', top: 10, zIndex: 1, left: 10 }} source={require('../Image/Pulse.jpg')} />
        </View>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 40, borderRadius: 30, margin: 10, flexDirection: 'row' }}>
        <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
        <TextInput style={{ width: 270, height: 40, padding: 10, borderRadius: 20, color: '#FFFFFF' }} placeholder='' keyboardType='text' />
      </View>
    </View>
  );
}

export default Groups;
