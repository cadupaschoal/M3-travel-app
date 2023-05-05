import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../services/API's/index";
import { IRegisterFormData } from "../pages/Register/index";
import * as z from 'zod';


interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    user: {} | IUser;
    usersLogin: (formData: ILoginFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    userRegister: (formData: IRegisterFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
}

interface IUser{
    id: number;
    name: string;
    email: string;
    country: string;
    age: number | string;
}

interface IUserLoginRegisterResponse{
    accessToken: string;
    user: IUser;
}
export interface ILoginFormData{
    email: string;
    password: string;
  }

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [counter, setCounter] = useState(0) //Somente um teste para ver se funcionava!


    const [user, setUser] = useState<IUser | {id: number}>({
        id: 0
    });

    const navigate = useNavigate();
    
    useEffect(() => {
        console.log(user);
    }, [user]);

    useEffect(() => {
        console.log("Montou")
        const token = localStorage.getItem("@TOKEN");
        
        const userAutoLogin = async () => {
            try{//commit
                console.log(user)
                const token = localStorage.getItem("@TOKEN");
                const userId = localStorage.getItem("@USERID");

                const {data} = await fakeApi.post<IUserLoginRegisterResponse>(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data.user);
                navigate('/dashboard');

            }
            catch(error){
                console.log(error);
                localStorage.removeItem("@TOKEN");
                localStorage.removeItem("@USERID");
                
            }
        }
        if (token && user.id != 0) {
            userAutoLogin();
        }
    }, []);

    const userRegister = async (formData: IRegisterFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>> ) => {
        try {
            setLoading(true);
            const {data}= await fakeApi.post<IUserLoginRegisterResponse>('/users', formData);
            localStorage.setItem("@TOKEN", data.accessToken);

            //setUser(data.user);
            console.log(data);
            navigate('/dashboard');
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
            console.log(formData)
            const {data}= await fakeApi.post<IUserLoginRegisterResponse>('/login', formData);
            setUser(data.user);
            
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", String(data.user.id));
            console.log(data);
            
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
            usersLogin,
            userRegister,
        }}> 
            {children}
        </UserContext.Provider>
    )
}
////////////////////////////////////////////