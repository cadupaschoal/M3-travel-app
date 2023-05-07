import aviatorImg from "../../assets/Images/aviator.jpg";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserContext } from "../../providers/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IEditFormData {
  email: string;
  password: string;
  name: string;
  confirm: string;
  country: string;
}

const Edit = () => {
  const navigate = useNavigate();

  const { userRegister, user } = useContext(UserContext) ;

  useEffect(() => {
    console.log(user)
  }, []);
  
  const [loading, setLoading] = useState(false);
  const schemaEdit = z.object({
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


  const { register, handleSubmit, formState: {errors}} = useForm<IEditFormData>(
    {
      resolver: zodResolver(schemaEdit)
    }
  );
  const submit: SubmitHandler<IEditFormData> = (formData) => {
    console.log(formData)  
    userRegister(formData, setLoading)
  }



  return (
    <div className="grid h-screen w-full">


      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(submit)}
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4x1 text-white font-bold text-center">
            Edite Seu Usuário
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Nome</label>
            <input
              placeholder={user?.name}
              {...register("name")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              placeholder={user?.email}
              {...register("email")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              placeholder="Nova senha"
              {...register("password")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirme sua senha</label>
            <input
              placeholder="Confirme sua senha"
              {...register("confirm")}
              disabled={loading}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"

            />
          </div>



           <div className="flex flex-col text-gray-400 py-2">
           <label>Selecione novo país</label>

            <select 
            {...register("country")}
            disabled={loading}
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
              <option value={"Brasil"}>Brasil</option>
              
            </select>
          </div> 

          <button type="submit" className="w-full my-5 py-2 bg-teal-400 text-white font-semibold rounded-lg">
            Editar info
          </button>
          <button onClick={()=>{navigate("/dashboard")}} className="w-full my-5 py-2 bg-teal-800 text-white font-semibold rounded-lg">
            Voltar a Dashboard e Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;

