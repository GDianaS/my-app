import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}
    >
      <Text style={[styles.text, fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 100,

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5
  },

  container_PRIMARY: {
    backgroundColor: '#aac16f'
  },

  container_SECUNDARY: {
    backgroundColor: '#fec96b'
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white'
  }
})

export default CustomButton
