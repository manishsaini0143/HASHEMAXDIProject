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
                backgroundColor: '#0D1134',
                position: 'absolute',
                borderTopWidth: 0,
                borderRadius: 10
            },
        })} initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (

                    focused ?
                        <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'absolute', top: 20 }} source={require('../Image/home1.jpg')} />
                        : <Image resizeMode='contain' style={{ height: 30, width: 30, position: 'absolute', top: 20 }} source={require('../Image/home.jpg')} />
                )
            }} />
            <Tab.Screen name="Groups" component={Groups} options={{
                tabBarIcon: ({ focused }) => (

                    focused ?
                        <Image resizeMode='contain' style={{ height: 35, width: 35, position: 'absolute', top: 15 }} source={require('../Image/group1.jpg')} />
                        : <Image resizeMode='contain' style={{ height: 35, width: 35, position: 'absolute', top: 15 }} source={require('../Image/group.jpg')} />
                )
            }} />
            <Tab.Screen name="Buddies" component={Buddies} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image resizeMode='contain' style={{ height: 35, width: 35, marginTop: 10 }} source={require('../Image/buddies1.jpg')} />
                        : <Image resizeMode='contain' style={{ height: 35, width: 35, marginTop: 10 }} source={require('../Image/buddies.jpg')} />
                )
            }} />
            <Tab.Screen name="Calenders" component={Calenders} options={{

                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image resizeMode='contain' style={{ height: 30, width: 30, marginTop: 10 }} source={require('../Image/calendar1.jpg')} />
                        : <Image resizeMode='contain' style={{ height: 30, width: 30, marginTop: 10 }} source={require('../Image/calendar.jpg')} />
                )
            }} />
        </Tab.Navigator>
    );
}