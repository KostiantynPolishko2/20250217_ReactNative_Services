import { useState, useEffect } from "react";
import useAxiosAdmin from "./useAxiosAdmin";
import useTokenStorage from "./useTokenStorage";
import { WeaponsDataDtoProps } from "../types/AdminServerTypes";


const usePostWeaponsModel = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [isPost, setIsPost] = useState<boolean>(false);

    // post weapons models
    const post = async (newWeaponsDataDto: WeaponsDataDtoProps) => {
        treatData({
            route: `new-model/${newWeaponsDataDto.weaponsItem.Model}`,
            method: 'POST',
            data:  newWeaponsDataDto,
            jwt: await getValue()
        });
        // console.log('post model', response || error);
    }

    useEffect(()=>{
        if(typeof response === 'number')
            setIsPost(response === 201);
    }, [response]);

    return {isPost, loading, post}
}

export default usePostWeaponsModel;