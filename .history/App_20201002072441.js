/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  App
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Input from './Input';
// const Input = (props) => {
//   return (
//     <View>
//       <TextInput {...props} />
//       <Button title="ok" onPress={() => console.log(props.value)}></Button>
//     </View>
//   );
// };
const App: () => React$Node = () => {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  return (
    <View>
      <Input
        placeholder={'hello'}
        value={name}
        onChangeText={(text) => setname(text)}
        type="text"
      />
      <Input
        placeholder={'super'}
        type="password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setpassword(text)}
      />
      <Input placeholder={'Fabulous'} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
