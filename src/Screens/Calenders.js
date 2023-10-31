import React from 'react';
import { View, Text,TouchableOpacity,Image,FlatList} from 'react-native';

const Calenders = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
      <View style={{ backgroundColor: '#1E293B', width: '90%', padding: 10, alignSelf: 'center', borderRadius: 10 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>

            <Image resizeMode='contain' style={{ height: 50, width: 50, alignSelf: 'center' }} source={require('../Image/parsnal.jpg')} />
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginLeft: 15 }}>Dovid</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#D2A784', width: 120, alignItems: 'center', height: 30, borderRadius: 5 }}>

            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, }}>Add Friend</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, }}>Total connection with friend(10)</Text>
      </View>
    </View>
  );
}

export default Calenders;
