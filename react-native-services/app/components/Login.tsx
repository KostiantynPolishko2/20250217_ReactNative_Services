import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAuth from "../hooks/useAxiosAuth";
import useTokenStorage from "../hooks/useTokenStorage";
import { LoginModel } from "../types/AuthServerTypes";

const Login: FC = () => {

    const _baseURL = process.env.EXPO_PUBLIC_ASPENT_AUTHSERVER_URL || '';
    const loginModel:LoginModel = {username: 'polxs_wp31', password: 'n20ri2J9!'}
    
    const {response, error, loading, treatData} = useAxiosAuth(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');

    // fetch token auth
    const auth = () => {
        treatData({
            route: 'login',
            credentials: loginModel,
        });
        // console.log('jwt', response);
    }

    const getJWT = async() => {
        console.log(await getValue());
    }

    useEffect(()=>{   
        (async()=>{
            if(response){
                await removeValue();
                await saveValue(response);
            }
        })
        ();
    }, [response]);

    return(
        <View>
            <Text>auth token</Text>
            <Button title="Login" onPress={auth}/>
            <Button title="GetJWT" onPress={getJWT}/>
            <Button title="DelJWT" onPress={removeValue}/>
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export default Login;