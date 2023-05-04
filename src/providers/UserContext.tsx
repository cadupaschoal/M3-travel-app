import React, { createContext, useState } from "react";

interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [counter, setCounter] = useState(0) //Somente um teste para ver se funcionava!
    return(
        <UserContext.Provider 
        value= {{
            counter,
            setCounter,
        }}>
            {children}
        </UserContext.Provider>
    )
}