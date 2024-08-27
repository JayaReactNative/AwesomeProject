import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Splash from './src/authscreen/Splash';


const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleLayout = ({ nativeEvent: { layout } }) => {
    const { width, height } = layout;
    setDimensions({
      width,
      height,
    });
  };

   // Compute dimensions with a concise approach
   const getCustomDimensions = (containerWidth, containerHeight) => ({
    width: Math.round(containerWidth * 0.95),
    height: Math.round(containerHeight * 0.95),
  });

  const { width, height } = dimensions;
  const { width: Width, height: Height } = getCustomDimensions(width, height);


  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;


