import React from 'react';
import { View, Text,ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View style={{position:'absolute',alignSelf:'center',zIndex:100,bottom:100}}>
    <ActivityIndicator size={'large'} color={'red'}/>
    </View>
  );
}

export default Loader;
