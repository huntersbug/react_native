import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text:any) => {
    setUsername(text);
  };

  const handlePasswordChange = (text:any) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}

      />
      <TextInput
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={password}
   
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
});