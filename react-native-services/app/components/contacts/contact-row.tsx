import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FeatherIcon from '@expo/vector-icons/Feather';
import { ContactsRowStyles as styles } from "./contacts-styles";
import { Contact } from "@/app/components/contacts/sectionlist/sectionlist-data";

interface IContactRow {
    contact: Contact,
}

const ContactRow: FC<IContactRow> = ({contact}) => {
    return(
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.card}>
              {contact.img ? (
                <Image
                  alt=""
                  resizeMode="cover"
                  source={{ uri: contact.img }}
                  style={styles.cardImg} />
              ) : (
                <View style={[styles.cardImg, styles.cardAvatar]}>
                  <Text style={styles.cardAvatarText}>{contact.firstName[0]}</Text>
                </View>
              )}
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{contact.firstName}&nbsp;{contact.secondName}</Text>
                <Text style={styles.cardPhone}>{contact.phoneNumber}</Text>
              </View>
              <View style={styles.cardAction}>
                <FeatherIcon
                  color="#9ca3af"
                  name="chevron-right"
                  size={22} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
  ) 
}

export default ContactRow;