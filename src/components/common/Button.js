import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  const { button, text } = styles
  return <TouchableOpacity
    style={button}
    onPress={onPress}
  >
    <Text style={text}>{children}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    padding: 10,
    fontWeight: '600',
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5

  }
})

export { Button };