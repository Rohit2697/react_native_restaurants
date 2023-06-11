import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import api from '../Api/yelp'
export default function ResultShow({ navigation }) {
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)
   // console.log(result)
    const getResult = async () => {
        const result = await api.get(`/${id}`)
        setResult(result.data)
    }
    useEffect(() => {
        getResult()
    }, [])
    if (!result) {
        return null
    }
    return (

        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 10
    }
})
