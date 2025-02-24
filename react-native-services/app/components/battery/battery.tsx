import React, { FC, useState, useEffect } from "react";
import BatteryBar from "./battery-bar";
import BatteryStats from "./battery-stats";
import { getPowerStateAsync } from "expo-battery";
import { IStats } from "./battery-stats";


const Battery: FC = () => {

    const [isStats, setIsStats] = useState<boolean>(false);
    const [batteryState, setBatteryState] = useState<IStats>({level: 0.0, lowPowerMode: false, state: 0});

    const handleIsStats = async () => setIsStats(!isStats);

    useEffect(()=>{
        (async () => {
            if(isStats){
                let state = await getPowerStateAsync();
                setBatteryState({level: Math.round(state.batteryLevel*100), lowPowerMode: state.lowPowerMode, state: state.batteryState});
            }
            else {
                setBatteryState({level: 0.0, lowPowerMode: false, state: 0});
            }
        })
        ();
    }, [isStats]);


    return(
        <>
            {isStats && <BatteryStats batteryState={batteryState}/>}
            <BatteryBar handleIsStats={handleIsStats}/>
        </>
    );
}

export default Battery;