import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Footer from './Footer'
import '../styles/tailwind.css'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {' '}
        {/* Ensure the View takes full height */}
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home Page' }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: 'About Me' }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ title: 'Contact Me' }}
          />
          <Stack.Screen
            name="Services"
            component={Services}
            options={{ title: 'Our Services' }}
          />
          <Stack.Screen
            name="Portfolio"
            component={Portfolio}
            options={{ title: 'My Projects' }}
          />
          <Stack.Screen
            name="Testimonials"
            component={Testimonials}
            options={{ title: 'Testimonials' }}
          />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  )
}
