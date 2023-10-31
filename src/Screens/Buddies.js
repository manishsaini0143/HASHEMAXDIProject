import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const Buddies = ({navigation}) => {
  const data = [
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Dovid',
      add: 'Add Friend',
      text: 'Total connection with friend (10)',
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Tzedkah',
      add: 'Un Friend',
      text: 'Total connection with friend (20)',
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Dovid',
      add: 'Add Friend',
      text: 'Total connection with friend (10)',
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Tzedkah',
      add: 'Un Friend',
      text: 'Total connection with friend (20)',
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Dovid',
      add: 'Add Friend',
      text: 'Total connection with friend (10)',
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Tzedkah',
      add: 'Un Friend',
      text: 'Total connection with friend (20)',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#1E293B', width: '90%', padding: 10, alignSelf: 'center', borderRadius: 10, height: 105, marginTop: 20 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>

          <Image resizeMode='contain' style={{ height: 50, width: 50, alignSelf: 'center' }} source={item.image} />
          <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-SemiBold', fontSize: 18, alignSelf: 'center', marginLeft: 15 }}>{item.name}</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#D2A784', width: 120, alignItems: 'center', height: 30, borderRadius: 5 }}>

          <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-SemiBold', fontSize: 16, top: 3 }}>{item.add}</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-Medium', fontSize: 16, margin: 10 }}>{item.text}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View >
          <Image resizeMode='cover' style={{ height: 136, width: 180, }} source={require('../Image/Splash.png')} />
        </View>
        <View style={{ flexDirection: 'row', width: '60%', height: 70, top: 20, justifyContent: 'center', left: 10 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity>

              <Image resizeMode='contain' style={{ height: 25, width: 25, top: 15, margin: 5 }} source={require('../Image/settings.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image resizeMode='contain' style={{ height: 27, width: 27, top: 15, margin: 5 }} source={require('../Image/notification.jpg')} />
              <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 20, zIndex: 1, position: 'absolute', top: 23, right: 7 }}></View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image resizeMode='contain' style={{ height: 50, width: 50, top: 15, margin: 10 }} source={require('../Image/menphoto.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: 15,left:10 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 25,fontFamily:'JosefinSans-Bold' }}>Friends</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 40, borderRadius: 30, flexDirection: 'row',borderWidth:1,borderColor:'#FFFFFF',opacity:0.7,width:'90%',alignSelf:'center'}}>
        <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
        <TextInput style={{ width: 270, height: 40, padding: 10, borderRadius: 20, color: '#FFFFFF' }} placeholder='' keyboardType='text' />
      </View>
      <FlatList
     contentContainerStyle={{paddingBottom:100,margin:10}}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Buddies;
