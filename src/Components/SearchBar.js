import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
export default function SearchBar({ term, onChangeTerm, onEndSubmitTerm }) {

    return (
        <View style={styles.backGroundStyle}>
            <Feather name="search" style={styles.iconStyle} color="black" />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='search'
                style={styles.textInputStyle}
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onEndSubmitTerm}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    backGroundStyle: {
        backgroundColor: '#dee0e3',
        height: 50,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom:10

    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    textInputStyle: {
        fontSize: 18,
        flex: 1

    }
})