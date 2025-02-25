import React, { FC, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Vibration } from "react-native";
import * as Battery from 'expo-battery';
import { BatteryBarWrapper, CenterPosition, RectangleBox } from "./battery.styled";
import { ChargeLevelStyle } from "./battery.styled";

interface IBatteryBar {
    handleIsStats: ()=>void,
}

const BatteryBar: FC<IBatteryBar> = ({handleIsStats}) => {

    const ONE_SECONDS_IN_MS = 1000;
    const VIBRO_PATTERN = [
        1 * ONE_SECONDS_IN_MS,
        2 * ONE_SECONDS_IN_MS,
        1 * ONE_SECONDS_IN_MS,
    ]

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

    return (
        <TouchableOpacity onPress={()=>{handleIsStats(); setIsVibro(!isVibro);}} disabled={!isAvailable}>
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