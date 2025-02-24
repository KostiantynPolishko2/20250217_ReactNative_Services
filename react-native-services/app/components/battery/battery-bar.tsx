import React, { FC } from "react";
import { View, Text } from "react-native";
import { BatteryBarWrapper, CenterPosition, RectangleBox } from "./battery.styled";

const BatteryBar: FC = () => {
    return (
        <CenterPosition>
            <RectangleBox/>
            <BatteryBarWrapper>
                <Text>battery</Text>
            </BatteryBarWrapper>
        </CenterPosition>
    );
};

export default BatteryBar