import aviatorImg from "../../assets/Images/aviator.jpg";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserContext } from "../../providers/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IRegisterFormData {
  email: string;
  password: string;
  name: string;
  confirm: string;
  country: string;
}

const Register = () => {
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


  const { register, handleSubmit, formState: {errors}} = useForm<IRegisterFormData>(
    {
      resolver: zodResolver(schemaRegister)
    }
  );
  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    console.log(formData)  
    userRegister(formData, setLoading)
  }



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={aviatorImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(submit)}
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4x1 text-white font-bold text-center">
            Faça seu login
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

          <button className="w-full my-5 py-2 bg-teal-400 text-white font-semibold rounded-lg">
            Cadastrar
          </button>
          <button onClick={()=>{navigate("/login")}} className="w-full my-5 py-2 bg-teal-800 text-white font-semibold rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

