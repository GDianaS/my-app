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
  containerAddMaterial: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-between',
    backgroundColor: '#f3f3f3',
    minWidth: 325,
    margin: 8,
    padding: 20,
    borderRadius: 10
  },
  containerProject: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-between',
    backgroundColor: '#f3f3f3',
    minWidth: 325,
    margin: 8,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  containerCircle: {
    height: 90,
    width: 90,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
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
  textMaterial: {
    marginRight: 130
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
  },
  buttonAddMaterial: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAddMaterialInative: {
    backgroundColor: '#f5f5f5',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
