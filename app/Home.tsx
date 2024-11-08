import { View, Text, Image } from 'react-native'
import '../styles/tailwind.css'
import Header from './Header'

export default function Home({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Home</Text>
      <Text>Welcome to my portfolio!</Text>
      <Image source={{ uri: 'your-photo-url' }} />
    </View>
  )
}
