import React from 'react';
import { View, StyleSheet } from 'react-native'

const Section = ({ children }) => {
  const { container } = styles
  return <View style={container}>
    {children}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',

  }
})

export { Section };