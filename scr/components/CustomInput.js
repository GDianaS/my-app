import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const CustomInput = ({ text, value, icon, size, onChangeText }) => {
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={size} color="black" />
      <TextInput
        style={[styles.text, styles.textContainer]}
        placeholder={text}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    margin: 16,
    padding: 8,

    minWidth: 350,
    minHeight: 30,

    backgroundColor: '#f1f1f1',
    borderRadius: 10
  },

  text: {
    fontWeight: 'bold',
    color: 'black'
  },

  textContainer: {
    paddingLeft: 8,
    paddingRight: 8
  }
})

export default CustomInput
