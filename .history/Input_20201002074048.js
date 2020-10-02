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
      <Button title="ok" onPress={() => alert({props.va})}></Button>
    </View>
  );
};
export default Input;
