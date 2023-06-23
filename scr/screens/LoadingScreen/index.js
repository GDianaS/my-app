import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import styles from '../../styles/style'
import { firebaseConfig } from '../../../firebaseConfig'

export default function LoadingScreen({ navigation }) {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  useEffect(() => {
    checkIfLoggedIn()
  }, [])

  const checkIfLoggedIn = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        navigation.navigate('Home')
      } else {
        navigation.navigate('Login')
      }
    })
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}
