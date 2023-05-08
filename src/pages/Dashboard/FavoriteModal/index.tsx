import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { IResponse } from '../../../providers/CountriesContext';

const FavoriteModal = () => {
  const { favoriteList, removeFavorite, showFavorite, setShowFavorite } =
    useContext(UserContext);

  return showFavorite ? (
    favoriteList.length > 0 ? (
      <div className=" z-30 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
        <div className=" py-5 rounded-[4px] relative w-[60%] h-[80%] bg-gray-50 overflow-y-auto flex flex-col items-center ">
          <h1 className="text-4xl font-bold mb-14">Lista de favoritos</h1>
          <button
            className="absolute top-7 right-5 font-[Nunito, sans-serif] font-bold"
            onClick={() => setShowFavorite(false)}
          >
            X
          </button>
          {favoriteList.map((favorite: IResponse, index: number) => (
            <div
              key={index}
              className="  shadow-md bg-gray-100 rounded-[4px] border-2 border-black p-2 gap-0.5 flex flex-col w-[50%] mb-10"
            >
              <img src={favorite.flags?.png} alt={favorite.name?.official} />
              <button
                className="place-self-center bg-slate-800 px-4 py-1 rounded text-white font-semibold m-2"
                onClick={() => removeFavorite(favorite)}
              >
                Remover dos favoritos
              </button>
              <div>
                <div>
                  <h2 className="font-semibold">Nome do país: </h2>
                  <h3 className="mb-3 font-">{favorite.name?.official}</h3>
                </div>
                <div>
                  <h2 className="font-semibold">Capital do país: </h2>
                  <h3 className="mb-3">{favorite.capital}</h3>
                </div>
              </div>
              {/* <div>
                <div>
                  <h2>Moeda usada</h2>
                  <h3>Moeda</h3>
                </div>
                <div>
                  <h2>Linguagem utilizada</h2>
                  <h3>lingua</h3>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="z-20 absolute border-red-600">
        <div className="z-30 absoloute  border-red-600">
          <h1>Lista de favoritos</h1>
          <span>Você ainda não possui nenhum país na lista de favoritos!</span>
        </div>
      </div>
    )
  ) : null;
};
export default FavoriteModal;
