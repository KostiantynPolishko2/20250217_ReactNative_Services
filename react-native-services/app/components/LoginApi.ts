import axios from "axios";
import { saveToken } from "../utils/token";

type TLoginData = {
    username: string,
    password: string
 }

export const fetchToken = async (loginModel : TLoginData):Promise<number> => {

    try{
        const token = (await axios.post("http://10.0.2.2:5185/api/Authenticate/login", loginModel)).data;
        saveToken(token);

        // console.log('jwt', token);

        return 200;
    }
    catch(error){
        console.log('jwt error', error);
        return 401;
    }
}