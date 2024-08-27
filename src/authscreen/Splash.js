import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, SafeAreaView,Image } from 'react-native';
import useCustomDimensions from '../utility/HeightandWidth';
import { showIcon } from '../assets/imagePath/Images';



const Splash = ({navigation}) => {
 useEffect(()=>{
  setTimeout(() => {
    
  }, 2000);
 })

  return (
    <View style={styles.container}>
    <SafeAreaView>
     <Image  source={showIcon}></Image>     
     </SafeAreaView>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'skyblue'
   }
})
