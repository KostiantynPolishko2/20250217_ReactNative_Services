import React, { FC } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import useDeleteWeaponsModel from "../hooks/useDeleteWeaponsModel";
import usePostWeaponsModel from "../hooks/usePostWeaponsModel";
import useGetWeaponsItems from "../hooks/useGetWeaponsItems";
import useGetWeaponsModel from "../hooks/useGetWeaponsCardDto";
import useGetWeaponsModels from "../hooks/useGetWeaponsCardsDto";
import { WeaponsDataDtoProps } from "../types/AdminServerTypes";
import { IconButton } from "../ui/Button";

export const GetModels: FC = () => {

    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {loading, weaponsCardsDto, get} = useGetWeaponsModels(_baseURL);

    return(
        <View style={styles.body}>
            <TouchableOpacity onPress={get}>
                <IconButton title="GetModels"/>
            </TouchableOpacity>
            {weaponsCardsDto && <Text>1. {weaponsCardsDto[0].model} - {weaponsCardsDto[0].price}</Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export const GetModelByName: FC<{model:string}> = ({model}) => {

    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {weaponsCardDto, loading, get} = useGetWeaponsModel(_baseURL);
    
    return (
        <View style={styles.body}>
            <TouchableOpacity onPress={()=>{get(model)}}>
                <IconButton title="GetModelByName"/>
            </TouchableOpacity>
            {weaponsCardDto && <Text>{weaponsCardDto.model} | {weaponsCardDto.name} | {weaponsCardDto.price} </Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export const GetItems: FC = () => {

    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {weaponsItems, loading, get} = useGetWeaponsItems(_baseURL);
    
    return (
        <View style={styles.body}>
            <Button title="GetItems" onPress={get}/>
            {weaponsItems && <Text>{weaponsItems[0].model} | {weaponsItems[0].name} | {weaponsItems[0].type} </Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export const Delete:FC<{model: string}> = ({model}) => {

    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {isRemove, loading, remove} = useDeleteWeaponsModel(_baseURL);

    return(
        <View style={styles.body}>
            <Button title="DeleteModel" onPress={()=>{remove(model)}}/>
            {isRemove && <Text>deleted: {model}</Text>}
            {loading && <Text>...processing</Text>}
        </View>
    );
};

export const Post:FC<{weaponsModel:WeaponsDataDtoProps}> = ({weaponsModel}) => {
    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {isPost, loading, post} = usePostWeaponsModel(_baseURL);

    return(
        <View style={styles.body}>
            <Button title="PostModel" onPress={()=>{post(weaponsModel)}}/>
            {isPost && <Text>posted: {weaponsModel.weaponsItem.Model}</Text>}
            {loading && <Text>...processing</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c6eb4f',
        margin: 5,
        padding: 5,
    }
});