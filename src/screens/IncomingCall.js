import { View, Text, ImageBackground, Dimensions, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ActionButtons, ButtonIcon } from '../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { COLORS, FONTS } from '../constants/themes';

export default function Calling() {
    const [cameraFlip, setCameraFlip] = React.useState(false);
    const [cameraToggle, setCameraToggle] = React.useState(true);
    const [microphoneToggle, setMicrophoneToggle] = React.useState(true);

    function handleReminder() {
        console.warn('handleReminder')
    }
    function handleDecline() {
        console.warn('handleDecline')
    }
    function handleMessage() {
        console.warn('handleMessage')
    }
    function handleAccept() {
        console.warn('handleAccept');
    }
  
    function renderActionButtons() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 100, left: 5, right: 5, }}>
                <View style={{ gap: 30 }}>
                    <Pressable onPress={handleReminder} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={'alarm'} size={24} color={COLORS.white} />
                        <Text style={styles.text}>Remind me</Text>

                    </Pressable>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <ButtonIcon onPress={handleDecline} children={<MaterialCommunityIcons name={'close'} size={26} color={COLORS.white} />} containerStyle={{ backgroundColor: COLORS.red }} />
                        <Text style={styles.text}>Decline</Text>
                    </View>
                </View>
                <View style={{ gap: 30 }}>
                    <Pressable onPress={handleMessage} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name={'chat'} size={24} color={COLORS.white} />
                        <Text style={styles.text}>Message</Text>
                    </Pressable>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <ButtonIcon onPress={handleAccept} children={<MaterialCommunityIcons name={'phone'} size={26} color={COLORS.white} />} containerStyle={{ backgroundColor: COLORS.secondary }} />
                        <Text style={styles.text}>Accept</Text>
                    </View>

                </View>
            </View>
        );
    }
    function renderCaller() {
        return (
            <View style={{ position: 'absolute', top: 50, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height * 0.2 }}>
                <View style={{ gap: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: FONTS.SIZES.medium, fontWeight: '500', color: COLORS.black, }}>ringing... </Text>
                    <Text style={{ fontSize: FONTS.SIZES.large, color: COLORS.white }}>Olaiya Habeeb</Text>
                </View>
            </View>
        )
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../asstes/images/background.jpeg')}>
            {renderActionButtons()}
            {renderCaller()}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONTS.SIZES.small,
        color: COLORS.white,
    }
})