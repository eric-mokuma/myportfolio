import { Text, View, Image } from 'react-native'
import '../styles/tailwind.css'
import Header from './Header'

export default function About({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>About Me</Text>
      <Text>
        I am a passionate web developer with a background in management
        information systems. I enjoy learning and collaborating in dynamic
        teams.
      </Text>
      <Image source={{ uri: 'your-photo-url' }} />
    </View>
  )
}
