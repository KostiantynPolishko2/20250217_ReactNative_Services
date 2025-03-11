import { useState, useEffect } from "react";
import { IWeaponsServices } from "../services/IWeaponsService";
import { WeaponsModel } from "../services/IWeaponsService";


const useWeaponsModel = (weaponsService: IWeaponsServices, model: string) => {

    const [weaponsModel, setWeaponsModel] = useState<WeaponsModel | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        weaponsService.getWeaponsModel(model).
        then((data)=>{
            setWeaponsModel(data || undefined);
            setLoading(true);
        }).
        catch(error => {
            console.log('weaponns items error->: ', error);
            setError(`${error}`);
        }).
        finally(()=>{setLoading(false);})

    }, [weaponsService]);

    return {weaponsModel, error, loading};
}

export default useWeaponsModel;