import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../Components/SearchBar'
import { useResult } from '../hooks/useResults'
import ResultList from '../Components/ResultList'
//import { ScrollView } from 'react-native-gesture-handler'
export default function SearchScreen() {
    const [term, setTerm] = useState("")
    const [searchResult, ERROR, result] = useResult()
    const filterByPrice = (price) => {
        return result.filter((item) => item.price === price)
    }

    return (

        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onChangeTerm={(newTerm) => setTerm(newTerm)}
                onEndSubmitTerm={() => searchResult(term)}

            />
            {ERROR && <Text>{ERROR}</Text>}
            {/* <Text>{result.length}</Text> */}
            <ScrollView>
                <ResultList result={filterByPrice('$')} title="Cost Effective" />
                <ResultList result={filterByPrice('$$')} title="Bit Pricer" />
                <ResultList result={filterByPrice('$$$')} title="Big Spender!" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})