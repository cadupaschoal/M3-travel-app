import React, { useContext, useState } from 'react';
import aviatorImg from '../../assets/Images/aviator.jpg';
import { ILoginFormData, UserContext } from '../../providers/UserContext';
import * as z from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { usersLogin } = useContext(UserContext);

  const schema = z.object({
    email: z.string().email().nonempty('O email é obrigatório'),
    password: z.string().min(1, 'A senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(schema),
  });
  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    console.log(formData);
    usersLogin(formData, setLoading);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={aviatorImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(submit)}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4x1 text-white font-bold text-center">
            Faça seu login
          </h2>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              disabled={loading}
              {...register('email')}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
            {errors.email ? <p>{errors.email?.message}</p> : null}
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              disabled={loading}
              {...register('password')}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
            {errors.password ? <p>{errors.password?.message}</p> : null}
          </div>
          <button
            disabled={loading}
            className="w-full my-5 py-2 bg-teal-500 text-white font-semibold rounded-lg"
          >
            {loading ? 'Entrando...' : 'Fazer Login'}
          </button>
          <p className="text-4x1 text-white font-bold text-center">ou</p>
          <button
            onClick={() => {
              navigate('/register');
            }}
            className="w-full my-5 py-2 bg-red-500 text-white font-semibold rounded-lg"
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
