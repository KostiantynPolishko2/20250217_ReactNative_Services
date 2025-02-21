import React, { FC, useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Contacts from "expo-contacts";
import { LoadStyles } from "./contacts-styles";

interface IContactsLoad {
    _isLoaded: boolean,
    _setIsLoaded: (flag: boolean)=>void,
}

const ContactsLoad:FC<IContactsLoad> = ({_isLoaded, _setIsLoaded}) => {

    const [permission, setPermission] = useState<boolean>(false);

    let loadStyle = _isLoaded? LoadStyles.loaded: LoadStyles.unloaded;

    useEffect(()=>{
        ( async () => { 
            const {granted} = await Contacts.requestPermissionsAsync();
            setPermission(granted);
        }) ();
    }, [permission]);

    return(
        <TouchableOpacity onPress={()=>{_setIsLoaded(!_isLoaded)}} style={[LoadStyles.body, loadStyle]} disabled={!permission}>
            <MaterialCommunityIcons name="card-account-phone" style={LoadStyles.btn}/>
            <Text style={LoadStyles.bthTxt}>CONTACTS{permission || ' LOCKED!'}</Text>
        </TouchableOpacity>
    );
};

export default ContactsLoad;