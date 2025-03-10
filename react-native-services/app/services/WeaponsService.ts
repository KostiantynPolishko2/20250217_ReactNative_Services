import { useState, useEffect } from "react";
import { IWeaponsServices, WeaponsItem, WeaponsModel } from "./IWeaponsService";
import useGetWeaponsModels from "../hooks/useGetWeaponsModels";
import useAxiosAdmin from "../hooks/useAxiosAdmin";


export class ApiWeaponsService implements IWeaponsServices {
    private _baseURL: string;

    constructor(_baseURL: string){
        this._baseURL = _baseURL;
    };

    async getWeaponsItems(): Promise<WeaponsItem[] | undefined> {
        const {response, error, loading, treatData} = useAxiosAdmin(this._baseURL);

        // get weapons by model
        await treatData({
            route: `client-models`,
            method: 'GET',
            data: {},
            jwt: null
        });
        // console.log('get weapons items', response || error);

        let weaponsItems:WeaponsItem[] | undefined = Array.isArray(response) 
            ? (response as WeaponsItem[]).filter(item=>item.isVisible)
            : undefined;

        return weaponsItems;
    }


    async getWeaponsModel(model: string): Promise<WeaponsModel | undefined> {
        const {response, error, loading, treatData} = useAxiosAdmin(this._baseURL);
    
        // get weapons by model
        await treatData({
            route: `model/${model}`,
            method: 'GET',
            data: {},
            jwt: null
        });
        // console.log('get weapons model', response || error);
        
        let weaponsModel: WeaponsModel | undefined = response as WeaponsModel;

        return weaponsModel
    };
}