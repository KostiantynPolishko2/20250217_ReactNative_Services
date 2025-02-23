import React, { FC, useState, useEffect } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ContactsLoad from "./contacts-load";
import { SectionListStyles as styles } from "./sectionlist/sectionlist-styles";
import SectionListContacts from "./sectionlist/sectionlist-contacts";
import SearchBar from "./sectionlist/search-bar";

const PhoneContacts: FC = () => {
    
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isHeader, setIsheader] = useState<boolean>(true);
    const [input, setInput] = useState<string | undefined>(undefined);

    useEffect(()=>{
        console.log('input', input);
    }, [input]);

    return (
        <View>
            <ContactsLoad _isLoaded={isLoaded} _setIsLoaded={setIsLoaded}/>
            <SafeAreaProvider>
                <SafeAreaView style={[styles.container]} edges={['top']}>
                    {isLoaded && <SearchBar _setIsHeader={setIsheader} _setInput={setInput}/>}
                    {isLoaded && <SectionListContacts isHeader={isHeader} input={input}/>}
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
};

export default PhoneContacts;