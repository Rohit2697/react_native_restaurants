import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultDetails from './ResultDetails'
import { withNavigation } from 'react-navigation'
export default withNavigation(function ResultList({ title, result, navigation }) {

    if(!result.length){
      return null  
    }
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id:item.id})}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    )
                }
                }

            />

        </View>
    )

}
)
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 15,

    },
    container: {
        marginBottom: 10
    }
})