import  React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import SingUp from '../Screens/SingUp';
import Desktop from '../Screens/Desktop';
import Home from '../Screens/Home';
import BottomTab from './BottemTab';
import Doverning from '../Screens/Doverning';
import GroupDele from '../Screens/GroupDele';
import CreateGrouplist from '../Screens/CreateGrouplist';
import Addgoal from '../Screens/Addgoal';
import Setup from '../Screens/Setup';
import profile from '../Screens/profile';
import Notification from '../Screens/Notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [token, setToken] = React.useState("");
  const storedToken = AsyncStorage.getItem('userToken')
  storedToken.then(Res=> {setToken(Res),console.log('ResResResResResRes',Res)})
  
  console.log('storedTokenstoredToken',storedToken)
  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName={token ? 'Home' : 'Desktop'} screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Desktop" component={Desktop} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Doverning" component={Doverning} />
        <Stack.Screen name="GroupDele" component={GroupDele} />
        <Stack.Screen name="CreateGrouplist" component={CreateGrouplist} />
        <Stack.Screen name="Addgoal" component={Addgoal} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="Notification" component={Notification} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;