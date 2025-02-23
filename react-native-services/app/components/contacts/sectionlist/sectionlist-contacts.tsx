import React, { FC, useState, useEffect } from "react";
import { Text, SectionList} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Contacts from "expo-contacts";
import { SectionListStyles as styles } from "./sectionlist-styles";
import { SimpleContacts, SectionContacts } from "./sectionlist-data";
import ContactRow from "@/app/components/contacts/contact-row";

interface ISectionListContacts {
    isHeader: boolean,
}

const SectionListContacts:FC<ISectionListContacts>  = ({isHeader}) => {

    // const [contacts, setContacts] = useState<SectionContacts | undefined>(undefined);
    const [contacts, setContacts] = useState<SectionContacts[] | undefined>(undefined);

    useEffect(()=>{
        (async () => {
            const { data } = await Contacts.getContactsAsync({fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails, Contacts.Fields.Image]});
            setContacts(SimpleContacts);
            // console.log('contacts', contacts && contacts[0]);
        })
        ();
    }, []);

    return(
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]} edges={['top']}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={contacts? contacts : []}
                    keyExtractor={(item, index) => item.phoneNumber + index}
                    renderSectionHeader={({section: {title}}) => (
                        isHeader? <Text style={styles.header}>{title}</Text> : <></>
                    )}
                    renderItem={({item, index}) => (
                        <ContactRow key={index} contact={item}/>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default SectionListContacts;