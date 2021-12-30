import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ handleAction, customText }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.6}
      onPress={handleAction}
    >
      <Text style={styles.buttonText}>
        {customText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})