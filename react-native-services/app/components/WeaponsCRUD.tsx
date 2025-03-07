import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useWeaponsModelDelete from "../hooks/useWeaponsModelDelete";

export const Delete:FC<{model: string}> = ({model}) => {

    const _baseURL = 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems';
    const {isDelete, loading, deleteWeaponsModel} = useWeaponsModelDelete(_baseURL)

    return(
        <View>
            <Button title="DeleteModel" onPress={()=>{deleteWeaponsModel(model)}}/>
            {isDelete && <Text>deleted: {model}</Text>}
            {loading && <Text>...processing</Text>}
        </View>
    );
};