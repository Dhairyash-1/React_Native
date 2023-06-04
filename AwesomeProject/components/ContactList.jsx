import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.containner}>
        {contacts.map(user => (
          <View key={user.uid} style={styles.userCard}>
            <Image source={{ uri: user.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userStatus}>{user.status}</Text>
            </View>
          </View>
        ))}
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
  containner: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#6AC47E',
    padding: 8,
    borderRadius: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#232323',
    marginBottom: 2,
  },
  userStatus: {},
})
