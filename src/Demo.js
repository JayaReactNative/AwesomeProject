import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
} from 'react-native';
import { babyBottle, dove, lotus, search } from './assets/imagePath/Images';
import { Colors } from './assets/colors/Colors';

const { width, height } = Dimensions.get('window');

const Card = ({ panHandlers, card, style }) => (
  <Animated.View style={[styles.card, style]} {...panHandlers}>
    {/* <Image style={styles.fullImage} source={card.image} resizeMode="cover" /> */}
    <View style={styles.fullImage}></View>
    <Text style={styles.cardText}>About me</Text>
    <View style={styles.iconRow}>
      <View style={styles.halfCard}>
        <Image source={dove} style={styles.iconStyle} />
        <Text style={styles.aboutText}>Women</Text>
      </View>
      <View style={styles.halfCard}>
        <Image source={babyBottle} style={styles.iconStyle} />
        <Text style={styles.aboutText}>Don't want kids</Text>
      </View>
      <View style={styles.halfCard}>
        <Image source={lotus} style={styles.iconStyle} />
        <Text style={styles.aboutText}>Spiritual</Text>
      </View>
    </View>
    <Text style={styles.cardText}>I'm looking for</Text>
    <View style={styles.halfCard}>
      <Image source={search} style={styles.iconStyle} />
      <Text style={styles.aboutText}> A long-term relationship</Text>
    </View>
    <Image style={styles.fullImage} source={card.image} resizeMode="cover" />
  </Animated.View>
);

const ScrollableImageView = () => {
  const [cards, setCards] = useState(Array.from({ length: 50 }, (_, index) => ({
    id: (index + 1).toString(),
    // image: require('./assets/Icons/imageDemo.png'),
    text: `Item ${index + 1}`,
    about: `About Item ${index + 1}`,
  })));
  const [currentIndex, setCurrentIndex] = useState(0);

  const animatedValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const initialX = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        initialX.current = gestureState.moveX;
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: animatedValue.x }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        const { dx } = gestureState;
        const swipeThreshold = 120;

        // Determine swipe or reset position
        if (Math.abs(dx) > swipeThreshold) {
          handleSwipe(dx > 0 ? 'right' : 'left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  const handleSwipe = (direction) => {
    Animated.timing(animatedValue, {
      toValue: { x: direction === 'right' ? width : -width, y: 0 },
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      animatedValue.setValue({ x: 0, y: 0 }); // Reset position after swipe
    });
  };

  const resetPosition = () => {
    Animated.spring(animatedValue, {
      toValue: { x: 0, y: 0 },
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const currentCard = cards[currentIndex];
  const cardStyle = {
    transform: animatedValue.getTranslateTransform(),
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <View style={styles.outerView}>
        <Text style={styles.header}>Scrollable Content</Text>
        <View style={styles.innerContainer}>
          <ScrollView
            contentContainerStyle={styles.innerContent}
            style={styles.innerScrollView}
          >
            <View style={styles.innerView}>
              {currentCard && (
                <Card
                  panHandlers={panResponder.panHandlers}
                  card={currentCard}
                  style={cardStyle}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  outerView: {
    width: width - 20,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  innerContainer: {
    height: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  innerScrollView: {
    flex: 1,
  },
  innerContent: {
    alignItems: 'center',
  },
  innerView: {
    width: width - 40,
    height: '90%',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageDescription: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
  halfCard: {
    marginRight: 6,
    flexDirection: 'row',
    backgroundColor: Colors.Grey,
    borderRadius: 16,
    padding: 10,
    marginVertical: 5,
  },
  iconStyle: { height: 25, width: 25, resizeMode: 'contain' },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  aboutText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  fullImage: {
    width: '100%',
    height: '80%',
    backgroundColor:'pink'
  },
});

export default ScrollableImageView;
