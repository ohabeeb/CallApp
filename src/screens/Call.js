import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { ActionButtons, ButtonIcon } from '../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { COLORS, FONTS } from '../constants/themes';

export default function Call() {
    const [cameraFlip, setCameraFlip] = React.useState(false);
    const [cameraToggle, setCameraToggle] = React.useState(true);
    const [microphoneToggle, setMicrophoneToggle] = React.useState(true);

    function handleCameraFlip() {
        console.warn('handleCameraFlip')
    }
    function handleCamera() {
        setCameraToggle(previousState => !previousState)
    }
    function handleMicrophone() {
        setMicrophoneToggle(previousState => !previousState)
    }
    function handleCall() {
        console.warn('handleCall');
    }
    function renderHeader() {
        return (
            <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Octicons name={'chevron-left'} size={26} color={COLORS.black} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name={'lock'} size={24} color={COLORS.black} />
                    <Text style={{ fontSize: FONTS.SIZES.medium }}>End-to-end Encrypted</Text>
                </View>
                <MaterialCommunityIcons name={'account-plus'} size={28} color={COLORS.black} />
            </View>
        )
    }
    function renderActionButtons() {
        return (
            <ActionButtons>
                <ButtonIcon onPress={handleCameraFlip} children={<MaterialCommunityIcons name={'camera-flip'} size={26} color={COLORS.black} />} containerStyle={{ backgroundColor: COLORS.gray }} />
                <ButtonIcon onPress={handleCamera} children={<MaterialCommunityIcons name={cameraToggle ? 'camera-off' : 'camera'} size={26} color={COLORS.black} />} containerStyle={{ backgroundColor: COLORS.gray }} />
                <ButtonIcon onPress={handleMicrophone} children={<MaterialCommunityIcons name={microphoneToggle ? 'microphone-off' : 'microphone'} size={26} color={COLORS.black} />} containerStyle={{ backgroundColor: COLORS.gray }} />
                <ButtonIcon onPress={handleCall} children={<MaterialCommunityIcons name={'phone'} size={26} color={COLORS.white} />} containerStyle={{ backgroundColor: COLORS.red }} />
            </ActionButtons>
        );
    }
    function renderCaller() {
        return (
            <View style={{ position: 'absolute', top: 100, right: 30, alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height * 0.2, width: Dimensions.get('window').width * 0.28, backgroundColor: COLORS.red }}>
                <Text style={{ color: COLORS.white }}>Callar Camera</Text>
            </View>
        )
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../asstes/images/background.jpeg')}>
            {renderHeader()}
            {renderActionButtons()}
            {renderCaller()}
        </ImageBackground>
    )
}