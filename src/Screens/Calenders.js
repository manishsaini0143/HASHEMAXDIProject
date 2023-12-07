import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Calenders = ({ navigation }) => {
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
    </View>
  );
}

export default Calenders;
