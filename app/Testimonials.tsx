import { Text, View } from 'react-native'
import '../styles/tailwind.css'
import Header from './Header'

export default function Testimonials({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Testimonials</Text>
      <Text>
        'Eric is a fantastic developer!' - Client A{'\n'}
        'Great design work!' - Client B
      </Text>
    </View>
  )
}
