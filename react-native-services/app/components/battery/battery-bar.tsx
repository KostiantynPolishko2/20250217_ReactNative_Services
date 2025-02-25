import React, { FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Vibration } from "react-native";
import * as Battery from 'expo-battery';
import { BatteryBarWrapper, CenterPosition, RectangleBox } from "./battery.styled";
import { ChargeLevelStyle } from "./battery.styled";
import { VIBRO_PATTERN } from "@/app/constants/constants";

interface IBatteryBar {
    handleIsStats: ()=>void,
}

const BatteryBar: FC<IBatteryBar> = ({handleIsStats}) => {

    const [isAvailable, setIsAvailable] = useState<boolean>(false);
    const [_batteryLevel, setBatteryLevel] = useState<number>(0);
    const [isVibro, setIsVibro] = useState<boolean>(false);

    const level:number = Math.round(Battery.useBatteryLevel() * 100);

    useEffect(()=>{
        (async () => {
            setIsAvailable(await Battery.isAvailableAsync());
            setBatteryLevel(level);
            // console.log('level', _batteryLevel);
        })
        ();
    }, []);

    useEffect(() => {
        const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
            console.log(`Battery Level: ${batteryLevel * 100}%`);
            // setBatteryLevel(Math.round(batteryLevel) * 100);
        });

        return () => subscription.remove(); // Clean up listener when unmounted
    }, []);

    useEffect(()=>{
        if(isVibro){
            Vibration.vibrate(VIBRO_PATTERN);
        }
    }, [isVibro]);

    const handleBatteryBar = async() => {
        setBatteryLevel(Math.round(await Battery.getBatteryLevelAsync()*100));
        setIsVibro(!isVibro);
        handleIsStats();
    }

    return (
        <TouchableOpacity onPress={handleBatteryBar} disabled={!isAvailable}>
            <CenterPosition>
                <RectangleBox/>
                <BatteryBarWrapper>
                    <View style={[ChargeLevelStyle.body, {width: isAvailable? _batteryLevel : 0}]}/>
                    {isAvailable? <Text>{_batteryLevel}%</Text> : <Text style={{color:'#6e6a6a'}}>locked</Text>}
                </BatteryBarWrapper>
            </CenterPosition>
        </TouchableOpacity>
    );
};

export default BatteryBar