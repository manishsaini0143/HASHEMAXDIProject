import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
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
    const renderItem1 = ({ item }) => {
        return(
<View style={{flexDirection:'row',width:'93%',alignSelf:'center',height:90,backgroundColor:'#1E293B',marginBottom:20,borderRadius:10}}>
    <View style={{width:'15%',marginTop:10}}>

<Image resizeMode='contain' style={{ height: 40, width: 40,alignSelf:'center'}} source={require('../Image/parsnal.jpg')} />
    </View>
    <View style={{width:'65%',marginTop:10}}>
    <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 18, }}>{item.name}</Text>
         <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Regular', fontSize: 12, }}>{item.text}</Text>
    </View>
    <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#0F172A',width:'20%',overflow:'hidden',borderTopRightRadius:10,borderBottomRightRadius:10,borderWidth:1,borderColor:'#D2A784'}}>
    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', alignSelf: 'center' }}>{item.add}</Text>
    </TouchableOpacity>
</View>
        // <View style={{ flexDirection: 'row', height: 85, margin: 10, justifyContent: 'center', alignSelf: 'center' }}>
        //     <View style={{ flexDirection: 'row', backgroundColor: '#1E293B', borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}>

        //         <View style={{ margin: 10 }}>
        //             <Image resizeMode='contain' style={{ height: 33, width: 33, }} source={require('../Image/parsnal.jpg')} />
        //         </View>
        //         <View style={{ width: 180, top: 10, marginLeft: 5 }}>

        //             <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Bold', fontSize: 16, }}>{item.name}</Text>
        //             <Text style={{ color: '#FFFFFF', fontFamily: 'DMSans-Regular', fontSize: 12, }}>{item.text}
        //             </Text>
        //         </View>
        //     </View>
        //     <View style={{ backgroundColor: '#0F172A', borderTopRightRadius: 20, borderBottomRightRadius: 20, width: 91, justifyContent: 'center', borderWidth: 1, borderColor: '#D2A784', opacity: 0.9, height: 85 }}>
        //         <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', alignSelf: 'center' }}>{item.add}</Text>
        //     </View>
        // </View>
        )
        
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#0D1134' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%', alignSelf: 'center', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center' }}>
                        <Image resizeMode='contain' style={{ height: 22, width: 22, }} source={require('../Image/Backerro.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', marginLeft: 10, fontFamily: 'DMSans-Bold' }}>Notification</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 30, width: 30, alignSelf: 'center', top: 15, marginRight: 20 }} source={require('../Image/settings.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image resizeMode='contain' style={{ height: 50, width: 50, margin: 5 }} source={require('../Image/menphoto.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
            style={{marginTop:30}}
                contentContainerStyle={{ paddingBottom: 100 }}
                data={data}
                renderItem={renderItem1}
            />

        </View>
    );
}

export default Notification;
