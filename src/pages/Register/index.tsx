import aviatorImg from '../../assets/Images/aviator.jpg';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserContext } from '../../providers/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryContext } from '../../providers/CountriesContext';
import { ToastContainer, toast } from "react-toastify"

export interface IRegisterFormData {
  email: string;
  password: string;
  name: string;
  confirm: string;
  country: string;
}

const Register = () => {
  const navigate = useNavigate();

  const { userRegister } = useContext(UserContext);
  const { country } = useContext(CountryContext);
  console.log(country);

  const [loading, setLoading] = useState(false);
  const schemaRegister = z
    .object({
      email: z.string().nonempty('Email é obrigatório').email(),
      country: z.string().nonempty('País é obrigatório'),
      password: z
        .string()
        .min(7, 'A senha deve conter ao menos 7 caracteres')
        .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
        .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
        .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
        .regex(
          new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
          'One special character'
        ),
      name: z.string().nonempty('Nome é obrigatório'),
      confirm: z.string().min(1, 'A confirmação de senha é obrigatória'),
    })
    .refine(({ password, confirm }) => password === confirm, {
      message: 'As senhas precisam corresponderem',
      path: ['confirm'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(schemaRegister),
  });
  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    console.log(formData);
    userRegister(formData, setLoading);
  };

  return (
    <>
    <ToastContainer />
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
            Faça seu cadastro
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="font-semibold">Nome: </label>
            <input
              {...register('name')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
            {errors.name ? (
              <p className="text-red-500 font-semibold">
                {errors.name?.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label className="font-semibold">Email: </label>
            <input
              {...register('email')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
            {errors.email ? (
              <p className="text-red-500 font-semibold">
                {errors.email?.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label className="font-semibold">Senha: </label>
            <input
              {...register('password')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
            {errors.password ? (
              <p className="text-red-500 font-semibold">
                {errors.password?.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label className="font-semibold">Confirme sua senha: </label>
            <input
              {...register('confirm')}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
            {errors.confirm ? (
              <p className="text-red-500 font-semibold">
                {errors.confirm?.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <select
              {...register('country')}
              disabled={loading}
              className="font-semibold rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            >
              {country.map((countrie) => (
                <option
                  key={countrie.name?.common}
                  value={countrie.name?.common}
                >
                  {countrie.name?.common}
                </option>
              ))}
            </select>
            {errors.country ? (
              <p className="text-red-500 font-semibold">
                {errors.country?.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-slate-800 px-8 py-2 rounded-lg text-white/80 w-full my-6"
          >
            Cadastrar
          </button>
          <button
            onClick={() => {
              navigate('/login');
            }}
            className="bg-slate-600 px-8 py-2 rounded-lg text-white/80 w-full my-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
