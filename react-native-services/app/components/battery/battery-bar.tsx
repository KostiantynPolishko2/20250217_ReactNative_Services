import React, { FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Battery from 'expo-battery';
import { BatteryBarWrapper, CenterPosition, RectangleBox } from "./battery.styled";
import { ChargeLevelStyle } from "./battery.styled";

interface IBatteryBar {
    handleIsStats: ()=>void,
}

const BatteryBar: FC<IBatteryBar> = ({handleIsStats}) => {

    const [isAvailable, setIsAvailable] = useState<boolean>(false);

    const batteryLevel:number = Math.round(Battery.useBatteryLevel() * 100);

    useEffect(()=>{
        (async () => {
            setIsAvailable(await Battery.isAvailableAsync());
        })
        ();
    }, []);


    return (
        <TouchableOpacity onPress={handleIsStats} disabled={!isAvailable}>
            <CenterPosition>
                <RectangleBox/>
                <BatteryBarWrapper>
                    <View style={[ChargeLevelStyle.body, {width: isAvailable? batteryLevel : 0}]}/>
                    {isAvailable? <Text>{batteryLevel}%</Text> : <Text style={{color:'#6e6a6a'}}>locked</Text>}
                </BatteryBarWrapper>
            </CenterPosition>
        </TouchableOpacity>
    );
};

export default BatteryBar