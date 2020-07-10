import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button } from './components/common'
import LoginForm from './components/LoginForm'

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyBB1sBj9Rp26-5dA48BFqHnWe5PJj7F_gA",
        authDomain: "auth-494c3.firebaseapp.com",
        databaseURL: "https://auth-494c3.firebaseio.com",
        projectId: "auth-494c3",
        storageBucket: "auth-494c3.appspot.com",
        messagingSenderId: "830283685110",
        appId: "1:830283685110:web:b66b78eb3a4a3f119160d7",
        measurementId: "G-3FY0QD50GH"
      })
    } catch (e) {
      if (!/already exists/.test(e.message)) null
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) setUser(user)
    })

  }, [user])

  const loginOrOut = () => {
    if (user) return (
      <Button onPress={() => {
        firebase.auth().signOut()
        setUser(null)
      }}>Logout</Button>
    )

    return <LoginForm />
  }

  return <View>
    <Header text="Auth" />
    {loginOrOut()}
  </View>
}

export default App;