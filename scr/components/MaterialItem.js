import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../CartReducer'

import styles from '../styles/style'

const MaterialItem = ({ item }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const addItemToCart = () => {
    dispatch(addToCart(item))
  }

  const removeItemFromCart = () => {
    dispatch(removeFromCart(item))
  }

  return (
    <View style={styles.containerAddMaterial}>
      <TouchableOpacity style={styles.textMaterial}>
        <Text>{item.collection}</Text>
        <Text>{item.name}</Text>
        <Text>{item.type}</Text>
      </TouchableOpacity>
      {cart.some(c => c.id === item.id) ? (
        <TouchableOpacity
          style={styles.buttonAddMaterialInative}
          onPress={removeItemFromCart}
        >
          <Text>+</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonAddMaterial}
          onPress={addItemToCart}
        >
          <Text>+</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default MaterialItem
