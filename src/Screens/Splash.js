import React from 'react';
import { View, Image, Text } from 'react-native';

const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0D1134' }}>
      <View>
        <Image resizeMode='cover' style={{ alignSelf: 'center', width: 375, height: 579 }} source={require('../Image/Splash.png')} />
      </View>
      <Image resizeMode='cover' style={{ height: 156, width: '100%' }} source={require('../Image/Splash2.png')} />
    </View>
  );
}

export default Splash;