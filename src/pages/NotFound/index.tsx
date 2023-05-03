/* Este trecho de código serve somente para testar o comportamento do contexto dos paíeses */

import { useContext, SyntheticEvent } from 'react';
import { CountryContext } from '../../providers/CountriesContext';

const Teste = () => {
  const { isOpen, setIsOpen, searchInput, setSearchInput, searchCountry } =
    useContext(CountryContext);

  const testeOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const submit = (event: SyntheticEvent) => {
    event.preventDefault();
    searchCountry(searchInput);
  };
  return (
    <form onSubmit={(event) => submit(event)}>
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        className="bg-red-200"
      />
      <button type="submit">pesquisar</button>
    </form>
  );
};

export default Teste;
