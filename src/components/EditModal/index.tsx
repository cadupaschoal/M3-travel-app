import { Link, useNavigate } from 'react-router-dom';
import { StyledModalBackground } from './styled';
import Flag from '../../assets/Images/flag.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { UserContext } from '../../providers/UserContext';


export interface IEditUserData {
    email: string;
    password: string;
    name: string;
    country: string;
    confirm: string;
  }
export const EditModal = () => {

    const navigate = useNavigate();

    const { userRegister } = useContext(UserContext) ;
    
    const [loading, setLoading] = useState(false);
    const schemaRegister = z.object({
      email: z.string().nonempty("Email é obrigatório").email(),
      country: z.string().nonempty("País é obrigatório"),
      password: z.string().min(7)
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
          new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
          "One special character"
        ),
      name: z.string().nonempty("Nome é obrigatório"),
      confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
  }).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam corresponderem",
    path: ["confirm"],
  })
  
  
    const { register, handleSubmit, formState: {errors}} = useForm<IEditUserData>(
      {
        resolver: zodResolver(schemaRegister)
      }
    );
    const submit: SubmitHandler<IEditUserData> = (formData) => {
      console.log(formData)  
      userRegister(formData, setLoading)
    }


  return  (
 (
      <StyledModalBackground>
        <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(submit)}
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4x1 text-white font-bold text-center">
            Faça seu cadastro
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Nome</label>
            <input
              {...register("name")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              {...register("email")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              {...register("password")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirme sua senha</label>
            <input
              {...register("confirm")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>



           <div className="flex flex-col text-gray-400 py-2">
            <select 
            {...register("country")}
            disabled={loading}
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
              <option value={"Brasil"}>Brasil</option>
              
            </select>
          </div> 

          <button type="submit" className="w-full my-5 py-2 bg-teal-400 text-white font-semibold rounded-lg">
            Cadastrar
          </button>
          <button onClick={()=>{navigate("/login")}} className="w-full my-5 py-2 bg-teal-800 text-white font-semibold rounded-lg">
            Login
          </button>
        </form>
      </div>
      </StyledModalBackground>
    )
  );
};