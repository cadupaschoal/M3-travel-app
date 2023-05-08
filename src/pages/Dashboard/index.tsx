import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Images/logoRacapajole-removebg-preview.png';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import imgHome from '../../assets/Images/imgHome.png';
import { CountryContext } from '../../providers/CountriesContext';
import { IResponse } from '../../providers/CountriesContext';
import { EditModal } from '../../components/EditModal';
import FavoriteModal from './FavoriteModal';

const Dashboard = () => {
  const {
    setUser,
    user,
    editModal,
    setEditModal,
    userLogout,
    addFavorite,
    showFavorite,
    favoriteList,
    setShowFavorite,
  } = useContext(UserContext);
  const { currentCountry, borders, languages, currency } =
    useContext(CountryContext);
  const countryCurrency =
    currentCountry[0]?.currencies[Object.keys(currentCountry[0].currencies)[0]]
      .name;
  const countrySymbol =
    currentCountry[0]?.currencies[Object.keys(currentCountry[0].currencies)[0]]
      .symbol;
  console.log(user?.country);
  const navigate = useNavigate();
  console.log(favoriteList);

  return (
    <>
      <FavoriteModal />
      <header className="flex justify-center py-4 bg-slate-600">
        <div className="flex flex-row h-10 items-center justify-between w-3/4 ">
          <img src={Logo} alt="" className="h-24" />
          <div className="text-white/80 flex flex-row w-44 justify-between">
            <button
              onClick={() => setShowFavorite(true)}
              className="bg-slate-800 px-4 py-1 rounded"
            >
              Favoritos
            </button>
            <Link
              to={'/'}
              onClick={() => userLogout()}
              className="bg-slate-800 px-4 py-1 rounded"
            >
              Sair
            </Link>
          </div>
        </div>
      </header>
      <div>
        <img
          src={imgHome}
          className="w-full h-full object-cover absolute  z-0 "
          alt=""
        />
        <nav className="flex justify-center py-4 relative z-10">
          <div className="flex flex-row items-center justify-between w-3/4">
            <div>
              <h2 className="text-white">Olá, {user?.name}</h2>
              <h2 className="text-white">Já arrumou suas malas?</h2>
            </div>
            <h2 className="text-white">País atual: {user?.country}</h2>
            <h2 className="text-white">
              Moeda atual: {countryCurrency} ({countrySymbol})
            </h2>
            <button
              onClick={() => {
                console.log('foi');
                navigate('/editUser');
              }}
              className="bg-slate-800 px-4 py-1 rounded text-white/80 cursor-pointer"
            >
              Editar informações
            </button>
          </div>
        </nav>
        <main className="flex justify-center py-4 border-t-2 border-slate-600 relative z-10">
          <div className="flex flex-col justify-center w-3/4 gap-5">
            <span className="text-white">
              Países que atualmente você compartilha fronteira:
            </span>
            <ul className="flex flex-row gap-10 overflow-x-auto ">
              {borders.map((country: IResponse, index: number) => (
                <li
                  key={index}
                  className="cursor-pointer flex flex-col justify-center items-center gap-3 w-4/6 min-w-[170px] max-w-[170px]"
                  onClick={() => addFavorite(country)}
                >
                  <img
                    src={country.flags?.png}
                    alt={country.flags?.alt}
                    className="w-60 h-[110px]"
                  />
                  <h3 className="text-white text-center">
                    {country.name?.common}
                  </h3>
                </li>
              ))}
            </ul>
            <span className="text-white">
              Países com a mesma língua do que você se encontra:
            </span>
            <ul className="flex flex-row justify-between gap-10 overflow-x-auto ">
              {languages.map((country: IResponse, index: number) => (
                <li
                  key={index}
                  className="cursor-pointer flex flex-col justify-center items-center gap-3 min-w-[170px] max-w-[170px]"
                >
                  <img
                    src={country.flags?.png}
                    alt={country.flags?.alt}
                    className="w-60 h-[110px]"
                  />
                  <h3 className="text-white text-center">
                    {country.name?.common}
                  </h3>
                </li>
              ))}
            </ul>
            <span className="text-white">
              Países com mesma moeda que o seu:
            </span>
            <ul className="cursor-pointer flex flex-row justify-between gap-10 overflow-x-auto">
              {currency.length > 1 ? (
                currency.map((country: IResponse, index: number) => (
                  <li
                    key={index}
                    className="flex flex-col justify-center items-center gap-3 min-w-[170px] max-w-[170px]"
                  >
                    <img
                      src={country.flags?.png}
                      alt={country.flags?.alt}
                      className="w-60 h-[110px]"
                    />
                    <h3 className="text-white text-center">
                      {country.name?.common}
                    </h3>
                  </li>
                ))
              ) : (
                //Depois a gente pode decidir se renderiza essa essa parte ou a só a bandeira do país
                <h2 className="place-self-center text-white">
                  {' '}
                  Somente o seu país utiliza {countryCurrency} ({countrySymbol})
                  como moeda.
                </h2>
              )}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
