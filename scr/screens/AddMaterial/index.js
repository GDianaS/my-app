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
import { useDispatch, useSelector } from 'react-redux'
import { addToCard } from '../../../CartReducer'
import MaterialItem from '../../components/MaterialItem'
import CustomButton from '../../components/CustomButton'

export default function AddMaterial({ navigation }) {
  const [material, setMaterial] = useState([])

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const cart = useSelector(state => state.cart.cart)
  const materialCart = useSelector(state => state.material.material)
  console.log(cart)
  console.log('material array', cart)

  const concluir = () => {
    navigation.navigate('Project')
  }

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
          return <MaterialItem item={item} />
        }}
      />

      <View>
        <Text> Selecionados : {cart.length}</Text>
      </View>
      <CustomButton text="Concluir" onPress={concluir} />
    </SafeAreaView>
  )
}
