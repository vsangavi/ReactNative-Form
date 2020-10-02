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
  let {value, placeholder, onChangeText, type} = props;
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  return (
    <View style={styles.outer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        type={type}
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
    Ma
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    borderWidth: 1,
  },
});
