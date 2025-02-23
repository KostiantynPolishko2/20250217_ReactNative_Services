import React, { FC } from "react";
import { Text, SectionList} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TestSectionStyles as styles } from "./test-styles";
import { SimpleContacts } from "./test-data";
import ContactRow from "@/app/components/contacts/contact-row";

interface ISimpleSectionList {
    isHeader: boolean
}

const SimpleSectionList:FC<ISimpleSectionList>  = ({isHeader}) => {

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={SimpleContacts}
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

export default SimpleSectionList;