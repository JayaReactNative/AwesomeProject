import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../assets/colors/Colors';
import TextImagecustom from '../customComponent/TextImagecustom';
import TextInputCustom from '../customComponent/TextInputCustom';
import {String} from '../utility/CommonText';
import {
  checkbox,
  hideIcon,
  showIcon,
  unchecked,
} from '../assets/imagePath/Images';
import CheckboxCommon from '../customComponent/CheckboxCommon';
import ButtonCustom from '../customComponent/ButtonCustom';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.postionLog}>
      <Text style={styles.titleStyles}>{String.LOGIN}</Text>
      <Text style={styles.smallTilte}>
        Plesae sign in your existing account{' '}
      </Text>
      </View>


      <View style={styles.cartContainer}>
        <Text style={styles.heading}>{String.EMAIL}</Text>
        <TextInputCustom
          Title={'Enter your email'}
          ValueText={email}
          ChangeText={txt => setEmail(txt)}
        />
        <Text style={[styles.heading, {marginTop: 15}]}>{String.PASSWORD}</Text>
        <TextImagecustom
          Title={'Enter your Password'}
          ValueText={password}
          ChangeText={(txt)=>setPassword(txt)}
          imageHide={hideIcon}
          imageShow={showIcon}
          secureTextEntry={true}
        />

        <View style={styles.forgetStyle}>
          <CheckboxCommon
            Title={'Remember me'}
            imageHide={unchecked}
            imageShow={checkbox}
            secureTextEntry={true}
            TextStyle={styles.rememberText}
          />
          <TouchableOpacity style={{marginLeft: '25%',}}>
          <Text style={styles.forText}>{String.FORGOT_PASSWORD}</Text>
          </TouchableOpacity>
        </View>

        <ButtonCustom backgroundColor={Colors.Orange} title={'LOG IN'} onClickButton={()=>navigation.navigate('Home')}/>

        <TouchableOpacity style={styles.dontView} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.heading}>
            {String.DONT_HAVE_ACCOUNT}
            <Text style={[styles.forText, {fontSize: 18}]}>
              {'  '}
              {String.SINGUP}
            </Text>
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
// test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Black,
  },
  titleStyles: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Colors.White,
  },
  postionLog:{
    position: 'absolute',
    bottom: 10,
    top:'18%',
    alignItems:"center"
  },
  cartContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    top:'35%',
    padding: 20,
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
    marginBottom:20,
    marginTop:6
  },
  forText: {
    color: Colors.Orange,
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  dontView:{
    marginVertical:25
  }
});

export default Login;
