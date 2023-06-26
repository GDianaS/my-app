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
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/style'

export default function Project({ navigation }) {
  const [projects, setProject] = useState([])
  const cart = useSelector(state => state.cart.cart)

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'Projects')
      const projectsQuery = query(projectsCollection)

      try {
        const querySnapshot = await getDocs(projectsQuery)
        const list = []
        querySnapshot.forEach(doc => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setProject(list)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  const addMaterial = () => {
    navigation.navigate('AddMaterial')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text> ProjectScreen </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={projects}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.containerMaterial}>
                <Text>{item.name}</Text>
                <Text>{item.client}</Text>
                <Text>{item.type}</Text>
              </View>
              <View>
                <Text>Materiais:</Text>
                {/* {item.materialsList.map((material, index) => (
                  <Text key={index}>{material}</Text>
                ))} */}
              </View>
              {cart.map((item, index) => (
                <View key={index}>
                  <Text>{item.name}</Text>
                  <Text>{item.name}</Text>
                </View>
              ))}
            </View>
          )
        }}
      />

      <TouchableOpacity style={styles.buttonNewMaterial} onPress={addMaterial}>
        <Text style={styles.iconAddButton}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
