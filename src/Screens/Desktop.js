import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    key: 'slide1',
    image: require('../Image/Splash1.jpg'),
    name: ' In Memory of blah blah'
  },
  {
    key: 'slide1',
    image: require('../Image/Splash1.jpg'),
    name: ' In Memory of blah blah'
  },
  {
    key: 'slide1',
    image: require('../Image/Splash1.jpg'),
    // name:' In Memory of blah blah'
  },
  {
    key: 'slide1',
    image: require('../Image/Splash1.jpg'),
    // name:' In Memory of blah blah'
  },
  {
    key: 'slide1',
    image: require('../Image/Splash1.jpg'),
    // name:' In Memory of blah blah'
  },

];

const RenderItem = ({ item }) => (
  <View style={{ flex: 1 }}>
    <Image
      style={{ marginTop: 150, height: 180, width: '100%' }}
      resizeMode='contain'
      source={item.image}
    />
    <Text style={{ fontSize: 24, color: '#FFFFFF', width: 210, textAlign: 'center', fontFamily: 'DMSans-Bold', alignSelf: 'center', marginTop: 40 }}>
      {item.name}
    </Text>
  </View>
);

const Desktop = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134', }}>

      {/* <Image style={{ marginTop: 150, height: 180,width:'100%' }} resizeMode='contain' source={require('../Image/Splash1.jpg')} /> */}
      <AppIntroSlider
        style={{ backgroundColor: '#0D1134', }}
        showDoneButton={false}
        showNextButton={false}
        dotStyle={{ backgroundColor: 'white', opacity: 0.4 }}
        // dotStyle={{ backgroundColor: 'white', bottom: 120,opacity:0.5 }} // Move the inactive dots 40 units up from the bottom
        activeDotStyle={{ backgroundColor: '#FFFFFF' }}
        data={slides}
        renderItem={RenderItem}
      />



      <View style={{ width: '100%', marginBottom: 110 }}>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#1E293B', width: '90%', borderRadius: 15, alignSelf: 'center', marginTop: 18, height: 44, borderWidth: 1, borderColor: '#000000', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', justifyContent: 'center' }}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SingUp')} style={{ backgroundColor: '#0F172A', width: '90%', borderRadius: 15, alignSelf: 'center', marginTop: 20, height: 44, borderWidth: 1, borderColor: '#FFFFFF', justifyContent: 'center' }}>
          <Text style={{ color: '#FFFFFF', alignSelf: 'center', fontSize: 16, fontFamily: 'DMSans-Bold', justifyContent: 'center' }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Desktop;
