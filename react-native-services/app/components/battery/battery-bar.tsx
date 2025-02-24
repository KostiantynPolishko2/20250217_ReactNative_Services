import React, { FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Battery from 'expo-battery';
import { BatteryBarWrapper, CenterPosition, RectangleBox } from "./battery.styled";

interface IBatteryBar {
    handleIsStats: ()=>void,
}

const BatteryBar: FC<IBatteryBar> = ({handleIsStats}) => {

    const [isAvailable, setIsAvailable] = useState<boolean>(false);

    useEffect(()=>{
        (async () => {
            setIsAvailable(await Battery.isAvailableAsync());
            // console.log('is avalable', isAvailable);
        })
        ();
    }, []);

    return (
        <TouchableOpacity onPress={handleIsStats} disabled={!isAvailable}>
            <CenterPosition>
                <RectangleBox/>
                <BatteryBarWrapper>
                    <Text>battery</Text>
                </BatteryBarWrapper>
            </CenterPosition>
        </TouchableOpacity>
    );
};

export default BatteryBar