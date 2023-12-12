import * as React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Groups from '../Screens/Groups';
import Buddies from '../Screens/Buddies';
import Calenders from '../Screens/Calenders';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {

                height: 70,
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: '#1E293B',
                position: 'absolute',
                borderTopWidth: 0,
                borderRadius: 15
            },
            tabBarLabel: ''
        })} initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image resizeMode='contain' style={{ height: 28, width: 28, position: 'absolute', top: 20 }} source={require('../Image/home1.jpg')} />
                        : <Image resizeMode='contain' style={{ height: 28, width: 28, position: 'absolute', top: 20 }} source={require('../Image/home.jpg')} />
                )
            }} />
            <Tab.Screen name="Groups" component={Groups} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'absolute', top: 19 }} source={require('../Image/Group2.png')} />
                        : <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'absolute', top: 19 }} source={require('../Image/Groups1.png')} />
                )
            }} />
            <Tab.Screen name="Buddies" component={Buddies} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image resizeMode='contain' style={{ height: 27, width: 27, marginTop: 19 }} source={require('../Image/friends1.png')} />
                        : <Image resizeMode='contain' style={{ height: 27, width: 27, marginTop: 19 }} source={require('../Image/friends.png')} />
                )
            }} />
            <Tab.Screen name="Calenders" component={Calenders} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image resizeMode='contain' style={{ height: 25, width: 25, marginTop: 16 }} source={require('../Image/calendarbottem1.png')} />
                        : <Image resizeMode='contain' style={{ height: 25, width: 25, marginTop: 16 }} source={require('../Image/calendar.png')} />
                )
            }} />
        </Tab.Navigator>
    );
}