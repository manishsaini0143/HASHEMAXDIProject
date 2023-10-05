import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';

const Buddies = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ margin: 15 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold' }}>Friends</Text>

      </View>
      <ScrollView>

      <View style={{ backgroundColor: '#1E293B', height: 40, borderRadius: 30, margin: 10, flexDirection: 'row' }}>
        <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
        <TextInput style={{ width: 270, height: 40, padding: 10, borderRadius: 20, color: '#FFFFFF' }} placeholder='' keyboardType='text' />
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 60, borderRadius: 30, margin: 10, flexDirection: 'row', width: 360, alignSelf: 'center', top: 10 }}>
        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
        <Text style={{ padding: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, top: 10 }}>Dovid</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 60, borderRadius: 30, margin: 10, flexDirection: 'row', width: 360, alignSelf: 'center', top: 10 }}>
        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
        <Text style={{ padding: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, top: 10 }}>Dovid</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 60, borderRadius: 30, margin: 10, flexDirection: 'row', width: 360, alignSelf: 'center', top: 10 }}>
        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
        <Text style={{ padding: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, top: 10 }}>Dovid</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 60, borderRadius: 30, margin: 10, flexDirection: 'row', width: 360, alignSelf: 'center', top: 10 }}>
        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
        <Text style={{ padding: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, top: 10 }}>Dovid</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 60, borderRadius: 30, margin: 10, flexDirection: 'row', width: 360, alignSelf: 'center', top: 10 }}>
        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
        <Text style={{ padding: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, top: 10 }}>Dovid</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 60, borderRadius: 30, margin: 10, flexDirection: 'row', width: 360, alignSelf: 'center', top: 10 }}>
        <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10, left: 5 }} source={require('../Image/parsnal.jpg')} />
        <Text style={{ padding: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, top: 10 }}>Dovid</Text>
      </View>
    
     
      </ScrollView>
      <Image style={{  height: 150, width: 300,alignSelf:'center',margin:10 }} resizeMode='contain' source={require('../Image/Splash1.jpg')} />
    </View>
  );
}

export default Buddies;
