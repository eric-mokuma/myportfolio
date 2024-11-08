import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import '../styles/tailwind.css'

const Header = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Portfolio')}>
        <Text>Portfolio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Services')}>
        <Text>Services</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header
