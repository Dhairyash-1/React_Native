// import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import { View, ScrollView } from 'react-native'

export default function App() {
  return (
    <View style={{ marginTop: 40, flex: 1 }}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </View>
  )
}
