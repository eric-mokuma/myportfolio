import { Text, View, TouchableOpacity } from 'react-native'
import '../styles/tailwind.css'
import Header from './Header' // Ensure Header is imported

export default function Services({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} /> {/* Add Header here */}
      <Text>Services</Text>
      <Text>
        - Freelance Design
        {'\n'}- Web Development
        {'\n'}- Consulting
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Testimonials')}>
        <Text>View Testimonials</Text>
      </TouchableOpacity>
    </View>
  )
}
