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

export default function ListMaterials({ navigation }) {
  const [material, setMaterial] = useState([])

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
      <Text style={styles.textTitle}> Banco de Dados de Materiais </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={material}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerMaterial}>
              <TouchableOpacity>
                <Text>{item.collection}</Text>
                <Text>{item.name}</Text>
                <Text>{item.type}</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <TouchableOpacity style={styles.buttonNewMaterial}>
        <Text style={styles.iconAddButton}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
