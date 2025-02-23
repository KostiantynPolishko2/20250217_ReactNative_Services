import { View, StyleSheet } from "react-native";
import { StylesApp } from "./styles";
import PhoneContacts from "./components/contacts/phone-contacts";
// import SectionListContacts from "./components/contacts/sectionlist/sectionlist-contacts";

export default function Index() {
  return (
    <View style={styles.body}>
      <PhoneContacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});