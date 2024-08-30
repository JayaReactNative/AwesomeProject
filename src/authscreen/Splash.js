import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions
} from 'react-native';
import { SplashImage } from '../assets/imagePath/Images'; 
import { Colors } from '../assets/colors/Colors';

const { width, height } = Dimensions.get('window'); 
const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
    navigation.navigate('Login'); 
    }, 3000);
    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <SafeAreaView >
      <ImageBackground
        source={SplashImage}
        style={styles.imageBackground}
        resizeMode='cover'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Violet,
  },
  imageBackground: {
    width: width * 1, 
    height: height * 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
