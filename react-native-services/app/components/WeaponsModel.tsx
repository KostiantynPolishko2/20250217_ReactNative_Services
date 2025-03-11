import React, { FC, useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import { styles } from "../styles/weapons-model";
import { weaponsModelDefault } from "../constants/Weapons";
import useGetWeaponsCardDto from "../hooks/useGetWeaponsCardDto";
import { WeaponsModelProps } from "../services/IWeaponsService";

interface WeaponsItemsProps {
    weaponsService: IWeaponsServices;
    model: string,
}

const WeaponsModel: FC<WeaponsItemsProps> = ({weaponsService, model}) => {

    const {error, loading, weaponsCardDto, get} = useGetWeaponsCardDto(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '');
    const [weaponsModel, setWeaponsModel] = useState<WeaponsModelProps>(weaponsModelDefault);
    
    useEffect(()=>{
        (async ()=>{ await get(model)})();
    }, [model]);

    useEffect(()=>{
        if(weaponsCardDto)
            setWeaponsModel(weaponsService.getWeaponsModel(weaponsCardDto));
    }, [weaponsCardDto]);

    if (loading) return <Text>...loaded weapons model</Text>;

    if (error){
        throw new Error(error);
    }

    return (
            <View style={styles.body}>
                <Image style={styles.body_img} source={{ uri: weaponsModel.image_path}} alt='weapons model'/>
                <View>
                    <Text>weapons</Text>
                    <Text>model: {weaponsModel.model}</Text>
                    <Text>name: {weaponsModel.name}</Text>
                    <Text>price: {weaponsModel.price}</Text>
                </View>
            </View>
    );
};

export default WeaponsModel;