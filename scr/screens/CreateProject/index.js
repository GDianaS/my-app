import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import styles from '../../styles/style'
import { SelectList } from 'react-native-dropdown-select-list'
import db from '../../../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function CreateProject({ navigation }) {
  const [select, setSelected] = useState([])

  const [name, setName] = useState(null)
  const [responsable, setResponsable] = useState(null)
  const [client, setClient] = useState(null)

  const data = [
    { key: '1', value: 'Comercial' },
    { key: '2', value: 'Residencial' },
    { key: '3', value: 'Uso Misto' },
    { key: '4', value: 'Hospitalar' }
  ]

  function addProject() {
    addDoc(collection(db, 'Projects'), {
      name: name,
      client: client,
      type: select,
      responsable: responsable,
      createdAt: serverTimestamp(),
      updatedAt: null,
      materialsList: null
    })

    navigation.navigate('AddMaterial')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}> Criar Novo Projeto</Text>
      <Text style={styles.text}> Nome do Projeto</Text>
      <CustomInput text="Nome do Projeto" onChangeText={setName} />

      <Text style={styles.text}> Cliente</Text>
      <CustomInput text="Cliente" onChangeText={setClient} />

      <Text style={styles.text}> Tipo da Obra</Text>
      <SelectList
        setSelected={setSelected}
        data={data}
        search="false"
        notFoundText="Tipo não encontrado"
        boxStyles={{
          backgroundColor: '#f3f3f3',
          borderColor: '#f3f3f3',
          width: 350,
          marginBottom: 16,
          marginTop: 16
        }}
        inputStyles={{ color: 'black', fontWeight: 'bold' }}
      />

      <Text style={styles.text}> Responsável pelo Projeto</Text>
      <CustomInput text="Responsável" onChangeText={setResponsable} />

      <View>
        <CustomButton text="CANCELAR" type="SECUNDARY" />
        <CustomButton
          text="PRÓXIMO"
          onPress={() => {
            addProject()
          }}
        />
      </View>
    </SafeAreaView>
  )
}
