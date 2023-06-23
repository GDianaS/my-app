import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../../styles/style'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Login Screen</Text>
      <Button title="Sign In With Google"></Button>
    </View>
  )
}
