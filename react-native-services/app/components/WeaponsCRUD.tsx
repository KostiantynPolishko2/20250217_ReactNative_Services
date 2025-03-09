import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useDeleteWeaponsModel from "../hooks/useDeleteWeaponsModel";
import usePostWeaponsModel from "../hooks/usePostWeaponsModel";
import { WeaponsDataDto } from "../types/AdminServerTypes";

export const Delete:FC<{model: string}> = ({model}) => {

    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {isRemove, loading, remove} = useDeleteWeaponsModel(_baseURL);

    return(
        <View>
            <Button title="DeleteModel" onPress={()=>{remove(model)}}/>
            {isRemove && <Text>deleted: {model}</Text>}
            {loading && <Text>...processing</Text>}
        </View>
    );
};

export const Post:FC<{weaponsModel:WeaponsDataDto}> = ({weaponsModel}) => {
    const _baseURL = process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '';
    const {isPost, loading, post} = usePostWeaponsModel(_baseURL);

    return(
        <View>
            <Button title="PostModel" onPress={()=>{post(weaponsModel)}}/>
            {isPost && <Text>posted: {weaponsModel.weaponsItem.Model}</Text>}
            {loading && <Text>...processing</Text>}
        </View>
    );
}