import React, { useState } from 'react'
import Splash from './src/Screens/Splash'
import StackNavigation from './src/Navigation/StackNavigation'
import { LogBox, } from 'react-native';
LogBox.ignoreLogs(['Some warning message you want to ignore']);
LogBox.ignoreAllLogs()
const App = () => {
  const [showSplash, setShowSplash] = useState(false)
  setTimeout(() => {
    setShowSplash(true)
  }, 3000);
  return (
    <>
      {
        showSplash == false ? <Splash /> : <StackNavigation />
      }
    </>
  )
}

export default App;
