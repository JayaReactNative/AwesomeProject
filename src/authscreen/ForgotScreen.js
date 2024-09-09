import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Colors} from '../assets/colors/Colors';
import TextImagecustom from '../customComponent/TextImagecustom';
import TextInputCustom from '../customComponent/TextInputCustom';
import {String} from '../utility/CommonText';
import { hideIcon, leftArrow, showIcon } from '../assets/imagePath/Images';
import ButtonCustom from '../customComponent/ButtonCustom';


const ForgotScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  

  return (
    <View style={styles.container}>
      <View style={styles.postionLog}>
      <TouchableOpacity
          style={styles.containItem}
          onPress={() => navigation.goBack()}
        >
          <Image source={leftArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={{alignSelf:'center',justifyContent:"center",}}>
        <Text style={styles.titleStyles}>{String.FORGOT_PASSWORD}</Text>
        <Text style={[styles.smallTilte]}>Please sign in your to existing account</Text>
        </View>
      </View>

      <View style={styles.cartContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '90%', padding: 20, paddingBottom: '8%'}}>
         
          <Text style={[styles.heading, {marginTop: 15}]}>{String.EMAIL}</Text>
          <TextInputCustom
            Title={'Enter your email'}
            ValueText={email}
            ChangeText={txt => setEmail(txt)}
          />
     

          <ButtonCustom
            backgroundColor={Colors.Orange}
            title={'SEND OTP'}
            Buttonstyle={styles.buttonStyle}
          />

         
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.Black,
  },
  containItem: {
    position: "absolute",
    left: 0,
    zIndex: 0,
    paddingLeft: 10,
    paddingRight: 30,
  },
  backIcon: {
    height: 20,
    width: 10,
    tintColor: "white",
  },
  titleStyles: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Colors.White,
    textAlign:'center',
    marginTop:"20%"
  },
  postionLog: {
    width:'100%',
    position: 'absolute',
    top:15,
  },
  cartContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    top: '30%',
    backgroundColor: Colors.White,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: Colors.Gray,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.Grey,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  smallTilte: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.White,
    textAlign:'center',
    marginTop: 15
  },
  rememberText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.Grey,
    marginLeft: 20,
  },
  forgetStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  forText: {
    color: Colors.Orange,
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: '25%',
  },
  dontView: {
    marginVertical: 25,
    alignSelf:'center'
  },
  buttonStyle: {
    marginTop: '6%',
  },
});

export default ForgotScreen;

