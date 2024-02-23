import { View, Text, FlatList, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import contactList from '../constants/contact.json';
import { COLORS, FONTS } from '../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Contact() {
    const [contact, setContact] = React.useState('');
    const [search, setSeach] = React.useState('');


    React.useEffect(() => {
        setContact(contactList.filter(item => item.name.includes(search)));
    }, [search])

    function renderSearch() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, gap: 5, borderRadius: 10, backgroundColor: COLORS.gray, marginHorizontal: 10 }}>
                <MaterialIcons name="search" size={24} color={COLORS.black} />
                <TextInput style={{ flex: 1 }} onChangeText={(value) => setSeach(value)} placeholder='Search' />
            </View>
        )
    }

    function renderContact() {
        return (
            <FlatList
                data={contact}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item}) => (
                    <TouchableOpacity
                        onPress={() => console.log(item.id)}                        
                        style={{
                            marginHorizontal: 15,
                            paddingVertical: 15,
                            borderBottomWidth: 1,
                            borderColor: COLORS.lightgray
                        }}>
                        <Text style={{ fontSize: FONTS.SIZES.medium, color: COLORS.black }}>{item.name}</Text>
                    </TouchableOpacity>
                )} />
        )
    }

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            {renderSearch()}
            {renderContact()}
        </View>
    )
}