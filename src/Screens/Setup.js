import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Setup = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', margin: 20 }}>
        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>My Connection</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Notification')} style={{ flexDirection: 'row', margin: 10, padding: 10, justifyContent: 'space-between' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
        <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E293B', borderRadius: 20, height: 55, alignItems: 'center', padding: 15, borderWidth: 2, borderColor: '#FFFFFF', marginBottom: 15 ,margin:20}}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Connection Setup</Text>
        <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../Image/arrowdown.jpg')} />
      </TouchableOpacity>
      <View style={{ backgroundColor: '#141C2A',padding:10,borderRadius:20,margin:10 }}>

        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Davening</Text>
          </View>
          <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Tzedkah</Text>
          </View>
          <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/offbutton.jpg')} />
        </TouchableOpacity>
        <View style={{ height: 80 }}></View>

        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Charity</Text>
          </View>
          <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/button.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 10, backgroundColor: '#1E293B', padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#D2A784', height: 25, width: 5, borderRadius: 10, }}></View>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', left: 10 }}>Lorem</Text>
          </View>
          <Image resizeMode='contain' style={{ height: 35, width: 35, alignSelf: 'center' }} source={require('../Image/offbutton.jpg')} />
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Setup;
