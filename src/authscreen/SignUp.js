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


const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPassword] = useState('');
  

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
        <Text style={styles.titleStyles}>{String.SIGNUP}</Text>
        <Text style={styles.smallTilte}>Plesae sign up to get started</Text>
        </View>
      </View>

      <View style={styles.cartContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '90%', padding: 20, paddingBottom: '8%'}}>
          <Text style={styles.heading}>{String.NAME}</Text>
          <TextInputCustom
            Title={'Enter your name'}
            ValueText={name}
            ChangeText={txt => setName(txt)}
          />
          <Text style={[styles.heading, {marginTop: 15}]}>{String.EMAIL}</Text>
          <TextInputCustom
            Title={'Enter your email'}
            ValueText={email}
            ChangeText={txt => setEmail(txt)}
          />
          <Text style={[styles.heading, {marginTop: 15}]}>
            {String.PASSWORD}
          </Text>
          <TextImagecustom
            Title={'Enter your Password'}
            ValueText={password}
            ChangeText={txt => setPassword(txt)}
            imageHide={hideIcon}
            imageShow={showIcon}
            secureTextEntry={true}
          />
          <Text style={[styles.heading, {marginTop: 15}]}>
            {String.RETYPE_PASSWORD}
          </Text>
          <TextImagecustom
            Title={'Enter your confirm password'}
            ValueText={confirmPass}
            ChangeText={txt => setConfirmPassword(txt)}
            imageHide={hideIcon}
            imageShow={showIcon}
            secureTextEntry={true}
          />

          <ButtonCustom
            backgroundColor={Colors.Orange}
            title={'SIGN IN'}
            Buttonstyle={styles.buttonStyle}
            onClickButton={()=>navigation.navigate('OtpVerify')}
          />

          <TouchableOpacity
            style={styles.dontView}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.heading}>
              {String.ALREADY_HAVE_ACCOUNT}
              <Text style={[styles.forText, {fontSize: 18}]}>
                {'  '}
                {String.SINGUP}
              </Text>
            </Text>
          </TouchableOpacity>
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
    marginTop: 10,
    textAlign:'center',
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

export default SignUp;
