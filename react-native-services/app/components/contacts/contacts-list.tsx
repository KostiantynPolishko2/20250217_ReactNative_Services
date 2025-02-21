import React, { FC } from "react";
import { View, Text } from "react-native";
import { ListStyles } from "./contacts-styles";

const ContactsList: FC = () => {
    return(
        <View style={ListStyles.body}>
            <Text>1 contact list</Text>
            <Text>2 contact list</Text>
            <Text>3 contact list</Text>
            <Text>4 contact list</Text>
        </View>
    );
}

export default ContactsList;