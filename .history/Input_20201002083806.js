import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  TextInput,
  Text,
  StatusBar,
  Button,
} from 'react-native';
const Input = (props) => {
  let {value, placeholder, onChangeText} = props;
 
  return (
    <View style={styles.outer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
       
        {...props}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  outer: {
    justifyContent: 'center',
  },
  input: {
    marginTop:30,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    borderWidth: 1,
  },
});
