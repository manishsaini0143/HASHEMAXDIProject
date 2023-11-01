import React from 'react';
import { View, Text, Image, TouchableOpacity,FlatList } from 'react-native';

const Notification = ({ navigation }) => {
    const data = [
        {
            id: '1',
            image: require('../Image/parsnal.jpg'),
            name: 'Dovid',
            text: 'Lorem Ipsum is simply dummy text of the printing and',
            add: 'Accept',
        },
        {
            id: '1',
            image: require('../Image/parsnal.jpg'),
            name: 'Dovid',
            text: 'Lorem Ipsum is simply dummy text of the printing and',
            add: 'Accept',
        },
        {
            id: '1',
            image: require('../Image/parsnal.jpg'),
            name: 'Dovid',
            text: 'Lorem Ipsum is simply dummy text of the printing and',
            add: 'Accept',
        },
    ];
    const renderItem1 = ({ item }) => (
        <View style={{ backgroundColor: '#1E293B', borderRadius: 15, flexDirection: 'row', width: '90%', alignSelf: 'center',margin:10 }}>
            <View>
                <Image resizeMode='contain' style={{ height: 40, width: 40, margin: 10 }} source={require('../Image/parsnal.jpg')} />
            </View>
            <View style={{ width: 200, margin: 10 }}>

                <Text style={{ color: '#FFFFFF',fontFamily:'Poppins-SemiBold', fontSize: 18, }}>{item.name}</Text>
                <Text style={{ color: '#FFFFFF',fontFamily:'Poppins-SemiBold', fontSize: 12, }}>{item.text}
                </Text>
            </View>
            <View style={{ backgroundColor: '#0F172A', borderTopRightRadius: 20, borderBottomRightRadius: 20,width:80,justifyContent:'center',borderWidth:1,borderColor:'#D2A784',opacity:0.9}}>
                <Text style={{ color: '#FFFFFF',fontFamily:'Poppins-SemiBold', fontSize: 13, textAlign: 'center', alignSelf: 'center'}}>{item.add}</Text>
            </View>
        </View>
    );
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                        <Image resizeMode='contain' style={{ height: 20, width: 20, top: 5 }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginLeft: 10, fontFamily: 'JosefinSans-Bold' }}>Notification</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center', top: 10, margin: 5 }} source={require('../Image/settings.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 50, width: 50, margin: 5 }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
             <FlatList
     contentContainerStyle={{paddingBottom:100,margin:10}}
        data={data}
        renderItem={renderItem1}
      />

        </View>
    );
}

export default Notification;
