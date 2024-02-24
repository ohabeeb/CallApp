import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants/themes'
import { Voximplant } from 'react-native-voximplant';
import { ACCT_NAME, APP_NAME } from '../../constants/credential';

export default function SignIn({ navigation, routes }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    const voximplant = Voximplant.getInstance();

    React.useEffect(() => {
        const Connect = async () => {
            let clientState = await voximplant.getClientState();
            if (clientState === Voximplant.ClientState.DISCONNECTED) {
                await voximplant.connect();
            }
            else if (clientState === Voximplant.ClientState.LOGGED_IN) {
                navigation.replace('Contact');
                // navigation.reset({
                //     index: 0,
                //     routes: [
                //         { name: 'Contact' },
                //     ]
                // })
            }
        }
        Connect();
    }, [])

    const SignInUser = async () => {
        try {
            const fqUsername = `${username}@${APP_NAME}.${ACCT_NAME}.voximplant.com`;
            await voximplant.login(fqUsername, password);
            navigation.replace('Contact');
        } catch (error) {
            console.log(error);
            Alert.alert("Status", `${error.name} ${error.code}`)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Sign In</Text>
                <TextInput onChangeText={(value) => setUsername(value)} style={styles.input} placeholder='Username' />
                <TextInput onChangeText={(value) => setPassword(value)} style={styles.input} placeholder='Password' secureTextEntry={true} />
                <Pressable onPress={SignInUser} style={styles.button}>
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
        paddingHorizontal: 15,
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