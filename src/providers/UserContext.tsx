import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeApi } from "../services/API's/index";
import { IRegisterFormData } from '../pages/Register/index';
import * as z from 'zod';
import { CountryContext } from './CountriesContext';

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  user: IUser | null;
  usersLogin: (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: IRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  editUserData: (
    formData: IEditUser,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  country: string;
  age: number | string;
}

interface IUserLoginRegisterResponse {
  accessToken: string;
  user: IUser;
}
export interface ILoginFormData {
  email: string;
  password: string;
}

interface IEditUser {
  email: string;
  name: string;
  country: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [counter, setCounter] = useState(0); //Somente um teste para ver se funcionava!

  const { searchCountry } = useContext(CountryContext);

  const [user, setUser] = useState<IUser | null>(null);

  const [editModal, setEditModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    const userAutoLogin = async () => {
      const token = localStorage.getItem('@TOKEN');
      const userId = localStorage.getItem('@USERID');
      if (userId && token) {
        try {
          //commit

          const { data } = await fakeApi.get<IUser>(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(data);
          setUser(data);
          searchCountry(data.country);
          navigate('/dashboard');
        } catch (error) {
          console.log(error);
          localStorage.removeItem('@TOKEN');
          localStorage.removeItem('@USERID');
        }
      }
    };
    userAutoLogin();
  }, []);

  const editUserData = async (
    formData: IEditUser,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const condiction =
      formData.country !== user?.country ||
      formData.email !== user?.email ||
      formData.name !== user?.name;
    try {
      setLoading(true);
      const token = localStorage.getItem('@TOKEN');
      const userId = localStorage.getItem('@USERID');
      if (userId && token && condiction) {
        try {
          //commit

          const { data } = await fakeApi.patch<IUser>(
            `/users/${userId}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log('teste');
          console.log(data);
          setUser(data);
          searchCountry(formData.country);

          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        } catch (error) {
          console.log(error);
          localStorage.removeItem('@TOKEN');
          localStorage.removeItem('@USERID');
        }
      } else {
        console.log('Não foi feita nenhuma alteração');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: IRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await fakeApi.post<IUserLoginRegisterResponse>(
        '/users',
        formData
      );
      localStorage.setItem('@TOKEN', data.accessToken);

      //setUser(data.user);
      console.log(data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const usersLogin = async (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      console.log(formData);
      const { data } = await fakeApi.post<IUserLoginRegisterResponse>(
        '/login',
        formData
      );
      setUser(data.user);
      searchCountry(data.user.country);

      localStorage.setItem('@TOKEN', data.accessToken);
      localStorage.setItem('@USERID', String(data.user.id));
      console.log(data);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        counter,
        setCounter,
        user,
        usersLogin,
        userRegister,
        setUser,
        editModal,
        setEditModal,
        editUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
////////////////////////////////////////////
