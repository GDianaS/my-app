import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import LoadingScreen from './scr/screens/LoadingScreen'
import Login from './scr/screens/Login'
import Home from './scr/screens/Home'
import CreateMaterial from './scr/screens/CreateMaterial'
import Project from './scr/screens/Project'
import ListMaterials from './scr/screens/ListMaterials'
import AddMaterial from './scr/screens/AddMaterial'
import store from './store'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ title: 'Seja Bem-Vindo' }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Project" component={Project} />
          <Stack.Screen name="AddMaterial" component={AddMaterial} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
