import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
import useTokenStorage from "../hooks/useTokenStorage";

type WeaponsImage = {
    name: string,
    path: string
}

type WeaponsItem = {
    Model: string,
    Name: string,
    Type: string,
    isVisible: boolean
}

type WeaponsProperty = {
    price: number,
    weight: number,
    Vendor: string,
    Description: string,
}

type WeaponsDataDto = {
    weaponsItem: WeaponsItem,
    weaponsProperty: WeaponsProperty,
    weaponsImage: WeaponsImage
}

const WeaponsPostNew: FC = () => {

    const _baseURL = 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems';

    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [postNew, setPostNew] = useState<boolean>(false);

    const newWeaponsModel: WeaponsDataDto = {
        weaponsImage: {
            name: 'img_name2',
            path: 'img_path2'
        },
        weaponsItem: {
            Model: 'item_model2',
            Name: 'item_name2',
            Type: 'item_type2',
            isVisible: false
        },
        weaponsProperty: {
            price: 2,
            weight: 2.2,
            Vendor: 'property_vendor2',
            Description: 'property_description2'
        }
    }

    // fetch weapons models
    const postWeaponsNewModel = async () => {
        treatData({
            route: `new-model/${newWeaponsModel.weaponsItem.Model}`,
            method: 'POST',
            data:  newWeaponsModel,
            jwt: await getValue()
        });
        console.log('post new model weapons', response || error);
    }

    useEffect(()=>{
        if(typeof response === 'number')
            setPostNew(response === 201);
    }, [response]);

    return (
        <View>
            <Text>auth: weapons post new model</Text>
            <Button title="PostNewModel" onPress={postWeaponsNewModel}/>
            {postNew && <Text>posted new: {newWeaponsModel.weaponsItem.Model}</Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export default WeaponsPostNew;