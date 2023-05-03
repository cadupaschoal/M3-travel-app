import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RestContriesApi } from "../services/API's/index";

import * as z from 'zod';


interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    user: IUser | {};
}

interface IUser{
    id: string;
    name: string;
    email: string;
}
//Não sei quais infos o usuário vai ter, então coloquei só o nome e email. Mesma coisa para a resposta do register
interface IRegisterFormData{
    name: string;
    email: string;
    password: string;
    homeCountry: string;

}
interface IUserLoginRegisterResponse{
    accessToken: string;
    user: IUser
}
export interface ILoginFormData{
    email: string;
    password: string;
  }

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [counter, setCounter] = useState(0) //Somente um teste para ver se funcionava!


    const [user, setUser] = useState<IUser | {}>({});

    const navigate = useNavigate();
    
    /*useEffect(() => {
        console.log("Montou")
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID");
        
        const userAutoLogin = async () => {
            try{

                //A gente usa userID pra pegar logar o user?
                //Como acessamos a Fake-API?  No caso aqui coloquei a Countries que nada a ver
                //qual a inferencia dos dados do usuário?
                const {data} = await RestContriesApi.post<IUser>(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                navigate('/dashboard');

            }
            catch(error){
                console.log(error);
                localStorage.removeItem("@TOKEN");
                localStorage.removeItem("@USERID");
            }
        }

        if (token && userId) {
            userAutoLogin();
        }
    }, []);*/

    const userRegister = async (formData: IRegisterFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            setLoading(true);
            const {data}= await RestContriesApi.post<IUserLoginRegisterResponse>('/users', formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", data.user.id)

            setUser(data.user);
            console.log(data);
            navigate('/shop');
        }
        catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }

    }
    const usersLogin = async (formData: ILoginFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            setLoading(true);
            const {data}= await RestContriesApi.post<IUserLoginRegisterResponse>('/login', formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            navigate('/dashboard');
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    };


    return(
        <UserContext.Provider 
        value= {{
            counter,
            setCounter,
            user,
        }}> 
            {children}
        </UserContext.Provider>
    )
}