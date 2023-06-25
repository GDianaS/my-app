import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerMaterial: {
    backgroundColor: '#f3f3f3',
    minWidth: 325,
    margin: 8,
    padding: 20,
    borderRadius: 10
  },
  text: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16
  },
  iconAddButton: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonNewMaterial: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: '#aac16f',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
