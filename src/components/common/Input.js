import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ label, value, onChangeText }) => {
  const { input, text, container } = styles
  let secureTextEntry
  label === 'password' ? secureTextEntry = true : secureTextEntry = false
  return <View style={container}>
    <Text style={text}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      style={input}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize='none'
      autoCorrect={false}
    />
  </View>
}

const styles = StyleSheet.create({
  input: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 4
  },
  text: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    color: '#333'
  },
  container: {
    height: 40,
    width: null,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { Input }