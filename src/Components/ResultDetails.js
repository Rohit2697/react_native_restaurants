import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
export default function ResultDetails({ result }) {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: result.image_url
      }}
        style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating}⭐  {result.review_count} Reviews</Text>
    </View>

  )
}

const styles = StyleSheet.create({

  name: {
    fontWeight: "bold"
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  container: {
    marginLeft: 15
  }
})