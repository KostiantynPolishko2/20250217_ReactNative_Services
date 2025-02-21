import React, { FC, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { ListStyles } from "./contacts-styles";
import * as Contacts from "expo-contacts";

const ContactsList: FC = () => {

    const [contacts, setContacts] = useState<Contacts.Contact[] | undefined>(undefined)

    useEffect(()=>{
        (async () => {
            const { data } = await Contacts.getContactsAsync({fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails, Contacts.Fields.Image]});
            setContacts(data);
            // console.log('contacts', contacts && contacts[0]);
        })
        ();
    }, []);

    return(
        <View style={ListStyles.body}>
            <ScrollView>
                {contacts && contacts.map((contact, index)=>(<Text key={contact.id}>{contact.firstName}</Text>))}
            </ScrollView>
        </View>
    );
}

export default ContactsList;