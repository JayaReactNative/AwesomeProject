import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonCustom = ({ 
  title, 
  onClickButton, 
  backgroundColor = 'blue', 
  textColor = 'white', 
  width = "100%",Buttonstyle
}) => {
  return (
    <TouchableOpacity 
      onPress={onClickButton} 
      style={[styles.mainView, { backgroundColor, width },Buttonstyle]}>
      <Text style={[styles.textStyle, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonCustom;

const styles = StyleSheet.create({
  mainView: {
    borderRadius: 10,
    padding:15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '700',
  },
});


// demo
{/* <ButtonCustom
      title="Click Me" 
      onClickButton={handlePress} 
       backgroundColor="skyblue" 
       textColor="white" 
       width={300} 
      /> */}