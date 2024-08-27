import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputCustom = ({ ValueText, ChangeText }) => {
  return (
    <View style={styles.container1}>
      <TextInput 
        placeholder='Enter your text'
        placeholderTextColor='lightgrey'
        value={ValueText}
        onChangeText={ChangeText}
        keyboardType='default'
        style={styles.inputText}
      />
    </View>
  );
}

export default TextInputCustom;

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
  }
});
