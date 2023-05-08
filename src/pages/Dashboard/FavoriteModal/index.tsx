import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { IResponse } from "../../../providers/CountriesContext";

const FavoriteModal = () => {
    const { favoriteList, removeFavorite, showFavorite, setShowFavorite } = useContext(UserContext);

    return showFavorite? ( 
        favoriteList.length > 0 ? (
            <div className="z-40 fixed w-screen h-screen flex justify-center items-center">
                <div className="flex flex-col gap-4 absolute ">
                    <h1>Lista de favoritos</h1>
                    <span className="absolute top-0 right-0" onClick={() => setShowFavorite(false)}>X</span>
                    {favoriteList.map((favorite: IResponse, index: number) => (
                        <div className="flex items-center relative" key={index}>
                            <img src={favorite.flags?.png} alt={favorite.name?.official} />
                            <span className="absolute top-0 right-0" onClick={() => removeFavorite(favorite)}>X</span>
                            <div>
                                <div>
                                    <h2>Nome do país</h2>
                                    <h3>{favorite.name?.official}</h3>
                                </div>
                                <div>
                                    <h2>Capital do país</h2>
                                    <h3>{favorite.capital}</h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2>Moeda usada</h2>
                                    <h3>Moeda</h3>
                                </div>
                                <div>
                                    <h2>Linguagem utilizada</h2>
                                    <h3>lingua</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="z-40 fixed w-screen h-screen flex justify-center items-center">
                <div>
                    <h1>Lista de favoritos</h1>
                    <span onClick={() => setShowFavorite(false)}>X</span>
                    <span>Você ainda não possui nenhum país na lista de favoritos!</span>
                </div>
            </div>
        )
    ) : (
        null
        );
}
export default FavoriteModal