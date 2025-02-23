import React, { FC } from "react";
import { View, Text, SectionList} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TestSectionStyles as styles } from "./test-styles";
import { SimpleContacts } from "./test-data";

const SimpleSectionList: FC  = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={SimpleContacts}
                    keyExtractor={(item, index) => item.phoneNumber + index}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.firstName}</Text>
                            <Text style={[styles.title, {marginLeft: 10}]}>{item.phoneNumber}</Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default SimpleSectionList;