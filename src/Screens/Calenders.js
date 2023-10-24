import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
const OnOffSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',backgroundColor:'#0F172A',flex:1 }}>
      <Switch
        trackColor={{ false: '#FFFFFF', true: '#FFFFFF' }}
        thumbColor={isEnabled ? '#FFFFFF' : '#D1A684'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </View>

  );
};

export default OnOffSwitch;