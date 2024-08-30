import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';


const { width, height } = Dimensions.get('window');
const wp = (percent) => width * (percent / 100);
const hp = (percent) => height * (percent / 100);

const Home = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    require('../assets/Icons/images.png'),
    require('../assets/Icons/images1.png'),
    require('../assets/Icons/spalshColor.png'),
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: wp('85%'),
    height: hp('30%'), // Adjust as needed
    borderRadius: 15,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Home;

