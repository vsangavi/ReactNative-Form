import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
  Button,
} from 'react-native';
const Input = (props) => {
  let {value, placeholder, onChangeText, type} = props;
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        typr={type}
      />
      <Button title="ok" onPress={alert(value)></Button>
    </View>
  );
};
export default Input;
