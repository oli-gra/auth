import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ text }) => {
  const { container, header } = styles
  return <View style={container}>
    <Text style={header}>{text}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    position: 'relative',
  },
  header: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 36,
  }
})

export { Header };