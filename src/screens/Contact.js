import { View, Text, FlatList, Pressable, TextInput, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native'
import React from 'react'
import contactList from '../constants/contact.json';
import { COLORS, FONTS } from '../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Contact({ navigation }) {
    const [contact, setContact] = React.useState('');
    const [search, setSeach] = React.useState('');
    

    React.useEffect(() => {
        setContact(contactList.filter(item => item.name.includes(search)));
    }, [search])

    function renderHeader() {
        return (
            <View style={{padding: 15}}>
                <Text style={{fontSize: FONTS.SIZES.large, color: COLORS.black}}>Contact List</Text>
            </View>
        )
    }

    function renderSearch() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, gap: 5, borderRadius: 10, backgroundColor: COLORS.gray, marginHorizontal: 10 }}>
                <MaterialIcons name="search" size={24} color={COLORS.black} />
                <TextInput style={{ flex: 1 }} value={search} onChangeText={(value) => setSeach(value)} placeholder='Search' />
                {search ? <MaterialIcons name="close" size={22} color={COLORS.black} onPress={() => setSeach('')} />
                    : null}
            </View>
        )
    }

    function renderContact() {
        return (
            <FlatList
                data={contact}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate('Calling', { item })}
                        style={{
                            marginHorizontal: 15,
                            paddingVertical: 15,
                            borderBottomWidth: 1,
                            borderColor: COLORS.lightgray
                        }}>
                        <Text style={{ fontSize: FONTS.SIZES.medium, color: COLORS.black }}>{item.name}</Text>
                    </Pressable>
                )} />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}
            {renderSearch()}
            {renderContact()}
        </View>
    )
}