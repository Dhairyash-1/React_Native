import { View, ScrollView, useColorScheme } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

export default function App() {
  const dark = useColorScheme() === 'dark'
  return (
    <View style={{ marginTop: 40, flex: 1 }}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </View>
  )
}
