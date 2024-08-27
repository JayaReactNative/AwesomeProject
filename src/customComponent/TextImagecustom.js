import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TextImagecustom = ({
  ValueText,
  ChangeText,
  imageShow,
  imageHide,
  secureTextEntry,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry || false);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container1}>
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor="lightgrey"
        value={ValueText}
        onChangeText={ChangeText}
        keyboardType="number-pad"
        style={styles.inputText}
        secureTextEntry={isSecure}
      />

      {secureTextEntry && (
        <TouchableOpacity onPress={toggleSecureEntry}>
          <Image
            source={isSecure ? imageShow : imageHide}
            style={styles.ImageStyle}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextImagecustom;

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'darkgrey',
    padding: 10,
    width: '90%',
    marginTop: 20,
    backgroundColor: 'white',
  },
  inputText: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 15,
    borderRadius: 8,
    textAlign: 'left',
  },
  ImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain', 
  },
});


