import React from 'react';
import { View,Image, Text} from 'react-native';

const Splash = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#0D1134'}}>
     <View>
     <Image resizeMode='contain' style={{flex:1,position:'absolute',alignSelf:'center',width:400}} source={require('../Image/Splash.png')}/>
     <Image resizeMode='contain' style={{flex:1,position:'relative',top:100,width:300}} source={require('../Image/Splash1.jpg')}/>
     </View>
    </View>
  );
}

export default Splash;