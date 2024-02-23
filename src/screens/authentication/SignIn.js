import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants/themes'

export default function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <Text style={styles.label}>Sign In</Text>
            <TextInput style={styles.input} placeholder='Username' />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    form: {
        padding: 20
    },
    label: {
        fontSize: FONTS.SIZES.extraLarge,
        fontWeight: '800',
        alignSelf: 'center',
        color: COLORS.primary,
        paddingVertical: 40,

    },
    input: {
        height: 45,
        borderWidth: 2,
        borderColor: COLORS.secondary,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 20,

    },
    button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 20,
    },
    buttonText: {
        fontSize: FONTS.SIZES.large,
        color: COLORS.white,
    }
})