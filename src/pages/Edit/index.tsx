import aviatorImg from '../../assets/Images/aviator.jpg';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserContext } from '../../providers/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryContext } from '../../providers/CountriesContext';
import { IResponse } from '../../providers/CountriesContext';

export interface IEditFormData {
  email: string;
  name: string;
  country: string;
}

const Edit = () => {
  const navigate = useNavigate();
  const { country } = useContext(CountryContext);
  const { user, editUserData } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  const [loading, setLoading] = useState(false);
  const schemaEdit = z.object({
    email: z.string().nonempty('Email é obrigatório').email(),
    country: z.string().nonempty('País é obrigatório'),
    name: z.string().nonempty('Nome é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditFormData>({
    resolver: zodResolver(schemaEdit),
  });
  const submit: SubmitHandler<IEditFormData> = (formData) => {
    console.log(formData);
    editUserData(formData, setLoading);
  };

  return (
    <div className="grid h-screen w-full">
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(submit)}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4x1 text-white font-bold text-center">
            Edite Seu Usuário
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Nome</label>
            <input
              defaultValue={user?.name}
              {...register('name')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
            {errors.name ? <p>{errors.name?.message}</p> : null}
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              defaultValue={user?.email}
              {...register('email')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
            {errors.email ? <p>{errors.email?.message}</p> : null}
          </div>
          {/* 
          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              placeholder="Nova senha"
              {...register('password')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirme sua senha</label>
            <input
              placeholder="Confirme sua senha"
              {...register('confirm')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div> */}

          <div className="flex flex-col text-gray-400 py-2">
            <label>Selecione novo país</label>

            <select
              {...register('country')}
              defaultValue={user?.country}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            >
              {country.map((item: IResponse, index: number) => (
                <option key={index} value={item.name?.common}>
                  {item.name?.common}{' '}
                </option>
              ))}
            </select>
            {errors.country ? <p>{errors.country?.message}</p> : null}
          </div>

          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-400 text-white font-semibold rounded-lg"
          >
            Editar info
          </button>
          <button
            onClick={() => {
              navigate('/dashboard');
            }}
            className="w-full my-5 py-2 bg-teal-800 text-white font-semibold rounded-lg"
          >
            Voltar a Dashboard e Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
