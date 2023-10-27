import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
    {
      key: 'slide1',
      image: require('../Image/Splash1.jpg'),
    },
    {
      key: 'slide1',
      image: require('../Image/Splash1.jpg'),
    },
    {
      key: 'slide1',
      image: require('../Image/Splash1.jpg'),
    },
    {
      key: 'slide1',
      image: require('../Image/Splash1.jpg'),
    },
    {
      key: 'slide1',
      image: require('../Image/Splash1.jpg'),
    },
];

const RenderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <Image
        style={{  marginTop: 170, height:180,width:'100%' }}
        resizeMode='contain'
        source={item.image}
      />
    </View>
  );

const Desktop = ({ navigation }) => {
   
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134', }}>
            {/* <Image style={{ marginTop: 150, height: 180,width:'100%' }} resizeMode='contain' source={require('../Image/Splash1.jpg')} /> */}
            <AppIntroSlider
            showDoneButton={false}
            showNextButton={false}
            dotStyle={{ backgroundColor: 'white',opacity:0.4,bottom: 30 }}
            // dotStyle={{ backgroundColor: 'white', bottom: 120,opacity:0.5 }} // Move the inactive dots 40 units up from the bottom
            activeDotStyle={{ backgroundColor: '#FFFFFF', bottom: 30 }}
      data={slides}
      renderItem={RenderItem}
    />
            <Text style={{ fontSize: 32, color: '#FFFFFF', marginTop: 25, width: '80%', textAlign: 'center', fontFamily: 'JosefinSans-Bold',alignSelf:'center',bottom:240}}>
                In Memory of blah blah
            </Text>
            <View style={{width: '100%',bottom:110}}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#1E293B', width:313, borderRadius: 15, alignSelf: 'center', marginTop: 18, height: 44,borderWidth:1,borderColor:'#000000' ,justifyContent:'center'}}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16,fontFamily:'Poppins-SemiBold',}}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SingUp')} style={{ backgroundColor: '#1E293B', width: 313, borderRadius: 15, alignSelf: 'center', marginTop: 20, height: 44,borderWidth:1,borderColor:'#FFFFFF',justifyContent:'center' }}>
                    <Text style={{ color: '#FFFFFF',alignSelf:'center', fontSize: 16,fontFamily:'Poppins-SemiBold',}}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Desktop;
