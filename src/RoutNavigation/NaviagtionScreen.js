import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import Splash from '../authscreen/Splash';
import Home from '../Screens/Home';
import Login from '../authscreen/Login';
import SignUp from '../authscreen/SignUp';
import ForgotScreen from '../authscreen/ForgotScreen';
import OtpVerify from '../authscreen/OtpVerify';
import Demo from '../Demo';


export const useCustomDimensions = () => {
  const { width, height } = useWindowDimensions();

  return {
    customWidth: Math.round(width * widthRatio),
    customHeight: Math.round(height * heightRatio),
  };
};


const Stack = createNativeStackNavigator()

const NavigationScreen = () => {
 return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Demo' component={Demo} options={{headerShown:false}}/>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='ForgotScreen' component={ForgotScreen} options={{headerShown:false}}/>
        <Stack.Screen name='OtpVerify' component={OtpVerify} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;


