/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Input from './Input';

// const App: () => React$Node = () => {
//   const [name, setname] = useState('');
//   const [password, setpassword] = useState('');

//   return (
//     <View>
//       <Input
//         placeholder={'hello'}
//         value={name}
//         onChangeText={(text) => setname(text)}
//         type="text"
//       />
//       <Input
//         placeholder={'super'}
//         type="password"
//         value={password}
//         secureTextEntry
//         onChangeText={(text) => setpassword(text)}
//       />
//       <Input placeholder={'Fabulous'} />
//     </View>
//   );
// };
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      password: '',
    };
  }
  render() {
    const createTwoButtonAlert = () =>
      Alert.alert(
        'Alert Title',
        this.state,
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
      <ScrollView></ScrollView>
      <View style={StyleSheet.container}>
        <Input
          placeholder={'Enter your name'}
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}
          type="text"
        />
        <Input
          placeholder={'Enter your Password'}
          secureTextEntry
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
        />
        
      </View>
      <View style={styles.button}>
          <Button title="Submit" onPress={alert()}></Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    flexDirection: 'column',
  },
  button: {
    marginTop: 20,
  },
});

export default App;
