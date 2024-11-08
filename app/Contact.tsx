import { Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'
import '../styles/tailwind.css'
import Header from './Header'

export default function Contact({ navigation }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    console.log({ email, phone, message })
  }

  return (
    <View>
      <Header navigation={navigation} />
      <Text>Contact Me</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}
