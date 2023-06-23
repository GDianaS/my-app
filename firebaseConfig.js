import { firebase, initializeApp, getApps, getApp } from 'firebase/app'
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { getDatabase } from 'firebase/database'

export const firebaseConfig = {
  apiKey: 'AIzaSyDJBxYlauNGEPg4R3WMqBUfTNKf-YnAd4c',
  authDomain: 'mobileapp-20cca.firebaseapp.com',
  databaseURL: 'https://mobileapp-20cca-default-rtdb.firebaseio.com',
  projectId: 'mobileapp-20cca',
  storageBucket: 'mobileapp-20cca.appspot.com',
  messagingSenderId: '608172640839',
  appId: '1:608172640839:web:931de6969b98f1f00abf62',
  measurementId: 'G-Z2YE35GGD2'
}

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const db = getDatabase()

export { db }

// export const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)

// const provider = new GoogleAuthProvider()

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then(result => {
//       const name = result.user.displayName
//       const email = result.user.email
//       const profilePic = result.user.photoURL

//       localStorage.setItem('name', name)
//       localStorage.setItem('email', email)
//       localStorage.setItem('profilePic', profilePic)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }
