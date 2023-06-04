import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.containner}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#2D82B7',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  containner: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  card1: {
    backgroundColor: '#EB8A90',
  },
  card2: {
    backgroundColor: '#42E2B8',
  },
  card3: {
    backgroundColor: '#2D82B7',
  },
})
export default FlatCards
