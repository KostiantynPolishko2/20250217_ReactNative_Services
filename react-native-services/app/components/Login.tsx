import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { saveToken, getToken } from "../utils/token";
import { fetchToken } from "./LoginApi";

type TLoginData = {
    username: string,
    password: string,
}

const Login: FC = () => {

    const _baseURL = 'http://10.0.2.2:5185/api/Authenticate';
    const {response, error, loading, treatData} = useAxiosAuth(_baseURL);
    const loginData:TLoginData = {username: 'polxs_wp31', password: 'n20ri2J9!'}

    // fetch token auth
    const getAuth = () => {
        treatData({
            route: 'login',
            credentials: loginData,
        });
        console.log('jwt', response);
    }

    // useEffect(()=>{
        
    //     (async()=>{
    //         if(response){
    //             setIsSaveToken(await saveToken(response));
    //         }
    //     })
    //     ();
    // }, [response]);

    return(
        <View>
            <Text>auth token</Text>
            <Button title="Login" onPress={getAuth}/>
            {/* <Button title="JWT" onPress={getToken}/> */}
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export default Login;