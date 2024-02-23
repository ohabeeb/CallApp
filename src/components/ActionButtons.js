import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonIcon } from '.'
import { COLORS } from '../constants/themes'

export default function ActionButtons({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 30,
        backgroundColor: COLORS.black,

    },
})