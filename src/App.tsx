import { Header } from './components/Header';
import { GlobalStyle } from './styles/reset';
import { CountryModal } from './components/CountryModal';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <CountryModal />
      <h1>Novo commit</h1>
    </div>
  );
};

export default App;
