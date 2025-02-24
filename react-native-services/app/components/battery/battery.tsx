import React, { FC, useState } from "react";
import BatteryBar from "./battery-bar";
import BatteryStats from "./battery-stats";

const Battery: FC = () => {

    const [isStats, setIsStats] = useState<boolean>(false);

    const handleIsStats = () => setIsStats(!isStats);

    return(
        <>
            {isStats && <BatteryStats level={0.56} lowPowerMode={false} state={1}/>}
            <BatteryBar handleIsStats={handleIsStats}/>
        </>
    );
}

export default Battery;