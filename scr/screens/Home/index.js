import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native'

import styles from '../../styles/style'
import db from '../../../firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'

export default function Home({ navigation }) {
  const [projects, setProject] = useState([])

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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={projects}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.containerProject}>
                <View style={styles.containerCircle}>
                  <Ionicons
                    name="copy"
                    size={40}
                    color="#aac16f"
                    style={{ alignItems: 'center', alignContent: 'center' }}
                  />
                </View>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.client}</Text>
                  <Text>{item.type}</Text>
                </View>
              </View>
              <View>
                <Text>Materiais:</Text>
                {item.materialsList.map((material, index) => (
                  <Text key={index}>{material}</Text>
                ))}
              </View>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}
