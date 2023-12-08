import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const Buddies = ({ navigation }) => {
  const data = [
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Dovid',
      add: 'Add Friend',
      text: 'Shared Connections',
      find: '20'
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Tzedkah',
      add: 'Un Friend',
      text: 'Shared Connections',
      find: '30'
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Dovid',
      add: 'Add Friend',
      text: 'Shared Connections',
      find: '10'
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Tzedkah',
      add: 'Un Friend',
      text: 'Shared Connections',
      find: '15'
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Dovid',
      add: 'Add Friend',
      text: 'Shared Connections',
      find: '50'
    },
    {
      id: '1',
      image: require('../Image//parsnal.jpg'),
      name: 'Tzedkah',
      add: 'Un Friend',
      text: 'Shared Connections',
      find: '40'
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#1E293B', width: '93%', alignSelf: 'center', borderRadius: 10, height: 90, padding: 10, margin: 5 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>

          <Image resizeMode='contain' style={{ height: 32, width: 32, alignSelf: 'center' }} source={item.image} />
          <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 18, alignSelf: 'center', marginLeft: 15 }}>{item.name}</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#D2A784', width: 122, alignItems: 'center', height: 30, borderRadius: 5, justifyContent: 'center' }}>

          <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 16, }}>{item.add}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 16, margin: 10 }}>{item.text}</Text>
        <View style={{ backgroundColor: '#1E293B', height: 25, width: 50, borderRadius: 5, borderWidth: 1, borderColor: '#D2A784', top: 10 }}>

          <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'DMSans-Bold', alignSelf: 'center', }}>{item.find}</Text>
        </View>
      </View>
    </View>
  );
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
      <View style={{ margin: 15, left: 10 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'DMSans-Bold' }}>Friends</Text>
      </View>
      <View style={{ backgroundColor: '#1E293B', height: 40, borderRadius: 30, flexDirection: 'row', borderWidth: 1, borderColor: '#FFFFFF', opacity: 0.7, width: '93%', alignSelf: 'center',margin:10 }}>
        <Image resizeMode='contain' style={{ height: 20, width: 30, margin: 10, left: 5 }} source={require('../Image/search.jpg')} />
        <TextInput style={{ width: 270, height: 40, padding: 10, borderRadius: 20, color: '#FFFFFF' }} placeholder='' keyboardType='text' />
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 100, }}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Buddies;
