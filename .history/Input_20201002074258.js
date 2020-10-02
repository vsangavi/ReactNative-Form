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
      placeholder={placeholder}/>
      <Button title="ok" onPress={() => console.log(props.value)}></Button>
    </View>
  );
};
export default Input;
