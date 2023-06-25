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

export default function AddMaterial({ navigation }) {
  const [material, setMaterial] = useState([])

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  useEffect(() => {
    const fetchMaterials = async () => {
      const materialsCollection = collection(db, 'Materials')
      const materialsQuery = query(materialsCollection)

      try {
        const querySnapshot = await getDocs(materialsQuery)
        const list = []
        querySnapshot.forEach(doc => {
          list.push({ ...doc.data(), id: doc.id })
        })

        // Sort the materials array by collection in alphabetical order
        const sortedList = list.sort((a, b) =>
          a.collection.localeCompare(b.collection)
        )

        setMaterial(list)
      } catch (error) {
        console.error('Error fetching materials:', error)
      }
    }

    fetchMaterials()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}> Materiais Disponíveis </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={material}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerAddMaterial}>
              <TouchableOpacity style={styles.textMaterial}>
                <Text>{item.collection}</Text>
                <Text>{item.name}</Text>
                <Text>{item.type}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonAddMaterial}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}
