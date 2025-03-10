import axios from "axios";
import { useState, useEffect } from "react";
import { IWeaponsServices } from "../services/IWeaponsService";
import { WeaponsItem } from "../services/IWeaponsService";


const useWeaponsItems = (weaponsService: IWeaponsServices) => {

    const [weaponsItems, setWeaponsItems] = useState<WeaponsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

        useEffect(()=>{
        weaponsService.getWeaponsItems().
        then((data)=>{
            setWeaponsItems(data || []);
            setLoading(true);
        }).
        catch(error => console.log('weaponns items error->: ', error)).
        finally(()=>{setLoading(false);})

    }, [weaponsService]);

    return {loading, weaponsItems};
}

export default useWeaponsItems;