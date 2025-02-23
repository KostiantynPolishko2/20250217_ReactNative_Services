import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ContactsLoad from "./contacts-load";
import SectionListContacts from "./sectionlist/sectionlist-contacts";

const PhoneContacts: FC = () => {
    
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <View>
            <ContactsLoad _isLoaded={isLoaded} _setIsLoaded={setIsLoaded}/>
            {isLoaded && <SectionListContacts isHeader={false}/>}
        </View>
    );
};

export default PhoneContacts;