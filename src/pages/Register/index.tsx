import aviatorImg from "../../assets/Images/aviator.jpg";

const Register = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={aviatorImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4x1 text-white font-bold text-center">
            Faça seu login
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Nome</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Senha</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirme sua senha</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <select className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none">
              <option>Selecione seu país atual</option>
            </select>
          </div>

          <button className="w-full my-5 py-2 bg-teal-500 text-white font-semibold rounded-lg">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
