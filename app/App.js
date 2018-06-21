import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {email : '', password : ''};
  }

  render() {
    return (
      <View style={{width: 200, height: 100}}>

        <Text>Sign up</Text>
        <TextInput
          style={{width:100, height:40}}
          placeholder="Email"
          onChangeText={ (email) => this.setState({email}) }
          value={this.state.email}
        />
        <TextInput
          style={{width:100, height:40}}
          placeholder="Password"
          onChangeText={ (password) => this.setState({password}) }
          value={this.state.password}
        />
        <Button
          onPress={() => {
            //this.submitForm();
            Alert.alert(this.state.email);
          }}
          title="Submit"
        />
      </View>
    );
  }

  submitForm(){
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email : this.state.email,
        password : this.state.password
      }),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
