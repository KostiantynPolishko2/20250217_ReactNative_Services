import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StylesApp } from '@/app/styles';
import profileImage from '@/assets/images/profile.png';

const MediaService: FC = () => {
    return(
        <View style={styles.body}>
            <Text style={styles.titeTxt}>MEDIA SERVICE</Text>
            <Image source={profileImage} alt='image' style={styles.image}/>
            <View style={styles.bodyBtn}>
                <MaterialCommunityIcons name='camera' style={[styles.btn, {color: '#40abf3'}]}/>
                <MaterialCommunityIcons name='view-gallery' style={[styles.btn, {color: '#3ca12e'}]}/>
                <MaterialCommunityIcons name='share' style={[styles.btn, {color: '#f38240'}]}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        flex: 0,
        borderRadius: 5,
        borderColor: 'whitesmoke',
        borderWidth: 1,
        backgroundColor: '#a0bbe7',
    },
    bodyBtn: {
        ...StylesApp.flex_row,
        padding: 10,
    },
    btn: {
        margin: 5,
        padding: 5,
        backgroundColor: '#574d46',
        fontSize: 40,
        borderRadius: 5,
        elevation: 10,
    },
    titeTxt: {
        backgroundColor: '#726c66',
        color: 'whitesmoke',
        padding: 5,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    image: {
        width: 200,
        height: 200,
        // backgroundColor: 'grey',
    }
})

export default MediaService;