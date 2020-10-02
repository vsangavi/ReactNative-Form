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
    <View>
      <TextInput style={{height}}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        type={type}
        {...props}
      />
      <Button title="ok" onPress={() => console.log(value)}></Button>
    </View>
  );
};
export default Input;
