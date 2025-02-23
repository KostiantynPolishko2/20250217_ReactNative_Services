import React, { FC, useState, useEffect, useMemo } from "react";
import { Text, SectionList} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Contacts from "expo-contacts";
import { SectionListStyles as styles } from "./sectionlist-styles";
import { SectionContacts } from "./sectionlist-data";
import ContactRow from "@/app/components/contacts/contact-row";
import _ from 'lodash';

interface ISectionListContacts {
    isHeader: boolean,
}

const SectionListContacts:FC<ISectionListContacts>  = ({isHeader}) => {

    const [data, setData] = useState<Contacts.Contact[] | undefined>(undefined);
    // const [contacts, setContactsTest] = useState<SectionContacts[] | undefined>(undefined);

    useEffect(()=>{
        (async () => {
            const { data } = await Contacts.getContactsAsync();
            setData(data);
        })
        ();
    }, []);

    const contacts:SectionContacts[] | undefined = useMemo(()=>{
        if(!data) return undefined;

        const transformeData: SectionContacts[] = _.chain(data)
            .map((contact) => ({
                firstName: contact.firstName || "",
                secondName: contact.lastName || "",
                phoneNumber: contact.phoneNumbers?.[0]?.number || "No number",
                img: contact.imageAvailable ? contact.image?.uri : undefined,
            }))
            .groupBy((contact) => contact.firstName.charAt(0).toUpperCase()) // Group by first letter of firstName
            .map((contacts, letter) => ({ title: letter, data: contacts }))
            .orderBy(["title"], ["asc"]) // Sort alphabetically
            .value();

        return transformeData;

    }, [data]);

    return(
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]} edges={['top']}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={contacts || []}
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