import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import ContactsLoad from "./contacts-load";
import ContactsList from "./contacts-list";

const PhoneContacts: FC = () => {
    
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <View style={{width: isLoaded? '100%' : 'auto'}}>
            <ContactsLoad _isLoaded={isLoaded} _setIsLoaded={setIsLoaded}/>
            {isLoaded && <ContactsList/>}
        </View>
    );
};

export default PhoneContacts;