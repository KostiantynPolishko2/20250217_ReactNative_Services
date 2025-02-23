import React, { FC } from "react";
import { View, Text, SectionList, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TestSectionStyles as styles } from "./test-styles";
import { SimpleData } from "./test-data";

const SimpleSectionList: FC  = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
            <SectionList
                sections={SimpleData}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({section: {name}}) => (
                    <Text style={styles.header}>{name}</Text>
                )}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
            />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default SimpleSectionList;