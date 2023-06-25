import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  VirtualizedList,
  Button
} from 'react-native'

import { uid } from 'uid'

import DropDownPicker from 'react-native-dropdown-picker'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import styles from '../../styles/style'

import { db } from '../../../firebaseConfig'
import { onValue, ref, set, update } from 'firebase/database'

export default function CreateMaterial({ navigation }) {
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [colection, setColection] = useState('')
  const [brand, setBrand] = useState('')
  const [finish, setFinish] = useState('')
  const [dimension, setDimension] = useState('')
  const [supliers, setSuplier] = useState('')
  const [url, setUrl] = useState('')

  const [listMaterials, setListMaterials] = useState([])

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Polido', value: 'PO' },
    { label: 'Brilhante', value: 'BR' },
    { label: 'Acetinado', value: 'AC' },
    { label: 'Mate', value: 'MA' },
    { label: 'Natural', value: 'NA' },
    { label: 'Resistente ao Escorregamento', value: 'EXT' }
  ])

  //create
  const addData = () => {
    const uuid = uid()
    set(ref(db, 'materials/' + uuid), {
      type: type,
      name: name,
      colection: colection,
      brand: brand,
      finish: finish,
      dimension: dimension,
      supliers: supliers,
      url: url
    })
    setType('')
    setName('')
    setBrand('')
    setColection('')
    setDimension('')
    setFinish('')
    setSuplier('')
    setUrl('')
  }

  //read

  function readData() {
    const starCountRef = ref(db, 'materials/' + postId)
    onValue(starCountRef, snapshot => {
      const data = snapshot.val()
    })
  }

  //update

  //delete

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}> Tipo</Text>
        <CustomInput text="Tipo" value={type} onChangeText={setType} />
        <Text style={styles.text}> Nome do Material</Text>
        <CustomInput text="Nome" value={name} onChangeText={setName} />
        <Text style={styles.text}> Coleção</Text>
        <CustomInput
          text="Coleção"
          value={colection}
          onChangeText={setColection}
        />
        <Text style={styles.text}> Marca </Text>
        <CustomInput text="Marca" value={brand} onChangeText={setBrand} />
        <Text style={styles.text}> Acabamento</Text>
        <CustomInput
          text="Acabamento"
          value={finish}
          onChangeText={setFinish}
        />
        {/* <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        /> */}
        <Text style={styles.text}> Dimensões</Text>
        <CustomInput
          text="Dimensões"
          value={dimension}
          onChangeText={setDimension}
        />
        <Text style={styles.text}> Fornecedores</Text>
        <CustomInput
          text="Fornecedores"
          value={supliers}
          onChangeText={setSuplier}
        />
        <Text style={styles.text}> URL</Text>
        <CustomInput text="url" value={url} onChangeText={setUrl} />
        <CustomButton text="Concluir" onPress={addData} />

        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}
