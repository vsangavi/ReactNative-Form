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
  const createTwoButtonAlert = (props) =>
    Alert.alert(
      'Alert Title',
      value,
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
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        typr={type}
      />
      <Button title="ok" onPress={createTwoButtonAlert(props)}></Button>
    </View>
  );
};
export default Input;
