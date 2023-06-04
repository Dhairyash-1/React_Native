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
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardSubTitle}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace, Jaipur
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
        </View>
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
    height: 370,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#E03B8B',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  cardSubTitle: {
    fontSize: 15,
    marginBottom: 6,
    color: '#E07C24',
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: 500,
    color: '#FF6666',
  },
  cardFooter: {
    color: '#5A20CB',
    marginTop: 20,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
})

export default FancyCard
