import React from 'react'
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.containner}
      >
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Me</Text>
        </View>
        <View style={styles.card}>
          <Text>To</Text>
        </View>
        <View style={styles.card}>
          <Text>Scroll</Text>
        </View>
        <View style={styles.card}>
          <Text>more...</Text>
        </View>
        <View style={styles.card}>
          <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#2D82B7',
  },
  containner: { padding: 8 },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    backgroundColor: '#8789C0',
    margin: 8,
    borderRadius: 4,
    // elevation: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'white',
  },
})

export default ElevatedCards
