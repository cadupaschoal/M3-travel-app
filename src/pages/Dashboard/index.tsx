import { Link } from "react-router-dom";
import logo from "../../assets/Images/flag.png"
import Logo from "../../assets/Images/logoRacapajole-removebg-preview.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import imgHome from "../../assets/Images/imgHome.png";

const Dashboard = () => {
    const { setUser, user } = useContext(UserContext);
    return(
        <>
            <header className="flex justify-center py-4 bg-slate-600">
                <div className="flex flex-row h-18 items-center justify-between w-3/4">
                    <img src={Logo} alt="" className="h-24"/>
                    <div className="text-white/80 flex flex-row w-44 justify-between">
                        <button className="bg-slate-800 px-4 py-1 rounded">
                            Favoritos
                        </button>
                        <Link to={"/"} onClick={() => setUser(null)} className="bg-slate-800 px-4 py-1 rounded">
                            Sair
                        </Link>
                    </div>
                </div>
            </header>
            <div>
                <img src={imgHome} className="w-full h-full object-cover absolute mix-blend-overlay z-0" alt="" />
            <nav className="flex justify-center py-4 relative z-10">
                <div className="flex flex-row items-center justify-between w-3/4">
                    <div>
                        <h2>Olá, </h2>
                        <h2>Já arrumou suas malas?</h2>
                    </div>
                    <h2>País atual: </h2>
                    <h2>Moeda atual: Euro (€)</h2>
                    <button className="bg-slate-800 px-4 py-1 rounded text-white/80 cursor-pointer">Editar informações</button>
                </div>
            </nav>
            <main className="flex justify-center py-4 border-t-2 border-slate-600 relative z-10">
                <div className="flex flex-col justify-center w-3/4 gap-5">
                    <span>Países que atualmente você compartilha fronteira:</span>
                    <ul className="flex flex-row gap-10 overflow-x-auto">
                        <li className="flex flex-col justify-center items-center gap-3 w-4/6">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3 w-4/6">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3 w-4/6">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3 w-4/6">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                    </ul>
                    <span>Países com a mesma língua do que você se encontra:</span>
                    <ul className="flex flex-row justify-between gap-10">
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                    </ul>
                    <span>Países com mesma moeda que o seu:</span>
                    <ul className="flex flex-row justify-between gap-10">
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center gap-3">
                            <img src={logo} alt="French flag" className="w-60" />
                            <h3>França</h3>
                        </li>
                    </ul>
                </div>
            </main>
            </div>
        </>
    )
}

export default Dashboard;