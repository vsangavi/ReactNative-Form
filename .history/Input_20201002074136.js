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
    let{}
  return (
    <View>
      <TextInput {...props} />
      <Button title="ok" onPress={() => console.log(props.value)}></Button>
    </View>
  );
};
export default Input;
