import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

import db from '../../../firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'

import styles from '../../styles/style'

export default function Project({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text> ProjectScreen </Text>
      <TouchableOpacity style={styles.buttonNewMaterial}>
        <Text style={styles.iconAddButton}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
