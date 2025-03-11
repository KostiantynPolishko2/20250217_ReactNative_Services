import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import useWeaponsModel from "../hooks/useWeaponsModel";
import { PositionStyle } from "../styles/styles";
import alt_img from '@/assets/images/ua-army-force.png';

interface WeaponsItemsProps {
    weaponsService: IWeaponsServices;
    model: string,
}

const WeaponsModel: FC<WeaponsItemsProps> = ({weaponsService, model}) => {

    const {weaponsModel, error, loading} = useWeaponsModel(weaponsService, model);

    if (loading) return <Text>...loaded weapons model</Text>;

    if (error){
        throw new Error(error);
    }

    // console.log('weapons model', weaponsModel);

    return (
            <View style={styles.body}>
                <Image style={styles.body_img} source={{ uri: encodeURI(weaponsModel?.image_path || alt_img) }} alt='weapons model'/>
                <View>
                    <Text>weapons</Text>
                    <Text>model: {weaponsModel?.model}</Text>
                    <Text>name: {weaponsModel?.name}</Text>
                    <Text>price: {weaponsModel?.price}</Text>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'wheat',
        padding: 5,
        ...PositionStyle.row,
        justifyContent: 'space-around',
    },
    body_img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    }
});

export default WeaponsModel;