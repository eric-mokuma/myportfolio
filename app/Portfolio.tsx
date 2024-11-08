import { Text, View } from 'react-native'
import '../styles/tailwind.css'
import Header from './Header' // Ensure Header is imported

export default function Portfolio({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} /> {/* Add Header here */}
      <Text>My Projects</Text>
      {/* Add project images and descriptions here */}
    </View>
  )
}
