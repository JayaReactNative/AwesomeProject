import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Colors} from '../assets/colors/Colors';
import TextImagecustom from '../customComponent/TextImagecustom';
import TextInputCustom from '../customComponent/TextInputCustom';
import {String} from '../utility/CommonText';
import {hideIcon, leftArrow, showIcon} from '../assets/imagePath/Images';
import ButtonCustom from '../customComponent/ButtonCustom';
import OTPTextInput from 'react-native-otp-textinput';

const OtpVerify = ({navigation}) => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    
        // Move focus to the next input field if the text is not empty and not the last field
        if (text && index < otp.length - 1) {
          this[`input${index + 1}`].focus();
        }
      };
    
      const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
          this[`input${index - 1}`].focus();
        }
      };

  

  return (
    <View style={styles.container}>
      <View style={styles.postionLog}>
        <TouchableOpacity
          style={styles.containItem}
          onPress={() => navigation.goBack()}>
          <Image source={leftArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={{alignSelf: 'center', justifyContent: 'center'}}>
          <Text style={styles.titleStyles}>{String.VERIFICATION}</Text>
          <Text style={[styles.smallTilte, {marginTop: 15}]}>
            We have to sent a code to your email
          </Text>
          <Text style={[styles.smallTilte, {fontWeight: '800'}]}>
            example@gamil.com
          </Text>
        </View>
      </View>

      <View style={styles.cartContainer}>
        <View style={{flexDirection:'row',marginTop:30}}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => { this[`input${index}`] = ref; }} // Save reference to input field
          style={styles.input}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          autoCapitalize="none"
          autoCorrect={false}
          textAlign="center"
        />
      ))}
        </View>

        <ButtonCustom
          backgroundColor={Colors.Orange}
          title={'SEND OTP'}
          Buttonstyle={styles.buttonStyle}
        />
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
    position: 'absolute',
    left: 0,
    zIndex: 0,
    paddingLeft: 10,
    paddingRight: 30,
  },
  backIcon: {
    height: 20,
    width: 10,
    tintColor: 'white',
  },
  titleStyles: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Colors.White,
    textAlign: 'center',
    marginTop: '20%',
  },
  postionLog: {
    width: '100%',
    position: 'absolute',
    top: 15,
  },
  cartContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    top: '35%',
    padding:14,
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
    textAlign: 'center',
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
    alignSelf: 'center',
  },
  buttonStyle: {
    marginTop: 30,
  },
  input: {
    width: 50,
    height: 50,
    fontSize: 24,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
  },
});

export default OtpVerify;
