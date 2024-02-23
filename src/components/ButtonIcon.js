import { Text, View, Pressable } from 'react-native'
import React from 'react'

export default function ButtonIcon({children, onPress, containerStyle }) {
    return (
        <Pressable onPress={onPress} style={{ width: 50, height: 50, borderRadius: 100, ...containerStyle, alignItems: 'center', justifyContent: 'center'  }}>
            {children}
        </Pressable>
    )
}

