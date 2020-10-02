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
  return (
    <View>
      <TextInput {...props} />
      <Button title="ok" onPress={() => alert()}></Button>
    </View>
  );
};
export default Input;
