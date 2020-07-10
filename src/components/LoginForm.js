import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import firebase from 'firebase'
import { Button, Section, Input, Spinner } from './common'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const onLogin = () => {
    setEmail('')
    setPassword('')
    setLoading(false)
    setError('')
  }

  const onFail = () => {
    setError('Auth failed...')
    setLoading(false)
  }

  const buttonOrSpinner = () => {
    if (loading) return <Spinner />

    return (
      <Button
        onPress={() => {
          setLoading(true)
          setError(null)
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => onLogin())
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
            })
            .then(() => onLogin())
            .catch(() => onFail())
        }}
      >Login</Button>
    )
  }

  return <View>
    <Section>
      <Input
        value={email}
        onChangeText={setEmail}
        label="email"
      />
    </Section>

    <Section>
      <Input
        value={password}
        onChangeText={setPassword}
        label="password"
      />
    </Section>

    {error ? <Text style={styles.errorMsg}>{error}</Text> : null}

    <Section>
      {buttonOrSpinner()}
    </Section>
  </View>
}

const styles = StyleSheet.create({
  errorMsg: {
    color: 'red',
    fontSize: 18
  }
})

export default LoginForm;