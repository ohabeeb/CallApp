import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants/themes'

export default function Splash({ navigation }) {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('Contact');
        }, 3000)
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Text style={styles.mainLabel}>Talk Time</Text>
            <Text style={styles.subLabel}>Made for easy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainLabel: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    subLabel: {
        fontSize: FONTS.SIZES.large,
    }
})