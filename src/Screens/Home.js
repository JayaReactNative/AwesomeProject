// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
// } from 'react-native';
// import SearchBar from '../customComponent/SearchBar';
// import HomeHeader from '../customComponent/HomeHeader';
// import {Colors} from '../assets/colors/Colors';
// import {star, delivery, clock} from '../assets/imagePath/Images';
// import OfferModal from '../customComponent/OfferModal';

// const Home = ({navigation}) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const images = [
//     {id: '1', title: 'Pizza', icon: require('../assets/Icons/images.png')},
//     {id: '2', title: 'Colors', icon: require('../assets/Icons/images1.png')},
//     {id: '3', title: 'Ice-Cream', icon: require('../assets/Icons/drop.png')},
//     {id: '4', title: 'Ice-Cream', icon: require('../assets/Icons/images.png')},
//     {
//       id: '5',
//       title: 'Ice-Cream',
//       icon: require('../assets/Icons/spalshColor.png'),
//     },
//   ];

//   const restaurants = [
//     {id: '1', title: 'Pizza', icon: require('../assets/Icons/images.png')},
//     {id: '2', title: 'Colors', icon: require('../assets/Icons/images1.png')},
//     {id: '3', title: 'Ice-Cream', icon: require('../assets/Icons/drop.png')},
//     {
//       id: '4',
//       title: 'Chocolate',
//       icon: require('../assets/Icons/spalshColor.png'),
//     },
//   ];


//   return (
//     <View style={styles.container}>
//       <HomeHeader
//         title="DELIVERY TO"
//         subtitle="Halal Lab Office"
//         onLeftPress={() => navigation.goBack()}
//         onRightPress={() => setModalVisible(!modalVisible)}
//       />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.contentContainer}>
//           <Text style={styles.normalText}>
//             Hi Halal, <Text style={styles.goodAfterText}>Good Afternoon!</Text>
//           </Text>

//           <SearchBar placeholder="Search here" />

//           <View style={styles.allCategory}>
//             <Text style={styles.categoryTitle}>All Categories</Text>
//             <TouchableOpacity>
//               <Text style={styles.normalText}>See All &gt;</Text>
//             </TouchableOpacity>
//           </View>

//           <FlatList
//             data={images}
//             horizontal
//             showsVerticalScrollIndicator={false}
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={item => item.id}
//             contentContainerStyle={styles.listContent}
//             renderItem={({item}) => (
//               <View style={styles.itemContainer}>
//                 <Image style={styles.cartImage} source={item.icon} />
//                 <Text style={styles.cartText}>{item.title}</Text>
//                 <View style={styles.priceContainer}>
//                   <Text>Starting</Text>
//                   <Text>$70</Text>
//                 </View>
//               </View>
//             )}
//           />

//           <View style={styles.allCategory}>
//             <Text style={styles.categoryTitle}>Open Restaurants</Text>
//             <TouchableOpacity>
//               <Text style={styles.normalText}>See All &gt;</Text>
//             </TouchableOpacity>
//           </View>

//           <FlatList
//             data={restaurants}
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={item => item.id}
//             renderItem={({item}) => (
//               <View style={styles.restContainer}>
//                 <Image style={styles.cartFullImage} source={item.icon} />
//                 <Text style={[styles.cartText, {paddingLeft: 15}]}>
//                   {item.title}
//                 </Text>
//                 <View style={[styles.priceContainer, {paddingLeft: 15}]}>
//                   <Text>Rice - Burger - Fried - Pasta</Text>
//                 </View>
//                 <View style={styles.rowCart}>
//                   <Image style={styles.smallImage} source={star} />
//                   <Text style={styles.textStyle}>Rating</Text>
//                   <Image style={styles.smallImage} source={delivery} />
//                   <Text style={styles.textStyle}>Delivery</Text>
//                   <Image style={styles.smallImage} source={clock} />
//                   <Text style={styles.textStyle}>Time</Text>
//                 </View>
//               </View>
//             )}
//           />
//         </View>

//       </ScrollView>
      
//       <OfferModal
//         isVisible={modalVisible}
//         onClose={()=> setModalVisible(false)}
//         onGoIt={()=> setModalVisible(!modalVisible)}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.White,
//   },
//   contentContainer: {
//     paddingHorizontal: 15,
//   },
//   goodAfterText: {
//     fontSize: 18,
//     fontWeight: '900',
//     color: 'black',
//   },
//   normalText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: 'black',
//     marginTop: 10,
//   },
//   allCategory: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//   },
//   categoryTitle: {
//     fontSize: 23,
//     fontWeight: '500',
//     color: Colors.Black,
//     textShadowColor:Colors.Grey,
//   },
//   itemContainer: {
//     width: 150, // Adjusted width to fit more items in view
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: Colors.White,
//     borderRadius: 15,
//     marginHorizontal: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,
//   },
//   cartImage: {
//     width: 130,
//     height: 120,
//     borderRadius: 10,
//     alignSelf: 'center',
//   },
//   cartText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: Colors.Black,
//     alignSelf: 'flex-start',
//     marginBottom: 8,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   restContainer: {
//     width: '99%',
//     alignItems: 'center',
//     paddingBottom: 10,
//     alignSelf: 'center',
//     backgroundColor: Colors.White,
//     borderRadius: 15,
//     marginHorizontal: 5,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 1.7,
//     shadowRadius: 1,

//     elevation: 2.5,
//   },
//   cartFullImage: {
//     width: 415,
//     height: 250,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     marginBottom: 8,
//   },
//   listContent: {
//     paddingVertical: 5,
//     marginRight: 20,
//   },
//   smallImage: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//     marginRight: 10,
//   },
//   rowCart: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     marginVertical: 10,
//     paddingLeft: 15,
//   },
//   textStyle: {
//     marginRight: 30,
//     fontSize: 15,
//     fontWeight: '900',
//     color: Colors.Orange,
//   },
// });

// export default Home;


import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Demo from '../Demo';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Demo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

