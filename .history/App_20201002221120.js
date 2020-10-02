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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <Input
          placeholder={'Enter your name'}
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}
        />
        <Input
          placeholder={'Enter your Password'}
          secureTextEntry
          keyboardType="number-pad"
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
        />
        <View style={styles.button}>
          <Button
            title="Submit"
            onPress={() =>
              alert([
                'name =' + this.state.name,
                'Password =' + this.state.password,
              ])
            }></Button>
        </View>
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
