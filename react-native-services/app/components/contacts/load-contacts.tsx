import React, { FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Contacts from "expo-contacts";
import { LoadStyles } from "./contacts-styles";

const LoadContacts:FC = () => {

    const [permission, setPermission] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    let loadStyle = isLoaded? LoadStyles.loaded: LoadStyles.unloaded;

    useEffect(()=>{
        ( async () => { 
            const {granted} = await Contacts.requestPermissionsAsync();
            setPermission(granted);
        }) ();
    }, [permission]);

    return(
        <TouchableOpacity onPress={()=>{setIsLoaded(!isLoaded)}} style={[LoadStyles.body, loadStyle]} disabled={!permission}>
            <MaterialCommunityIcons name="card-account-phone" style={LoadStyles.btn}/>
            <Text style={LoadStyles.bthTxt}>CONTACTS{permission || ' LOCKED!'}</Text>
        </TouchableOpacity>
    );
};

export default LoadContacts;