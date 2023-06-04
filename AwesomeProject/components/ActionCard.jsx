import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openLink(url) {
    Linking.openURL(url)
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.blogCard]}>
        <View style={styles.titleContainner}>
          <Text style={styles.cardTitle}>
            What's new in JavaScript 2021 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={4} style={{ color: '#fff', fontSize: 16 }}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openLink(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12'
              )
            }
          >
            <Text style={styles.socialLink}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://twitter.com/hiteshdotcom?lang=en')}
          >
            <Text style={styles.socialLink}>Follow me</Text>
          </TouchableOpacity>
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
    margin: 8,
    height: 390,
    // width: '100%',
    marginVertical: 12,
    marginHorizontal: 16,
  },
  blogCard: {
    backgroundColor: '#E07C24',
    borderRadius: 8,
  },
  titleContainner: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardBody: {
    padding: 10,
    color: '#fff',
  },
  cardFooter: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLink: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontWeight: 'bold',
    borderRadius: 4,
  },
})
