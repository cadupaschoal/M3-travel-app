import { createContext, useEffect, useState } from 'react';
import { RestContriesApi } from "../../services/API's";

export const CountryContext = createContext({} as ICountryContext);

interface IContryContextProps {
  children: React.ReactNode;
}

interface ICountryContext {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchCountry: (country: string) => Promise<void>;
  currentCountry: any;
  borders: object[];
  setBorders: React.Dispatch<React.SetStateAction<object[]>>;
  languages: IResponse[];
  setLanguages: React.Dispatch<React.SetStateAction<IResponse[]>>;
  currency: IResponse[];
  setCurrency: React.Dispatch<React.SetStateAction<IResponse[]>>;
  country: IResponse[];
}

interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: object;
}

export interface IResponse {
  flags?: IFlags;
  name?: IName;
  currencies?: object;
  capital?: string[];
  region?: string;
  subregion?: string;
  languages?: object;
  borders?: string[];
}
export const CountryProvider = ({ children }: IContryContextProps) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentCountry, setCurrentCountry] = useState<any>([]);
  const [borders, setBorders] = useState<IResponse[]>([]);
  const [languages, setLanguages] = useState<IResponse[]>([]);
  const [currency, setCurrency] = useState<IResponse[]>([]);
  const [country, setCountry] = useState<IResponse[]>([]);

  useEffect(() => {
    const selectCountries = async () => {
      try {
        const response = await RestContriesApi.get('/all?fields=name');
        setCountry(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    selectCountries();
  }, []);

  console.log(currentCountry);

  const searchCountry = async (country: string) => {
    try {
      const response = await RestContriesApi.get(
        `/name/${country}?fields=flags,name,region,subregion,languages,currencies,capital,borders`
      );

      if (response.status === 200) {
        console.log(response);
        setCurrentCountry(response.data);
        borderCountries(response.data[0].borders);
        sameLanguage(response.data[0].languages);
        sameCurrency(response.data[0].currencies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentCountry);

  // Retorna um array com os países que fazem fronteira
  const borderCountries = async (array: string[]) => {
    const listContries = array.toString();
    try {
      const response = await RestContriesApi.get(
        `/alpha?codes=${listContries}`
      );
      setBorders(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Países com mesma língua
  const sameLanguage = (languages: object) => {
    const listLenguages = Object.values(languages);
    listLenguages.map(async (lenguage: string) => {
      try {
        const response = await RestContriesApi.get(
          `/lang/${lenguage}?fields=name,flags,languages`
        );
        console.log(response.data);
        setLanguages(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  // Países com a mesma moeda
  const sameCurrency = async (currency: object) => {
    const countryCurrency = Object.keys(currency);
    try {
      const response = await RestContriesApi.get(
        `/currency/${countryCurrency[0]}?fields=name,flags,currencies`
      );
      console.log(response.data, 'currencie');
      setCurrency(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CountryContext.Provider
      value={{
        isOpen,
        setIsOpen,
        searchInput,
        setSearchInput,
        searchCountry,
        currentCountry,
        borders,
        setBorders,
        languages,
        setLanguages,
        currency,
        setCurrency,
        country,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
