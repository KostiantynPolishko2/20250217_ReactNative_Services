import React, { FC, useState, useEffect, useMemo } from "react";
import { Text, SectionList} from "react-native";
import * as Contacts from "expo-contacts";
import { SectionListStyles as styles } from "./sectionlist-styles";
import { SectionContacts } from "./sectionlist-data";
import ContactRow from "@/app/components/contacts/sectionlist/contact-row";
import _ from 'lodash';

interface ISectionListContacts {
    isHeader: boolean,
    input: string | undefined,
}

const SectionListContacts:FC<ISectionListContacts>  = (props) => {

    const [data, setData] = useState<Contacts.Contact[] | undefined>(undefined);

    useEffect(()=>{
        (async () => {
            const { data } = await Contacts.getContactsAsync();
            setData(data);
        })
        ();
    }, []);

    const contactsList: SectionContacts[] | undefined = useMemo(()=>{
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

    const contactsSearch: SectionContacts[] | undefined = useMemo(()=>{
        if (!contactsList || !props.input) return contactsList;

        return _.chain(contactsList)
            .map((section) => ({
            title: section.title,
            data: _.filter(section.data, (contact) =>
                contact.firstName.toLowerCase().startsWith(props.input? props.input.toLocaleLowerCase() : '') ||
                contact.secondName.toLowerCase().startsWith(props.input? props.input.toLocaleLowerCase() : '')
            ),
            }))
            .filter((section) => section.data.length > 0) // Remove empty sections
            .value();

    }, [props.input]);

    const contactsSection: SectionContacts[] | undefined = props.input? contactsSearch : contactsList;

    return(
        <SectionList
            stickySectionHeadersEnabled={true}
            sections={contactsSection || []}
            keyExtractor={(item, index) => item.phoneNumber + index}
            renderSectionHeader={({section: {title}}) => (
                props.isHeader? <Text style={styles.header}>{title}</Text> : <></>
            )}
            renderItem={({item, index}) => (
                <ContactRow key={index} contact={item}/>
            )}
        />
    );
}

export default SectionListContacts;