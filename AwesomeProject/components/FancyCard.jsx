import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://shahikapathshala.com/wp-content/uploads/2022/07/IMG_20220613_083050373_HDR-01-01-1024x918.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}></View>
      </View>
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
  card: {
    width: 343,
    height: 360,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#8B8BAE',
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {},
})

export default FancyCard
